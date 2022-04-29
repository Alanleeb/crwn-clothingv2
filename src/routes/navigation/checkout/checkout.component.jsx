import { useContext } from "react";

import CheckoutItem from "../../../components/checkout-item/checkout-item.component";

import { CartContext } from "../../../contexts/cart.context";

import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, checkoutTotal} = useContext(CartContext)



return (
<div className="checkout-container">
    <div className="checkout-header">
        <div className="header-bock">
            <span>Product</span>
        </div>
        <div className="header-bock">
            <span>Description</span>
        </div>
        <div className="header-bock">
            <span>Quantity</span>
        </div>
        <div className="header-bock">
            <span>Price</span>
        </div>
        <div className="header-bock">
            <span>Remove</span>
        </div>
    </div>
    {cartItems?.map((item) => {
        return (
            <CheckoutItem key={item.id} cartItem={item} />
        )
    })}
    <span className="total">Total: {checkoutTotal}</span>
</div>
)
}

export default Checkout;