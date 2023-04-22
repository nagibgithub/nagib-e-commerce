import React, {useContext, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {AuthContext} from '../Provider/AuthProvider';

const Login = () => {

    const locaiton = useLocation()
    const previousPath = locaiton.state?.from?.pathname || '/';
    console.log(previousPath);
    const {signIn} = useContext(AuthContext)

    // const [eye, setEye] = useState(false)
    const [logError, setLogError] = useState('')

    const navigate = useNavigate()

    const handleLogin = (event) => {
        setLogError('')
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(res => {
                const loggedUser = res.user;
                // console.log(loggedUser);
                form.reset()
                navigate(previousPath, {replace: true})
            })
            .catch(error => {
                setLogError(error.message)
                
                console.log(error);
            })


    }

    return (
        <div className='form-field'>
            <div className='m-[40px]'>
                <h1 className='login-title'>Login</h1>
                <form action="" onSubmit={handleLogin}>
                    <div className='flex flex-col'>
                        <label className='label-field' htmlFor="email">Email</label>
                        <input className='input-field' name='email' placeholder='Enter your @ Email' id='email' type="email" required />
                    </div>
                    <div className='flex flex-col'>
                        <label className='label-field' htmlFor="password">Password</label>
                        <input className='input-field' name='password' placeholder='Enter your password' id='password' type={"password"} required />
                        {/* <div className='flex items-center cursor-pointer' onClick={() => setEye(!eye)} ><span className='pr-2 py-2'>{eye?'See your password':'Hide your password'} </span> <FontAwesomeIcon className='text-sm' icon={eye?faEye:faEyeSlash} /></div> */}
                    </div>
                    <h1 className='text-center mb-5 text-red-600'>{logError}</h1>
                    <input className='submit-button' type="submit" value={'Login'} />
                </form>
                <h1 className='text-center text-sm mb-5'>New to Nagib E-Commerce?<Link className='text-[#ff9900]' to={'/signup'}> Create New Account</Link> first</h1>
                <div className='grid grid-cols-9 items-center mb-5'>
                    <hr className='col-span-4 border border-[#95A0A7]' />
                    <h2 className='col-span-1 text-center text-[#323536]'>or</h2>
                    <hr className='col-span-4 border border-[#95A0A7]' />
                </div>
                <button className='w-full flex items-center justify-center border border-[#95a0a7] h-14 rounded text-lg'><img className='w-8 mr-2' src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;