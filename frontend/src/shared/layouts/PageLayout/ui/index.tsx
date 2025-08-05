import type {PageLayoutProps} from "../model/types.ts";
import {cn} from "../../../lib/cn.ts";

export const PageLayout = ({children, className, ...rest}: PageLayoutProps) => {
    const stylePage = cn("max-w-full w-full overflow-x-hidden" ,className)
    return <main {...rest} className={stylePage}>{children}</main>
}