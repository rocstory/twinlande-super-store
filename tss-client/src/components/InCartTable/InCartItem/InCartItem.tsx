import { useContext } from "react";
import {  Image, Button, ListGroup } from "react-bootstrap";
import { toCurrency } from "../../../helpers/toCurrency";
// import "./InCartItem.scss"
import { getProductImage } from "../../../services/product";
import ItemCounter from "../../ItemCounter/ItemCounter";
import "./InCartItem.scss"

interface IInCartItem {
    item: any
}

function InCartItem({ item }:IInCartItem) {

    const itemImgSrc = getProductImage();

    const price = toCurrency(10.00)

    return (
        <tr className={`incart-item-wrapper`}>
            <div
                className="incart-item"
            >
                <div
                    className="incart-container"
                >
                    <div className="item-img-wrapper">
                        <Image src={itemImgSrc} fluid />
                    </div>
                    <div className="item-content w-100">
                        <div className="item-details">
                            <span className={'text-start'}>Game Controller</span>
                            <span className={'text-end'}>{price}</span> 
                        </div>
                        <div className="actions-wrapper">
                            <ListGroup 
                                horizontal
                                className={"actions-list"}
                            >
                                <ListGroup.Item >
                                    <Button
                                        variant={undefined}
                                        className={`remove`}
                                    >
                                        Remove
                                    </Button>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <ItemCounter />
                                </ListGroup.Item>

                            </ListGroup>
                        </div>
                    </div>
                </div>
            </div>
        </tr>
    );
}

export default InCartItem;
