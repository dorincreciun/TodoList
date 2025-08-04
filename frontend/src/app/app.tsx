import {StrictMode} from "react";
import {BrowserRouter} from "react-router";
import {Router} from "./routing";
/* Common */
import {Header} from "../shared/common/Header";
import {SidebarMenu} from "../shared/common/SidebarMenu";
/* Features */
import {SidebarMessages} from "../features/messages";

export const AppLayout = () => {

    return (
        <StrictMode>
            <BrowserRouter>
                <div className={'flex'}>
                    <SidebarMenu />
                    <div className={'flex-1 flex flex-col'}>
                        <Header />
                        <div className={'flex-1 flex'}>
                            <Router/>
                            <SidebarMessages />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </StrictMode>
    )
}