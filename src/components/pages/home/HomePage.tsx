import React  from 'react'

import CategoryBlockContainer from "../../category/category-block/CategoryBlockContainer"
import NewProducts from "../../product/NewProducts/NewProducts"

const HomePage = () => {

  return (
    <div className="container">
      <CategoryBlockContainer />
      <NewProducts />
    </div>
  )
}

export default HomePage