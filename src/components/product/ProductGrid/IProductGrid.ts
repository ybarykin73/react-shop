import IProduct from "../../../entities/Products/IProduct"

export interface IProps {
  title: string,
  error?: string,
  isLoading: boolean,
  products: Array<IProduct>
}