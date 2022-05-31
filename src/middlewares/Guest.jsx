import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { SessionContext } from '../context/SessionContext';

const Guest = ({children}) => {
    const { user } = useContext(SessionContext);

    if (user.role) {
        return <Navigate to="/" />;
    } else {
        return children;
    }
}

export default Guest