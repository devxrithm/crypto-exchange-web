"use client";

import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget({ symbol }) {
  const container = useRef();

  useEffect(() => {
    if (!container.current) return;

    // Clear any previous widget when symbol changes
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      allow_symbol_change: true,
      calendar: true,
      details: false,
      hide_side_toolbar: true,
      hide_top_toolbar: true,
      hide_legend: false,
      hide_volume: false,
      hotlist: false,
      interval: "D",
      locale: "en",
      save_image: true,
      style: "1",
      symbol: symbol, // dynamic
      theme: "dark",
      timezone: "Etc/UTC",
      backgroundColor: "#000000",
      gridColor: "#11241c",
      watchlist: [],
      withdateranges: false,
      compareSymbols: [],
      studies: [],
      width: 680,
      height: 420,
    });

    container.current.appendChild(script);
  }, [symbol]); // re-run when symbol changes

  return (
    <div
      className="tradingview-widget-container "
      ref={container}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
