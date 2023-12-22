import { Link, NavLink, Outlet } from "react-router-dom";
import { CiLogin } from 'react-icons/ci';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { RxDashboard} from "react-icons/rx";
import { IoBagAddOutline} from "react-icons/io5";
import logo from '../../assets/logo.png'

const Dashboard = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    // const navbarClass = isScrolled ? "fixed top-0 left-0 right-0 bg-white shadow-md" : "";
    // const containerClass = isScrolled ? "py-3" : "";

    const navLinks = (
        <>
         <li>
                <NavLink to="/dashboard/userdashboard" className={({ isActive, isPending }) =>
                    isPending ? "pending font-bold rounded-3xl  text-pink-600 underline-offset-8 hover:text-red" : ""
                }>
                    <RxDashboard className="text-3xl"></RxDashboard>
                    Dashboard
                </NavLink>
            </li>
            
           

            <li>
                <NavLink to="/dashboard/addtask" className={({ isActive, isPending }) =>
                    isPending ? "pending font-bold rounded-3xl text-purple-600 underline-offset-8 hover:text-red" : ""
                }><IoBagAddOutline className="text-3xl"></IoBagAddOutline>Add Task</NavLink>
            </li>
            <li>
                <NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "pending " : isActive ? "font-bold rounded-3xl text-purple-600 underline-offset-8 hover:text-red" : ""
                }> <FaHome className="text-3xl"></FaHome>Home</NavLink>
            </li>

        </>
    );

    return (
        <div className="z-40 grid grid-cols-7">
        <div className='drawer z-30 col-span-1' >
          <div className='drawer z-30 '>
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        <div className="max-w-full mx-auto">
                            <div className="flex-none lg:hidden">
                                <label
                                    htmlFor="my-drawer-3"
                                    aria-label="open sidebar"
                                    className="btn btn-square btn-ghost"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block w-6 h-6 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        ></path>
                                    </svg>
                                </label>
                            </div>
                            
                            <div className="w-64 min-h-screen text-black hidden lg:flex">
                               
                            <ul className="menu p-4 text-lg">
              <div className="flex flex-col items-center justify-center mt-10">
                <img src={logo} className="w-24" alt=""/>
                <p className="text-4xl logo mb-2">Todoist</p>
              </div>
              <div className="divider"></div>
              {navLinks}
            </ul>
            <div className="dropdown dropdown-end">
                                    {user && (
                                        <div>
                                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box lg:w-72 lg:h-72 border-2 bg-pink-50" style={{ borderColor: '#D52B5C' }}>
                                                <hr className="font-bold mb-4" />
                                                <div className="ml-4">
                                                    <Link to='/dashboard/cart'>Dashboard</Link>
                                                </div>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label
                            htmlFor="my-drawer-3"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                        ></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200">
                            {navLinks}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-span-6 px-2 ">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
