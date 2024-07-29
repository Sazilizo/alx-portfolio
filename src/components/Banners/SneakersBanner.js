import React from 'react'

export const SneakersBanner = ({sneakers}) => {
  return (
    <>
        <h2 data-content="Sneakers" className="banner-heading">Sneakers</h2>
        <div className="banner-image span-2">
            <img src={sneakers && sneakers.image} />
        </div>
    </>
  )
}
