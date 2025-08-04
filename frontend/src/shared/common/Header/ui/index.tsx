import {Input} from "../../../components/Input";
/* Icons */
import {Bell, Search, User} from "lucide-react";
import {Button} from "../../../components/Button";

export const Header = () => {
    return (
        <header className={'max-w-full w-full bg-[#1E1F25] flex items-center h-[76px] px-10'}>

            <div className={'flex items-center mx-auto relative max-w-[450px] w-full'}>
                <Input
                    type={'text'}
                    iconEnd={<Search/>}
                    placeholder={'Search anything...'}
                />

            </div>

            <div className={'flex items-center space-x-3'}>
                <Button
                    rounded={'xl'}
                    className={'p-1'}
                    variant={'ghost'}
                >
                    <Bell />
                </Button>
                <Button
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