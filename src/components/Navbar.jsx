import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Sign Out!'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut();
                Swal.fire(
                    'Good Luck!',
                    'Logout Successful.',
                    'success'
                )
            }
        })
    }

    return (
        <div>
            <div className="navbar w-full md:px-10 py-5 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-red-600 font-bold' : 'text-red-600 '}>Home</NavLink>
                            <NavLink to={'/blogs'} className={({ isActive }) => isActive ? 'text-red-600 font-bold' : 'text-red-600'}>Blogs</NavLink>
                            <NavLink to={'/foods'} className={({ isActive }) => isActive ? 'text-red-600 font-bold' : 'text-red-600'}>Foods</NavLink>
                        </ul>
                    </div>
                    <a className="text-3xl font-bold text-white">Crave<span className="font-serif text-[#E32106]">Crafter.</span></a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-5">
                            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-red-600 font-bold' : 'text-red-600 '}>Home</NavLink>
                            <NavLink to={'/blogs'} className={({ isActive }) => isActive ? 'text-red-600 font-bold' : 'text-red-600'}>Blogs</NavLink>
                            <NavLink to={'/foods'} className={({ isActive }) => isActive ? 'text-red-600 font-bold' : 'text-red-600'}>Foods</NavLink>
                        </ul>
                    </div>
                    <div className="ml-3">
                        {user ? <div className="flex items-center gap-2">
                            <NavLink to={"/cart"} className={({ isActive }) => isActive ? 'text-sky-600' : 'text-red-600'}> <AiOutlineShoppingCart title="Cart" className="text-2xl" /></NavLink>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] text-black p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-80">
                                    <li>
                                        <a className="justify-between">
                                            {user.displayName}
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <NavLink to={'/add-food'} className={({ isActive }) => isActive ? 'text-sky-500 ' : 'text-black'}><li><a>Add Food</a></li></NavLink>
                                    <NavLink to={'/my-added-food'} className={({ isActive }) => isActive ? 'text-sky-500 ' : 'text-black'}><li><a>My Added Food</a></li></NavLink>

                                    <li><a onClick={handleLogout} className="text-red-600 font-bold">Logout</a></li>
                                </ul>
                            </div>
                        </div> :
                            <NavLink to={'/login'} className={({ isActive }) => isActive ? 'text-red-600 font-bold' : 'text-red-600'}>Login</NavLink>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;