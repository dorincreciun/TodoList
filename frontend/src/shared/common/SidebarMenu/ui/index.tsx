import {Logo} from "../../../icons/Logo.tsx";
/* Icons */
import {IconDashboard} from "../../../icons/IconDashboard.tsx";
import {IconBook} from "../../../icons/IconBook.tsx";
import {IconSettings} from "../../../icons/IconSettings.tsx";
import {IconPlane} from "../../../icons/IconPlane.tsx";
import {IconAddFolder} from "../../../icons/IconAddFolder.tsx";

export const SidebarMenu = () => {
    return (
        <aside className={'h-screen bg-[#1E1F25]'}>
            <Logo />

            <IconDashboard />
            <IconBook />
            <IconSettings />
            <IconPlane />
            <IconAddFolder />
        </aside>
    )
}