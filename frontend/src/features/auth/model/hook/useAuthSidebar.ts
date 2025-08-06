import {create} from 'zustand'
import type {AuthSidebarState} from "../type/AuthSidebar.ts";

export const useAuthSidebar = create<AuthSidebarState>((set) => {
    return {
        isOpened: false,
        toggle: () => set((state) => ({...state, isOpened: !state.isOpened})),
        close: () => set({isOpened: false}),
        open: () => set({isOpened: true}),
    }
})