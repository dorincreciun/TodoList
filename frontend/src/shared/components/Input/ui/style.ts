import { cva, type VariantProps } from "class-variance-authority";
import { UI_ROUNDED, UI_SIZES } from "../../../config/ui.ts";

export type InputVariants = VariantProps<typeof style>;

export const style = cva(
    [
        /* Layout */
        "w-full outline-none",

        /* Border */
        "outline-0",
        "hover:border-[#5051F9]",
        "border border-[#282932]",

        /* Background & Text */
        "text-white",
        "bg-[#282932]",

        /* :placeholder */
        "placeholder:leading-0",
        "placeholder:text-[#8899A8]/50",

        /* :focus */
        'focus:ring-2 focus:ring-offset-2',
        "focus:ring-[#5051F9]/30 focus:ring-offset-[#1E1F25]",

        /* :invalid */
        "invalid:border-red-500",

        /* transition */
        'transition-filter duration-200 ease-in',
    ],
    {
        variants: {
            size: UI_SIZES,
            rounded: UI_ROUNDED
        },
        defaultVariants: {
            size: "md",
            rounded: "md"
        }
    }
);
