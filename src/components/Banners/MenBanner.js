import React from 'react'

export const MenBanner = ({men}) => {
  return (
    <>
        <h2 className="banner-heading" data-content="Men">Men</h2>
        <div className="banner-image">
            <img src={men && men.image} />
        </div>
    </>
  )
}
