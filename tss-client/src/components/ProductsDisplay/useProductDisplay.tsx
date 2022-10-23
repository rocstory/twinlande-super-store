import { useContext, useEffect, useState } from "react";
import { TSSContext } from "../../contexts/TSSContext";
import "./ProductsDisplay.css";
import { getProducts } from "../../adapters/product";

export interface IProduct {
    pid: number,
    name: string,
    price: number,
    rating: number,
    category: string

}

function useProductsDisplay() {
    const { selProductCategory } = useContext(TSSContext);
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const hookFunc = async () => {
            const catCode = selProductCategory.code
            const items = await getProducts(catCode);
            
            const productArr = items.map((item: any) => {
                return {
                    pid: item.pid,
                    name: item.name,
                    price: item.price,
                    rating: item.rating,
                    category: item.category
                } as IProduct
            })
            setProducts(productArr);
        }
        hookFunc();
    }, [selProductCategory])



    return {
        products
    }
}

export default useProductsDisplay;
