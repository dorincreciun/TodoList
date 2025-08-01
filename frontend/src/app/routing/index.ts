import {useRoutes} from "react-router";
import {GuardRoutes} from "./private";
import {PublicRoutes} from "./public";

export const Router = () => useRoutes([
    GuardRoutes,
    ...PublicRoutes
])