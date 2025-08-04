import {Navigate, Outlet} from "react-router";
import {Routing_Paths} from "../../shared/config/routing.ts";

export const AuthGuard = () => {
    const isAuthorized = true
    if(!isAuthorized){
        return <Navigate to={Routing_Paths.LOGIN} replace />
    }
    return <Outlet/>
}