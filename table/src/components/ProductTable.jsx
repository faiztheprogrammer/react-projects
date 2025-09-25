import {React, useState} from "react";
import ProductRow from "./ProductRow";

function ProductTable() {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "48 Laws of Power",
            price: 2000
        },

        {
            id: 2,
            name: "Laws of Nature",
            price: 3000
        },

        {
            id: 3,
            name: "The Art of War",
            price: 5000 
        }
    ])

    function handleDelete(id) {
        setProducts(products.filter(product => product.id !== id))
    }

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
                    {
                        products.length === 0? <tr><td colSpan={2}>No products</td></tr> :
                        products.map((product, index) => (
                            <ProductRow
                                key={index}
                                NameValue={product.name}
                                PriceValue={product.price}
                                onDelete={() => handleDelete(product.id)}
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default ProductTable;