
const dataStore = require('../dataStore/dataStore');

export const getProducts = async (categoryCode) => {
    return dataStore.getProducts(categoryCode);
}

export const getMajorCategories = async () => {
    return dataStore.getMajorCategories();
}