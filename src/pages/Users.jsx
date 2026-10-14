import { useState } from "react";


function Users() {

    function handleDelete(id) {

    const updatedUsers = users.filter((user) => {
        return user.id !== id;
    });

    setUsers(updatedUsers);
    }

   const [search, setSearch] = useState("");
   const [users, setUsers] = useState([
    {
        id: 1,
        name: "Suraj Panchal",
        email: "suraj@gmail.com",
        role: "User",
        status: "Active"
    },
    {
        id: 2,
        name: "Aman Verma",
        email: "aman@gmail.com",
        role: "User",
        status: "Active"
    },
    {
        id: 3,
        name: "Priya Singh",
        email: "priya@gmail.com",
        role: "User",
        status: "Inactive"
    },
    {
        id: 4,
        name: "Rohit Kumar",
        email: "rohit@gmail.com",
        role: "Editor",
        status: "Active"
    }
]);

   const filteredUsers = users.filter((user) => {
    return (
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );
});

    return (
        <div className="users-page">

            <div className="users-header">
                <h2>Users</h2>

                <button className="add-user-btn">
                    + Add User
                </button>
            </div>
            
            <div className="search-box">
                <input
                   type="text"
                   placeholder="Search User.."
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                />
             </div>     


            <div className="users-table-container">

                <table className="users-table">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>


                    <tbody>

                        {filteredUsers.map((user) => (
                            <tr key={user.id}>

                                <td>{user.id}</td>

                                <td>{user.name}</td>

                                <td>{user.email}</td>

                                <td>{user.role}</td>

                                <td>{user.status}</td>

                                <td>
                                    <button>Edit</button>
                                    <button onClick={() => handleDelete(user.id)}>
                                       Delete
                                    </button>
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Users;