import type {MyRouteObject} from "../../../types/routing.ts";
import {Routing_Paths} from "../../config";
import {HomePage} from "../../../pages/home";
import {SignInPage, SignUpPage} from "../../../pages/auth";

export const PublicRoutes: MyRouteObject[] = [
    {
        path: Routing_Paths.HOME,
        element: <HomePage/>
    },
    {
        path: Routing_Paths.LOGIN,
        element: <SignInPage/>
    },
    {
        path: Routing_Paths.REGISTER,
        element: <SignUpPage/>
    },
]