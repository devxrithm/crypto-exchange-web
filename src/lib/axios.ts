import axios from "axios";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";

export const api = axios.create({
  baseURL: "https://api.example.com",
  withCredentials: true,
});
const cookieStore = await cookies();

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
    const router = useRouter();
    if (error.response?.status === 401) {
      try {
        await api.post("/auth/refreshToken");
        return api(originalRequest);
      } catch {
        cookieStore.delete("accessToken");
        router.push("/login");
      }
    }

    return Promise.reject(error);
  },
);
