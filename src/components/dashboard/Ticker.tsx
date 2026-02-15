import React, { useEffect, useState } from "react";

interface TickerData {
  s: string;   // Symbol
  c: string;   // Last price
  p: string;   // Price change
  P: string;   // Price change percent
  h: string;   // High price
  l: string;   // Low price
  v: string;  // Volume
  q: string   // Total traded base asset volume
  o:string
}

interface TickerProps {
  token: string;
}

const Ticker = ({ token }: TickerProps) => {
  const [ticker, setTicker] = useState<TickerData | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const ws = new window.WebSocket(
      `wss://fstream.binance.com/stream?streams=${token}@ticker`
    );

    ws.onopen = () => setConnected(true);

    ws.onmessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        const prices = data?.data;

        if (!prices) return;
        setTicker(prices)
        console.log(prices)
      } catch (err) {
        console.error("Parse error:", err);
      }
    };

    ws.onerror = (err) => console.error("WebSocket error:", err);
    ws.onclose = () => {
      setConnected(false);
      console.warn("Binance WebSocket closed");
    };

    return () => ws.close();
  }, [token]); 
  
  return (
    <div className="w-[73%] text-xl flex justify-around items-center">
      <div className="font-semibold text-gray-100 text-2xl">
        {ticker?.s}
      </div>
      <div className="text-white text-bold">
        $ {ticker?.c}
      </div>
      <div className={Number(ticker?.P )>= 0 ? "text-green-400 flex flex-col" : "text-red-400 flex flex-col"}>
        <span className="text-gray-600 text-xs">24h Chg</span>
        <span className="text-sm">{ticker?.p}{"   "}{ticker?.P}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-600 text-xs">Open Price</span>
        <span className="text-sm text-white" >{ticker?.o}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-600 text-xs">24h High</span>
        <span className="text-sm text-white" >{ticker?.h}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-600 text-xs">24h Low</span>
        <span className="text-sm text-white" >{ticker?.l}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-600 text-xs">24h Vol(BTC)</span>
        <span className="text-sm text-white" >{ticker?.v}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-600 text-xs">24h Vol(USDT)</span>
        <span className="text-sm text-white" >{ticker?.q}</span>
      </div>
    </div>
  );
};

export default Ticker;