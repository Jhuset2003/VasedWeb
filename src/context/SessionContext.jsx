import React, { createContext, useReducer, useState } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {

    const [user, setUser] = useState({
        id: 1,
        name: "Rodrigo Vased",
        role: 1,
    });

    return (
        <SessionContext.Provider value={{ user, setUser }}>
            {children}
        </SessionContext.Provider>
    )
};
