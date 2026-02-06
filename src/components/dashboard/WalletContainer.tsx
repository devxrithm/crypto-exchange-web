import { api } from "@/src/lib/axios";
import React, { useEffect, useState } from "react";

const WalletContainer = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await api.get("/wallet/balance");
        setBalance(res.data);
      } catch (error) {
        console.error("Failed to fetch balance:", error);
      }
    };
    fetchBalance();
  }, []);
  
  return (
    <>
      <div className="flex gap-3">
        <div className="py-3 px-7 rounded-sm bg-[#0b0e11] flex flex-col justify-center items-right">
          <p className="text-sm text-gray-300 ">Market</p>
          <p className="font-bold text-green-300">Open </p>
        </div>
        <div className="py-3 px-4 rounded-sm bg-[#0b0e11] flex flex-col justify-center items-right">
          <p className="text-sm text-gray-300 ">USDT Wallet</p>
          <p className="font-bold text-gray-200">{balance}</p>
        </div>
        <div className="py-3 px-4  rounded-sm bg-[#0b0e11] flex flex-col justify-center items-right ">
          <p className="text-sm text-gray-300">BTC Wallet</p>
          <p className="font-bold text-gray-200">32000 </p>
        </div>
      </div>
    </>
  );
};

export default WalletContainer;
