import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import SearchBar from "../SearchBar/SearchBar";
import Cart from "../CartTrigger/CartTrigger";
import Profile from "../ProfileTrigger/ProfileTrigger";
import { TSSContext } from "../../contexts/TSSContext";
import useNavBar from "./useNavBar";
import appConfig from "../../appConfig.json"

import "./NavBar.css";

function NavBar() {
  const {
    categories,
    handleSelCategory,
    handleBrandSelection
  } = useNavBar();



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
                key={category.code}
                className="nav-category"
                onClick={() => {
                  handleSelCategory(category);
                }}
              >
                {category.name.toLowerCase()}
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
