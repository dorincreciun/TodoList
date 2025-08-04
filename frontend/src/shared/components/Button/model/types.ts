import type {ButtonHTMLAttributes} from "react";
import type {ButtonVariant} from "../ui/style.ts";

export type ButtonProps
    = ButtonHTMLAttributes<HTMLButtonElement>
    & Pick<ButtonVariant, "variant" | "size" | "rounded">
    & CustomButtonProps

type CustomButtonProps = {
    isLoading?: boolean;
    badge?: true | number;
}