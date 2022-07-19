import { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import HomePage from "../../pages/HomePage/HomePage";
import { TSSContext } from "../../contexts/TSSContext";
// import { TSS_Pages } from "../../appConfig.json"
import ProductsPage from "../../pages/ProductsPage/ProductsPage";

import "./App.css";
import Footer from "../Footer/Footer";

const { TSS_Pages } = require('../../appConfig.json')


function App() {
  const { currentPage } = useContext(TSSContext)

  const isHomePageSelected = currentPage === TSS_Pages.Home
  const isProductsPageSelected = currentPage === TSS_Pages.Products
  return (
    <div className="App">
      <NavBar />
      {isHomePageSelected && <HomePage />}
      {isProductsPageSelected && <ProductsPage />}

      <Footer />

    </div>
  );
}

export default App;
