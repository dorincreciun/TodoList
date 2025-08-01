import type {FC, PropsWithChildren} from "react";

export const PageLayout: FC<PropsWithChildren> = ({children}) => {
    return <main className={'container py-5 mx-auto flex-1'}>{children}</main>
}