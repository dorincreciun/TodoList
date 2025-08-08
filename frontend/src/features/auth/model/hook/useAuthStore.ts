import {create} from "zustand";
import type {AuthStoreActions, AuthStoreState} from "../type/AuthStore.ts";
import {userLogin} from "../services/userLogin.ts";
import {userRegister} from "../services/userRegister.ts";
import {userLogout} from "../services/userLogout.ts";
import {userUpdate} from "../services/userUpdate.ts";

// funcția create este chemată de două ori deoarece () prima chemare doar transmite tipul generic fără apelare
export const useAuthStore = create<AuthStoreState & AuthStoreActions>()((set, get) => {
    return {
        /* Default State */
        isAuthorized: false,
        accessToken: localStorage.getItem("accessToken") || null,
        refreshToken: localStorage.getItem("refreshToken") || null,

        /* Actions */
        login: (email, password) => userLogin(email, password, set),
        register: userRegister,
        logout: userLogout,
        update: () => userUpdate(set, get)
    }
})