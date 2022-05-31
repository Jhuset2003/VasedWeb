import React, { useContext } from "react";
import { SessionContext } from "../context/SessionContext";
import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
    const { user } = useContext(SessionContext);

    if (!user.role) {
        return <Navigate to="/login" />;
    } else {
        return children;
    }

};

export default Auth;
