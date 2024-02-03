interface IProduct {
  id: number,
  name: string,
  image: string,
  price: number,
  oldPrice?: number,
  categoryName: string
}

export default IProduct