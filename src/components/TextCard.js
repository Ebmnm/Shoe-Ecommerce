import React from 'react'
import "../styles/textcard.css"
export default function TextCard({amount, setAmount, setCartAmount}) {

    function addToCart() {
        setCartAmount(prev => prev + amount)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function addAmount(){
        setAmount(prev => prev + 1)
    }

    function takeAmount() {
        if(amount < 1) return
        setAmount(prev => prev - 1)
    }
    return (
        <section className="text-card">
            <div className="text">
                <h4 className="subtitle">Sneaker Company</h4>
                <h1 className="hero-title">Fall Limited <br/> Edition Sneakers</h1>
                <p className="text-p">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            </div>
            
            <div className="bottom-text-card">
                <h2>$125   <p className="discount"> 50%</p>  </h2>
                <h3 className="last-price">$250</h3>
            </div>

            <div className="button-div">
            <span className="quantity">
                <button onClick={takeAmount} className="minus">-</button>
                <p>{amount}</p>
                <button onClick={addAmount}>+</button>
            </span>
            <button onClick={addToCart} className="add-cart">Add to cart</button>

            </div>
        </section>
    )
}
