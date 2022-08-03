
import { useContext } from "react";

import { TSSContext } from '../../../contexts/TSSContext';

const productService = require('../../../services/product');

function useProduct(product) {
    const { setCartList } = useContext(TSSContext)
    // const [prodImage, setProdImage] = useState(undefined);
    const prodImage = productService.getProductImage(product.category)

    const handleAddToCart = (selProduct) => {
        console.log("Adding selProduct to cart:", selProduct)
        setCartList(prevCartList => [...prevCartList, selProduct])
    }

    return {
        prodImage,
        handleAddToCart
    };
}

export default useProduct;
