import React, { useState,useEffect } from 'react'

export const Hero = ({banners}) => {
    console.log(banners)
  return (
    <div>
        {banners&& [banners].map(({id,images,mainTitle,buttonText,smallText,sale})=>{
            return (
                <div className="hero-container" key={id}>
                    <div className="banner-text">
                        <h2>{mainTitle}</h2>
                        <h3>{smallText}</h3>
                        <div className="sale">
                            <button className="Sale-btn">{buttonText}</button>
                            <p>{sale}</p>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img
                            src={images[0]}
                            alt="image"
                        />
                    </div>
                </div>
            )
        })}
    </div>
  )
}
