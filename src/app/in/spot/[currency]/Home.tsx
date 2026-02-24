"use client";
import LivePrices from "@/src/components/dashboard/LivePricesTab";
import Orderbook from "@/src/components/dashboard/OrderBook";
import OrderBlock from "@/src/components/dashboard/OrderBlock";
import TradingViewWidget from "@/src/components/dashboard/TradingViewWidget";
import Ticker from "@/src/components/dashboard/Ticker";
import WalletContainer from "@/src/components/dashboard/WalletContainer";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import OrderHistory from "@/src/components/dashboard/TradeContainer/OrderHistory";
import OpenOrder from "@/src/components/dashboard/TradeContainer/OpenOrder";
import TradeHistory from "@/src/components/dashboard/TradeContainer/TradeHistory";
import { useParams } from "next/navigation";
import { changeSocketStatus } from "@/src/context/features/socketSlice";
import { IoIosCloseCircle } from "react-icons/io";

export default function Home() {
  const [messages, setMessages] = useState<string | null>(null);
  const params = useParams();
  const [activeTab, setActiveTab] = useState<
    "OPEN_ORDER" | "ORDER_HISTORY" | "TRADE_HISTORY" | "HOLDING"
  >("OPEN_ORDER");

  //add context for socket status
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/ws");
    socket.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    socket.onmessage = (event) => {
      setMessages((prev) => (prev ? `${prev}\n${event.data}` : event.data));
      dispatch(changeSocketStatus());
      setTimeout(() => {
        setMessages(null);
      }, 2000);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    // Cleanup on unmount
    return () => {
      socket.close();
    };
  }, [dispatch]);
  
  return (
    <>
      <div className="flex justify-between items-center mt-5 px-3">
        <Ticker token={String(params.currency)} />
        <WalletContainer />
      </div>
      <hr className="text-gray-700 mt-2" />
      <div className="flex justify-evenly ">
        <div className="flex flex-col mx-3">
          <Orderbook />
          <hr className="text-gray-700 mt-2" />
          <LivePrices />
        </div>
        <div className="border-r border-r-gray-600 h-202"></div>
        <div className="mx-2">
          <div className="flex justify-around gap-3">
            <div className="min-w-[60%]">
              <TradingViewWidget symbol={"btcusdt"} />
            </div>
            <div className="border-r border-r-gray-600 h-106"></div>
            <OrderBlock />
          </div>
          <hr className="text-gray-700 mt-2" />

          <div className="w-full text-white mt-2 bg-[#0b0e11] rounded-sm p-5 mb-5 min-h-92">
            <div className="flex gap-5 text-sm font-semibold text-gray-400">
              <button
                onClick={() => setActiveTab("OPEN_ORDER")}
                className={activeTab === "OPEN_ORDER" ? "text-white " : ""}
              >
                <p className="cursor-pointer">Open Order</p>
              </button>

              <button
                onClick={() => setActiveTab("ORDER_HISTORY")}
                className={activeTab === "ORDER_HISTORY" ? "text-white" : ""}
              >
                <p className="cursor-pointer">Order History</p>
              </button>

              <button
                onClick={() => setActiveTab("TRADE_HISTORY")}
                className={
                  activeTab === "TRADE_HISTORY"
                    ? "text-white cursor-pointer"
                    : ""
                }
              >
                <p className="cursor-pointer">Trade History</p>
              </button>
              <button
                onClick={() => setActiveTab("HOLDING")}
                className={
                  activeTab === "HOLDING" ? "text-white cursor-pointer" : ""
                }
              >
                <p className="cursor-pointer">Holding</p>
              </button>
            </div>

            {activeTab === "OPEN_ORDER" && <OpenOrder />}
            {activeTab === "ORDER_HISTORY" && <OrderHistory />}
            {activeTab === "TRADE_HISTORY" && <TradeHistory />}
          </div>
        </div>
      </div>
      {messages && (
        <div className="fixed border-b-4 min-w-64 justify-center top-[90%] left-[90%] -translate-x-1/2 z-50 bg-emerald-500 text-white px-2 py-5 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in">
          <span className="text-sm font-semibold">{messages}</span>
          <button
            onClick={() => setMessages(null)}
            className="text-white hover:text-gray-200 text-lg leading-none"
          >
            <IoIosCloseCircle />
          </button>
        </div>
      )}
    </>
  );
}
