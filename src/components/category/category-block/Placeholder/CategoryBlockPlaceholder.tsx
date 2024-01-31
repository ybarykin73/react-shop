import './CategoryBlockPlaceholder.scss'

const CategoryBlockPlaceholder = () => {
  return (
    <div className="category-block-placeholder placeholder">
      <div className="placeholder__title" />
      <div className="category-block-placeholder__wrapper">
        {
          new Array(4).fill(null).map((item, index) => <div key={index} className="category-block-placeholder__item placeholder__item" />)
        }
      </div>
    </div>
  )
}

export default CategoryBlockPlaceholder