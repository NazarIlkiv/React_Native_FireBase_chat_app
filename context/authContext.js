import { useState, useEffect, createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useEffect(() => {
    // onAuthStateChanger => function FireBase

    setTimeout(() => {
      setIsAuthenticated(false);
    }, 3000);
  }, []);

  const login = async (email, password) => {
    try {
    } catch (error) {
      console.log("Error Login", error);
    }
  };

  const logout = async (email, password) => {
    try {
    } catch (error) {
      console.log("Error Logout", error);
    }
  };

  const register = async (email, password, username, profileUrl) => {
    try {
    } catch (error) {
      console.log("Register Error", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useAuth must be wrapped inside AuthContextProvider");
  }

  return value;
};
