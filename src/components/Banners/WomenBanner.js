import React from 'react'

export const WomenBanner = ({women}) => {
  return (
    <>
    <h2 data-content="Women" className="banner-heading">Women</h2>
        <div className="banner-image">
            <img src={women && women.image} />
        </div>
    </>
  )
}
