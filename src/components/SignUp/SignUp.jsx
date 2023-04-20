import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const SignUp = () => {
    const [eye, setEye] = useState(false)
    return (
        <div className='form-field'>
            <div className='m-[40px]'>
                <h1 className='login-title'>Sign Up</h1>
                <form action="">
                    <div className='flex flex-col'>
                        <label className='label-field' htmlFor="" for='email'>Email</label>
                        <input className='input-field' name='email' placeholder='Enter your @ Email' id='email' type="email" required />
                    </div>
                    <div className='flex flex-col'>
                        <label className='label-field' htmlFor="" for='password'>Password</label>
                        <input className='input-field' name='password' placeholder='Enter your password' id='password' type={eye ? "password" : "text"} required />
                    </div>
                    <div className='flex flex-col'>
                        <label className='label-field' htmlFor="" for='confirm-password'>Confirm Password</label>
                        <input className='input-field' name='confirm-password' placeholder='Re-Type your password' id='confirm-password' type={eye ? "password" : "text"} required />
                        <div className='flex items-center cursor-pointer' onClick={() => setEye(!eye)} ><span className='pr-2 py-2'>{eye ? 'See your password' : 'Hide your password'} </span> <FontAwesomeIcon className='text-sm' icon={eye ? faEye : faEyeSlash} /></div>
                    </div>
                    <input className='submit-button' type="submit" value={'Sign Up'} />
                </form>
                <h1 className='text-center text-sm mb-5'>Already have an Account<Link className='text-[#ff9900]' to={'/login'}> log in</Link> Please</h1>
                <div className='grid grid-cols-7 items-center mb-5'>
                    <hr className='col-span-3 border border-[#95A0A7]' />
                    <h2 className='col-span-1 text-center text-[#323536]'>or</h2>
                    <hr className='col-span-3 border border-[#95A0A7]' />
                </div>
                <button className='w-full flex items-center justify-center border border-[#95a0a7] h-14 rounded text-lg'><img className='w-8 mr-2' src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;