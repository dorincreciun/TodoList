import {AuthGuard} from "../../guards/AuthGuard.tsx";
import type {RouteObject} from "react-router";

const PrivateRoutes: RouteObject[] = [
    {
        path: '/',
        element: <></>
    }
]

export const GuardRoutes = { element: <AuthGuard/>, children: PrivateRoutes }
