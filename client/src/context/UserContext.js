import { createContext, useState } from "react";
import { AuthServices } from "../services/AuthServices";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
