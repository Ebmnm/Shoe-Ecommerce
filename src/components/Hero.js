import React from 'react'
import TextCard from "./TextCard.js"
import ImageGallery from "./ImageGallery"
import "../styles/hero.css"
export default function Hero() {
    return (
        <div className="hero">
            <ImageGallery/>
            <TextCard/>
        </div>
    )
}
