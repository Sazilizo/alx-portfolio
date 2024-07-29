import React from 'react'

export const SaleBanner = ({sale}) => {
  return (
    <>
        <h2  data-content="Sale" className="banner-heading">Sale</h2>
        <div className="banner-image">
            <img src={sale && sale.image} />
        </div>
    </>
  )
}
