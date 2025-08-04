import type {NavigateProps} from "../model/types.ts";
import {NavLink} from "react-router";
import {cn} from "../../../lib/cn.ts";
import {style} from "./style.ts";

export const Navigate = ({children, href, className, ...rest}: NavigateProps) => {

    const navigateStyles = (isActive: boolean): string => cn(
        style(),
        isActive && "bg-[#5051F9] text-white",
        className
    )

    return (
        <NavLink
            to={href}
            {...rest}
            className={({isActive}) => navigateStyles(isActive)}
        >
            {children}
        </NavLink>
    )
}