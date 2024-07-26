import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { IoTrashBin } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";

import "../Styles/bigScreen.css"
import "../Styles/smallScreen.css"
export const CartItems = () => {
  const {products, cartItems,addToCart, removeFromCart,getCartTotal} = useContext(ShopContext);
  console.log(products)
  console.log(cartItems)

  return (
    <div className="cartItems">
        {products.map((item)=>{
            if(cartItems[item.id]>0){
                const price = item.isOnSale? item.price - (item.price * (item.sale / 100)):item.price
                return (
                    <div className="cartproduct-container" key={item.id}>
                        <div className="cart-product">
                            <img className="cart-image" src={item.image} alt=""></img>
                            <p>{item.name}</p>
                            <p>{price}</p>
                            <button className="quantity">{cartItems[item.id]}</button>
                            <p>{price * cartItems[item.id]}</p>
                            <a href="#" onClick={()=>addToCart(item.id)}><IoMdAdd /></a>
                            <a href="#" onClick={()=>removeFromCart(item.id)}><IoTrashBin /></a>

                        </div>
                    </div>
                )
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Total</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>R{getCartTotal()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Shipping fee: free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>R{getCartTotal()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
        </div>
    </div>
  )
}
