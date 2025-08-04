import {useNotification} from "../model/useNotification.ts";
import {cn} from "../../../shared/lib/cn.ts";

export const SidebarMessages = () => {
    const isOpened = useNotification(state => state.isOpened)
    return (
        <aside
            className={cn(
                "fixed right-0 top-[76px] bg-[#1E1F25] h-full w-[500px] transition-transform duration-500 ease-in-out shadow-xl p-8",
                {
                    "translate-x-0": isOpened,
                    "translate-x-full": !isOpened,
                }
            )}
        >
            <h4 className={'text-white font-bold text-3xl'}>Messages</h4>
        </aside>
    )
}