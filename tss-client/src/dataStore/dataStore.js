const productCollection = require('./data/product.json');
const majorCategoryCollection = require('./data/majorCategory.json');
const appConfig = require("../appConfig.json");

const isLocalEnv = (process.env.NODE_ENV === "development");
const readDataFromDB = isLocalEnv && appConfig.ReadDataFromDatabase;

export const getProducts = async (categoryCode) => {
    // check if category code is a major code
    let products = [];
    if (readDataFromDB) {
        try {
            products = await getProductsFromDatabase(categoryCode);
        }
        catch (error) {
            console.error(error);
        }
    }
    else {
        products = getProductsFromDataStore(categoryCode);
    }

    return products;
}

const getProductsFromDatabase = async (categoryCode) => {
    return [];
}

const getProductsFromDataStore = (categoryCode) => {
    const products = []
    const isMajorCode = majorCategoryCollection.find(category => category.code === categoryCode)

    if (isMajorCode) {
        const { subCategories } = isMajorCode
        subCategories.forEach(categoryCode => {
            let subProductCollection = productCollection.filter(product => product.category === categoryCode)

            products.push.apply(products, subProductCollection);
        })
    }
    else {
        const filteredProducts = (productCollection.filter(product => product.category = categoryCode));
        products.push.apply(filteredProducts);
    }

    return products;
}



export const getMajorCategories = async () => {

    if (readDataFromDB) {
        try {
            let majCats = await getMajCategoriesFromDatabase();
            return majCats;
        }
        catch (error) {
            console.error(error);
        }
    }
    else {
        let majCats = getMajCategoriesFromDataStore();
        return majCats;
    }
}

const getMajCategoriesFromDatabase = async () => {
    return [];
}

const getMajCategoriesFromDataStore = () => {
    return majorCategoryCollection
}