import {Navigate, Outlet} from "react-router";
import {useAuthStore} from "../../features/auth";
import {Routing_Paths} from "../config";

export const AuthGuard = () => {
    const isAuthorized = useAuthStore((state) => state.isAuthorized)
    if(!isAuthorized){
        return <Navigate to={Routing_Paths.LOGIN} replace />
    }
    return <Outlet/>
}