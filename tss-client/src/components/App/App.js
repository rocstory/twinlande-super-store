import { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import HomePage from "../../pages/HomePage/HomePage";
import { TSSContext } from "../../contexts/TSSContext";
import { TSS_Pages } from "../../appConfig.json"
import ProductsPage from "../../pages/ProductsPage/ProductsPage";

import "./App.css";


function App() {
  const { currentPage } = useContext(TSSContext)

  const isHomePageSelected = currentPage === TSS_Pages.Home
  const isProductsPageSelected = currentPage === TSS_Pages.Products
  return (
    <div className="App">
      <NavBar />
      <div >
        {process.env.NODE_ENV}
      </div>
      {isHomePageSelected && <HomePage />}
      {isProductsPageSelected && <ProductsPage />}
    </div>
  );
}

export default App;
