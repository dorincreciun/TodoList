import {Input} from "../../../components/Input";

export const Header = () => {
    return (
        <header className={'max-w-full w-full bg-[#1E1F25] flex items-center h-[76px] px-10'}>

            <Input
                type={'search'}
                placeholder={'Search anything...'}
                className={'mx-auto'}
            />

            <div>user</div>
        </header>
    )
}