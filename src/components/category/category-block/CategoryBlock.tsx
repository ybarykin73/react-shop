import React from 'react'
import { Link } from 'react-router-dom'

import { IProps } from "./ICategoryBlock"
import './CategoryBlock.scss'

const CategoryBlock: React.FC<IProps> = (props) => {

  const {
    categories
  } = props
  
  return (
    <>
      <div className="category-block__heading">
        <h2 className="category-block__title title title--main">Каталог</h2>
      </div>
      <div className="category-block__wrapper">
        <ul className="category-block__list">
          {
            categories.map(item => {
              return (
                <li key={item.id} className="category-block__list-item">
                  <Link 
                    to={`./category/${item.categoryName}`}
                    state={{name: item.name}}
                  >
                    <div className="category-block__item">
                      <img
                        className="category-block__item-image"
                        src={item.image} 
                        alt={item.name} 
                      />
                      <h3 className="category-block__item-title">
                        {item.name}
                      </h3>
                    </div>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default CategoryBlock