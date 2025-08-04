import {cn} from "../../../lib/cn.ts";
import type {ButtonProps} from "../model/types.ts";
import {style} from "./style.ts";
import {Loader} from "lucide-react";

export const Button = ({children, className, variant, size, rounded, isLoading, ...rest}: ButtonProps) => {

    const buttonStyles = cn(
        style({variant, size, rounded}),
        {"flex items-center gap-2": isLoading},
        className
    )

    return (
        <button
            {...rest}
            className={buttonStyles}
        >
            {isLoading && (
                <span
                    className={cn(
                        "inline-flex items-center justify-center transition-all duration-300 ease-in-out",
                        isLoading ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
                    )}
                >
                    <Loader className="animate-spin text-white"/>
                </span>
            )}

            {children}
        </button>
    )
}