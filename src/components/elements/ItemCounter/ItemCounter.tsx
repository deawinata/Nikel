import {Button} from "@/components/elements";
import {twMerge} from "tailwind-merge";

type TItemCounterProps = {
  onIncrement?: () => void
  onDecrement?: () => void
  qty?: number
  size?: "small" | "large"
  className?: string
}

const ItemCounter = (
  {
    onIncrement,
    onDecrement,
    qty,
    size = "large",
    className
  }: TItemCounterProps) => {
  return (
    <div className={twMerge("flex items-center justify-between gap-4", className)}>
      <Button variant="primary" className={twMerge("rounded-full", size === "small" ? "h-6 w-6" : "h-10 w-10")}
              onClick={onDecrement}>
        <span className={twMerge("font-bold", size === "small" ? "text-xs" : "text-lg")}>-</span>
      </Button>
      <div className={size === "small" ? "text-xs" : "text-lg"}>{qty}</div>
      <Button variant="primary" className={twMerge("rounded-full", size === "small" ? "h-6 w-6" : "h-10 w-10")}
              onClick={onIncrement}>
        <span className={twMerge("font-bold", size === "small" ? "text-xs" : "text-lg")}>+</span>
      </Button>
    </div>
  )
}

export default ItemCounter;