import React from "react"

import CategoryBlock from "./CategoryBlock"
import CategoryBlockPlaceholder from "./Placeholder/CategoryBlockPlaceholder"

import { IProps } from "./ICategoryBlockContainer"

interface ICategory {
  id: number,
  name: string,
  products: any
}

const CategoryBlockContainer:React.FC<IProps> = (props) => {

  const {
    id
  } = props

  const [category, setCategory] = React.useState<ICategory>(null)
  const [isLoading,  setIsLoading] = React.useState(true)

  React.useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const data = await fetch(`https://65b784b346324d531d54cffb.mockapi.io/products/${id}`)
    const res = await data.json()
    setCategory(res)
    setIsLoading(false)
  }

  return (
    <>
      {
        isLoading
        ?
          <CategoryBlockPlaceholder />
        :
          <CategoryBlock
            title={category.name}
            products={category.products} 
          />
      }
    </>
  )
}

export default CategoryBlockContainer