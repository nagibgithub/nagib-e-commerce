import React, { useState } from 'react';
// import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNavicon, faClose } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [open, setOpen] = useState(false)

    const navBar = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "Products", href: "/products" },
        { id: 3, label: "Review Orders", href: "/orders" },
        { id: 4, label: "About Us", href: "/about" },
        { id: 5, label: "Login", href: "/login" }
    ];

    return (
        <div className='bg-black'>
            <nav className='header container m-auto' >
                <div className='flex justify-between items-center py-2'>
                    <img src={logo} alt="" />
                    <div className='flex flex-col text-right'>
                        <h1 onClick={() => setOpen(!open)} className='text-white cursor-pointer p-3 hover:bg-orange-800 md:hidden'>{open ? <FontAwesomeIcon icon={faNavicon}></FontAwesomeIcon> : <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>}</h1>
                        <div className={`${open ? 'hidden' : 'contents'} md:contents`}>
                            <div className='flex md:flex-row flex-col text-right'>
                                {
                                    navBar.map(nav =>
                                        <Link className='p-2 text-white hover:bg-orange-800'
                                            key={nav.id}
                                            to={nav.href}
                                        >{nav.label}
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Header;