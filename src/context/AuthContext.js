import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    
  }, []);
 
const actionCodeSettings = {
  url: 'http://localhost:3000/login'
};


  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    return signOut(auth)
  }

  function recovery(email){
    return sendPasswordResetEmail(auth, email, actionCodeSettings);
// Obtain code from user.
// return confirmPasswordReset('user@example.com', code);
  }

  const value = {
    currentUser,
    register,
    login,
    logout,
    recovery
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
