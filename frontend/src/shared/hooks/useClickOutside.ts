import {useEffect} from "react";
import type {RefObject} from "react";

export const useClickOutside = (  ref: RefObject<HTMLElement | null>, handler: () => void ) => {
    useEffect(() => {

        /* Outside click */
        const listener = (event: MouseEvent | TouchEvent) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler();
        };

        /* Add events */
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        /* Clear events */
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };

    }, [ref, handler]);
};
