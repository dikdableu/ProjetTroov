import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = props => {
  const [loginName, setLoginName] = useState("");

  return (
    <AppContext.Provider
      value={{ loginName: loginName, setLoginName: setLoginName }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
