import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../images/logo.png"
import "../Styles/bigScreen.css";
import { Link } from 'react-router-dom';


export const NavBar = () => {
    const [menu, setMenu] = useState("Shop")

    return (
        <div className="navigation-bar">
            <div className="logo">
                <img src={logo} alt="logo image"></img>
            </div>
            <div className="navigation">
                <ul className="navigation-items">
                    <li onClick={()=>{setMenu("shop")}}><Link to="/">Shop</Link>{menu == "shop"? <hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("men")}}><Link to="/men">Men</Link>{menu == "men"? <hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("women")}}><Link to="/women">Women</Link>{menu == "women"? <hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("electronics")}}><Link to="/electronics">Electronics</Link>{menu == "electronics"? <hr/>:<></>}</li>
                </ul>
            </div>
            <div className="nav-login-cart">
                <button>Login</button>
                <div className="cart">
                    <FaShoppingCart color="coral" size="30px" cursor="pointer"/>
                    <div className="cart-qnty">
                        2
                    </div>
                </div>
            </div>
        </div>
    )
}
