// import Image from "next/image";
import Orderbook from "../src/components/order-book";
import Dashboard from "../src/components/page";
import Trade from "../src/components/trade";
import TradingViewWidget from "../src/components/TradingViewWidget";
import LivePrices from "../src/components/live-prices";

export default function Home() {
  return (
    <>
      <hr className="text-gray-700 mt-10" />
      <div className="flex justify-evenly">
        <div className="flex flex-col">
          <Orderbook />
          <hr className="text-gray-700 mt-2" />
          <LivePrices />
        </div>
        <div className="border-r border-r-gray-600 h-202"></div>
        <div className="">
          <div className="flex justify-around gap-2">
            <TradingViewWidget symbol={"btcusdt"} />
            <div className="border-r border-r-gray-600 h-106"></div>
            <Dashboard />
          </div>
          <hr className="text-gray-700 mt-2" />
          <Trade />
        </div>
      </div>
    </>
  );
}
