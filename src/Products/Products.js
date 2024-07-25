import React, { useContext } from 'react'
import { Item } from './Item'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';
import { ProductDisplay } from './ProductDisplay';

export const Products = () => {
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  console.log(productId)
  const product = products.find((e)=> e.id == productId)
  console.log(product)
  return (
    <>
      <ProductDisplay product={product}/>
    </>
  )
}
