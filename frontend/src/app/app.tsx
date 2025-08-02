import {StrictMode} from "react";
import {BrowserRouter} from "react-router";
import {Router} from "./routing";

export const AppLayout = () => {

    return (
        <StrictMode>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </StrictMode>
    )
}