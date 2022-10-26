import { useContext } from "react";
import { TSSContext } from "../../contexts/TSSContext";
import { Table } from "react-bootstrap"
import InCartItem from "./InCartItem/InCartItem";
import "./InCartTable.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function InCartTable() {
    const {
        cartList
    } = useContext(TSSContext)

    let items = ['a','b','c'] // cartList
    const numOfItems = 12


    return (
        <div className="incart-display">
            <Table>
                <thead>
                    <tr>
                        <div className="incart-header">
                            <div className="icon-wrapper ">
                                <span className="brand-icon">
                                    <FontAwesomeIcon icon={["fas", "seedling"]} />
                                </span>
                            </div>
                            <div className="content-wrapper">
                                <span>Shipping</span>
                                <span>{numOfItems} items</span>
                            </div>
                        </div>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <InCartItem key={item} item={item} />)
                    }
                </tbody>

            </Table>




        </div>
    );
}

export default InCartTable;
