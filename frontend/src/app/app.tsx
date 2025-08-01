import {StrictMode, useEffect} from "react";
import {BrowserRouter} from "react-router";
import {Router} from "./routing";
/* Features */
import {useAuthStore} from "../features/auth";
/* Shared -> Common */
import {Header} from "../shared/common/Header";
import {Footer} from "../shared/common/Footer";

export const AppLayout = () => {
    const {update} = useAuthStore()

    /* refresh accessToken */
    useEffect(() => {
        update();
    }, []);

    return (
        <StrictMode>
            <BrowserRouter>
                <Header/>
                <Router/>
                <Footer/>
            </BrowserRouter>
        </StrictMode>
    )
}