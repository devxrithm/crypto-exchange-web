"use client"

import LivePrices from "@/src/components/dashboard/LivePricesTab";
import Orderbook from "@/src/components/dashboard/OrderBook";
import OrderBlock from "@/src/components/dashboard/OrderBlock";
import TradeBlock from "@/src/components/dashboard/TradeBlock";
import TradingViewWidget from "@/src/components/dashboard/TradingViewWidget";
import Ticker from "@/src/components/dashboard/Ticker";
import WalletContainer from "@/src/components/dashboard/WalletContainer";
import { useParams } from "next/navigation";

export default function Home() {

  return (
    <>
      <div className="flex justify-between items-center mt-5 px-3">
        <Ticker />
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
            <TradingViewWidget symbol={"btcusdt"} />
            <div className="border-r border-r-gray-600 h-106"></div>
            <OrderBlock />
          </div>
          <hr className="text-gray-700 mt-2" />
          <TradeBlock />
        </div>
      </div>
    </>
  );
}
