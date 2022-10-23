import { useContext } from "react";
import { TSSContext } from "../../contexts/TSSContext";
import InCartTable from "../InCartTable/InCartTable";
import "./CheckoutSummaryMenu.scss"

const CheckoutSummaryMenu = () => {
    // const {
    //     cartList
    // } = useContext(TSSContext)

    const totalItems = 12
    const subtotal = 1290

    return (
        <div className="summary-menu container">
            <div
                className="row"
            >
                <div className="subtotal container">
                    <div className="row">
                        {`Cart (${totalItems} items)`}
                    </div>
                    <div className="row">
                        <span>{subtotal}</span> subtotal
                    </div>
                </div>
            </div>
            <div
                className="row summary-container"
            >
                <InCartTable />

            </div>

        </div>
    );
}

export default CheckoutSummaryMenu;
