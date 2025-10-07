import { useState } from "react";

function Products() {
    let products = [
        { id: 1, name: "HP Laptop", category: "electronics" },
        { id: 2, name: "Dell Laptop", category: "electronics" },
        { id: 3, name: "Tresseme", category: "Beauty" },
        { id: 4, name: "Sunsilk", category: "Beauty" },
        { id: 5, name: "Air Conditioner", category: "Accessories" },
        { id: 6, name: "General Fan", category: "Accessories" },
    ];

    const [selectedCategory, setSelectedCategory] = useState("");

    return (
        <>
            <Filters
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <ProductList
                selectedCategory={selectedCategory}
                productsArray={products}
            />
        </>
    );
}

export default Products;

function Filters({ selectedCategory, setSelectedCategory }) {
    return (
        <div className="flex justify-center mt-6">
            <div
                style={{
                    backgroundColor: "#F9F9F9",
                    borderRadius: "10px",
                    width: "600px",
                    padding: "30px",
                    textAlign: "center",
                }}
            >
                <button
                    className="bg-blue-600 text-white pl-6 pr-6 pb-2 pt-2 rounded-sm cursor-pointer"
                    onClick={() => setSelectedCategory("Accessories")}
                >
                    Accessories
                </button>

                <button
                    className="bg-green-600 text-white pl-6 pr-6 pb-2 pt-2 rounded-sm ml-2 mr-2 cursor-pointer"
                    onClick={() => setSelectedCategory("Beauty")}
                >
                    Beauty
                </button>

                <button
                    className="bg-orange-700 text-white pl-6 pr-6 pb-2 pt-2 rounded-sm cursor-pointer"
                    onClick={() => setSelectedCategory("electronics")}
                >
                    Electronics
                </button>

                <button
                    className="bg-gray-400 text-white pl-6 pr-6 pb-2 pt-2 rounded-sm ml-2 cursor-pointer"
                    onClick={() => setSelectedCategory("")}
                >
                    Show All
                </button>
            </div>
        </div>
    );
}

function ProductList({ selectedCategory, productsArray }) {
    let filteredProducts = selectedCategory
        ? productsArray.filter(
              (item) =>
                  item.category.toLowerCase() ===
                  selectedCategory.toLowerCase()
          )
        : productsArray;

    return (
        <div className="flex justify-center mt-4">
            <div
                style={{
                     backgroundColor: "#F9F9F9",
                    borderRadius: "10px",
                    width: "600px",
                    padding: "30px",
                    textAlign: "center",
                }}
            >
                <div className="text-center mb-4">
                    <span className="text-lg font-semibold">
                        Currently Selected Category:{" "}
                        {selectedCategory || "All"}
                    </span>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {filteredProducts.map((listing) => (
                        <div
                            key={listing.id}
                            className="border p-4 rounded-lg shadow-sm w-40 text-center bg-gray-50 hover:shadow-md transition-all duration-200"
                        >
                            <p className="font-medium">{listing.name}</p>
                            <p className="text-sm text-gray-500">
                                {listing.category}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
