export const cleanBanners = async (data) => {
    const cleanData = data.map((item)=>{
        const allFields = item.fields
        const {sys} = item
        const id= sys.id
        const name = allFields.name
        const buttonText = allFields.buttonText
        const sale = allFields.sale
        const smallText = allFields.smallText
        const mainTitle = allFields.mainTitle
        const images = allFields.image.map((img)=>{
            const image = img.fields.file.url
            return image
        })
        const data = {id, buttonText,images,mainTitle,name,sale,smallText}
        return data
    })
    return cleanData
}
