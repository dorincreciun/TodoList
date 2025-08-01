import type {InputProps} from "../model/types.ts";

export const Input = ({...rest}: InputProps) => {
    return (
        <input
            {...rest}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    )
}