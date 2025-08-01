import {HomePage} from "../../../pages/home";
import type {MyRouteObject} from "../../../types/routing.ts";

export const PublicRoutes: MyRouteObject[] = [
    {
        path: "/",
        element: <HomePage />
    }
]