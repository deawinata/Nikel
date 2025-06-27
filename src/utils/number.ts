export const calculateFinalPrice = (price: number, discount: number) => {
  return (price - (price * discount / 100)).toFixed(2);
}

export const calculateTotal = (price: number, discount: number, qty: number) => {
  return parseFloat(calculateFinalPrice(price, discount)) * qty;
}