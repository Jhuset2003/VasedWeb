import React, { createContext, useReducer } from 'react';
import GlobalReducer from './GlobalReducer';

const user = {

    user: [
        {
            id: 1,
            name: 'Rodrigo Vased',
            role: 1,
        }
    ]

    
}



export const UserContext = createContext(user);

export const UserProvider = ({ children }) => {

   return(
    <UserContext.Provider value={[user]}>
        {children}
    </UserContext.Provider>
   )
}