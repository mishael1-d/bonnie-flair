import React, { useContext, useState } from "react";

const StateContext = React.createContext();

export function useAppState() {
  return useContext(StateContext);
}

const StateProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [newUser, setNewUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber1: "",
    phoneNumber2: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState({});

  //Global States
  const globalState = {
    user,
    setUser,
    newUser,
    setNewUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <StateContext.Provider value={globalState}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
