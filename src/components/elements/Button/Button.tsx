import {twMerge} from "tailwind-merge";
import React, {PropsWithChildren} from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  onClick?: () => void
  variant?: "primary" | "outlined"
  isFullWidth?: boolean
}

const Button = (
  {
    className,
    onClick,
    variant,
    isFullWidth = false,
    children,
  }: PropsWithChildren<ButtonProps>) => {

  return (
    <button
      type="button"
      className={twMerge("flex items-center justify-center rounded-lg text-xs", isFullWidth ? "w-full p-1" : "w-fit", className, variant === "primary" ? "bg-primary text-white" : variant === "outlined" ? "bg-transparent outline-2 outline-primary text-primary rounded-lg p-2" : "")}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button