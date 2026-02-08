"use client"
import { useState } from "react";

const OrderBlock = () => {
  const [state, setState] = useState("BUY")
  return (
    <>
      {
        state === "BUY" ?
          <div className="w-[32%] py-5 px-3 text-white bg-[#0b0e11] mt-2">
            <h1 className="">Exchange / Spot</h1>
            <hr className="text-gray-700 mt-1" />
            <div className="text-white text-xs flex justify-around items-center border border-gray-700 mt-5 rounded-sm">
              <div className="bg-gray-800 py-3 px-16 rounded-l-sm cursor-pointer">BUY</div>
              <button onClick={() => setState("SELL")} className="cursor-pointer">
                <div className=" py-3 px-16 rounded-r-sm">SELL</div>
              </button>
            </div>
            <div className="flex gap-5 mt-2">
              <p className="mt-3 text-gray-100 text-sm font-semibold">Market</p>
              <p className="mt-3 text-gray-400 text-sm font-semibold">Limit</p>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <div className="bg-gray-800 flex gap-1 justify-between items-center rounded-sm text-xs text-gray-500 mt-3">
                <p className="font-semibold p-3">Price</p>
                <p className="font-semibold p-3">Market Price</p>
              </div>

              <div className="border border-gray-400 flex justify-around items-center r`ounded-sm text-xs focus-within:border focus-within:border-emerald-400 mt-3">
                <input
                  type="number"
                  placeholder="Total"
                  className="p-3 text-gray-300 outline-none w-64"
                />
                <p className="text-white font-semibold p-3">USDT</p>
              </div>
            </div>

            <div className="flex justify-between text-xs text-gray-500 mt-5">
              <p className="">Available Margin</p>
              <p className="">32500 USDT</p>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <p className="">Max Qty.</p>
              <p className="">32500 USDT</p>
            </div>
            <div className="flex justify-evenly items-center gap-1 mt-5">
              <button className="bg-emerald-500 py-3 w-full rounded-sm text-white font-semibold hover:scale-105 cursor-pointer text-sm">
                BUY
              </button>
            </div>
          </div> : <div className="w-[32%] py-5 px-3 text-white bg-[#0b0e11] mt-2">
            <h1 className="">Exchange / Spot</h1>
            <hr className="text-gray-700 mt-1" />
            <div className="text-white text-xs flex justify-around items-center border border-gray-700 mt-5 rounded-sm">
              <button onClick={() => setState("BUY")} className="cursor-pointer">
                <div className="py-3 px-16 rounded-l-sm">BUY</div>
              </button>
              <div className="bg-gray-800  py-3 px-16 rounded-r-sm cursor-pointer">SELL</div>
            </div>
            <div className="flex gap-5 mt-2">
              <p className="mt-3 text-gray-100 text-sm font-semibold">Market</p>
              <p className="mt-3 text-gray-400 text-sm font-semibold">Limit</p>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <div className="bg-gray-800 flex gap-1 justify-between items-center rounded-sm text-xs text-gray-500 mt-3">
                <p className="font-semibold p-3">Price</p>
                <p className="font-semibold p-3">Market Price</p>
              </div>

              <div className="border border-gray-400 flex justify-around items-center rounded-sm text-xs focus-within:border focus-within:border-red-400 mt-3">
                <input
                  type="number"
                  placeholder="Total"
                  className="p-3 text-gray-300 outline-none w-64"
                />
                <p className="text-white font-semibold p-3">USDT</p>
              </div>
            </div>

            <div className="flex justify-between text-xs text-gray-500 mt-5">
              <p className="">Available Margin</p>
              <p className="">32500 USDT</p>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <p className="">Max Qty.</p>
              <p className="">32500 USDT</p>
            </div>
            <div className="flex justify-evenly items-center gap-1 mt-5">
              <button className="bg-red-500 py-3 w-full rounded-sm text-white font-semibold hover:scale-105 cursor-pointer text-sm">
                SELL
              </button>
            </div>
          </div>
      }

    </>
  );
};

export default OrderBlock;
