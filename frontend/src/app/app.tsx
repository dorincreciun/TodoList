import {StrictMode, useEffect} from "react";
import {BrowserRouter} from "react-router";
import {Router} from "./routing";
import {client} from "../shared/api/client.ts";
import {useAuthStore} from "../features/auth";

export const AppLayout = () => {
    const {logout, update} = useAuthStore()

    /* La prima initializare verifica daca sunt inca logat */
    useEffect(() => {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
            logout()
        } else{
            const updateUser = async (): Promise<void> => {
                try {
                    const response = await client.POST('/auth/refresh', {
                        body: { refreshToken }
                    });

                    if (!response.data || response.response.status >= 400) {
                        logout();
                        return;
                    }

                    if(response?.data?.data?.accessToken){
                        update(response.data.data.accessToken)
                    }

                } catch (e) {
                    logout();
                }
            };
            updateUser();
        }
    }, []);

    return (
        <StrictMode>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </StrictMode>
    )
}