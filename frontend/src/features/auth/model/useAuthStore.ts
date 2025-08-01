import {create} from "zustand/react";
import type {StateCreator} from "zustand/vanilla";
import {client} from "../../../shared/api/client.ts";

type AuthStore = {
    isAuthorized: boolean;

    accessToken: string | null;
    refreshToken: string | null;

    login: (email: string, password: string) => void,
    update: () => void,
    logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => {
    return {
        isAuthorized: false,
        accessToken: null,
        refreshToken: null,

        login: async (email, password) => await loginUser(set, email, password),
        logout: async () => await logoutUser(set),
        update: async () => await updateUser(set)
    }
})

async function loginUser(set: Parameters<StateCreator<AuthStore>>[0] , email: string, password: string) {
    try {
        const response = await client.POST('/auth/login', {
            body: {
                email,
                password
            }
        });

        if(response.response.ok){
            const accessToken = response?.data?.data?.accessToken
            const refreshToken = response?.data?.data?.refreshToken

            if(accessToken && refreshToken){
                localStorage.setItem("accessToken", accessToken)
                localStorage.setItem("refreshToken", refreshToken)

                set({
                    accessToken,
                    refreshToken,
                    isAuthorized: true
                })
                return
            }
        }

    }catch (e) {
        console.error(e)
    }
}

async function updateUser(set: Parameters<StateCreator<AuthStore>>[0]) {
    const refreshToken = localStorage.getItem("refreshToken");

    if(!refreshToken){
        localStorage.removeItem('refreshToken')
        set({
            accessToken: null,
            refreshToken: null,
            isAuthorized: false
        })
        return
    }

    try {
        const response = await client.POST('/auth/refresh', {
            body: {refreshToken}
        });

        if (!response.data || response.response.status >= 400) {
            return;
        }

        if (response?.data?.data?.accessToken) {
            localStorage.setItem("accessToken", response.data.data.accessToken)
            set({isAuthorized: true, accessToken: response.data.data.accessToken})
            return
        }
    } catch (e) {
        console.error(e)
    }
}

async function logoutUser(set: Parameters<StateCreator<AuthStore>>[0]) {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
        set({
            accessToken: null,
            refreshToken: null,
            isAuthorized: false
        });
        return;
    }

    try {
        const response = await client.POST("/auth/logout", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        if (response.response.ok) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");

            set({
                accessToken: null,
                refreshToken: null,
                isAuthorized: false
            });
        }
    } catch (e) {
        console.error("Logout error:", e);
    }
}