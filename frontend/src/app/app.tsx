import {lazy, StrictMode, Suspense} from "react";
import {BrowserRouter} from "react-router";
import {Router} from "./routing";
/* Common */
import {Header} from "../shared/common/Header";
import {SidebarMenu} from "../shared/common/SidebarMenu";

export const AppLayout = () => {
    const SidebarMessages = lazy(() => import("../features/messages"))
    const SidebarAuth = lazy(() => import("../features/auth"))

    return (
        <StrictMode>
            <BrowserRouter>
                <div className={'flex'}>
                    <SidebarMenu/>
                    <div className={'flex-1 flex flex-col ms-[96px]'}>
                        <Header/>
                        <div className={'flex-1 flex'}>
                            <Router/>

                            {/* Sidebars */}
                            <Suspense fallback={<div>Loading...</div>}>
                                <SidebarMessages/>
                                <SidebarAuth/>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </StrictMode>
    )
}