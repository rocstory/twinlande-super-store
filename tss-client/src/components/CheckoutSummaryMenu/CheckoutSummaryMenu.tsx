import { useContext } from "react";
import { TSSContext } from "../../contexts/TSSContext";
import { toCurrency } from "../../helpers/toCurrency";
import InCartTable from "../InCartTable/InCartTable";
import "./CheckoutSummaryMenu.scss"

const CheckoutSummaryMenu = () => {
    // const {
    //     cartList
    // } = useContext(TSSContext)

    const totalItems = 12
    const subtotal = toCurrency(1290)

    return (
        <div className="summary-menu container">
            <div className={`summary-header row`}>
                <div className={`cart-count`}>
                    Cart
                    (<span>{totalItems} items</span>)
                </div>
                <div className={`subtotal`}>
                    <span>{subtotal}</span> subtotal
                </div>
            </div>
            
            <div className="summary-container">
                <InCartTable />
            </div>

        </div>
    );
}

export default CheckoutSummaryMenu;
