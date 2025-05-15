import React from 'react';

export const AuthContext = React.createContext({
  user: {},
  setUser: ({}) => {},
});

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState({});
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
