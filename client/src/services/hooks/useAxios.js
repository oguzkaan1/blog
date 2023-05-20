import { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = "http://localhost:5000";
export const useAxios = (initialUrl, initialParams = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(initialUrl);
  const [params, setParams] = useState(initialParams);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseUrl}/${url}`, { params });
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(error);
        setData(null);
      }
      setLoading(false);
    };
    fetchData();
  }, [url, params]);

  const doRequest = async (method, newUrl, newParams = {}) => {
    setLoading(true);
    try {
      let response;
      switch (method) {
        case "GET":
          response = await axios.get(`${baseUrl}/${url}`, {
            params: newParams,
          });
          break;
        case "POST":
          response = await axios.post(`${baseUrl}/${url}`, newParams);
          break;
        case "PUT":
          response = await axios.put(`${baseUrl}/${url}`, newParams);
          break;
        case "DELETE":
          response = await axios.delete(`${baseUrl}/${url}`, {
            data: newParams,
          });
          break;
        default:
          throw new Error(`Invalid method: ${method}`);
      }
      setData(response.data);
      setError(null);
    } catch (error) {
      setError(error);
      setData(null);
    }
    setLoading(false);
  };

  return { data, error, loading, doRequest };
};
