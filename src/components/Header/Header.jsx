import React from 'react';
// import './Header.css';
import logo from '../../images/Logo.svg';
import {Link} from "react-router-dom";

const Header = () => {
    const navBar = [
        {id: 1, label: "Home", href: "/"},
        {id: 2, label: "Products", href: "/products"},
        {id: 3, label: "Review Orders", href: "/orders"},
        {id: 4, label: "About Us", href: "/about"},
        {id: 5, label: "Login", href: "/login"}
    ];


    return (
        <nav className='header  bg-black container m-auto'>
            <div className='flex justify-between items-center py-5 mx-5'>
                <img src={logo} alt="" />
                <div className=''>
                    {
                        navBar.map(nav => <Link className='p-2 text-white hover:bg-orange-800' key={nav.id} to={nav.href}>{nav.label}</Link>)
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;