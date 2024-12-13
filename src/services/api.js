import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://connections-api.goit.global", 
});


export const setAuthHeader = (token) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axiosInstance.defaults.headers.common.Authorization = "";
};

export default axiosInstance;
