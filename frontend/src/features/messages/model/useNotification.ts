import {create} from 'zustand'

type NotificationState = {
    isOpened: boolean
    message: string[]

    toggle: () => void
    open: () => void
    close: () => void
}

export const useNotification = create<NotificationState>((set) => {
    return {
        isOpened: false,
        message: [],

        toggle: () => set((state) => ({ ...state, isOpened: !state.isOpened })),
        open: () => {},
        close: () => {},
    }
})