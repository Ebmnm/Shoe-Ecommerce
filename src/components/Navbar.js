import React, {useState} from 'react'
import "../styles/navbar.css"
import Cart from "./Cart.js"
export default function Navbar({amount, setAmount, cartAmount, setCartAmount}) {
    const [showCart,setShowCart] = useState(false)

    function toggleCart() {
        setShowCart(!showCart)
    }
    return (
        <nav>
            <section className="nav-content">
                <div className="right-content">
                    <h1 className="logo">Sneakers</h1>
                    <div className="nav-text">
                        <h2>Collection</h2>
                        <h2>Men</h2>
                        <h2>Women</h2>
                        <h2>About</h2>
                        <h2>Contact</h2>
                    </div>
                </div>
                
                <div className="left-icons">
                   { cartAmount > 0 && <span className="circle-number"> {cartAmount} </span>}
                <svg onClick={toggleCart} className="cart" width="42" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
               
             { showCart && <Cart cartAmount={cartAmount} setCartAmount={setCartAmount} amount={amount} setShowCart={setShowCart}  setAmount={setAmount}/> }

                <img className="profile" width="50" height="50" src="https://ecstatic-liskov-a9228a.netlify.app/assets/images/image-avatar.png" alt="profile"/>
                </div>
            </section>
        </nav>
    )
}
