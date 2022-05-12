import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import SearchBar from "../SearchBar/SearchBar";
import Cart from "../CartTrigger/CartTrigger";
import Profile from "../ProfileTrigger/ProfileTrigger";
import { TSSContext } from "../../contexts/TSSContext";
import appConfig from "../../appConfig.json"

import "./NavBar.css";

function NavBar() {
  const { setSelProductCategory, setCurrentPage } = useContext(TSSContext);
  const { TSS_Pages } = appConfig
  const categories = [
    "Video Games",
    "Toys",
    "Grocery",
    "Electronics",
    "Health",
    "Books",
    "Movies",
  ];

  const handleSelCategory = (categoryName) => {
    setSelProductCategory(categoryName)
    setCurrentPage(TSS_Pages.Products)
  };

  const handleBrandSelection = () => {
    setSelProductCategory(undefined)
    setCurrentPage(TSS_Pages.Home)
  }

  return (
    <Navbar
      sticky="top"
      variant="light"
      className="nav-wrapper justify-content-center"
    >
      <Navbar.Brand
        className="twinlande-brand"
        onClick={handleBrandSelection}
      >
        <span className="brand-icon">
          <FontAwesomeIcon icon={["fas", "store-alt"]} />
        </span>
        <span className="brand-name">Twinlande</span>
      </Navbar.Brand>

      <div className="nav-cntr">
        <div className="user-opt-cntr">
          <div className="search-wrapper">
            <SearchBar />
          </div>

          <Nav className="category-ctr justify-content-center container">
            {categories.map((category) => (
              <Nav.Item
                key={category}
                className="nav-category"
                onClick={() => {
                  handleSelCategory(category);
                }}
              >
                {category}
              </Nav.Item>
            ))}
          </Nav>
        </div>
        <Nav className="user-options justify-content-end">
          <Cart />
          <Profile />
        </Nav>
      </div>
    </Navbar>
  );
}

export default NavBar;
