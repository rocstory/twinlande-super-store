import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./NavBar.css"

function NavBar() {
    return (
        <Navbar
            // bg="light"
            sticky="top"
            variant="light"
            className="nav-wrapper"
        >
            <Navbar.Brand
                className="twinlande-brand"
            >
                <span>
                    [icon]
                </span>
                Twinlande
            </Navbar.Brand>

            <div className="container">
                <Nav className="category-ctr justify-content-center container">
                    <Nav.Item className="nav-category">Video Games</Nav.Item>
                    <Nav.Item className="nav-category">Toys</Nav.Item>
                    <Nav.Item className="nav-category">Grocery</Nav.Item>
                    <Nav.Item className="nav-category">Electronics</Nav.Item>
                    <Nav.Item className="nav-category">Health</Nav.Item>
                    <Nav.Item className="nav-category">Books</Nav.Item>
                    <Nav.Item className="nav-category">Movies</Nav.Item>
                </Nav>

                <Nav className="user-options justify-content-end">
                    <Nav.Item className="nav-category">
                        <span>
                            [icon]
                        </span>
                        Cart
                    </Nav.Item>
                    <Nav.Item className="nav-category">
                        <span>
                            [icon]
                        </span>
                        Profile
                    </Nav.Item>
                </Nav>
            </div>
        </Navbar>
    );
}

export default NavBar;
