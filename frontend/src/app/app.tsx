import {lazy, StrictMode, Suspense} from "react";
import {BrowserRouter} from "react-router";
import {Router} from "./routing";
/* Common */
import {Header} from "../shared/common/Header";
import {SidebarMenu} from "../shared/common/SidebarMenu";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

export const AppLayout = () => {
    const SidebarMessages = lazy(() => import("../features/messages"))
    const SidebarAuth = lazy(() => import("../features/auth"))

    return (
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <div className={'flex size-full'}>
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
                {/* The rest of your application */}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </StrictMode>
    )
}