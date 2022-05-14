import { useContext, useEffect, useState } from "react";
import { TSSContext } from "../../contexts/TSSContext";
import appConfig from "../../appConfig.json"


const productAdapter = require('../../adapters/product');

function useNavBar() {
    const { setSelProductCategory, setCurrentPage } = useContext(TSSContext);
    const { TSS_Pages } = appConfig
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            const categoriesData = await productAdapter.getMajorCategories();
            setCategories(categoriesData);
        }
        getCategories();
    }, [])

    const handleSelCategory = (categoryName) => {
        setSelProductCategory(categoryName)
        setCurrentPage(TSS_Pages.Products)
    };

    const handleBrandSelection = () => {
        setSelProductCategory(undefined)
        setCurrentPage(TSS_Pages.Home)
    }

    return {
        handleSelCategory,
        handleBrandSelection,
        categories
    }
}


export default useNavBar;
