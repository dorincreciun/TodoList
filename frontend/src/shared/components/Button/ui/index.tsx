import type {ButtonProps} from "../../Navigate/model/types.ts";
import {cn} from "../../../lib/cn.ts";
import {style} from "../../Navigate/ui/style.ts";

export const Button = ({children, className, variant, ...rest}: ButtonProps) => {

    const buttonStyles = cn(style({ variant}), className)

    return (
        <button
            {...rest}
            className={buttonStyles}
        >
            {children}
        </button>
    )
}