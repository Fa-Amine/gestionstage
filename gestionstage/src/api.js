import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001",
  withCredentials: true, 
});


api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("usertoken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status == 401) {
          localStorage.removeItem("usertoken");
      }
      return Promise.reject(error);
    }
);

export default api;
