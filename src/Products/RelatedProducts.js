import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import "../components/Styles/bigScreen.css";
import { Item } from './Item';
export const RelatedProducts = () => {
    const {products} = useContext(ShopContext);
      
  return (
    <div className="Related-Products">
        <h1>Related Products</h1>
        <hr/>
        <div className="Related-Products-items">
            {products && products.map((item,i)=>{
                while(i < 5){
                    i++;
                    return(
                        <Item  products={item} key={item.id}/>
                    )
                }
            })}
        </div>
    </div>
  )
}
