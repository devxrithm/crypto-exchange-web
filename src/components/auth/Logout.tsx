"use client";

import { api } from "@/src/lib/axios";
import { logout } from "@/src/context/features/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Logout = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const LogoutHandler = async () => {
    try {
      await api.post("/api/auth/logout");
      router.push("/in/auth/login");
      dispatch(logout());
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <button onClick={LogoutHandler}>
        <div className="cursor-pointer px-8 py-1.5 rounded-md text-sm font-medium border border-slate-800 text-white">
          Logout
        </div>
      </button>
    </>
  );
};

export default Logout;
