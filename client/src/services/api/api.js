import axios from "axios";
import useAxios from "../hooks/useAxios";

const baseUrl = "http://localhost:5000"; // örnek bir base URL

const api = {
  get: (url, params = {}) => axios.get(`${baseUrl}${url}`, { params }),
  post: (url, data) => axios.post(`${baseUrl}${url}`, data),
  delete: (url) => axios.delete(`${baseUrl}${url}`),
};

const useGet = (url, params = {}) => useAxios(url, params);

const usePost = (url) => {
  const { doGet } = useAxios();
  const doPost = async (data) => {
    await api.post(url, data);
    doGet(url);
  };
  return doPost;
};

const useDelete = (url) => {
  const { doGet } = useAxios();
  const doDelete = async () => {
    await api.delete(url);
    doGet(url);
  };
  return doDelete;
};

export { useGet, usePost, useDelete };
