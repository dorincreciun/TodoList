import { cva, type VariantProps } from "class-variance-authority";

export type InputVariants = VariantProps<typeof inputStyle>;

export const inputStyle = cva(
    [
        // Base styles
        "py-[9px] px-5 rounded-lg border",
        "placeholder:font-normal placeholder:text-sm placeholder:leading-0"
    ],
    {
        variants: {
            variant: {
                primary: [
                    // Size
                    "max-w-[290px] w-full",

                    // Background & Text
                    "bg-[#050505] text-white",

                    // Border
                    "border-[#050505] outline-0",

                    // Placeholder
                    "placeholder:text-[#9BABC5]",

                    // Focus State
                    "focus:outline-none focus:ring-[#050505]",
                    "focus:ring-2 focus:ring-offset-2",
                    "focus:ring-offset-[#1E1F25] focus:shadow-lg"
                ]
            }
        },
        defaultVariants: {
            variant: "primary"
        }
    }
);
