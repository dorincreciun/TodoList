import {cva, type VariantProps} from "class-variance-authority";

export type NavigateVariant = VariantProps<typeof style>;
export const style = cva([
    'p-3 rounded-xl',
    'text-[#5F6388]',
    'transition-colors duration-200',
    'hover:bg-[#5051F9]/50 text-white/50'
])