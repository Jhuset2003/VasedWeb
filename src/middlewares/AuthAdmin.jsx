import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { SessionContext } from '../context/SessionContext';

const AuthAdmin = ({children}) => {
    const { user } = useContext(SessionContext);

    if (!user.role) {
        return <Navigate to="/login" />;
    } else if (user.role === 1) {
        return children;
    }
}

export default AuthAdmin