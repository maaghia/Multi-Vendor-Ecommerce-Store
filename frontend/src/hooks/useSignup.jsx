import { useContext, useState } from "react";
import { Auth } from "../contexts/Auth";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useContext(Auth);

  const signup = async (email, password,phoneNbr, fullName, location) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //"Authorization": `Bearer ${user.token}`
      },
      body: JSON.stringify({ email, password, phoneNbr, fullName, location }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json);
    }
    if (response.ok) {
      // Save the user and token in the localstorage
      localStorage.setItem("user", JSON.stringify(json));

      // Updating the global Auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };

  return { error, isLoading, signup };
};