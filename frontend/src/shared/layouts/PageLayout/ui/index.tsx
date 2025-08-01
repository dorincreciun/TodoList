import type {FC, ReactNode} from "react";

type PageLayout = {
    children: ReactNode;
    className?: string
}

export const PageLayout: FC<PageLayout> = ({children, className}) => {
    return <main className={'container py-5 mx-auto flex-1 ' + className}>{children}</main>
}