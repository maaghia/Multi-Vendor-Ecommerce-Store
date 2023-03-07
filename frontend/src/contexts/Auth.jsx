import { createContext, useReducer, useEffect } from "react";

export const Auth = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "UPDATE_USER":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  // Update auth status when app loads for first time (authenticated if token found in localStorage)
  
  const user = JSON.parse(localStorage.getItem("user")); 
  useEffect(() => {
    
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  },[]); 


  //console.log("Auth state", state);

  return (
    <Auth.Provider value={{ ...state, dispatch }}>{children}</Auth.Provider>
  );
};