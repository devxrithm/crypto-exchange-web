"use client";

import { api } from "@/src/lib/axios";
import axios from "axios";
import { useEffect, useState } from "react";

const WalletContainer = () => {
  const [balance, setBalance] = useState(0);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await api.get("/api/wallet/getuserbalance/USDT");
        const res2 = await api.get("/api/wallet/getuserbalance/ETHUSDT");
        console.log(res.data.data);
        setBalance(res.data.data);
        setTokenBalance(res2.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data?.message || "Login failed");
        } else {
          setError("Something went wrong");
        }
      }
    };
    fetchBalance();
  }, [balance, tokenBalance]);

  return (
    <>
      <div className="flex gap-3">
        <div className="py-3 px-7 rounded-sm bg-[#0b0e11] flex flex-col justify-center items-right">
          <p className="text-sm text-gray-300 ">Market</p>
          <p className="font-bold text-green-300">Open </p>
        </div>
        <div className="py-3 px-4 rounded-sm bg-[#0b0e11] flex flex-col justify-center items-right">
          <p className="text-sm text-gray-300 ">USDT Wallet</p>
          <p className="font-bold text-gray-200">{balance || error}</p>
        </div>
        <div className="py-3 px-4  rounded-sm bg-[#0b0e11] flex flex-col justify-center items-right ">
          <p className="text-sm text-gray-300">ETH Wallet</p>
          <p className="font-bold text-gray-200">{tokenBalance || error} </p>
        </div>
      </div>
    </>
  );
};

export default WalletContainer;
