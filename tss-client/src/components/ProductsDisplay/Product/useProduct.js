
const productService = require('../../../services/product');

function useProduct(product) {
    // const [prodImage, setProdImage] = useState(undefined);
    const prodImage = productService.getProductImage(product.category)

    return {
        prodImage
    };
}

export default useProduct;
