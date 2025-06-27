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
    variant = "primary",
    isFullWidth = false,
    children,
  }: PropsWithChildren<ButtonProps>) => {

  return (
    <button
      type="button"
      className={twMerge("flex items-center justify-center rounded-lg text-xs", isFullWidth ? "w-full p-1" : "w-fit", className, variant === "primary" ? "bg-primary text-white" : variant === "outlined" ? "outline-1 outline-primary text-primary" : "")}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button