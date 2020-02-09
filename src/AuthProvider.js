import React from "react";
import httpClient from "./HttpClient.js";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [isAuth, setIsAuth] = React.useState(false);

  // check if token already in local storage
  const token = localStorage.getItem("aui-token");
  if (token) {
    setIsAuth(true);
  }

  // todo save token in local storage after success call
  const login = async params => httpClient.login(params);
  // todo redirect
  const logout = () => {
    localStorage.removeItem("aui-token");
    setIsAuth(false);
  };

  return <AuthContext.Provider value={{ isAuth, login, logout }} {...props} />;
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
