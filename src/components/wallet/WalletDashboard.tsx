"use client"
import { api } from "@/src/lib/axios";
import { useEffect, useState } from "react";

const WalletDashboard = () => {
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
    <div className="text-white m-16">
      <div className=" text-2xl font-semibold ">
        <h1 className="text-2xl">Total Balance</h1>
        <h1 className="text-9xl font-mono">$ 320000.25 <span className="text-6xl text-gray-300">USDT</span></h1>
      </div>
      <hr className="text-gray-700 mt-3" />
      <div className="mt-10">
        <h1 className="text-3xl font-semibold">Wallet</h1>
        <div className="flex gap-5 items-center flex-wrap mt-5">
          <div className="bg-[#0b0e11] min-w-64 p-5 rounded-xl">
            <p className="font-semibold text-2xl">BTCUSDT</p>
            <p className="font-semibold text-5xl font-mono">0.255554</p>
          </div>
          <div className="bg-[#0b0e11] min-w-64 p-5 rounded-xl">
            <p className="font-semibold text-2xl">BTCUSDT</p>
            <p className="font-semibold text-5xl font-mono">0.255554</p>
          </div>
          <div className="bg-[#0b0e11] min-w-64 p-5 rounded-xl">
            <p className="font-semibold text-2xl">BTCUSDT</p>
            <p className="font-semibold text-5xl font-mono">0.255554</p>
          </div>
          <div className="bg-[#0b0e11] min-w-64 p-5 rounded-xl">
            <p className="font-semibold text-2xl">BTCUSDT</p>
            <p className="font-semibold text-5xl font-mono">0.255554</p>
          </div>
          <div className="bg-[#0b0e11] min-w-64 p-5 rounded-xl">
            <p className="font-semibold text-2xl">BTCUSDT</p>
            <p className="font-semibold text-5xl font-mono">0.255554</p>
          </div>
          <div className="bg-[#0b0e11] min-w-64 p-5 rounded-xl">
            <p className="font-semibold text-2xl">BTCUSDT</p>
            <p className="font-semibold text-5xl font-mono">0.255554</p>
          </div>
          <div className="bg-[#0b0e11] min-w-64 p-5 rounded-xl">
            <p className="font-semibold text-2xl">BTCUSDT</p>
            <p className="font-semibold text-5xl font-mono">0.255554</p>
          </div>
          <div className="bg-[#0b0e11] min-w-64 p-5 rounded-xl">
            <p className="font-semibold text-2xl">BTCUSDT</p>
            <p className="font-semibold text-5xl font-mono">0.255554</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default WalletDashboard;
