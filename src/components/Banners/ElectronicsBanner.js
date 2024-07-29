import React from 'react'

export const ElectronicsBanner = ({electronics}) => {
  return (
    <>
        <h2 className="banner-heading" data-content="Electronics">Electronics</h2>
        <div className="banner-image">
            <img src={electronics && electronics.image} />
        </div>
    </>
  )
}
