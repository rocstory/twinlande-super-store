const productCollection = require('./data/product.json');
const majorCategoryCollection = require('./data/majorCategory.json');

export const getProducts = (categoryCode) => {
    // check if category code is a major code
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



export const getMajorCategories = () => {
    return majorCategoryCollection;
}