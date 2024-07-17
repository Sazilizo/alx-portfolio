import React, {useState, useEffect} from "react";
import {fetchBanners} from "../../Products/fetchBanner"
import "./Banner.css"

export const LatestBanner = ()=>{
    const [banner, setBanner] = useState([])

    async function setData(){
        const data = await fetchBanners("latest")
        setBanner(data)   
    }

    useEffect(()=>{
        setData()
    },[])
    return (
        <>
            <div>Newest Arrivals</div>
            <div className="Latest-Arrivals">
                {
                    banner && banner.map((item)=>{
                        const images = item.imagesArray
                        return(
                            <div key={item.id}>
                                <div className="container">
                                    <h3>{item.bannerTitle}</h3>
                                    <div className="BannerSlideContainer">
                                        {images&&images.map(image=>{
                                            return(
                                                <div key = {image.id}className="HeaderBannerSlider">
                                                    <img
                                                    src={image.imageUrl}
                                                    />
                                                </div>
                                            )
                                        })
                                        }
                                        <button>{item.buttonText}</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
