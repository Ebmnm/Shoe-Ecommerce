import React, {useState} from 'react'
import "../styles/imagegallery.css"
import productOne from "../images/image-product-1.jpg"
import productTwo from "../images/image-product-2.jpg"
import productThree from "../images/image-product-3.jpg"
import productFour from "../images/image-product-4.jpg"

export default function ImageGallery() {
  const [mainPic, setMainPic] = useState(productOne)
  const [imageModel, setImageModel] = useState(false)

  function changePic(e) {
    setMainPic(e.target.src)
  }

  function imagePop() {
    setImageModel(!imageModel)
  }

    return (
      <>
          <section className="main">
            <span className={`img-span `}>
            <img onClick={imagePop} className={`main-pic`} alt="shoe" src={mainPic}/>
            </span>
          <span className={`img-popup ${imageModel ? "img-active" : ""}`}>
          <img onClick={imagePop} className={` ${imageModel ? "img-active-resize" : ""}`} alt="shoe" src={mainPic}/>
          </span>
          </section>
          <section className="bottom-pics">
          <div className="pics-container">
             <img onClick={changePic} src={productOne} alt="shoe"/>
             <img onClick={changePic} src={productTwo} alt="shoe"/>
             <img onClick={changePic} src={productThree} alt="shoe"/>
             <img onClick={changePic} src={productFour} alt="shoe"/>
          </div>
          </section>
  
        </>
    )
}
