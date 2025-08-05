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
                "fixed right-0 top-[76px] h-[calc(100dvh-76px)] bg-[#1E1F25] shadow-xl transition-transform duration-500 ease-in-out",
                "overflow-y-auto flex items-center justify-center p-8",
                "w-full sm:max-w-[500px]",
                {
                    "translate-x-0": isOpen,
                    "translate-x-full": !isOpen,
                }
            )}
        >
            {render({ isOpen })}
        </aside>
    );
};

SidebarLayout.displayName = "SidebarLayout";


