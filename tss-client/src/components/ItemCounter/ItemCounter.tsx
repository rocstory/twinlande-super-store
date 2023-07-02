import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
// import "./InCartItem.scss"
import "./ItemCounter.scss"

interface IInCartItem {
    item?: any
}

function ItemCounter({ item }:IInCartItem) {

    const itemCount = 1;
    return (
        <div className={`item-counter-wrapper`}>
            <Button
                variant={undefined}
                className="dec-item"
            >
                <span>-</span>
            </Button>
            <Form className={`itm-count-form`}>
                <Form.Group >
                    <Form.Control type="number" placeholder={`${itemCount}`} />
                </Form.Group>
            </Form>
            <Button
                className="inc-item"
            >
                <span>+</span>
            </Button>
            
        </div>
    );
}

export default ItemCounter;
