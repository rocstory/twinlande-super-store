import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import SearchBar from "./SearchBar";
import Badge from "react-bootstrap/Badge";


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
                        <Nav.Item className="user-option">
                            <div className="cart-icon-container">
                                <span className="uo-icon">
                                    <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
                                </span>
                                <Badge className="items-in-cart">0</Badge>
                            </div>
                            <span className="uo-label">
                                Cart
                            </span>
                        </Nav.Item>
                        <Nav.Item className="user-option">
                            <span className="uo-icon">
                                <FontAwesomeIcon icon={['fas', 'user-alt']} />
                            </span>
                            <span className="uo-label">
                                Profile
                            </span>
                        </Nav.Item>
                    </Nav>
                </div>
        </Navbar>
    );
}

export default NavBar;
