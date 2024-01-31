export const getPercent = (price: number, oldPrice: number): number => {

  const percent = 100 - Math.floor(price*100/oldPrice)
  return percent
}