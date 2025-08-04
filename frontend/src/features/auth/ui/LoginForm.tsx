import {AtSign, Lock} from "lucide-react";
import {Input} from "../../../shared/components/Input";
import {Button} from "../../../shared/components/Button";
import {withPasswordInput} from "../../../shared/HOC/PasswordInput";

export const LoginForm = () => {
    const PasswordInput = withPasswordInput(Input);
    return (
        <div
            className={'max-w-[480px] w-full mx-auto px-6 relative z-10'}>
            {/* Card container with glass effect */}

            {/* Header section */}
            <div className="text-center mb-8">
                <div
                    className="mx-auto bg-gradient-to-br from-[#5051F9] to-[#5051F9]/80 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Lock className="text-white" size={28}/>
                </div>
                <h1 className="text-3xl font-bold text-[#FEFEFE] mb-2">Welcome back</h1>
                <p className="text-[#94A3B8] text-base">Sign in to your account to continue</p>
            </div>

            {/* Form section */}
            <form className="space-y-6">
                {/* Email and password inputs */}
                <div className="space-y-3">
                    <label className="block text-sm font-semibold text-[#E2E8F0]">
                        Email address
                    </label>

                    <Input
                        iconStart={<AtSign size={18}
                                           className="text-[#8899A8] group-focus-within:text-[#5051F9] transition-colors"/>}
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className={'pl-12 pr-4 py-3 bg-[#282932]/50 border-[#282932] focus:border-[#5051F9] focus:bg-[#282932] transition-all duration-300'}
                    />
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <label className="block text-sm font-semibold text-[#E2E8F0]">
                            Password
                        </label>
                        <button
                            type="button"
                            className="text-sm text-[#60A5FA] hover:text-[#38BDF8] transition-colors font-medium"
                        >
                            Forgot password?
                        </button>
                    </div>

                    <PasswordInput
                        iconStart={<Lock size={18}
                                         className="text-[#8899A8] group-focus-within:text-[#5051F9] transition-colors"/>}
                        id="password"
                        placeholder="Enter your password"
                        className={'pl-12 pr-12 py-3 bg-[#282932]/50 border-[#282932] focus:border-[#5051F9] focus:bg-[#282932] transition-all duration-300'}
                    />
                </div>

                {/* Submit button */}
                <div className={'pt-2 mb-8'}>
                    <Button
                        type={'button'}
                        className={'w-full py-3 text-base font-semibold bg-gradient-to-r from-[#5051F9] to-[#5051F9]/90 hover:from-[#5051F9]/90 hover:to-[#5051F9] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]'}
                    >
                        Sign in
                    </Button>
                </div>
            </form>

            {/* Footer */}
            <div className="text-center text-sm text-[#94A3B8]">
                <p>Don't have an account?
                    <a href="#"
                       className="font-semibold text-[#60A5FA] hover:text-[#38BDF8] transition-colors ms-2 hover:underline">
                        Create account
                    </a>
                </p>
            </div>
        </div>
    )
}