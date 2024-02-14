import { useState, useEffect } from "react";
import axios from "axios";

const useFetch2 = (query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const id = query.job_id;
  const url = "https://linkedin-backend-8x1i.onrender.com/";

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${url}job/${id}`);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert(error);
      alert("There is an error");
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

export default useFetch2;
