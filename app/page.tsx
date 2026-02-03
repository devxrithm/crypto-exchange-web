// import Image from "next/image";
import Orderbook from "./src/dashboard/components/order-book";
import Dashboard from "./src/dashboard/components/page";
import Trade from "./src/dashboard/components/trade";
import TradingViewWidget from "./src/dashboard/components/TradingViewWidget";
import LivePrices from "./src/dashboard/components/live-prices";

export default function Home() {
  return (
    <>
      <hr className="text-gray-700 mt-10" />
      <div className="flex justify-evenly">
        <div className="flex flex-col">
          <Orderbook />
          <LivePrices />
        </div>
        <div className="border-r border-r-gray-600 h-96"></div>
        <div className="">
          <div className="flex justify-around gap-2">
            <TradingViewWidget symbol={"btcusdt"} />
            <div className="border-r border-r-gray-600 h-106"></div>
            <Dashboard />
          </div>
          <Trade />
        </div>
      </div>
    </>
  );
}
