import type {LabelProps} from "../model/types.ts";

export const Label = ({children, ...rest}: LabelProps) => {
    return (
        <label {...rest} className="block mb-1 text-sm font-medium text-gray-700">
            {children}
        </label>
    )
}