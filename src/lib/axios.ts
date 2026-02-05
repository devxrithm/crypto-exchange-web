import axios from "axios";
import { useRouter } from "next/navigation";

export const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

axios.interceptors.request.use(async (config) => config);

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
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    try {
      const router = useRouter();
      if (error.response?.status === 401) {
        try {
          await api.post("/auth/refreshToken");
          return api(originalRequest);
        } catch {
          router.push("/login");
        }
      }
    } catch (error) {
      throw error;
    }
  },
);
