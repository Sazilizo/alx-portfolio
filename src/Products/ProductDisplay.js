import React, { useCallback, useContext } from 'react'
import "../components/Styles/bigScreen.css";
import "../components/Styles/smallScreen.css";
import { RelatedProducts } from './RelatedProducts';
import { ShopContext } from '../context/ShopContext';

export const ProductDisplay = ({product, count}) => {
  const {addToCart, removeFromCart} = useContext(ShopContext);
  console.log("at",count)
  return (
    <>
    <div className="Product-Display">
    <div className="Product-Display-left">
          <div className="Product-Display-img-list">
              <img src={product.image}></img>
              <img src={product.image}></img>
              <img src={product.image}></img>
          </div>
        </div>
      <div className="Product-Display-img">
        <img className="Product-Display-mainImage" src={product.image}></img>
        {product.isOnSale? <p>{product.sale+"%"}</p>:""}
      </div>
      <div className="Product-Display-right">
        <div className="Product-Display-Info">
          <h3>{product.title}</h3>
          <p>{product.descr}</p>
          <div className="Product-Display-Sizes">
            <h4>Sizes:</h4>
            {product.subCategory == "tops"?(
              <>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              </>
            ):product.size}
          </div>
          {product.isOnSale? <p>was: R {product.price}</p>: ""}
          <p>Now: R {product.isOnSale? product.price - (product.price * (product.sale / 100)):product.price}</p>
          <div className="CartBtn">
            <button onClick={()=>addToCart(product.id)}>Add to cart</button>
            {/* <button onClick={()=>removeFromCart(product.id)}>remove cart</button> */}
          </div>
        </div>
      </div>
    </div>
    <RelatedProducts/>
    </>
  )
}
