import React from 'react'
import "../styles/imagegallery.css"
import productOne from "../images/image-product-1.jpg"
export default function ImageGallery() {
    return (
        <section className="main">
          <span className="img-span">
          <img className="main-pic" alt="shoe" src={productOne}/>
          </span>
        </section>
    )
}
