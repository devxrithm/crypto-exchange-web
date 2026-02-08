import axios from "axios";
// import { useRouter } from "next/navigation";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
  withCredentials: true,
});

api.interceptors.request.use(async (config) => config);

// config holds the data like
//    {
//   url: "/users/profile",
//   method: "get",
//   baseURL: "https://api.example.com",
//   headers: {
//     Authorization: "Bearer OLD_ACCESS_TOKEN"
//   },
//   withCredentials: true,
//   timeout: 0,
//   data: undefined
// }

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle token expiration
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await api.post("/api/auth/refreshToken");
        return api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
