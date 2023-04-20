import React, {useState} from 'react';
import logo from '../../images/Logo.svg';
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faNavicon, faClose} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [open, setOpen] = useState(true)

    const navBar = [
        {id: 1, label: "Home", href: "/"},
        {id: 2, label: "Products", href: "/products"},
        {id: 3, label: "Review Orders", href: "/orders"},
        {id: 4, label: "About Us", href: "/about"},
        {id: 5, label: "Login", href: "/login"}
    ];

    return (
        <nav className='bg-[#1C2B35] flex items-center'>
            <div className='px-7 sm:px-8 lg:px-28 flex justify-between w-full'>
                <Link to={'/'}><img className='my-5' src={logo} alt="" /></Link>
                <div className='flex flex-col text-right justify-center'>
                    <h1 onClick={() => setOpen(!open)} className='text-white cursor-pointer p-3 md:hidden'>{open ? <FontAwesomeIcon icon={faNavicon}></FontAwesomeIcon> : <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>}</h1>
                    <div className={`${ open ? 'hidden' : 'contents' } md:contents`}>
                        <div className='flex md:flex-row flex-col text-right'>
                            {
                                navBar.map(nav =>
                                    <NavLink onClick={()=>setOpen(true)} className={({isActive, isPending}) => isActive ? "text-[#ff9900] p-2 md:hover:bg-[#ffe0b3] md:hover:text-[#1C2B35] " : isPending ? "text-gray-700 p-2 md:hover:bg-[#ffe0b3] md:hover:text-[#1C2B35]" :"text-white p-2 md:hover:bg-[#ffe0b3] md:hover:text-[#1C2B35]"}
                                        key={nav.id}
                                        to={nav.href}
                                    >{nav.label}
                                    </NavLink>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Header;