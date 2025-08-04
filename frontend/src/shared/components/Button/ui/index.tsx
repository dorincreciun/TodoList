import {cn} from "../../../lib/cn.ts";
import type {ButtonProps} from "../model/types.ts";
import {style} from "./style.ts";

export const Button = ({children, className, variant = 'primary', size, ...rest}: ButtonProps) => {

    const buttonStyles = cn(style({ variant, size }), className)

    return (
        <button
            {...rest}
            className={buttonStyles}
        >
            {children}
        </button>
    )
}