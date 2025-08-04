import { cva, type VariantProps } from "class-variance-authority";
import {UI_ROUNDED, UI_SIZES} from "../../../config/ui.ts";

export type InputVariants = VariantProps<typeof style>;

export const style = cva(
    [
        "placeholder:leading-0",
        "transition-colors duration-300 ease-in w-full",

        'border'
    ],
    {
        variants: {
            variant: {
                primary: [
                    // Background & Text
                    "bg-[#282932] text-white",

                    // Border
                    "border-[#282932] outline-0",

                    // Placeholder
                    "placeholder:text-[#8899A8]/50",

                    // Focus State
                    "focus:outline-none focus:ring-[#282932]",
                    "focus:ring-2 focus:ring-offset-2",
                    "focus:ring-offset-[#1E1F25] focus:shadow-lg",

                    // Hover State
                    "hover:border-[#777E90]"
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
    }
);
