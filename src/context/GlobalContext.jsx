import GlobalReducer from "../reducers/GlobalReducer";
import React, { createContext, useReducer } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, {
    classrooms: [],
    tasks: [],
    users: [],
    classroomEditing: null,
    taskEditing: null,
    userEditing: null,
  });

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
