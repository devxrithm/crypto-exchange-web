import React from "react";

const TradeBlock = () => {
  return (
    <>
      <div className="w-full text-white mt-2 h-max bg-[#0b0e11] rounded-sm p-5 mb-5">
        <div className="flex gap-5 text-sm font-semibold text-gray-400">
          <div className="">Open Order</div>
          <div className="">Order History</div>
          <div className="">Trade History</div>
          <div className="">Holding</div>
        </div>
        <table className="w-[80%] text-sm mt-5">
          <thead>
            <tr className="text-gray-500">
              <th className="text-center min-w-34">ASSET</th>
              <th className="text-center min-w-34">Qty</th>
              <th className="text-center min-w-34">Entry Price</th>
              <th className="text-center min-w-34">Order Id</th>
              <th className="text-center min-w-34">Order Type</th>
              <th className="text-center min-w-34">Order Status</th>
              <th className="text-center min-w-34">Order Side</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="h-2"></td>
            </tr>
            <tr className="text-gray-300 text-center text-sm bg-[#12161b]">
              <td className="py-3">BTCUSDT</td>
              <td className="py-3">0.15</td>
              <td className="py-3">199.302369</td>
              <td className="py-3">fekfewflheifnkjsdnc.kjsefiwehfkj</td>
              <td className="py-3">Market</td>
              <td className="py-3">Open</td>
              <td className="py-3 text-green-300">Buy</td>
            </tr>
            <tr className="text-gray-300 text-center text-sm bg-[#12161b]">
              <td className="py-3">BTCUSDT</td>
              <td className="py-3">0.15</td>
              <td className="py-3">199.302369</td>
              <td className="py-3">fekfewflheifnkjsdnc.kjsefiwehfkj</td>
              <td className="py-3">Market</td>
              <td className="py-3">Open</td>
              <td className="py-3 text-red-300">Sell</td>
            </tr>
            <tr className="text-gray-300 text-center text-sm bg-[#12161b]">
              <td className="py-3">BTCUSDT</td>
              <td className="py-3">0.15</td>
              <td className="py-3">199.302369</td>
              <td className="py-3">fekfewflheifnkjsdnc.kjsefiwehfkj</td>
              <td className="py-3">Market</td>
              <td className="py-3">Open</td>
              <td className="py-3 text-green-300">Buy</td>
            </tr>
            <tr className="text-gray-300 text-center text-sm bg-[#12161b]">
              <td className="py-3">BTCUSDT</td>
              <td className="py-3">0.15</td>
              <td className="py-3">199.302369</td>
              <td className="py-3">fekfewflheifnkjsdnc.kjsefiwehfkj</td>
              <td className="py-3">Market</td>
              <td className="py-3">Open</td>
              <td className="py-3 text-red-300">Sell</td>
            </tr>
            <tr className="text-gray-300 text-center text-sm bg-[#12161b]">
              <td className="py-3">BTCUSDT</td>
              <td className="py-3">0.15</td>
              <td className="py-3">199.302369</td>
              <td className="py-3">fekfewflheifnkjsdnc.kjsefiwehfkj</td>
              <td className="py-3">Market</td>
              <td className="py-3">Open</td>
              <td className="py-3 text-green-300">Buy</td>
            </tr>
            <tr className="text-gray-300 text-center text-sm bg-[#12161b]">
              <td className="py-3">BTCUSDT</td>
              <td className="py-3">0.15</td>
              <td className="py-3">199.302369</td>
              <td className="py-3">fekfewflheifnkjsdnc.kjsefiwehfkj</td>
              <td className="py-3">Market</td>
              <td className="py-3">Open</td>
              <td className="py-3 text-red-300">Sell</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TradeBlock;
