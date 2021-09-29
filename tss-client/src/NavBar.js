import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import SearchBar from "./SearchBar";
import Cart from "./CartTrigger";
import Profile from "./ProfileTrigger";


import "./NavBar.css"

function NavBar() {

    const categories = ['Video Games', 'Toys', 'Grocery',
        'Electronics', 'Health', 'Books',
        'Movies']
    return (
        <Navbar
            // bg="light"
            sticky="top"
            variant="light"
            className="nav-wrapper justify-content-center"
        >
            <Navbar.Brand
                className="twinlande-brand"
            >
                <span className="brand-icon">
                    <FontAwesomeIcon icon={['fas', 'store-alt']} />
                </span>
                <span className="brand-name" >Twinlande</span>
            </Navbar.Brand>

            <div className="nav-cntr">

                <div className="user-opt-cntr">
                    <div className="search-wrapper">
                        <SearchBar />
                    </div>

                    <Nav className="category-ctr justify-content-center container">
                        {
                            categories.map(category =>
                                <Nav.Item className="nav-category">
                                    {category}
                                </Nav.Item>)
                        }
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