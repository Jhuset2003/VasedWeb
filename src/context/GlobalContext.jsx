import GlobalReducer from "../reducers/GlobalReducer";
/* import { v4 } from "uuid"; */
import React, { createContext, useReducer } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, {
    classrooms: [],
    tasks: [],
    users: [],
  });

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
