import { useContext } from "react";
import { TSSContext } from "../../contexts/TSSContext";
import { Table } from "react-bootstrap"

function InCartTable() {
    const {
        cartList
    } = useContext(TSSContext)

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
                        // cartList.map(item => <InCartItem />)
                    }
                    <tr>
                        <td>Item 1</td>
                    </tr>
                    <tr>
                        <td>Item 2</td>
                    </tr>
                    <tr>
                        <td>Item 3</td>
                    </tr>
                    <tr>
                        <td>Item 4</td>
                    </tr>
                    <tr>
                        <td>Item 5</td>
                    </tr>

                </tbody>

            </Table>




        </div>
    );
}

export default InCartTable;
