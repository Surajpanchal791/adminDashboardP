import { Link } from "react-router-dom";

function Sidebar() {

    return (
        <aside className="sidebar">

            <h2>Admin Panel</h2>

            <nav>

                <Link to="/">Dashboard</Link>

                <Link to="/users">Users</Link>

                <Link to="/products">Products</Link>

                <Link to="/orders">Orders</Link>

                <Link to="/settings">Settings</Link>

            </nav>

        </aside>
    );
}

export default Sidebar;