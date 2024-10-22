import { createContext, useState } from "react";

//create context object
export const AppContext = createContext({});

//create the provide object
export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
