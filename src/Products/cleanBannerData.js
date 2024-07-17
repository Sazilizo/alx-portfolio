//for the header banner, image array here..
export const cleanUpData = async (data)=>{
    console.log(data)
    const cleanData = await data.map((item)=>{
        const allFields = item.fields
        const {sys} = item
        const {id} = sys
        const bannerTitle = allFields.mainTitle
        const buttonText = allFields.buttonText
        const imagesArray = allFields.image.map(images=>{
            const {sys, fields} = images
            const {id} = sys
            const imageUrl = fields.file.url
        const cleanerImages = {id, imageUrl}
        return cleanerImages
        })
        const cleanBanner = {id, bannerTitle, buttonText, imagesArray}
        return cleanBanner
    })
    return cleanData
}