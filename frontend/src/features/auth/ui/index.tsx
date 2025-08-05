import {SidebarLayout} from "../../../shared/layouts/SidebarLayout";
import {LoginForm} from "./LoginForm.tsx";
import {useAuthSidebar} from "../model/useAuthSidebar.ts";

export const SidebarAuth = () => {
    const isOpen = useAuthSidebar((state) => state.isOpened);
    const close = useAuthSidebar((state) => state.close);

    return (
        <SidebarLayout
            isOpen={isOpen}
            onClickOutside={close}
            render={() => <LoginForm />}
        />
    );
};
