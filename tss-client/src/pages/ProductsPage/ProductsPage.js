import React, { useContext } from "react";
import ProductsDisplay from "../../components/ProductsDisplay/ProductsDisplay";
import { TSSContext } from "../../contexts/TSSContext";
import "./ProductsPage.css";

function ProductsPage() {
    const { selProductCategory } = useContext(TSSContext);

    return (
        <div
            className="products-page"
        >
            <ProductsDisplay />

        </div>
    );
}

export default ProductsPage;
