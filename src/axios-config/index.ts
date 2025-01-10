import { AuthResponse } from "@/models/auth-response";
import axios from "axios";
import { redirect } from "react-router";

export const BASE_URL = "http://195.133.25.86:8080/api/v1/";

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (config) => config,
  async (error) => {
    if (error.response?.status === 401) {
      const req = error.config;
      try {
        const response = await axios.post<AuthResponse>(
          `${BASE_URL}auth/refreshtoken`,
          { token: localStorage.getItem("refresh-token") }
        );
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("refresh-token", response.data.refreshToken);
        console.log("REFRESH");
        return api.request(req);
      } catch (error) {
        console.log("НЕ АВТОРИЗОВАН");
        window.location.href = "/auth";
      }
    }
  }
);

export default api;
