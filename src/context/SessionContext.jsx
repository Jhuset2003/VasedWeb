import React, { createContext, useReducer, useState } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
    const [user, setUser] = useState({
        role:2
    });

    return (
        <SessionContext.Provider value={{ user, setUser }}>
            {children}
        </SessionContext.Provider>
    );
};
