import type {InputProps} from "../model/types.ts";
import {cn} from "../../../lib/cn.ts";
import {style} from "./style.ts";


export const Input = ({className, variant, size, rounded, iconStart, iconEnd, ...rest}: InputProps) => {
    const styleInput = cn(
        style({variant, size, rounded}),
        {"pl-10": iconStart, "pr-10": iconEnd,},
        className
    )

    return (
        <div>
            <div className="relative">
                {iconStart && (
                    <div
                        className={'absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8899A8]/50'}>
                        {iconStart}
                    </div>
                )}
                <input
                    {...rest}
                    className={styleInput}
                />
                {iconEnd && (
                    <div
                        className={'absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8899A8]/50'}>
                        {iconEnd}
                    </div>
                )}
            </div>
        </div>
    )
}