"use client";
import { IoIosLogIn } from "react-icons/io";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import { api } from "@/src/lib/axios";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const LoginHandler = async () => {
    try {
      await api.post("/api/auth/login", { email, password });
      router.push("/in/spot/btcusdt");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Login failed");
      } else {
        setError("Something went wrong");
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-around text-white">
      <div className="flex justify-between items-center bg-[#0b0e11] rounded-4xl w-[75%] bg-[url('/bg.jpg')] bg-cover bg-center">
        <div className=""></div>
        <div className="w-[40%] p-5 py-28 rounded-xl flex flex-col justify-items-end items-center gap-3  bg-[#12161a]">
          <div className="p-3 bg-white text-black rounded-xl shadow-2xl shadow-amber-50">
            <IoIosLogIn size={24} />
          </div>
          <h1 className="text-xl font-semibold ">Login with email</h1>
          <div className="mt-5 border rounded-lg border-gray-600 flex items-center p-3 gap-2 w-80 bg-[#1b232b]">
            <MdOutlineAttachEmail className="text-xl" />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none w-80 text-sm"
            />
          </div>
          <div className="border rounded-lg border-gray-600 flex items-center p-3 gap-2 w-80 bg-[#1b232b]">
            <MdOutlineAttachEmail className="text-xl" />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none w-80 text-sm"
            />
          </div>
          <p className="text-gray-500 pl-44 text-sm"> Forgot Password ?</p>
          <div className=" flex items-center justify-center gap-2 bg-white text-gray-700 py-2 px-30 rounded-lg shadow-xl shadow-gray-700 font-bold cursor-pointer">
            <IoLogIn className="text-2xl" />
            <button onClick={LoginHandler}>LOGIN</button>
          </div>
          {error && (
            <p className="text-red-500 text-sm border border-red-300 py-2 px-22 rounded-lg">
              {error}
            </p>
          )}
          <div className="flex mt-3 text-gray-400 text-sm">
            <p>
              Not register yet ?{" "}
              <Link href={"/in/auth/signup"}>Register now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
