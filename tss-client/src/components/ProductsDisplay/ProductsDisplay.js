import React, { useContext } from "react";
import { TSSContext } from "../../contexts/TSSContext";
import "./ProductsDisplay.css";
import Product from "./Product/Product";

function ProductsDisplay() {
    // const { selProductCategory } = useContext(TSSContext);

    return (
        <div
            className="products-display"
        >
            <Product />
            <Product />
            <Product />
            <Product />

        </div>
    );
}

export default ProductsDisplay;
