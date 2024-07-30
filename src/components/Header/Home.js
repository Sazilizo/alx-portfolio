import React from 'react'
import { ProductBanner } from '../../Products/ProductBanner'
import { MainBanners } from '../Banners/MainBanners'
export const Home = ({products}) => {
  return (
    <>
        <MainBanners products={products}/>
    </>
  )
}
