import {create} from 'zustand'

type AuthSidebarState = {
    isOpened: boolean
    toggle: () => void
    close: () => void
    open: () => void
}

export const useAuthSidebar = create<AuthSidebarState>((set) => {
    return {
        isOpened: false,
        toggle: () => set((state) => ({...state, isOpened: !state.isOpened})),
        close: () => set({isOpened: false}),
        open: () => set({isOpened: true}),
    }
})