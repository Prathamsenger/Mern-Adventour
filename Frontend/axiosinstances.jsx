import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/auth",
});

axiosInstance.interceptors.request.use (
    async(config) => {
        try{
            // console.log("Request URL:", config.baseURL + config.url); // Debug log

            const token = localStorage.getItem('accesstoken');
            config.headers.Authorization = `bearer ${token}`;
            return config;
        }catch (error) {
            console.error("Error setting Authorization header:",error);
            return Promise.reject(error);
        }
    },
    (error) => {
        console.log("request erorr:", error);
        return Promise.reject(error);
    }

)

axiosInstance.interceptors.response.use(
    (response) => {
        console.log("Response data:",response.data);
        return response;
    },
    (error) => {
        // console.log("Response error:",error);
        if(error.response.status === 401){
            console.log("Unauthorized");
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;
