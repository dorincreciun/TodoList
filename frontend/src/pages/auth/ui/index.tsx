import {PageLayout} from "../../../shared/layouts/PageLayout";
import {Input} from "../../../shared/components/Input";
import {Label} from "../../../shared/components/Label";
import {useState} from "react";
import {useAuthStore} from "../../../features/auth";

export const AuthPage = () => {
    const {login} = useAuthStore()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <PageLayout>
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign In</h1>

                <form className="space-y-5">
                    <div>
                        <Label htmlFor={'email'}>Email address</Label>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} id={'email'} type={'email'} placeholder={'Email'} />
                    </div>

                    <div>
                        <Label htmlFor={'password'}>Password</Label>
                        <Input value={password} onChange={(e) => setPassword(e.target.value)} id={'password'} type={'password'} placeholder={'Password'} />
                    </div>

                    <button
                        type="button"
                        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                        onClick={() => {
                            login(email, password);
                        }}
                    >
                        Continue
                    </button>
                </form>
            </div>
        </PageLayout>
    )
}