import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { SessionContext } from '../context/SessionContext';

const AuthTeacher = ({children}) => {
    const { user } = useContext(SessionContext);

    if (!user.role) {
        return <Navigate to="/login" />;
    } else if (user.role === 2 || user.role === 1) {
        return children;
    }
}

export default AuthTeacher