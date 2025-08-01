import {PageLayout} from "../../../../shared/layouts/PageLayout";
import {Label} from "../../../../shared/components/Label";
import {Input} from "../../../../shared/components/Input";

export const SignInPage = () => {
    return (
        <PageLayout className={'grid grid-cols-2'}>
            <div className={'flex items-center justify-start'}>
                <div className={'flex-1 max-w-[400px]'}>
                    <h1 className={'text-4xl font-bold text-[#212427] mb-6'}>SignIn</h1>
                    <form>
                        <div className={'mb-4'}>
                            <Label htmlFor={'email'}>Email</Label>
                            <Input type={'email'} id={'email'} placeholder={'Enter Email'} />
                        </div>
                        <div className={'mb-6'}>
                            <Label htmlFor={'password'}>Password</Label>
                            <Input type={'password'} id={'password'} placeholder={'Enter Password'} />
                        </div>

                        <button className={'rounded-lg px-4 py-2 bg-gray-800 text-white'}>Login</button>
                    </form>
                </div>
            </div>
            <div className={'flex items-end justify-end'}>
                <div className={'max-w-[500px]'}>
                    <img className={'w-ful h-auto ms-auto object-contain'} src="/login-img.png" alt=""/>
                </div>
            </div>
        </PageLayout>
    )
}