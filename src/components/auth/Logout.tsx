"use client";

import { api } from "@/src/lib/axios";
import { logout } from "@/src/context/features/authSlice";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();

  const LogoutHandler = async () => {
    try {
      await api.post("/api/auth/logout");
      dispatch(logout());
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <>
      <div className="border text-white">
        <button onClick={LogoutHandler}>Logout</button>
      </div>
    </>
  );
};

export default Logout;
