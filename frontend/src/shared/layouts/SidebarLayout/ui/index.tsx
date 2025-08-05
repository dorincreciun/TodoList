import {cn} from "../../../lib/cn.ts";
import type {SidebarProps} from "../model/types.ts";
import {useRef} from "react";
import {useClickOutside} from "../../../hooks/useClickOutside.ts";

export const SidebarLayout = ({isOpen, render, onClickOutside}: SidebarProps & { onClickOutside?: () => void }) => {
    const ref = useRef<HTMLDivElement>(null);

    useClickOutside(ref, () => {
        if (onClickOutside && isOpen) {
            onClickOutside();
        }
    });

    return (
        <aside
            ref={ref}
            className={cn(
                "fixed right-0 top-[76px] bg-[#1E1F25] h-full max-sm:w-screen sm:w-[500px] flex items-center justify-center transition-transform duration-500 ease-in-out shadow-xl p-8",
                {
                    "translate-x-0": isOpen,
                    "translate-x-full": !isOpen,
                }
            )}
        >
            {render({isOpen})}
        </aside>
    );
};

SidebarLayout.displayName = "SidebarLayout";


