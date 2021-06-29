import React from 'react'

export default function Product(props) {
    const {product} = props;
    return (
        <div key={product._id} className="card">
                    <a className="medium" href={`/product/${product._id}`}><img src={product.image} alt={product.name} width="300" height="450"/>
                    </a>
                    <div className="card-body">
                      <a className="medium" href={`/product/${product._id}`}>
                        <h2>{product.name}</h2>
                      </a>

                        <div className="price">
                            Rs{product.price}
                        </div>
                    </div>
                </div>
    )
}
