import {useMemo} from "react";
import {useAtom} from "jotai/index";
import {useIsMobile} from "@/hooks/useIsMobile";
import {ICart, IProduct} from "@/api";
import {cart} from "@/store";
import {Icons, Button, ItemCounter} from "@/components/elements";

type TATCButtonProps = {
  data: IProduct
  isFullWidth?: boolean
  className?: string
  buttonSize?: "small" | "large"
}

const ATCButton = ({data, isFullWidth, className, buttonSize}: TATCButtonProps) => {
  const [stringCart, setCart] = useAtom(cart)
  const isMobile = useIsMobile()

  const parsedCart: ICart[] = useMemo(() => {
    return stringCart && stringCart !== "" ? JSON.parse(stringCart) : [];
  }, [stringCart]);

  const existingItemIndex = useMemo(
    () => parsedCart.findIndex((item: ICart) => item.item.id === data.id),
    [parsedCart, data.id]
  );

  const existingItem = existingItemIndex !== -1 ? parsedCart[existingItemIndex] : null;

  const addToCart = () => {
    if (!data) return
    if (existingItemIndex !== -1) {
      parsedCart[existingItemIndex].qty += 1
    } else {
      parsedCart.push({
        item: data,
        qty: 1,
      })
    }
    setCart(JSON.stringify(parsedCart))
  }

  const onIncrement = () => {
    parsedCart[existingItemIndex].qty += 1
    setCart(JSON.stringify(parsedCart))
  }

  const onDecrement = () => {
    if (parsedCart[existingItemIndex].qty > 1)
      parsedCart[existingItemIndex].qty -= 1
    else parsedCart.splice(existingItemIndex, 1)
    setCart(JSON.stringify(parsedCart))
  }

  return (
    <div className={className}>
      {existingItem ?
        <ItemCounter
          className={isMobile ? "w-full" : ""}
          qty={existingItem.qty}
          onIncrement={() => onIncrement()}
          onDecrement={() => onDecrement()}
          size={buttonSize}
        />
        :
        <Button variant="primary" className="py-2 px-4" onClick={() => addToCart()} isFullWidth={isFullWidth}>
          <Icons name="cart" className="w-4 h-4"/>
          Add to Cart
        </Button>
      }

    </div>
  )
}

export default ATCButton;
