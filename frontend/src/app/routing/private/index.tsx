import {AuthGuard} from "../../guards/AuthGuard.tsx";
import type {RouteObject} from "react-router";

const PrivateRoutes: RouteObject[] = [
    {
        path: '/todos',
        element: <div>todos</div>
    }
]

export const GuardRoutes = { element: <AuthGuard/>, children: PrivateRoutes }
