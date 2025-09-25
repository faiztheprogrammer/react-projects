import React from "react";

function ProductRow({NameValue, PriceValue, onDelete}) {

    return (
        <>
            <tr>
                <td>{NameValue}</td>
                <td>{PriceValue}</td>
                <td><button onClick={onDelete}>Delete</button></td>
            </tr>
        </>
    )
}

export default ProductRow;