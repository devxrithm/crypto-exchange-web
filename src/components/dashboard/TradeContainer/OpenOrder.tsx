"use client";
import { resetOrderChange } from "@/src/context/features/orderSlice";
import { api } from "@/src/lib/axios";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OpenPosition } from "@/src/lib/types";

const OpenOrder = () => {
  const [data, setData] = useState<OpenPosition[]>([]);
  const [error, setError] = useState<string | null>(null);
  const isChanging = useSelector((state: any) => state.order.isChanging)

  const dispatch = useDispatch()

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
      finally {
        dispatch(resetOrderChange());
      }
    };

    fetchOpenPositions();
  }, [isChanging, dispatch]);

  return (


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
  );
};

export default OpenOrder;
