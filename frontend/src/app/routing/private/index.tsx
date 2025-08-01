import {AuthGuard} from "../../guards/AuthGuard.tsx";
import type {RouteObject} from "react-router";
import {Routing_Paths} from "../../config";
import {CabinetPage} from "../../../pages/cabinet";

const PrivateRoutes: RouteObject[] = [
    {
        path: Routing_Paths.CABINET,
        element: <CabinetPage />
    }
]

export const GuardRoutes = { element: <AuthGuard/>, children: PrivateRoutes }
