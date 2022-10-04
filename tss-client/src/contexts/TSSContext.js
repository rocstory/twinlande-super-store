import React, { useState } from 'react';
import getConfig from '../helpers/getConfig';
const TSSContext = React.createContext();

const TSSContextProvider = ({ children }) => {
    const TSS_Pages = getConfig('TSS_Pages');
    const [itemsInCart, setItemsInCart] = useState([]);
    const [selProductCategory, setSelProductCategory] = useState(undefined)
    const [currentPage, setCurrentPage] = useState(TSS_Pages.Checkout);
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

