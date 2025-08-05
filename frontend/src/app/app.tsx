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
                    <div className={'flex-1 flex flex-col md:ms-[96px]'}>
                        <Header/>
                        <div className={'flex-1 flex'}>
                            <Router/>

                            {/* Sidebars - Optimized positioning with separate Suspense boundaries */}
                            <Suspense fallback={<div>Loading messages...</div>}>
                                <SidebarMessages/>
                            </Suspense>
                            
                            <Suspense fallback={<div>Loading auth...</div>}>
                                <SidebarAuth/>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </StrictMode>
    )
}