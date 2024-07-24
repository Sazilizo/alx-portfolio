import React from 'react'
import { Item } from './Item'

export const Products = ({products}) => {
    // console.log(products)
  return (
    <div>
        <p>Hello</p>
        {products && products.map(product=>{
            return <Item products={product} key={product.id}/>
        })}
    </div>
  )
}
