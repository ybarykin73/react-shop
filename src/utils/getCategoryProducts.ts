import IProduct from "../entities/Products/IProduct"

const getCategoryProducts = (array: Array<IProduct>, name: string): Array<IProduct> => {
  
  if(!array.length) {
    return []
  }
  
  return array.filter(item => item.categoryName === name)
}

export default getCategoryProducts