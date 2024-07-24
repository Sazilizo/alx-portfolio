import React from 'react'

export const Products = ({products}) => {
  console.log(products)
  return (
    <div>
        {
          products&&products.map((product)=>{
            return(
              <div className="Products" key={product.id}>
                <div className="image-container">
                  <img
                  src={product.image}
                  />
                </div>
              </div>
            )
          })
        }
    </div>
  )
}
