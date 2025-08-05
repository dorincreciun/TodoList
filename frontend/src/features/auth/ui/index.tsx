import {SidebarLayout} from "../../../shared/layouts/SidebarLayout";
import {LoginForm} from "./LoginForm.tsx";
import {useAuthSidebar} from "../model/useAuthSidebar.ts";
import {useState} from "react";
import {RegisterForm} from "./RegisterForm.tsx";

export const SidebarAuth = () => {
    const [form, setForm] = useState<'login' | 'register'>('login')
    const isOpen = useAuthSidebar((state) => state.isOpened);
    const close = useAuthSidebar((state) => state.close);

    return (
        <SidebarLayout
            isOpen={isOpen}
            onClickOutside={close}
            render={() =>
                form === 'login'
                    ? <LoginForm changeForm={() => setForm('register')} />
                    : <RegisterForm changeForm={() => setForm('login')} />
            }
        />
    );
};
