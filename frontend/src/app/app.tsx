import {StrictMode, useEffect} from "react";
import {BrowserRouter} from "react-router";
import {Router} from "./routing";
/* Features */
import {useAuthStore} from "../features/auth";
/* Shared -> Api */
import {client} from "../shared/api/client.ts";
/* Shared -> Common */
import {Header} from "../shared/common/Header";
import {Footer} from "../shared/common/Footer";

export const AppLayout = () => {
    const {logout, update} = useAuthStore()

    /* refresh accessToken */
    useEffect(() => {
        const refreshToken = localStorage.getItem('refreshToken');

        if (!refreshToken) {
            logout();
            return;
        }

        (async () => {
            try {
                const response = await client.POST('/auth/refresh', {
                    body: {refreshToken}
                });

                if (!response.data || response.response.status >= 400) {
                    logout();
                    return;
                }

                if (response?.data?.data?.accessToken) {
                    update(response.data.data.accessToken)
                }

            } catch (e) {
                logout();
                console.error(e)
            }
        })();
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