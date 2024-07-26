import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { Item } from '../../Products/Item'
import "../Styles/Products.css"
import "../Styles/smallScreen.css"

export const ShopCategory = (props) => {
  const {products} = useContext(ShopContext)
  return (
    <div className="Shop-Category">
      <div className="Shop-Category-indexSort">
        <p>
          <span>showing 1-12</span> out of {products.length}
        </p>
        <div className="shop-Category-Sort">
            <label htmlFor="cars">sort by:</label>

            <select name="sortby" id="sortby">
              <option value="price">price</option>
              <option value="size">size</option>
              <option value="color">color</option>
              <option value="brand">brand</option>
            </select>
        </div>
      </div>
      <div className="Products-Container">
        <div className="Filters">Coming Soon</div>
        <div className="Products">
          {products.map((item)=>{
            if(props.section == item.section){
              return <Item  products={item} key={item.id}/> 
            }
          })}
        </div>
      </div>
    </div>
  )
}
