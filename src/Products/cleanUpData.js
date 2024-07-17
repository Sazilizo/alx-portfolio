
//for latest because of the "images" instead of message
export const cleanUpData = async (data)=>{
    const cleanData = await data.map(items =>{
            const {sys} = items
            const allFields = items.fields
            const {id} = sys
            const bannerTitle= allFields.mainTitle
            const buttonText = allFields.buttonText
            const smallText = allFields.smallText
            const sale = allFields.sale
            const imagesArray = allFields.images.map(image=>{
                const {sys, fields} = image
                const {id} = sys
                const imageUrl = fields.file.url
            const cleanerImages = {id, imageUrl}
            return cleanerImages
        })
            const CleanBanner = {id, bannerTitle, buttonText,sale,smallText,imagesArray}
            return CleanBanner
        })
    return cleanData
}