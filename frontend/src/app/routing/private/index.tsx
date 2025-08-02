import {AuthGuard} from "../../guards/AuthGuard.tsx";
import type {RouteObject} from "react-router";
import {Routing_Paths} from "../../config";
/* Pages */
import {DashboardPage} from "../../../pages/dashboard";
import {TasksPage} from "../../../pages/tasks";
import {FilesPage} from "../../../pages/files";
import {SettingsPage} from "../../../pages/settings";
import {MessagePage} from "../../../pages/message";

const PrivateRoutes: RouteObject[] = [
    {
        path: Routing_Paths.DASHBOARD,
        element: <DashboardPage />
    },
    {
        path: Routing_Paths.TASKS,
        element: <TasksPage />
    },
    {
        path: Routing_Paths.FILES,
        element: <FilesPage />
    },
    {
        path: Routing_Paths.SETTINGS,
        element: <SettingsPage />
    },
    {
        path: Routing_Paths.MESSAGE,
        element: <MessagePage />
    }
]

export const GuardRoutes = { element: <AuthGuard/>, children: PrivateRoutes }
