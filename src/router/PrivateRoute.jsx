import React, { useContext } from 'react';
import { AuthContext } from '../provider/authProvider/authProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if (loading) {
       return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children
    }
};

export default PrivateRoute;