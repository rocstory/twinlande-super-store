import React from "react";
import useProductsDisplay from "./useProductDisplay";
import "./ProductsDisplay.css";
import Product from "./Product/Product";

function ProductsDisplay() {
    const {
        products
    } = useProductsDisplay();

    return products ? (
        <div
            className="products-display"
        >
            {
                products.map((product, index) =>
                    <Product
                        key={index}
                        product={product}
                    />
                )
            }
        </div>
    )
        :
        (<div>Loading...</div>);
}

export default ProductsDisplay;
