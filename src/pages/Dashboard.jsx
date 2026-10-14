import StatCard from "../components/StatCard";

function Dashboard() {
    return (
        <div className="dashboard-page">

            <h2>Dashboard</h2>

            <section className="dashboard-content">

                <StatCard
                    title="Total Users"
                    value="1,250"
                />

                <StatCard
                    title="Total Orders"
                    value="850"
                />

                <StatCard
                    title="Total Products"
                    value="320"
                />

                <StatCard
                    title="Revenue"
                    value="₹85,000"
                />

            </section>

        </div>
    );
}

export default Dashboard;