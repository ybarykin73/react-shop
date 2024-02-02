import './CategoryBlockPlaceholder.scss'

const CategoryBlockPlaceholder = () => {
  return (
    <div className="category-block-placeholder placeholder">
      <div className="category-block-placeholder__wrapper">
        {
          new Array(6).fill(null).map((item, index) => <div key={index} className="category-block-placeholder__item placeholder__item" />)
        }
      </div>
    </div>
  )
}

export default CategoryBlockPlaceholder