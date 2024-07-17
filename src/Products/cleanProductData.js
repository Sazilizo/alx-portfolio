
export const cleanProductData = (data) => {
    const cleanProductsData = data.map(item =>{
        const allFields = item.fields
        const {sys} = item
        const id = sys.id
        const category = allFields.category
        const descr = allFields.description
        const isOnSale = allFields.isOnSale
        const name = allFields.name
        const price = allFields.price
        const quantity = allFields.quantity
        const sale = allFields.sale
        const section = allFields.section
        const sizes = allFields.sizes
        const image = allFields.image.fields.file.url
        
        const Products = {id, category, descr,image, isOnSale, name,price,quantity,sale,section,sizes}
        return Products
    })
    return cleanProductsData
}
