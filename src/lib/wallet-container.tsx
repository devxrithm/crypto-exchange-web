import React from "react";

const WalletContainer = () => {
  return (
    <>
      <div className="flex gap-3">
        <div className="py-3 px-6 rounded-sm bg-[#0b0e11] flex flex-col justify-center items-right">
          <p className="text-sm text-gray-300 ">Market</p>
          <p className="font-bold text-green-300">Open </p>
        </div>
        <div className="py-3 px-4 rounded-sm bg-[#0b0e11] flex flex-col justify-center items-right">
          <p className="text-sm text-gray-300 ">USDT Wallet</p>
          <p className="font-bold text-gray-200">32000 </p>
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
