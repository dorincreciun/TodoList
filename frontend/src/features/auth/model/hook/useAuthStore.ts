import {create, type StateCreator} from "zustand";
import type {AuthStore, AuthStoreActions, AuthStoreState} from "../type/AuthStore";

/* Services */
import {login} from "../services/login";
import {register} from "../services/register";
import {update} from "../services/update";
import {logout} from "../services/logout";

/* Initial state */
const initialState: AuthStoreState = {
    isAuthorized: false,
    authStatus: "idle",
    fetchStatus: "idle",
    tokens: {accessToken: null, refreshToken: null},
};

/* Actions state */
const actionsState: AuthStoreActions = {
    login: (credentials) => login(credentials),
    register: () => register(),
    update: () => update(),
    logout: () => logout(),
}

const authStoreCreator: StateCreator<AuthStore> = () => ({
    /* Initial state */
    ...initialState,

    /* Actions state */
    ...actionsState
});

export const useAuthStore = create<AuthStore>()(authStoreCreator);
