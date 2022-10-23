import { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import HomePage from "../../pages/HomePage/HomePage";
import { TSSContext } from "../../contexts/TSSContext";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";

import "./App.css";
import Footer from "../Footer/Footer";

import getConfig from "../../helpers/getConfig"
import CheckoutPage from "../../pages/CheckoutPage/CheckoutPage";

function App() {
  const { currentPage, cartList } = useContext(TSSContext);
  const TSS_Pages = getConfig('TSS_Pages')

  console.log("Items in cart:", cartList)

  const isHomePageSelected = currentPage === TSS_Pages.Home
  const isProductsPageSelected = currentPage === TSS_Pages.Products
  const isCheckoutPageSelected = currentPage === TSS_Pages.Checkout
  return (
    <div className="App">
      <NavBar />
      {isHomePageSelected && <HomePage />}
      {isProductsPageSelected && <ProductsPage />}
      {isCheckoutPageSelected && <CheckoutPage />}

      <Footer />

    </div>
  );
}

export default App;
