function Products() {

    const products = [
        {
            id: 1,
            name: "Laptop",
            price: "₹60,000",
            stock: 20
        },
        {
            id: 2,
            name: "Mobile",
            price: "₹25,000",
            stock: 35
        },
        {
            id: 3,
            name: "Headphones",
            price: "₹2,000",
            stock: 50
        }
    ];

    return (
        <div className="users-page">

            <h2>Products</h2>

            <div className="users-list">

                {products.map((product) => (
                    <div className="user-card" key={product.id}>

                        <h3>{product.name}</h3>

                        <p>Price: {product.price}</p>

                        <p>Stock: {product.stock}</p>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default Products;