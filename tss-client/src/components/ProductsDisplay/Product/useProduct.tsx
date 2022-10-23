
import { useContext } from "react";
import { TSSContext } from '../../../contexts/TSSContext';
import { getProductImage } from "../../../services/product";
import { IProduct } from "../useProductDisplay";


function useProduct(product: IProduct) {
    const { setCartList } = useContext(TSSContext)
    // const [prodImage, setProdImage] = useState(undefined);
    const prodImage = getProductImage(product.category)

    const handleAddToCart = (selProduct: IProduct) => {
        console.log("Adding selProduct to cart:", selProduct)
        setCartList((prevCartList: any) => [...prevCartList, selProduct])
    }

    return {
        prodImage,
        handleAddToCart
    };
}

export default useProduct;
