import { useContext } from "react";
import {  Image } from "react-bootstrap";
// import "./InCartItem.scss"
import { getProductImage } from "../../../services/product";
import "./InCartItem.scss"

function InCartItem({ item }) {

    const itemImgSrc = getProductImage();

    return (
        <tr>
            <div
                className="incart-item"
            >
                <div
                    className="incart-container"
                >
                    <div
                        className="item-img-wrapper"
                        xs
                    >
                        <Image src={itemImgSrc} fluid />
                    </div>
                    <div className="item-content w-100">
                        <div className="item-info">
                            <span>Game Controller</span>
                            <span>$10.00</span> 
                        </div>
                        <div className="item-actions">
                            

                        </div>
                    </div>
                </div>
            </div>
        </tr>
    );
}

export default InCartItem;
