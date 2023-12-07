import React, { useEffect, useState } from 'react';

export const LoginContext = React.createContext();
LoginContext.displayName = 'LoginContextName'

const LoginContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const logout = () => {
    setIsLogin(false)
  }

  useEffect(() => {

    setTimeout(() => {
      setIsLogin(true);
    }, 3000);
    
  }, []);

  return (
    <LoginContext.Provider value={ {isLogin, logout} }>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
