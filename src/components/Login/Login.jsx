import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <div className='my-10 mx-auto w-1/2 border-2 p-5 rounded-lg '>
            <h1>this is login</h1>
            <h1>New to Nagib E-Commerce?<Link className='text-[#ff9900]' to={'/signup'}> Create New Account</Link> first</h1>
        </div>
    );
};

export default Login;