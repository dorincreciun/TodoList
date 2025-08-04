import type {MyRouteObject} from "../../../types/routing.ts";
import {LoginPage, RegisterPage} from "../../../pages/auth";
import {Routing_Paths} from "../../../shared/config/routing.ts";

export const PublicRoutes: MyRouteObject[] = [
    {
        path: Routing_Paths.LOGIN,
        element: <LoginPage />
    },
    {
        path: Routing_Paths.REGISTER,
        element: <RegisterPage />
    }
]