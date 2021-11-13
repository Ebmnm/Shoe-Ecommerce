import React from 'react'
import productOne from "../images/image-product-1.jpg"
import "../styles/cart.css"
export default function Cart({amount, setAmount, setShowCart, cartAmount, setCartAmount}) {
     function close() {
         setCartAmount(0)
         setShowCart(false)
     }

    const total = cartAmount * 125
    return (
        <div className={`cart-popup`}>
                    <h2>Cart</h2>
                   <hr/>
                   { cartAmount > 0 && <div className="item">
                        <span className="cart-shoe-span">{<img src={productOne} alt="shoe-icon"/>}</span>
                        <div className="item-details">
                            <p>Fall limited edition</p>
                            <p>$125 x {cartAmount} = <b>${total}</b> </p>
                        </div>
                        <button onClick={close}>X</button>
                    </div>}
                    {cartAmount < 1 && <h4>Empty</h4>}
                   { cartAmount > 0 &&  <button onClick={close} className="checkout">Checkout</button>}
                </div>
    )
}
