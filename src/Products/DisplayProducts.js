import React from 'react'
import "../components/Body/Body.css"

export const DisplayProducts = ({products}) => {
  return (
    <div className="Products">
        {products && products.map(({id, name,image,price})=>{
                return(
                    <div className="Product-card" key={id}>
                        <div className="Product-image">
                            <img
                                src={image}
                                alt={name}
                            />
                            <div className="Cart-btn">
                                <button id="toCart">To Cart</button>
                            </div>
                            <div className="Product-price">
                                <p>R{price}</p>
                            </div>
                        </div>
                        <div className="Product-description">
                            <p>{name}</p>
                            <span></span>
                        </div>
                    </div>
                )
        })}
    </div>
  )
}
