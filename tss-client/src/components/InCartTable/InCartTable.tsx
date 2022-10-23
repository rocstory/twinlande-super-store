import { useContext } from "react";
import { TSSContext } from "../../contexts/TSSContext";
import { Table } from "react-bootstrap"
import InCartItem from "./InCartItem/InCartItem";
// import "./InCartTable.scss"



function InCartTable() {
    const {
        cartList
    } = useContext(TSSContext)

    let items = ['a','b','c'] // cartList


    return (
        <div className="incart-display">
            <Table>
                <thead>
                    <tr>
                        Shipping
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
