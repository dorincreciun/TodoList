import {Input} from "../../../components/Input";
/* Icons */
import {Bell, Search, User} from "lucide-react";
import {Button} from "../../../components/Button";
import {useNotification} from "../../../../features/messages/model/useNotification.ts";
import {useAuthSidebar} from "../../../../features/auth";

export const Header = () => {
    const toggleNotification = useNotification((state) => state.toggle);
    const toggleAuth = useAuthSidebar((state) => state.toggle);

    return (
        <header className={'max-w-full w-full bg-[#1E1F25] flex items-center h-[76px] px-10 border-b border-[#131517]'}>
            <div className={'flex items-center mx-auto relative max-w-[450px] w-full'}>

                {/* Search input */}
                <Input
                    type={'text'}
                    iconEnd={<Search/>}
                    placeholder={'Search anything...'}
                />
            </div>
            <div className={'flex items-center space-x-3'}>

                {/* Notification */}
                <Button
                    onClick={toggleNotification}
                    rounded={'xl'}
                    className={'p-1'}
                    variant={'ghost'}
                    badge={10}
                >
                    <Bell />
                </Button>

                {/* User control */}
                <Button
                    onClick={toggleAuth}
                    rounded={'xl'}
                    className={'p-1'}
                    variant={'ghost'}
                >
                    <User/>
                </Button>
            </div>
        </header>
    )
}