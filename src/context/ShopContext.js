import React, {createContext,useState,useEffect} from "react";
import { fetchData } from "../Data/fetchData";
import { cleanProducts } from "../Data/cleanProducts";

export const ShopContext = createContext(null);

const ShopContextProvider=(props) =>{
    const [products, setProducts] = useState([]);

    const getProducts = async()=>{
        const data = fetchData("product",cleanProducts)
        .then(data=> setProducts(data))
        return data
    }
    
    useEffect(()=>{
        getProducts()
    },[]);
    const contextValue={products}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider