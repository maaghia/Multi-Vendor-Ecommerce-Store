import { useContext, useState, useEffect } from "react";

const useFetchData = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);
  
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        const data = await resp?.data;
        console.log(data);
        
        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    useEffect(() => {
      setIsLoading(true);
  
      fetchData();
    }, [url]);  
  
    return { isLoading, apiData, serverError };
  };

  export default useFetchData