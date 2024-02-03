import './ProductGridPlaceholder.scss'

const ProductGridPlaceholder = () => {
  return (
    <div className="product-grid-placeholder placeholder">
      <div className="placeholder__title" />
      <div className="product-grid-placeholder__wrapper">
        {
          new Array(4).fill(null).map((_, index) => <div key={index} className="product-grid-placeholder__item placeholder__item" />)
        }
      </div>
    </div>
  )
}

export default ProductGridPlaceholder