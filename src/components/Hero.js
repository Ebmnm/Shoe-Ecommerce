import React from 'react'
import TextCard from "./TextCard.js"
import ImageGallery from "./ImageGallery"
import "../styles/hero.css"
export default function Hero({amount, setAmount,  setCartAmount}) {
    return (
        <div className="hero">
            <ImageGallery/>
            <TextCard setCartAmount={setCartAmount} amount={amount} setAmount={setAmount}/>
        </div>
    )
}
