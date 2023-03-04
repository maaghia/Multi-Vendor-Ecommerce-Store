import { useContext, useState } from "react";
import { Auth } from "../contexts/Auth";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //const { user } = useContext(Auth);
  const { user = { token: "" } } = useContext(Auth);
  //whats this code above
  const { dispatch } = useContext(Auth);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" ,
       // "Authorization": `Bearer ${user ? user.token : ""}`  
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json);
    }
    if (response.ok) {
      // Save the user and token in the localstorage
      localStorage.setItem("user", JSON.stringify(json));

      // Return the JWT token
      return json.token; 
    
      // Updating the global Auth context
      dispatch({type: 'LOGIN', payload: json})

      setIsLoading(false)
    }
  };

  return { error, isLoading, login };
};