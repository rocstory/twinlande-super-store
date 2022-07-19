import React, { useContext } from "react";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import { TSSContext } from "../../../contexts/TSSContext";
// import { MaxStarRating } from "../../../appConfig.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useProduct from "./useProduct";
import "./Product.css";

const appConfig = require('../../../appConfig.json')
const productHelper = require('../../../helpers/product');



function Product({ product }) {
    const { MaxStarRating } = appConfig
    const {
        name,
        price,
        rating
    } = product

    const formattedPrice = productHelper.getFormattedCurrency(price);

    const {
        prodImage,
    } = useProduct(product);

    const handleProductRating = () => {

        const numOfGoldStars = Math.floor(rating)
        const numOfRemainingStars = MaxStarRating - numOfGoldStars;

        return (
            <>
                {
                    Array(numOfGoldStars).fill(
                        <span
                            className="fill"
                        >
                            <FontAwesomeIcon icon={["fas", "star"]} />
                        </span>
                    )
                }
                {
                    Array(numOfRemainingStars).fill(
                        <span>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                        </span>
                    )
                }
            </>
        )
    }
    const starRating = handleProductRating();

    return (
        <Card
            className="product-container"
            style={{ width: '18rem' }}
        >
            <Card.Img variant="top" src={prodImage} />
            <Card.Body>
                <Card.Title
                    className="prod-details"
                >
                    <p className="prod-price">{formattedPrice}</p>
                    <p className="prod-rating">
                        {starRating}
                    </p>
                </Card.Title>

                <Card.Title
                    className="prod-name"
                >
                    {name}
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
