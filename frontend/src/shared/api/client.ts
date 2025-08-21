import type {paths} from "./schema.ts";
import createClient, {type Middleware} from "openapi-fetch";
import {useAuthStore} from "../../features/auth/model/hook/useAuthStore.ts";

/* Auth store */

let accessToken: string = useAuthStore((state) => state.accessToken)

const authMiddleware: Middleware = {
    async onRequest({request}){

        if(!accessToken) {
            return
        }

        request.headers.set('Authorization', `Bearer ${accessToken}`)
    },
}

export const client = createClient<paths>({ baseUrl: "https://todolist-rx9i.onrender.com/api/" });