import React from 'react'

import Error from '../../subcomponents/Error/Error'
import CategoryBlock from './CategoryBlock'
import CategoryBlockPlaceholder from './Placeholder/CategoryBlockPlaceholder'

import { IProps } from './ICategoryBlockContainer'

interface ICategory {
  id: number,
  name: string,
}

const CategoryBlockContainer:React.FC<IProps> = () => {

  const [category, setCategory] = React.useState<ICategory>(null)
  const [isLoading,  setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const data = await fetch(`https://65b784b346324d531d54cffb.mockapi.io/category`)
      const res = await data.json()
      setCategory(res)
    } catch (error) {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  if (error) {
    return <Error />
  }

  return (
    <section className='category-block'>
      {
        isLoading
        ?
          <CategoryBlockPlaceholder />
        :
          <CategoryBlock
            categories={category} 
          />
      }
    </section>
  )
}

export default CategoryBlockContainer