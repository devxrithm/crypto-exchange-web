"use client"

import LivePrices from "@/src/components/dashboard/LivePricesTab";
import Orderbook from "@/src/components/dashboard/OrderBook";
import OrderBlock from "@/src/components/dashboard/OrderBlock";
import TradeBlock from "@/src/components/dashboard/TradeContainer/TradeBlock";
import TradingViewWidget from "@/src/components/dashboard/TradingViewWidget";
import Ticker from "@/src/components/dashboard/Ticker";
import WalletContainer from "@/src/components/dashboard/WalletContainer";
import { useParams } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "@/src/context/store";
import { useState } from "react";
import OrderHistory from "@/src/components/dashboard/TradeContainer/OrderHistory";

export default function Home() {

    const [activeTab, setActiveTab] = useState<
        "OPEN_ORDER" | "ORDER_HISTORY" | "TRADE_HISTORY" | "HOLDING"
    >("OPEN_ORDER");


    return (
        <>
            <Provider store={store}>
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

                        <div className="w-full text-white mt-2 bg-[#0b0e11] rounded-sm p-5 mb-5 min-h-92">
                            <div className="flex gap-5 text-sm font-semibold text-gray-400">

                                <button
                                    onClick={() => setActiveTab("OPEN_ORDER")}
                                    className={activeTab === "OPEN_ORDER" ? "text-white " : ""}
                                >
                                    <p className="cursor-pointer">
                                        Open Order
                                    </p>
                                </button>


                                <button
                                    onClick={() => setActiveTab("ORDER_HISTORY")}
                                    className={activeTab === "ORDER_HISTORY" ? "text-white" : ""}
                                >
                                    <p className="cursor-pointer">
                                        Order History
                                    </p>
                                </button>

                                <button
                                    onClick={() => setActiveTab("TRADE_HISTORY")}
                                    className={activeTab === "TRADE_HISTORY" ? "text-white cursor-pointer" : ""}
                                >
                                    <p className="cursor-pointer">
                                        Trade History
                                    </p>
                                </button>
                                <button
                                    onClick={() => setActiveTab("HOLDING")}
                                    className={activeTab === "HOLDING" ? "text-white cursor-pointer" : ""}
                                >
                                    <p className="cursor-pointer">
                                        Holding
                                    </p>
                                </button>
                            </div>

                            {activeTab === "OPEN_ORDER" && <TradeBlock />}
                            {activeTab === "ORDER_HISTORY" && <OrderHistory />}
                        </div>
                    </div>
                </div >
            </Provider >
        </>

    );
}
