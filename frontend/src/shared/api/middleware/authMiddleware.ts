import {type Middleware} from "openapi-fetch";
import {useAuthStore} from "../../../features/auth/model/hook/useAuthStore";

const UNPROTECTED_ROUTES = [
    '/auth/login',
    '/auth/register',
    '/auth/logout',
    '/auth/refresh',
]

export const authMiddleware: Middleware = {
    async onRequest({schemaPath, request}) {

        if (UNPROTECTED_ROUTES.some((pathname) => schemaPath.startsWith(pathname))) {
            return undefined;
        }

        const accessToken = useAuthStore.getState().accessToken
        request.headers.set('Authorization', `Bearer ${accessToken}`)
    },

    async onResponse({ request, response }) {
        if (response.status === 401) {
            const success = await useAuthStore.getState().update();

            if (success) {
                request.headers.set("Authorization", `Bearer ${useAuthStore.getState().accessToken}`);
                return fetch(request.clone());
            }
        }else{
            useAuthStore.getState().logout?.();
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        }

        return response;
    },


    async onError({ error }) {
        console.error("Middleware error:", error);
        throw error;
    },
}