import type {ReactNode} from "react";

export type SidebarProps = {
    isOpen: boolean;
    onClickOutside?: () => void;
    render: (props: { isOpen: boolean }) => ReactNode;
};