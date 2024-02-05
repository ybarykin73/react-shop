import CartIcon from "../../../subcomponents/icons/CartIcon"

import './CartButton.scss'

const CartButton = () => {
  return (
    <div className="cart-button">
      <CartIcon width={36} height={36} />
    </div>
  )
}

export default CartButton