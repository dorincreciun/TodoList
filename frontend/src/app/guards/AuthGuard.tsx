import {Navigate, Outlet} from "react-router";
import {Routing_Paths} from "../config";

export const AuthGuard = () => {
    const isAuthorized = true
    if(!isAuthorized){
        return <Navigate to={Routing_Paths.LOGIN} replace />
    }
    return <Outlet/>
}