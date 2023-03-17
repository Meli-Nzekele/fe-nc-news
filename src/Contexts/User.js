import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(false);

  const login = (username) => {
    setUser(username);
    setLoggedInUser(true);
  };

  const logout = () => {
    setUser("");
    setLoggedInUser(false);
  };

  return (
    <UserContext.Provider value={{ user, login, loggedInUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
