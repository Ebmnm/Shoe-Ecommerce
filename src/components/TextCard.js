import React from 'react'
import "../styles/textcard.css"
export default function TextCard() {
    return (
        <section className="text-card">
            <div className="text">
                <h4 className="subtitle">Sneaker Company</h4>
                <h1 className="hero-title">Fall Limited <br/> Edition Sneakers</h1>
                <p className="text-p">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            </div>
            
            <div className="bottom-text-card">
                <h2>$125   <p class="discount"> 50%</p>  </h2>
                <h3 className="last-price">$250</h3>
            </div>

            <div className="button-div">
            <span className="quantity">
                <button className="minus">-</button>
                <p>0</p>
                <button>+</button>
            </span>
            <button className="add-cart">Add to cart</button>

            </div>
        </section>
    )
}
