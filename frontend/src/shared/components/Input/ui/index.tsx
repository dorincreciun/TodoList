import type {InputProps} from "../model/types.ts";
import {cn} from "../../../lib/cn.ts";
import {style} from "./style.ts";


export const Input = ({className, size, rounded, iconStart, iconEnd, invalid, ...rest}: InputProps) => {
    const styleInput = cn(
        style({size, rounded}),
        {
            "border-red-500 hover:border-red-500 focus:ring-red-500/20": invalid,
            "pl-10": iconStart,
            "pr-10": iconEnd
        },
        className
    )

    return (
        <div className={'w-full'}>
            <div className={'relative w-full'}>
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
                        className={'absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[#8899A8]/50'}>
                        {iconEnd}
                    </div>
                )}
            </div>
        </div>
    )
}