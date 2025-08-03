import {PageLayout} from "../../../../shared/layouts/PageLayout";
import {AtSign, Lock} from "lucide-react";
import {Input} from "../../../../shared/components/Input";
import {withPasswordInput} from "../../../../shared/HOC/PasswordInput";

export const LoginPage = () => {
    const PasswordInput = withPasswordInput(Input);
    return (
        <PageLayout className="flex items-center h-full justify-center">
                <div className="w-full max-w-sm p-6 bg-[#1E1F25] rounded-xl shadow-2xl">
                    <div className="text-center mb-10">
                        <div className="mx-auto bg-[#292A30] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <Lock className="text-[#FEFEFE]" size={24} />
                        </div>
                        <h1 className="text-3xl font-bold text-[#FEFEFE]">Welcome back</h1>
                        <p className="text-[#94A3B8] mt-2">Sign in to your account</p>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-[#E2E8F0]">
                                Email address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8899A8]">
                                    <AtSign size={18} />
                                </div>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className={'pl-10'}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="block text-sm font-medium text-[#E2E8F0]">
                                    Password
                                </label>
                                {/*<a href="#" className="text-sm text-[#60A5FA] hover:text-[#38BDF8] transition-colors">*/}
                                {/*    Forgot password?*/}
                                {/*</a>*/}
                            </div>
                            <div className="relative">
                                <div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8899A8]">
                                    <Lock size={18} />
                                </div>
                                <PasswordInput
                                    id="password"
                                    placeholder="Password"
                                    className={'pl-10'}
                                />

                            </div>
                        </div>

                        <button
                            type="submit"
                            className=""
                        >
                            Sign in
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-[#94A3B8]">
                        <p>Don't have an account?
                            <a href="#" className="font-medium text-[#60A5FA] hover:text-[#38BDF8] transition-colors ms-2">
                                Register now
                            </a>
                        </p>
                    </div>
                </div>
        </PageLayout>
    )
}