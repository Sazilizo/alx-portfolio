import React, {useState, useEffect, useCallback} from "react";
import { client } from "../../client";
import "./Banner.css"

export const Banner = () => {
    const [bannerSlide, setBannerSlide] = useState([]);
    const [isBannerLoading, setIsBannerSliding] = useState(false)

    const cleanUpData= useCallback((data) =>{
        const cleanData = data.map(items =>{
            const {sys} = items
            const allFields = items.fields
            const {id} = sys
            const bannerTitle= allFields.mainTitle
            const buttonText = allFields.buttonText
            const smallText = allFields.smallText
            const imagesArray = allFields.image.map(images=>{
                const {sys, fields} = images
                const {id} = sys
                const imageUrl = fields.file.url

                console.log(id, imageUrl)
                const cleanerImages = {id, imageUrl}
                return cleanerImages
            })
            
            const CleanBanner = {id, bannerTitle, buttonText,smallText, imagesArray}
            return CleanBanner
        })
        setBannerSlide(cleanData)
    }, [])
    const getBannerSlide = useCallback(async ()=>{
        try{
            const response = await  client.getEntries({content_type:"storeBanner"})
            let data = response.items
            console.log(data)
            cleanUpData(data)
            // setBannerSlide(data)
        }
        catch(error){
            console.log(error)
        }
    },[])
    useEffect(()=>{
        getBannerSlide()
    },[])

  return (
    <>
        <div className="Banner">
            {bannerSlide && bannerSlide.map((product)=>{
                const images = product.imagesArray
                console.log(product)
                console.log(images)

                return (
                    <div key={product.id}>
                        <h3>{product.bannerTitle}</h3>
                        <div className="BannerSlideContainer">
                            {images&&images.map(image=>{
                                return(
                                    <div className="HeaderBannerLider">
                                        <img
                                        src={image.imageUrl}
                                        />
                                    </div>
                                )
                            })
                            }
                        </div>
                        <button className="bannerbtn">{product.buttonText}</button>
                        <h6>{product.smallText}</h6>

                    </div>
                )
            })}
        </div>
    </>
  )
}
