import type {MyRouteObject} from "../../../types/routing.ts";
import {Routing_Paths} from "../../config";
import {AuthPage} from "../../../pages/auth";
import {HomePage} from "../../../pages/home";

export const PublicRoutes: MyRouteObject[] = [
    {
        path: Routing_Paths.HOME,
        element: <HomePage/>
    },
    {
        path: Routing_Paths.LOGIN,
        element: <AuthPage/>
    },
]