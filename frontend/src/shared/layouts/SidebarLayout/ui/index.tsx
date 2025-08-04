import {cn} from "../../../lib/cn.ts";
import {type ReactNode, useRef} from "react";

type SidebarProps = {
    isOpen: boolean;
    toggle: () => void;
    render: (props: { isOpen: boolean; toggle: () => void }) => ReactNode;
};

export const SidebarLayout = ({isOpen, toggle, render}: SidebarProps) => {
    const ref = useRef<HTMLDivElement | null>(null)

    // useEffect(() => {
    //     if (!isOpen) return;
    //
    //     const handleClickOutside = (e: MouseEvent) => {
    //         if (ref.current && !ref.current.contains(e.target as Node)) {
    //             toggle();
    //         }
    //     };
    //
    //     document.addEventListener("click", handleClickOutside);
    //
    //     return () => {
    //         document.removeEventListener("click", handleClickOutside);
    //     };
    // }, [isOpen, toggle]);

    return (
        <aside
            ref={ref}
            className={cn(
                "fixed right-0 top-[76px] bg-[#1E1F25] h-full w-[500px] flex items-center justify-center transition-transform duration-500 ease-in-out shadow-xl p-8",
                {
                    "translate-x-0": isOpen,
                    "translate-x-full": !isOpen,
                }
            )}
        >
            {render({isOpen, toggle})}
        </aside>
    )
}

