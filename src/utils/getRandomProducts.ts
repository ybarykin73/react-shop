import IProduct from "../entities/Products/IProduct"

const getRandomProducts = (array: Array<IProduct>, long: number = 8): Array<IProduct> => {
  
  if(!array.length) {
    return []
  }

  const start = Math.floor(Math.random() * (array.length - long))

  const newArray = array.slice(start, start + long)
  return newArray
}

export default getRandomProducts