import {Logo} from "../../../icons/Logo.tsx";
/* Icons */
import {IconDashboard} from "../../../icons/IconDashboard.tsx";
import {IconBook} from "../../../icons/IconBook.tsx";
import {IconSettings} from "../../../icons/IconSettings.tsx";
import {IconPlane} from "../../../icons/IconPlane.tsx";
import {IconAddFolder} from "../../../icons/IconAddFolder.tsx";
/* Components */
import {Navigate} from "../../../components/Navigate";
import {Routing_Paths} from "../../../../app/config";

const MenuItems = [
    {
        href: Routing_Paths.DASHBOARD,
        icon: <IconDashboard/>
    },
    {
        href: Routing_Paths.TASKS,
        icon: <IconBook/>
    },
    {
        href: Routing_Paths.SETTINGS,
        icon: <IconSettings/>
    },
    {
        href: Routing_Paths.MESSAGE,
        icon: <IconPlane/>
    },
    {
        href: Routing_Paths.FILES,
        icon: <IconAddFolder/>
    }
]

export const SidebarMenu = () => {
    return (
        <aside className={'h-screen bg-[#1E1F25]'}>
            <Logo/>

            <nav className={'flex flex-col items-center justify-center gap-6.5 mt-10'}>
                {
                    MenuItems.map(({href, icon}) => (
                        <Navigate key={href} href={href}>
                            {icon}
                        </Navigate>
                    ))
                }
            </nav>
        </aside>
    )
}