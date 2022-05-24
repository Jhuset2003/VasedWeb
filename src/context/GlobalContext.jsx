import React, { createContext, useReducer, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(
        {
            id: 1,
            name: 'Rodrigo Vased',
            role: 3,
        }
    )

   return(
    <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
   )
}