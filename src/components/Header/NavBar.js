import React, { useContext, useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import "../Styles/bigScreen.css";
import { Link } from 'react-router-dom';
import { SwipeALootLogo } from './SwipeALootLogo';
import { IoMdClose } from "react-icons/io";
import { ShopContext } from '../../context/ShopContext';
import { IoIosMenu } from "react-icons/io";


export const NavBar = () => {
    const [menu, setMenu] = useState("Shop")
    const {getTotalCartCount} = useContext(ShopContext);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 600);
    };

    useEffect(() => {
        handleResize(); 
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="navigation-bar">
            <div className="logo">
                <SwipeALootLogo/>
            </div>
            {isSmallScreen && (
                <div className="Menu-controls">
                    {isMenuOpen ? (
                        <IoMdClose onClick={() => setIsMenuOpen(false)} />
                    ) : (
                        <IoIosMenu onClick={() => setIsMenuOpen(true)} />
                    )}
                </div>
            )}
            <div className={isSmallScreen ? (isMenuOpen?'small-screen': "Display-None") : 'user-container'}>
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
