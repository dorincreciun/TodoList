import {useNotification} from "../model/useNotification.ts";
import {cn} from "../../../shared/lib/cn.ts";

export const SidebarMessages = () => {
    const isOpened = useNotification(state => state.isOpened)
    return (
        <aside
            className={cn(
                "fixed right-0 top-0 h-screen bg-[#1E1F25] w-[500px] transition-transform duration-500 ease-in-out shadow-xl",
                {
                    "translate-x-0": isOpened,
                    "translate-x-full": !isOpened,
                }
            )}
        >
            awdwdw
        </aside>
    )
}