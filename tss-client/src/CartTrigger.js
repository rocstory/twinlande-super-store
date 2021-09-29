import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import "./CartTrigger.css";


function Cart() {

    return (

        <Nav.Item className="user-option cart">
            <div className="uo-icon-wrapper cart-wrapper">
                <span className="uo-icon">
                    <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
                </span>
            </div>

            <div className="uo-label-wrapper">
                <span className="uo-label cart-label">Cart</span>
                <Badge className="cart-amount">nah</Badge>
            </div>
        </Nav.Item>
    );
}

export default Cart;
