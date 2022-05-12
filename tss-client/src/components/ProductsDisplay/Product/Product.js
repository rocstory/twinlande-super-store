import React, { useContext } from "react";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import { TSSContext } from "../../../contexts/TSSContext";
import "./Product.css";

import DefaultImage from "../../../assets/images/products/video-game-icon.png"

function Product() {

    return (
        <Card
            className="product-container"
            style={{ width: '18rem' }}
        >
            <Card.Img variant="top" src={DefaultImage} />
            <Card.Body>
                <Card.Title
                    className="prod-details"
                >
                    <p className="prod-price">$299999.37</p>
                    <p className="prod-rating">OOOOO</p>
                </Card.Title>

                <Card.Title
                    className="prod-name"
                >
                    Product Name
                </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button
                    variant="primary"
                    className="prod-btn"
                >Add To Cart</Button>
            </Card.Body>
        </Card>
    );
}

export default Product;
