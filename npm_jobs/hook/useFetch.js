import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {  
 
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
     method: "GET",     
    //  url: "https://jsearch.p.rapidapi.com/search",
     url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: "Python developer in Texas, USA",
      page: "1",
      num_pages: "1"
    },
    headers: {      
      "X-RapidAPI-Key": "WgrpPcIfCAmshO2SyV48FORcMEbqp1pYZocjsn2wTargD4J2bQ",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
     }
    // params: { ...query },
    
  };




  const fetchData = async () => {
    setIsLoading(true);
    try {
      alert("beofre");
      const response = await axios.request(options);          
      alert("after");
      console.log(response.data);

      setData(response.data.data);
      
      setIsLoading(false);
    } catch (error) {
      alert("Error");
      alert(error);
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
