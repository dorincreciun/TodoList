import {Input} from "../../../components/Input";
/* Icons */
import {Search, User} from "lucide-react";

export const Header = () => {
    return (
        <header className={'max-w-full w-full bg-[#1E1F25] flex items-center h-[76px] px-10'}>

            <div className={'flex items-center mx-auto relative max-w-[450px] w-full'}>
                <Input
                    iconEnd={<Search/>}
                    type={'text'}
                    placeholder={'Search anything...'}
                />
            </div>

            <div>
                <button className={'flex items-center gap-3 text-white cursor-pointer'}>
                    <div
                        className={'size-10 rounded-full overflow-hidden flex items-center justify-center bg-[#292A30]'}>
                        <User />
                    </div>
                    {/*<ChevronDown/>*/}
                </button>
            </div>
        </header>
    )
}