import type {InputProps} from "../model/types.ts";
import {cn} from "../../../lib/cn.ts";
import {style} from "./style.ts";


export const Input = ({className, variant, ...rest}: InputProps) => {
    const styleInput = cn(
        style({ variant }),
        className
    )

    return (
        <input
            {...rest}
            className={styleInput}
        />
    )
}