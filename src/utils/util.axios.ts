import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
    // return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance };
