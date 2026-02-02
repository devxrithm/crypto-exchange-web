// import Image from "next/image";
import Orderbook from "./src/dashboard/order-book";
import Dashboard from "./src/dashboard/page";
import Trade from "./src/dashboard/trade";
import TradingViewWidget from "./src/dashboard/TradingViewWidget";

export default function Home() {
  return (
    <>
      <hr className="text-gray-700 mt-10" />
      <div className="flex justify-evenly">
        <Orderbook />
        <div className="border-r border-r-gray-600 h-96"></div>
        <div className="">
        <TradingViewWidget symbol={"btcusdt"} />
        <Trade />
        </div>
        <div className="border-r border-r-gray-600 h-96"></div>
        <Dashboard />
      </div>
    </>
  );
}
