import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-black text-orange-500 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">ERP System</h2>
      <ul className="space-y-4">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/production">Production</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/client-portal">Client Portal</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;