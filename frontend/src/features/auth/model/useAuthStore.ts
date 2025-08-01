import {create} from "zustand/react";

type AuthStore = {
    isAuthorized: boolean;

    accessToken: string | null;
    refreshToken: string | null;

    login: (accessToken: string, refreshToken: string) => void,
    update: (accessToken: string, refreshToken: string) => void,
    logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => {
    return {
        isAuthorized: false,
        accessToken: null,
        refreshToken: null,

        login: (accessToken, refreshToken) => {
            localStorage.setItem("accessToken", accessToken)
            localStorage.setItem("refreshToken", refreshToken)
            set({ accessToken, refreshToken, isAuthorized: true })
        },

        logout: () => {
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")
            set({ accessToken: null, refreshToken: null, isAuthorized: false })
        },

        update: (accessToken, refreshToken) => {
            localStorage.setItem("accessToken", accessToken)
            localStorage.setItem("refreshToken", refreshToken)
            set({ accessToken, refreshToken })
        }
    }
})
