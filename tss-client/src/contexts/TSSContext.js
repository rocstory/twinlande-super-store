import React, { useState } from 'react';
// import { TSS_Pages } from '../appConfig.json'
const appConfig = require('../appConfig.json')

const TSSContext = React.createContext();

const TSSContextProvider = ({ children }) => {
    const { TSS_Pages } = appConfig;
    const [itemsInCart, setItemsInCart] = useState([]);
    const [selProductCategory, setSelProductCategory] = useState(undefined)
    const [currentPage, setCurrentPage] = useState(TSS_Pages.Home);
    const [cartList, setCartList] = useState([]);

    return (
        <TSSContext.Provider value={{
            itemsInCart, setItemsInCart,
            selProductCategory, setSelProductCategory,
            currentPage, setCurrentPage,
            cartList, setCartList
        }} >
            {children}
        </TSSContext.Provider>
    )
}

export { TSSContext, TSSContextProvider }

