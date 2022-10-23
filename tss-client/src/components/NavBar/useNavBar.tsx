import { useContext, useEffect, useState } from "react";
import { TSSContext } from "../../contexts/TSSContext";
import appConfig from "../../appConfig.json"
import { getMajorCategories } from "../../adapters/product"

export interface ICategory {
    name: string,
    code: string,
    subCategories: string[]
}

function useNavBar() {
    const { setSelProductCategory, setCurrentPage } = useContext(TSSContext);
    const { TSS_Pages } = appConfig
    const [categories, setCategories] = useState<ICategory[]>([])

    useEffect(() => {
        const getCategories = async () => {
            const categoriesData = await getMajorCategories();

            const categoriesArr = categoriesData.map((category: any) => {
                
                return {
                    name: category.name,
                    code: category.code,
                    subCategories: category.subCategories
                } as ICategory
            })

            setCategories(categoriesArr);
        }
        getCategories();
    }, [])

    const handleSelCategory = (categoryObj: ICategory) => {
        setSelProductCategory(categoryObj)
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
