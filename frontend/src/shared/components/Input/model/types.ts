import type {InputHTMLAttributes, ReactNode, RefObject} from "react";
import type {InputVariants} from "../ui/style.ts";

type CustomInputProps = {
    ref?: RefObject<HTMLInputElement>
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
    invalid?: boolean;
    invalidMessage?: string[];
}

export type InputProps
    = InputHTMLAttributes<HTMLInputElement>
    & Pick<InputVariants, "size" | "rounded">
    & CustomInputProps