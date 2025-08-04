import {cn} from "../../../lib/cn.ts";
import type {ButtonProps} from "../model/types.ts";
import {style} from "./style.ts";
import {Loader} from "lucide-react";

export const Button = ({children, className, variant, size, rounded, badge, isLoading, ...rest}: ButtonProps) => {

    const buttonStyles = cn(
        style({variant, size, rounded}),
        {"flex items-center gap-2": isLoading},
        {"relative": badge},
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

            {
                badge && (
                    <div className={'absolute -top-1 -right-1'}>
                        <div
                            className={cn('size-[17px] rounded-full bg-[#5051F9] animate-ping absolute flex items-center justify-center -top-1 right-0')}>
                        </div>
                        <div className={cn('size-[17px] rounded-full bg-[#5051F9] absolute flex items-center justify-center -top-1 right-0')}>
                            <span className={'leading-0 text-[10px]'}>
                                {
                                    badge as number > 9 ? '9+' : badge
                                }
                            </span>
                        </div>
                    </div>
                )
            }

            {children}
        </button>
    )
}