import React, { useContext, useEffect, useState } from 'react'
import { Item } from './Item'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import { ProductDisplay } from './ProductDisplay';

export const Products = () => {
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = products.find((e)=> e.id == productId)
  console.log(products)
  return (
    <>
      <ProductDisplay product={product}/>
    </>
  )
}
