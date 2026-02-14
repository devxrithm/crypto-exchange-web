import { api } from "@/src/lib/axios";
import axios from "axios";
import React, { useEffect, useState } from "react";

type OrderBookItem = {
  value: string;
  score: number;
};


const Orderbook = () => {
  const [data, setData] = useState<OrderBookItem[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await api.get("/api/order-book/buy-order-book/btcusdt");
        setData(res.data.book);
        console.log(res.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data?.message || "Failed to fetch orderbook");
        } else {
          setError("Something went wrong");
        }
      }
    };
    fetchBalance();
  }, []);

  return (
    <>
      <div className="px-2 py-5 h-max text-white bg-[#0b0e11] mt-2 rounded-sm w-68">
        <h1 className="mx-3">Orderbook</h1>
        <hr className="text-gray-700 mt-2 mx-2" />

        {error && (
          <p className="text-red-400 text-xs px-3 py-2">{error}</p>
        )}

        <div className="max-h-90 overflow-y-auto">
          <table className="w-full text-xs">
            <thead className="sticky top-0 z-10 bg-black">
              <tr className="text-slate-500">
                <th className="px-3 py-1.5 text-left font-medium min-w-[2rem]">
                  Price
                </th>
                <th className="px-3 py-1.5 text-right font-medium min-w-[2rem]">
                  QTY
                </th>
                <th className="px-3 py-1.5 text-right font-medium min-w-[2rem]">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-3 py-6 text-center text-slate-600"
                  >
                    {error ? "Failed to load" : "No results. Waiting for data…"}
                  </td>
                </tr>
              ) : (
                data.map((item) => {
                  const qty = item.value.split('|')
                  const quantity = Number(qty[2])
                  const amount = (quantity * Number(item.score)).toFixed(2)

                  return (
                    <tr
                      key={item.value}
                      className="border-b border-slate-900 hover:bg-slate-900/50 transition-colors"
                    >
                      <td className="px-3 py-2 text-emerald-400 font-medium">
                        {item.score.toFixed(3)}
                      </td>
                      <td className="px-3 py-2 text-right  text-slate-300">
                        {quantity.toFixed(5)}
                      </td>
                      <td className="px-3 py-2 text-right text-slate-300">
                        {amount}
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>

            <h1 className=" py-3 font-bold text-center text-white text-2xl">72000</h1>
            {/* sell order book */}
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-3 py-6 text-center text-slate-600"
                  >
                    {error ? "Failed to load" : "No results. Waiting for data…"}
                  </td>
                </tr>
              ) : (
                data.map((item) => {
                  const qty = item.value.split('|')
                  const quantity = Number(qty[2])
                  const amount = (quantity * Number(item.score)).toFixed(2)

                  return (
                    <tr
                      key={item.value}
                      className="border-b border-slate-900 hover:bg-slate-900/50 transition-colors"
                    >
                      <td className="px-3 py-2 text-red-400  font-medium">
                        {item.score.toFixed(3)}
                      </td>
                      <td className="px-3 py-2 text-right  text-slate-300">
                        {quantity.toFixed(5)}
                      </td>
                      <td className="px-3 py-2 text-right text-slate-300">
                        {amount}
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Orderbook;