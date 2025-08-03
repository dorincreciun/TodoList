import {useState} from "react";
import type {ComponentType, InputHTMLAttributes} from "react";
import {Eye, EyeOff} from "lucide-react";

export function withPasswordInput<P extends InputHTMLAttributes<HTMLInputElement>>(
    WrappedComponent: ComponentType<P>
) {
    return function PasswordInput(props: Omit<P, "type">) {
        const [visible, setVisible] = useState(false);
        const toggle = () => setVisible((v) => !v);

        return (
            <div className="relative">
                <WrappedComponent {...(props as P)} type={visible ? "text" : "password"}/>
                <button
                    type="button"
                    onClick={toggle}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#8899A8] cursor-pointer"
                >
                    {visible ? <EyeOff /> : <Eye />}
                </button>
            </div>
        );
    };
}
