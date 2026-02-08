"use client";
import { api } from "@/src/lib/axios";
import axios from "axios";
import  { useEffect, useState } from "react";

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
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || "Failed to load orders");
        } else {
          setError("Something went wrong");
        }
      }
    };

    fetchOpenPositions();
  }, []);

  return (
    <div className="w-full text-white mt-2 bg-[#0b0e11] rounded-sm p-5 mb-5">
      <div className="flex gap-5 text-sm font-semibold text-gray-400">
        <div>Open Order</div>
        <div>Order History</div>
        <div>Trade History</div>
        <div>Holding</div>
      </div>

      <table className="w-[80%] text-sm mt-5">
        <thead>
          <tr className="text-gray-500 text-center">
            <th className="min-w-34">ASSET</th>
            <th className="min-w-34">Qty</th>
            <th className="min-w-34">Entry Price</th>
            <th className="min-w-34">Order Id</th>
            <th className="min-w-34">Order Type</th>
            <th className="min-w-34">Status</th>
            <th className="min-w-34">Side</th>
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

        </tbody>
        <tbody>
          {data.map((order) => (
            <tr
              key={order._id}
              className="text-gray-300 text-center bg-[#12161b] text-sm"
            >
              <td className="py-3">{order.currencyPair}</td>
              <td className="py-3">{order.orderQuantity}</td>
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
