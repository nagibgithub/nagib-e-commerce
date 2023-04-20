import React from 'react';
import {Link} from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <form action="">
                <div>
                    <label htmlFor="email">Enter Your Email</label>
                    <input name='email' id="email" type="email" />
                </div>
            </form>
            <h1>If You have already an Id you can <Link className='text-[#ff9900]' to={'/login'}>Log in</Link></h1>
        </div>
    );
};

export default SignUp;