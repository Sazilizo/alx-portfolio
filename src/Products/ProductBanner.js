import React, { useContext } from 'react'
import "../components/Styles/bigScreen.css"
import "../components/Styles/smallScreen.css"

export const ProductBanner = ({products}) => {
    const men = products.find((product)=> product.section == "men")
    const women = products.find((product)=> product.section == "women")
  return (
    <div className="products-banner">
        <div className="men-banner product-banner-container">
            <div className="product-banner-text">
                <h2>Get the best content in men</h2>
                <p>Become a member and dont miss out</p>
            </div>
            <div className="banner-image">
                <img src={men && men.image} />
            </div>
        </div>
        <div className="women-banner product-banner-container">
            <div className="product-banner-text">
            <h2>Get the best content in women</h2>
            <p>Become a member and dont miss out</p>
            </div>
            <div className="banner-image">
                <img src={women && women.image} />
            </div>
        </div>
    </div>
  )
}
