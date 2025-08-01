import {StrictMode, useEffect} from "react";
import {BrowserRouter} from "react-router";
import {Router} from "./routing";

export const AppLayout = () => {
    // const {update} = useAuthStore()

    useEffect(() => {
        // client.POST('/auth/login', {})
    }, []);

    return (
        <StrictMode>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </StrictMode>
    )
}