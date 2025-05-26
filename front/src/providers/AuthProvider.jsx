import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const connectedUser = localStorage.getItem("user");
    return connectedUser ? JSON.parse(connectedUser) : null;
  });

  const signin = (value) => {
    setUser(value);
    localStorage.setItem("user", JSON.stringify(value));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
