import {useNotification} from "../model/useNotification.ts";
import {SidebarLayout} from "../../../shared/layouts/SidebarLayout";

export const SidebarMessages = () => {
    const isOpened = useNotification(state => state.isOpened)
    const close = useNotification(state => state.close)

    return (
        <SidebarLayout
            isOpen={isOpened}
            onClickOutside={close}
            render={() => <div></div>}
        />
    )
}