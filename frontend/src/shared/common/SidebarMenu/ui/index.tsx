import {Logo} from "../../../icons/Logo.tsx";
/* Components */
import {Navigate} from "../../../components/Navigate";
import {Routing_Paths} from "../../../config/routing.ts";
/* Icons */
import {FolderPlus, Gauge, ListTodo, MessagesSquare, Settings} from "lucide-react";

const MenuItems = [
    {
        href: Routing_Paths.DASHBOARD,
        icon: <Gauge />
    },
    {
        href: Routing_Paths.TASKS,
        icon: <ListTodo />
    },
    {
        href: Routing_Paths.SETTINGS,
        icon: <Settings />
    },
    {
        href: Routing_Paths.MESSAGE,
        icon: <MessagesSquare />
    },
    {
        href: Routing_Paths.FILES,
        icon: <FolderPlus />
    }
]

export const SidebarMenu = () => {
    return (
        <aside className={'h-screen bg-[#1E1F25] flex flex-col'}>
            <Logo/>

            <nav className={'flex flex-col items-center flex-1 justify-center gap-6.5'}>
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