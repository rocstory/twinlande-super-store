
const dataStore = require('../dataStore/dataStore');

export const getProducts = async (categoryCode: string): Promise<any> => {
    return dataStore.getProducts(categoryCode);
}

export const getMajorCategories = async (): Promise<any> => {
    return dataStore.getMajorCategories();
}