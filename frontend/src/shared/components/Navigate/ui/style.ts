import {cva, type VariantProps} from "class-variance-authority";
import {UI_ROUNDED} from "../../../config/ui.ts";

export type NavigateVariant = VariantProps<typeof style>;

export const style = cva([
        /* Layout & Box Model */
        'p-3',

        /* Typography & Color */
        'text-[#5F6388]',
        'border-transparent',

        /* Interactivity */
        'cursor-pointer outline-none',

        /* Transitions */
        'transition-colors transition-filter duration-200 ease-in',

        /* States: Hover */
        'hover:bg-[#5051F9]/90 hover:text-white',

        /* States: Active */
        'active:brightness-70',

        /* States: Focus */
        'focus:ring-2 focus:ring-[#5051F9]/50 focus:ring-offset-2 focus:ring-offset-[#1E1F25]',

        /* States: Disabled */
        'disabled:opacity-50',
        'disabled:pointer-events-none',
    ], {
        variants: {
            rounded: UI_ROUNDED,
        },
        defaultVariants: {
            rounded: "xl"
        }
    }
);
