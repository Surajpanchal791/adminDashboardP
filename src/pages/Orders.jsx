function Orders() {

    const orders = [
        {
            id: 101,
            customer: "Rahul Sharma",
            product: "Laptop",
            status: "Delivered"
        },
        {
            id: 102,
            customer: "Aman Verma",
            product: "Mobile",
            status: "Pending"
        },
        {
            id: 103,
            customer: "Priya Singh",
            product: "Headphones",
            status: "Shipped"
        }
    ];

    return (
        <div className="users-page">

            <h2>Orders</h2>

            <div className="users-list">

                {orders.map((order) => (
                    <div className="user-card" key={order.id}>

                        <h3>Order #{order.id}</h3>

                        <p>Customer: {order.customer}</p>

                        <p>Product: {order.product}</p>

                        <p>Status: {order.status}</p>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default Orders;