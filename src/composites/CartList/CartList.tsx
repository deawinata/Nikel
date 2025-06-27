import {useAtom} from "jotai/index";
import {cart} from "@/store";
import {ICart} from "@/api";
import {useMemo} from "react";
import Image from "next/image";
import {Button, Icons, ItemCounter} from "@/components/elements";
import PriceWrapper from "@/composites/PriceWrapper/PriceWrapper";
import {calculateTotal} from "@/utils/number";

const CartList = () => {
  const [stringCart, setCart] = useAtom(cart);
  const cartItems: ICart[] = useMemo(() => {
    return stringCart !== "" ? JSON.parse(stringCart) : [];
  }, [stringCart]);

  const onIncrement = (index: number) => {
    cartItems[index].qty += 1
    setCart(JSON.stringify(cartItems));
  }

  const onDecrement = (index: number) => {
    if (cartItems[index].qty > 1)
      cartItems[index].qty -= 1
    else cartItems.splice(index, 1)
    setCart(JSON.stringify(cartItems));
  }

  const onDelete = (index: number) => {
    cartItems.splice(index, 1);
    setCart(JSON.stringify(cartItems));
  }

  const total = useMemo(() => {
    return cartItems.reduce((acc, cur) => {
      return acc + calculateTotal(cur.item.price, cur.item.discountPercentage, cur.qty);
    }, 0)
  }, [cartItems])

  return (
    <div className="flex h-full w-full flex-col items-center gap-4">
      {cartItems.length > 0 ? (
          <>
            {cartItems.map((data, index) => {
              const {item, qty} = data;
              return (
                <div
                  key={item.id}
                  className="flex flex-col w-full items-center"
                >
                  <div className="flex w-full gap-4">
                    <Image src={item.thumbnail} alt={item.title} width={80} height={80} className="object-contain"/>
                    <div className="flex flex-col flex-grow gap-1">
                      <div className="font-semibold">{item.title}</div>
                      <PriceWrapper price={item.price} discount={item.discountPercentage}/>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button onClick={() => onDelete(index)}>
                        <Icons name="trash" className="text-red-500 w-5 h-5 cursor-pointer"/>
                      </Button>
                      <ItemCounter
                        onIncrement={() => onIncrement(index)}
                        onDecrement={() => onDecrement(index)}
                        qty={qty}
                        size="small"/>
                    </div>
                  </div>
                  <hr className="w-full border-t border-secondary my-4"/>
                </div>
              );
            })}
            <div className="flex w-full justify-between text-lg">
              Total
              <div className="font-bold">${total.toFixed(2)}</div>
            </div>
          </>
        )
        :
        <div className="flex flex-col w-full items-center gap-4">
          Your cart is empty.
        </div>}
    </div>
  );
};

export default CartList;
