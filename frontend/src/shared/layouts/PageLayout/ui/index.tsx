import type {PageLayoutProps} from "../model/types.ts";

export const PageLayout = ({children, ...rest}: PageLayoutProps) => {
    return <main {...rest}>{children}</main>
}