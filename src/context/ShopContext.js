import React, {createContext,useState,useEffect, useCallback} from "react";
import { fetchData } from "../Data/fetchData";
import { cleanProducts } from "../Data/cleanProducts";
import { getByTestId } from "@testing-library/react";

export const ShopContext = createContext(null);
const getDefaultCart = (products)=>{
    let cart = {};
    for (let index = 0; index < products.length; index++) {
        cart[products[index].id] = 0
    }
    console.log(cart)
    return cart
}

const ShopContextProvider=(props) =>{
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : {};
    });

    const getProducts = async()=>{
        const data = fetchData("product",cleanProducts)
        .then(data=> setProducts(data))
        return data
    }
    useEffect(()=>{
        setCartItems(getDefaultCart(products));
        getProducts()
    },[]);
    const addToCart = (itemId) => {
        setCartItems((prevCartItems) => {
            const newCount = prevCartItems[itemId] ? prevCartItems[itemId] + 1 : 1;
            return { ...prevCartItems, [itemId]: newCount };
        });

        setCount((prevCount) => prevCount + 1);
    };
    const removeFromCart=(itemId)=>{
        setCartItems((prevCartItems) => {
            const newCount = prevCartItems[itemId] ? prevCartItems[itemId] - 1 : 0;
            return { ...prevCartItems, [itemId]: newCount };
        });

        setCount((prevCount) => prevCount - 1);
    }
    const getCartTotal=()=>{
        let total= 0
        for(const item in cartItems){
            console.log(cartItems[item])
            if(cartItems[item]> 0){
                console.log(cartItems[item])
                let itemInfo = products.find((product)=> product.id ==item)
                total += itemInfo.price * cartItems[item]
            }
        }
        return total
    }

    const getTotalCartCount=()=>{
        let total = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                total += cartItems[item]
            }
        }
        return total
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const register = (username, password) => {
        const newUser = { username, password };
        setUser(newUser);
    };

    const login = (username, password) => {
        const savedUser = JSON.parse(localStorage.getItem('user'));
        if (savedUser && savedUser.username === username && savedUser.password === password) {
            setUser(savedUser);
        } else {
            alert('Invalid credentials');
        }
    };

    const logout = () => {
        setUser(null);
        setCartItems({});
        localStorage.removeItem('cartItems');
    };

    const contextValue={products,cartItems,addToCart,removeFromCart,getCartTotal, getTotalCartCount,logout,login,user, register }
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider