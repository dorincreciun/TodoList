import type {PageLayoutProps} from "../model/types.ts";
import {cn} from "../../../lib/cn.ts";

export const PageLayout = ({children, className, ...rest}: PageLayoutProps) => {
    const stylePage = cn("flex-1 size-full p-6" ,className)
    return <main {...rest} className={stylePage}>{children}</main>
}