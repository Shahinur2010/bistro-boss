import { FaBook, FaCalendarAlt, FaHamburger, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import uesCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = uesCart();

    // TODO: load data from the server to have dynamic isAdmin based on Data
    // const isAdmin = true;

    const [isAdmin] = useAdmin();

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">
                    {/* <!-- Sidebar content here --> */}

                    {
                        isAdmin ? <><li><NavLink to="/dashboard/adminhome"><FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"><FaUtensils /> Add an Item</NavLink></li>
                            <li><NavLink to="/dashboard/manageitems"><FaWallet /> Manage Items</NavLink></li>
                            <li><NavLink to="/"><FaBook /> Manage Bookings (TODO)</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers /> All Users</NavLink></li>
                            
                            <div className="divider"></div>
                            <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                            <li><NavLink to="/menu"><FaHamburger /> Menu</NavLink></li>
                            <li><NavLink to="/order/salad"><FaHome /> Order Food</NavLink></li></> : <>
                            <li><NavLink to="/dashboard/userhome"><FaHome /> User Home</NavLink></li>
                            <li><NavLink to="/"><FaCalendarAlt /> Reservations</NavLink></li>
                            <li><NavLink to="/"><FaWallet /> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart /> My Cart <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                </NavLink></li>
                            <div className="divider"></div>
                            <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                            <li><NavLink to="/menu"><FaHamburger /> Menu</NavLink></li>
                            <li><NavLink to="/order/salad"><FaHome /> Order Food</NavLink></li></>
                    }



                    <div className="divider"></div>
                    {/* <li><NavLink to="/dashboard/home"><FaHome/> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservations"><FaCalendarAlt/> Reservations</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaWallet/> Payment History</NavLink></li>
                    <li>
                        <NavLink to="/dashboard/mycart"><FaShoppingCart/> My Cart <span className="badge badge-secondary">+{cart?. length || 0}</span>
                    </NavLink></li>
                <div className="divider"></div>
                <li><NavLink to="/"><FaHome/> Home</NavLink></li>
                <li><NavLink to="/menu"><FaHamburger/> Menu</NavLink></li>
                <li><NavLink to="/order/salad"><FaHome/> Order Food</NavLink></li> */}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;