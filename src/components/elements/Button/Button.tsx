import {twMerge} from "tailwind-merge";
import {PropsWithChildren} from "react";

export interface ButtonProps {
    className?: string
    onClick?: () => void
    variant?: "primary" | "outlined"
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
    const {children, className, onClick, variant} = props

    return (
        <button
            className={twMerge(className, variant === "primary" ? "bg-red-300" : variant === "outlined" ? "outline-1 outline-red-500 text-red-500" : "")}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button