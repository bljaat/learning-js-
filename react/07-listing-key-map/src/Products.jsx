import React from 'react'

function Products({product}) {
    return (
        <div style={{position: "relative", border: "1px solid #000", borderRadius: " 0.7rem", padding: "1rem" }}>
            <p style={{position: "absolute", bottom: "-40px", left: "3px"}}>{product.id}</p>
            <h3>{product.name}</h3>
            <p>Price {product.price}</p>
            <p>Quantity {product.quantity}</p>
        </div>
    )
}

export default Products
