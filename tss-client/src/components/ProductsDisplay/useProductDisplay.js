import { useContext, useEffect, useState } from "react";
import { TSSContext } from "../../contexts/TSSContext";
import "./ProductsDisplay.css";

const productAdapter = require('../../adapters/product');

function useProductsDisplay() {
    const { selProductCategory } = useContext(TSSContext);
    const [products, setProducts] = useState(undefined);

    useEffect(() => {
        const getProducts = async () => {
            const catCode = selProductCategory.code
            const items = await productAdapter.getProducts(catCode);
            setProducts(items);
        }
        getProducts();
    }, [selProductCategory])



    return {
        products
    }
}

export default useProductsDisplay;
