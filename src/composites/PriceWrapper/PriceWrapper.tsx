import {calculateFinalPrice} from "@/utils/number";
import {twMerge} from "tailwind-merge";

type TPriceWrapperProps = {
  price: number
  discount: number
}

const PriceWrapper = ({price, discount}: TPriceWrapperProps) => {
  const finalPrice = calculateFinalPrice(price, discount);
  return (
    <div className="flex flex-col gap-1">
      <div className={twMerge("flex gap-1 items-center", discount === 0 ? "hidden" : "")}>
        <span className="line-through text-gray-400">${price}</span>
        <span className="text-xs text-danger">{discount}%</span>
      </div>
      <div className="font-bold">${finalPrice}</div>
    </div>
  )
}

export default PriceWrapper;