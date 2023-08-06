import React, { useContext } from "react";
import useFirebase from "../hooks/useFirebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const allContext = useFirebase();

  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
}
