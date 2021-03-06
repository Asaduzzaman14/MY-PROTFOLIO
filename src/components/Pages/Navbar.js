import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItem = <>
        <li><Link className='rounded-lg text-xl' to='/home'>Home</Link></li>
        <li><Link className='rounded-lg text-xl' to='/about'>About</Link></li>
        <li><Link className='rounded-lg text-xl' to='/blogs'>Blogs</Link></li>
        <li><Link className='rounded-lg text-xl' to='/ContactMe'>Contact</Link></li>
    </>


    return (
        <div className="navbar  z-10  shadow-xl">

            <div className=" navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg  bg-slate-300 text-black rounded-lg w-52">
                        {menuItem}
                    </ul>
                </div>
                <span className="btn btn-ghost normal-case text-xl text-secondary">ASAD<span className='text-primary'>UZZAMAN</span></span>
            </div>

            <div className="navbar-center lg:navbar-end  hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ">
                    {menuItem}
                </ul>
            </div>

            {/* <div className="lg:navbar-center lg:hidden navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div> */}

        </div>
    );
};

export default Navbar;