
export const cleanProducts = async (data)=>{
    // console.log(data)
    const cleanData = data.map(item=>{
        const allFields = item.fields
        const id = item.sys.id
        const title = allFields.name
        const descr= allFields.description
        const isOnSale = allFields.isOnSale
        const price = allFields.price
        const size = allFields.sizes
        const section = allFields.section
        const quantity = allFields.quantity
        const subCategory = allFields.subCategory
        const slug = allFields.slug
        const sale = allFields.sale
        const category = allFields.category
        const image = allFields.image.fields.file.url
        
        const newData = {id,title,descr,isOnSale,price,size,section,quantity,slug,subCategory,sale,category,image}
        return newData
    })
    return cleanData
}