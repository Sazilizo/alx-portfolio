import React, { useContext, useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../images/logo.png"
import "../Styles/bigScreen.css";
import { Link } from 'react-router-dom';
import { Men } from './Men';
import { SwipeALootLogo } from './SwipeALootLogo';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { ShopContext } from '../../context/ShopContext';



export const NavBar = () => {
    const [menu, setMenu] = useState("Shop")
    const {getTotalCartCount} = useContext(ShopContext)
    // const [closeMenu, setClose] = useState(true);
    // const [windowWidth, setWindoWidth] = useState(751);
    // 
    // const checkWindowWidth=()=>{
    //     const screenWidth = window.innerWidth;
    //     setWindoWidth(screenWidth)
    // }

    // useEffect(()=>{
    //     checkWindowWidth()
    // },[windowWidth])
    // {console.log(windowWidth)}
    // const changeMenuVisibility=(e)=>{
    //     const classes = document.getElementsByClassName("user-navigation")
    //     console.log(classes.classList)
    //     console.log("pressed")
    //     if(closeMenu == true){
    //         setClose(false)
    //         console.log(closeMenu)
    //     }
    //     else{
    //         setClose(true)
    //         console.log(closeMenu)
    //     }
    // }
    // <div className={`${windowWidth > 750? "user-container":""} ${closeMenu? "small-screen": ""}`}>
    // {closeMenu?<button className="menu-control-btn"><CiMenuFries backgroundcolor="black" color="white" fontSize="1.2rem"/></button>: <button><IoMdClose backgroundcolor="black" color="white" fontSize="16px"/></button>}
    return (
        <div className="navigation-bar">
            <div className="logo">
                <SwipeALootLogo/>
            </div>
            <div className="Menu-controls">
            </div>
            <div className="user-container">
                <div className="navigation">
                    <ul className="navigation-items">
                        <li onClick={()=>{setMenu("shop")}}><Link to="/">Shop</Link>{menu == "shop"? <hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("men")}}><Link to="/men">Men</Link>{menu == "men"? <hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("women")}}><Link to="/women">Women</Link>{menu == "women"? <hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("electronics")}}><Link to="/electronics">Electronics</Link>{menu == "electronics"? <hr/>:<></>}</li>
                    </ul>
                </div>
                <div className="nav-login-cart">
                    <Link to="/loginsignup"><button>Login</button></Link>
                    <div className="cart">
                        <Link to="/cart"><FaShoppingCart  color="coral" size="30px" cursor="pointer"/></Link>
                        <div className="cart-qnty">
                            {getTotalCartCount()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
