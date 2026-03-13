import React from 'react'
import "./Product.css"

const Product = ({pro}) => {
  return (
    <div className='product'>
      {pro.map((product) => (
        <div key={product.id} className='product-item'>
          <img src={product.imageUrl} alt={product.name} />
          <div className='inner'>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h6>${product.price.toFixed(2)}</h6>
            <button>{product.button}</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product
