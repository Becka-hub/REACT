import React from 'react'
import "./Products.css";
function Products({productItems,handleAddProduct}) {
    return (
        <div>
            <div className="products">
                {productItems.map((productItem) => (
                    <div className="product-card">
                        <div>
                            <img className="product-image" src={productItem.image} alt={productItem.image} />
                        </div>
                        <div>
                            <h3 className="produit-name">
                                {productItem.name}
                            </h3>
                        </div>
                        <div className="product-price">
                             ${productItem.price}
                        </div>
                        <div>
                            <button className="product-add-button" onClick={()=> handleAddProduct(productItem)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Products;