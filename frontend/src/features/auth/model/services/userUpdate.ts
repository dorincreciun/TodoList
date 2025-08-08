import {client} from "../../../../shared/api/client";
import type {AuthStoreState} from "../type/AuthStore";

export const userUpdate = async (set: (data: Partial<AuthStoreState>) => void, get: () => AuthStoreState) => {
    try {
        const refreshToken = get().refreshToken

        if (!refreshToken) {
            console.warn("Refresh token nu exista!")
            localStorage.removeItem("refreshToken")
            return false
        }

        const response = await client.POST("/auth/refresh", {
            body: {refreshToken}
        })

        const accessToken = response?.data?.data?.accessToken

        if (response.response.status === 200 && accessToken) {
            set({accessToken})
            return true
        }

        return false
    } catch (e) {
        console.error("Update accessToken failed:", e)
        return false
    }
}