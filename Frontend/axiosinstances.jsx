import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://mern-adventour-1.onrender.com/api/auth" // No space at the start!
     
});

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const token = localStorage.getItem('accesstoken');
      if (token) {
        config.headers.Authorization = `bearer ${token}`;
      }
      return config;
    } catch (error) {
      console.error("Error setting Authorization header:", error);
      return Promise.reject(error);
    }
  },
  (error) => {
    console.log("request error:", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response data:", response.data);
    return response;
  },
  (error) => {
    // Prevent TypeError if error.response is undefined
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized");
    } else if (!error.response) {
      console.log("Network error or server not reachable");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;