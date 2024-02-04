import './CategoryPagePlaceholder.scss'

const CategoryPagePlaceholder = () => {
  return (
    <div className="category-page-placeholder placeholder">
      <div className="category-page-placeholder__aside placeholder__item" />
      <div className="category-page-placeholder__wrapper">
        <div className="category-page-placeholder__title placeholder__title" />
        <div className='category-page-placeholder__body'>
          {
            new Array(8).fill(null).map((_,index) => <div key={index} className="category-page-placeholder__item placeholder__item" />)
          }
        </div>

      </div>
    </div>
  )
}

export default CategoryPagePlaceholder