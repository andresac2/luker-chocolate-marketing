import React from 'react'
import item1 from '../../../assets/img/our-product-1.png'
import item2 from '../../../assets/img/our-product-2.png'
import item3 from '../../../assets/img/our-product-3.png'
import item4 from '../../../assets/img/our-product-4.png'

const OurProduct = () => {

  return (
    <div className="our-product-component" >
      <h1>GET AN INTEGRATED PRODUCT, DESIGN, AND PACKAGING SOLUTION</h1>
      <p className="p-flavour p-flavour-border">We work with multidisciplinary teams that allow us to advise you throughout product development, from the idea to its manufacture. We invite you to meet the team that makes your dreams come true.</p>
      <div className="our-product-component-cards">
        <div className="our-product-component-card our-product-component-card-active">
          <img src={item1} className="logo" alt="Logo Luker" />
          <div className="our-product-component-card-cover"><p>PACKAGING</p></div>
        </div>
        <div className="our-product-component-card">
          <img src={item2} className="logo" alt="Logo Luker" />
          <div className="our-product-component-card-cover"><p>R&D</p></div>
        </div>
        <div className="our-product-component-card">
          <img src={item3} className="logo" alt="Logo Luker" />
          <div className="our-product-component-card-cover"><p>MARKETING</p></div>
        </div>
        <div className="our-product-component-card">
          <img src={item4} className="logo" alt="Logo Luker" />
          <div className="our-product-component-card-cover"><p>DESIGN HUB</p></div>
        </div>
      </div>
      <p className="p-flavour">This team is responsible for developing the primary and secondary packaging ensuring that they suit the requirements of our customers and their products. They are always innovating bearing in mind safety as the most important element.</p>
    </div >
  )
}

export default OurProduct;