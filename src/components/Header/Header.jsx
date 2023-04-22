import React, {useContext, useState} from 'react';
import logo from '../../images/Logo.svg';
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faNavicon, faClose} from '@fortawesome/free-solid-svg-icons'
import {AuthContext} from '../Provider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)

    const [open, setOpen] = useState(true)

    const handleSignOut = () => {
        logOut()
            .then(res => { })
            .catch(error => {
                console.log(error);
            })
    }

    const navBar = [
        {id: 1, label: "Home", href: "/"},
        {id: 2, label: "Shop", href: "/shop"},
        {id: 3, label: "Review Orders", href: "/orders"},
        {id: 4, label: "About Us", href: "/about"},
        {id: 5, label: "Login", href: "/login"},
        {id: 6, label: "Sign Up", href: "/signup"},
    ];

    return (
        <nav className='bg-[#1C2B35] flex items-center'>
            <div className='px-7 sm:px-8 lg:px-28 flex justify-between w-full'>
                <Link to={'/'}><img className='my-5' src={logo} alt="" /></Link>
                <div className='flex flex-col text-right justify-center'>
                    <h1 onClick={() => setOpen(!open)} className='text-white cursor-pointer p-3 lg:hidden text-3xl'>{open ? <FontAwesomeIcon icon={faNavicon}></FontAwesomeIcon> : <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>}</h1>
                    <div className={`${ open ? 'hidden' : 'contents' } lg:contents`}>
                        <div className='flex lg:flex-row flex-col text-right'>
                            {
                                navBar.map(nav =>
                                    <NavLink onClick={() => setOpen(true)} className={({isActive, isPending}) => isActive ? "text-[#ff9900] p-2 lg:hover:bg-[#ffe0b3] lg:hover:text-[#1C2B35] " : isPending ? "text-gray-700 p-2 lg:hover:bg-[#ffe0b3] lg:hover:text-[#1C2B35]" : "text-white p-2 lg:hover:bg-[#ffe0b3] lg:hover:text-[#1C2B35]"}
                                        key={nav.id}
                                        to={nav.href}
                                    >{nav.label}
                                    </NavLink>
                                )
                            }
                            <div className='flex items-center'>{user && <span className='text-white px-2'>welcome {user.email} <button className='px-1' onClick={handleSignOut}>Sign Out</button></span>}</div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Header;