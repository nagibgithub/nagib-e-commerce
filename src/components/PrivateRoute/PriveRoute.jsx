import React, {useContext} from 'react';
import {AuthContext} from '../Provider/AuthProvider';
import {Navigate, useLocation} from 'react-router-dom';

const PriveRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location =useLocation()
    // console.log(location);
    if (loading) {
        return <h1>'Loading...!!!'</h1>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PriveRoute;