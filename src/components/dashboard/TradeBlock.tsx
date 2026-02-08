"use client";
import { api } from "@/src/lib/axios";
import axios from "axios";
import { useEffect, useState } from "react";
import {message} from "./OrderBlock"


interface OpenPosition {
  orderId: string;
  currencyPair: string;
  orderQuantity: number;
  entryPrice: number;
  orderType: string;
  positionStatus: string;
  orderSide: "BUY" | "SELL";
  _id: string;
}

const TradeBlock = () => {
  const [data, setData] = useState<OpenPosition[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOpenPositions = async () => {
      try {
        const res = await api.get("/api/order/openPositions");
        setData(res.data.data);
        console.log(res.data)
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || "Failed to load orders");
        } else {
          setError("Something went wrong");
        }
      }
    };

    fetchOpenPositions();
  //   const interval = setInterval(fetchOpenPositions, 2000); // every 2 sec

  // return () => clearInterval(interval);
  },[message]);
  const val = message
console.log(val)
  return (
    <div className="w-full text-white mt-2 bg-[#0b0e11] rounded-sm p-5 mb-5">
      <div className="flex gap-5 text-sm font-semibold text-gray-400">
        <div>Open Order</div>
        <div>Order History</div>
        <div>Trade History</div>
        <div>Holding</div>
      </div>

      <table className="w-full px-5 text-sm mt-5">
        <thead>
          <tr className="text-gray-500 text-center">
            <th className="min-w-28">ASSET</th>
            <th className="min-w-28">Qty</th>
            <th className="min-w-28">Entry Price</th>
            <th className="min-w-34">Order Id</th>
            <th className="min-w-28">Order Type</th>
            <th className="min-w-28">Status</th>
            <th className="min-w-28">Side</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 && !error && (
            <tr>
              <td colSpan={7} className="text-center py-6 text-gray-500">
                No open positions
              </td>
            </tr>
          )}
 <tr
             
             className="text-gray-300 text-center  text-sm "
           >
             <td className="py-1"></td>
             <td className="py-1"></td>
             <td className="py-1"></td>
             <td className="py-1"></td>
             <td className="py-1"></td>
             <td className="py-1"></td>
             <td className="py-1"></td>
     
           </tr>
          {data.map((order) => (
            <tr
              key={order.orderId}
              className="text-gray-300 text-center bg-[#12161b] text-sm "
            >
              <td className="py-3">{order.currencyPair}</td>
              <td className="py-3">{Number(order.orderQuantity).toFixed(6)}</td>
              <td className="py-3">{order.entryPrice}</td>
              <td className="py-3">{order.orderId}</td>
              <td className="py-3">{order.orderType}</td>
              <td className="py-3">{order.positionStatus}</td>
              <td
                className={`py-3 ${order.orderSide === "BUY" ? "text-green-400" : "text-red-400"
                  }`}
              >
                {order.orderSide}
              </td>
            </tr>
          ))}
         
        </tbody>
      </table>
    </div>
  );
};

export default TradeBlock;
