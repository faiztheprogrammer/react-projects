import {React} from "react";

function ProductTable() {
    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dumbell 5kg</td>
                        <td>10000</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ProductTable;