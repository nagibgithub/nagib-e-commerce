import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../Provider/AuthProvider';

const SignUp = () => {

    const [passError, setPassError] = useState('')

    const {creatUser} = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target
        // console.log(form);
        const email = form.email.value
        const password = form.password.value
        const confirmPass = form.confirm.value
        // console.log(email, password, confirm);

        if (password !== confirmPass) {
            setPassError('Your Password did not match')
            return
        } else if (password.length < 6) {
            setPassError('Pass must be atleast 6 characture')
            return
        }

        setPassError('')
        creatUser(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
                setPassError(error.message)
            })

    }




    // const [eye, setEye] = useState(false)


    return (
        <div className='form-field'>
            <div className='m-[40px]'>
                <h1 className='login-title'>Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    <div className='flex flex-col'>
                        <label className='label-field' htmlFor="email">Email</label>
                        <input className='input-field' name='email' placeholder='Enter your @ Email' id='email' type="email" required />
                    </div>
                    <div className='flex flex-col'>
                        <label className='label-field' htmlFor="password">Password</label>
                        <input className='input-field' name='password' placeholder='Enter your password' id='password' type={"password"} required />
                    </div>
                    <div className='flex flex-col'>
                        <label className='label-field' htmlFor="confirm">Confirm Password</label>
                        <input className='input-field' name='confirm' placeholder='Re-Type your password' id='confirm' type={"password"} required />
                        {/* <div className='flex items-center cursor-pointer' onClick={() => setEye(!eye)} ><span className='pr-2 py-2'>{eye ? 'See your password' : 'Hide your password'} </span> <FontAwesomeIcon className='text-sm' icon={eye ? faEye : faEyeSlash} /></div> */}
                    </div>
                    <h1 className='mb-5 text-center text-red-600'>{passError}</h1>
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