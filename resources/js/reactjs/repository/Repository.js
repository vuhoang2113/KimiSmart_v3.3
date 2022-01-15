import axios from "axios";
import { toast } from "react-toastify";
import LocalStorageService from "../app/localStorageService";

const baseDomain = process.env.MIX_PUSHER_API_DOMAIN || "http://localhost:8081";
const baseUrl = `${baseDomain}/api`;

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 60000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {
        const token = LocalStorageService.getToken();
        if (token) {
            config.headers["Authorization"] = "Bearer " + token;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        const responseCode = error.response.status;
        if (responseCode === 401) {
            const message =
                error.response.data.message || "Error 401 Unauthorized";
            toast.error(message);
        }
        if (responseCode === 404) {
            window.location.href = "/404";
        }

        if (responseCode === 403) {
            const message =
                error.response.data.message || "Error 403 Forbidden";
            toast.error(message);
        }

        // if (responseCode === 422) {
        //     const message =
        //         error.response.data.message || "Error 422 Unprocessable Entity";
        //     toast.error(message);
        // }

        if (responseCode === 500) {
            const message =
                error.response.data.message ||
                "Error 500 Internal Server Error";
            toast.error(message);
        }

        return Promise.reject(error);
    }
);

export default instance;
