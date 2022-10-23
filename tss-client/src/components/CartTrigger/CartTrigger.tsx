import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import { TSSContext } from "../../contexts/TSSContext";
import getConfig from "../../helpers/getConfig";
import "./CartTrigger.css";

function Cart() {
  const TSS_Pages = getConfig('TSS_Pages');
  const {
    cartList,
    setCurrentPage
  } = useContext(TSSContext)

  const handleCartTriggerClick = () => {
    setCurrentPage(TSS_Pages.Checkout)
  }

  const totalItemsInCart = (cartList.length <= 9) ? cartList.length : '9+';


  return (
    <Nav.Item
      className="user-option cart clickable"
      onClick={handleCartTriggerClick}
    >

      <div className="uo-icon-wrapper cart-wrapper">
        <span className="uo-icon">
          <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
        </span>
      </div>

      <div className="uo-label-wrapper">
        <span className="uo-label cart-label">Cart
          <Badge className="cart-amount">{totalItemsInCart}</Badge>
        </span>
      </div>
    </Nav.Item>
  );
}

export default Cart;
