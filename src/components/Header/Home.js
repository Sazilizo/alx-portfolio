import React from 'react'
import { ProductBanner } from '../../Products/ProductBanner'
export const Home = ({products}) => {
  return (
    <div>
        <ProductBanner products={products}/>
    </div>
  )
}
