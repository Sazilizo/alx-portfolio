import React from 'react';
import { Link } from 'react-router-dom';
import "../components/Styles/Products.css"

export const Item = ({products}) => {

  return (
      <div className="Product-card">
        <div className="Product-image">
          <Link to={`/product/${products.id}`}>
            <img onClick={window.scrollTo(150,150)} src={products.image} alt={products.title}/>
          </Link>
        </div>
        <div className="Product-details">
            <p>{products.title}</p>
            {products.isOnSale? <p>was: R{products.price}</p>: ""}
            <p>Now R{products.isOnSale? products.price - (products.price * (products.sale / 100)):products.price}</p>
        </div>
      </div>
  )
}
