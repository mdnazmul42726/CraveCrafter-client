import { NavLink } from "react-router-dom";

const Navbar = () => {

    const user = true

    return (
        <div>
            <div className="navbar w-full md:px-10 py-5 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-red-600' : ''}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-red-600' : ''}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-red-600' : ''}>Home</NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className="text-3xl font-bold">Crave<span className="font-serif text-[#E32106]">Crafter.</span></a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-5">
                            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-red-600 font-bold' : 'text-white font-bold'}>Home</NavLink>
                            <NavLink to={'/blogs'} className={({ isActive }) => isActive ? 'text-red-600 font-bold' : 'text-white font-bold'}>Blogs</NavLink>
                            <NavLink to={'/foods'} className={({ isActive }) => isActive ? 'text-red-600 font-bold' : 'text-white font-bold'}>Foods</NavLink>
                        </ul>
                    </div>
                    <div className="ml-3">
                        {user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] text-black p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div> :
                            <NavLink to={'/foods'} className={({ isActive }) => isActive ? 'text-red-600 font-bold' : 'text-white font-bold'}>Login</NavLink>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;