import {cva, type VariantProps} from "class-variance-authority";
import {UI_ROUNDED, UI_SIZES} from "../../../config/ui.ts";

export type ButtonVariant = VariantProps<typeof style>;
export const style = cva([
    'cursor-pointer outline-none border',

    /* :disabled */
    'disabled:opacity-50',
    'disabled:pointer-events-none',

    /* :active */
    'active:brightness-70',

    /* :focus */
    'focus:ring-2 focus:ring-offset-2',

    /* transition */
    'transition-filter duration-200 ease-in',
], {
    variants: {
        variant: {
            primary: [
                "bg-[#5051F9] text-white border-transparent",

                /* :hover */
                'hover:bg-[#5051F9]/90',

                /* :focus */
                "focus:ring-[#5051F9]/30 focus:ring-offset-[#1E1F25]"
            ],
            secondary: [
                "bg-transparent text-[#5051F9] border-[#5051F9]",

                /* :hover */
                'hover:bg-[#5051F9]/50 hover:text-white',

                /* :focus */
                "focus:ring-[#5051F9]/30 focus:ring-offset-[#1E1F25]"
            ],
            ghost: [
                "bg-transparent text-white border-transparent",

                /* :focus */
                "focus:ring-[#5051F9]/30 focus:ring-offset-[#1E1F25]",
            ]
        },
        size: UI_SIZES,
        rounded: UI_ROUNDED
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
        rounded: "md"
    }
})