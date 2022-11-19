import React from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [authToken, setAuthToken] = React.useState({});
  console.log("token mudou:", authToken);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};
