import React from 'react'
import "../components/Styles/Products.css"

export const Item = ({products}) => {
  console.log(products)
  console.log("item")
  return (
    <div className='Product'>
        <div className="image-container">
          <img src={products.image} alt={products.title}/>
          {products.isOnSale? <p>{products.sale+"%"}</p>:""}
        </div>
        <div className="Product-info">
          <div className="">
            <p>{products.title}</p>
            {products.isOnSale? <p>was: R{products.price}</p>: ""}
            <p>R{products.isOnSale? products.price - (products.price * (products.sale / 100)):products.price}</p>
          </div>
        </div>
    </div>
  )
}
