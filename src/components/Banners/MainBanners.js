import React from 'react'
import { MenBanner } from './MenBanner'
import { WomenBanner } from './WomenBanner'
import {SneakersBanner} from "./SneakersBanner" 
import { SaleBanner } from './SaleBanner'
import { ElectronicsBanner } from './ElectronicsBanner'
import { Link } from 'react-router-dom'

export const MainBanners = ({products}) => {
  const men = products.find((product)=> product.section == "men")
  const women = products.find((product)=> product.section == "women")
  const sale = products.find((product)=> product.isOnSale == true)
  const electronics = products.find((product)=> product.category == "electronics")
  const sneakers = products.find((product)=> product.category == "sneakers")
  return (
    <div className="Grid-Banners">
        
        <div className="Banner grid-row-span-2">
            <Link to="/men">
                <MenBanner men={men}/>
            </Link>
        </div>
        <div className="Banner">
            <Link to="/men">
                <SaleBanner sale={sale}/>
            </Link>
        </div>
        <div className="Banner">
            <Link to="/electronics">
                <ElectronicsBanner electronics={electronics}/>
            </Link>
        </div>
        <div className="Banner grid-row-span-2">
            <Link to="/women">
                <WomenBanner women={women} />
            </Link>
        </div>
        <div className="Banner grid-col-span-2">
            <Link to="/women">
                <SneakersBanner  sneakers={sneakers}/>
            </Link>
        </div>
    </div>
  )
}
