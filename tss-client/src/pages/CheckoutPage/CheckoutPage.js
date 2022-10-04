import { useState } from "react";
import CheckoutSummaryMenu from "../../components/CheckoutSummaryMenu/CheckoutSummaryMenu"
import getConfig from "../../helpers/getConfig";


function CheckoutPage() {
    const { SummaryMenu, ConfirmationMenu } = getConfig('CheckoutMenus')
    const [curCheckoutMenu, setCurCheckoutMenu] = useState(SummaryMenu)

    const showSummaryMenu = curCheckoutMenu === SummaryMenu
    const showConfirmationMenu = curCheckoutMenu === ConfirmationMenu
    return (
        <div className="checkout-page">
            {
                showSummaryMenu && <CheckoutSummaryMenu />
            }
            {
                showConfirmationMenu && <> x</>
            }


        </div>

    );
}

export default CheckoutPage;
