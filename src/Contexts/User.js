import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({
    username: "grumpy19",
    name: "Paul Grump",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
  });

  const logout = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};
