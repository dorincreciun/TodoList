import {create} from "zustand";
import type {AuthStoreActions, AuthStoreState} from "../type/AuthStore.ts";
import {userLogin} from "../services/userLogin.ts";
import {userRegister} from "../services/userRegister.ts";
import {userLogout} from "../services/userLogout.ts";
import {userUpdate} from "../services/userUpdate.ts";

// funcția create este chemată de două ori deoarece () prima chemare doar transmite tipul generic fără apelare
export const useAuthStore = create<AuthStoreState & AuthStoreActions>()((state) => {
    return {
        /* Default State */
        isAuthorized: false,
        accessToken: null,
        refreshToken: null,

        /* Actions */
        login: userLogin,
        register: userRegister,
        logout: userLogout,
        update: userUpdate
    }
})