import { useAppSelector } from "../../../hooks/hooks"

import ProductGrid from "../ProductGrid/ProductGrid"

import getRandomProducts from '../../../utils/getRandomProducts'

import './NewProducts.scss'

const NewProducts = () => {
  const title = "Новые товары"
  const storeProduct = useAppSelector(store => store.products)
  
  const {
    error,
    products,
    isLoading    
  } = storeProduct

  const productArray = getRandomProducts(products, 4)

  return (
    <section className="new-products-block">
      <ProductGrid
        title={title} 
        error={error}
        products={productArray}
        isLoading={isLoading}
      />
    </section>
  )
}

export default NewProducts