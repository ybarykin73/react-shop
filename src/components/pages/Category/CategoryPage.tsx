import { useAppSelector } from "../../../hooks/hooks"
import { useParams, useLocation } from "react-router-dom"

import CategoryGrid from "../../category/CategoryGrid/CategoryGrid"
import CategoryPagePlaceholder from "./Placeholder/CategoryPagePlaceholder"

import getCategoryProducts from "../../../utils/getCategoryProducts"
import './CategoryPage.scss'

const CategoryPage = () => {

  const categoryName = useParams()
  const storeProducts = useAppSelector(store => store.products)
  const {state} = useLocation()

  const {
    products,
    isLoading
  } = storeProducts

  const categoryProducts = getCategoryProducts(products, categoryName.categoryId)
  
  return (
    <div className="container">
      {
        isLoading 
        ?
        <CategoryPagePlaceholder />
        :
        <div className="category-page">
          <div className="category-page__aside">
            aside
          </div>
          <div className="category-page__body">
            <div className="category-page__heading">
              <h1 className="title title--main category-page__title">
                {state.name}
              </h1>
            </div>
            <CategoryGrid products={categoryProducts} />
          </div>
        </div>
      }
    </div>
  )
}

export default CategoryPage