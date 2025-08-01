import {PageLayout} from "../../../shared/layouts/PageLayout";
import {Input} from "../../../shared/components/Input";
import {Label} from "../../../shared/components/Label";

export const AuthPage = () => {
    return (
        <PageLayout>
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign In</h1>

                <form className="space-y-5">
                    <div>
                        <Label htmlFor={'email'}>Email address</Label>
                        <Input id={'email'} type={'email'} placeholder={'Email'} />
                    </div>

                    <div>
                        <Label htmlFor={'password'}>Password</Label>
                        <Input id={'password'} type={'password'} placeholder={'Password'} />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                    >
                        Continue
                    </button>
                </form>
            </div>
        </PageLayout>
    )
}