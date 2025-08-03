import type {InputHTMLAttributes, RefObject} from "react";
import type {InputVariants} from "../ui/style.ts";

type CustomInputProps = {
    ref?: RefObject<HTMLInputElement>
}

export type InputProps
    = InputHTMLAttributes<HTMLInputElement>
    & Pick<InputVariants, "variant">
    & CustomInputProps