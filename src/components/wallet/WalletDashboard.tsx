"use client";

import { api } from "@/src/lib/axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface WalletAsset {
  symbol: string;
  name: string;
  balance: number;
  usdValue: number;
  change24h: number;
}

const ASSETS: WalletAsset[] = [
  { symbol: "BTC",  name: "Bitcoin",   balance: 0.255554,  usdValue: 16722.41, change24h:  1.25 },
  { symbol: "ETH",  name: "Ethereum",  balance: 4.820000,  usdValue: 16939.96, change24h: -0.50 },
  { symbol: "SOL",  name: "Solana",    balance: 38.75000,  usdValue:  5254.63, change24h:  3.80 },
  { symbol: "BNB",  name: "BNB",       balance: 6.120000,  usdValue:  3607.44, change24h: -1.10 },
  { symbol: "USDT", name: "Tether",    balance: 2840.000,  usdValue:  2840.00, change24h:  0.01 },
  { symbol: "XRP",  name: "XRP",       balance: 2120.000,  usdValue:  1573.00, change24h:  2.40 },
  { symbol: "ADA",  name: "Cardano",   balance: 3200.000,  usdValue:  1184.00, change24h:  0.88 },
  { symbol: "AVAX", name: "Avalanche", balance: 28.50000,  usdValue:  1094.40, change24h:  4.12 },
];

const usd = (n: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const COLORS: Record<string, string> = {
  BTC: "#F7931A", ETH: "#627EEA", SOL: "#9945FF",
  BNB: "#F3BA2F", USDT: "#26A17B", XRP: "#00AAE4",
  ADA: "#0033AD", AVAX: "#E84142",
};

export default function WalletDashboard() {
  const [hide, setHide] = useState(false);
  const [mounted, setMounted] = useState(false);
  const total = ASSETS.reduce((s, a) => s + a.usdValue, 0);

  useEffect(() => {
    // fetch real balance here
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#080810] text-white" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&family=Playfair+Display:wght@700;900&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp 0.5s ease forwards; opacity: 0; }
        .asset-row:hover .trade-link { opacity: 1; }
        .bar-fill { transition: width 1s cubic-bezier(0.16,1,0.3,1); }
      `}</style>

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="fade-up flex items-end justify-between mb-12" style={{ animationDelay: "0ms" }}>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 mb-1">Portfolio</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, lineHeight: 1 }}>
              My Wallet
            </h1>
          </div>
          <div className="flex gap-2">
            {["Deposit", "Withdraw"].map((label, i) => (
              <button
                key={label}
                className="px-4 py-2 text-[11px] rounded-lg border transition-all hover:bg-white/5"
                style={{ borderColor: "rgba(255,255,255,0.08)", color: i === 0 ? "#fff" : "rgba(255,255,255,0.4)" }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Balance hero */}
        <div
          className="fade-up rounded-2xl p-8 mb-8 relative overflow-hidden"
          style={{ animationDelay: "60ms", background: "linear-gradient(135deg, #0f0f1a 0%, #0a0a14 100%)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* subtle grid bg */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />

          <div className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">Total Balance</span>
                <button
                  onClick={() => setHide(v => !v)}
                  className="text-white/25 hover:text-white/50 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {hide
                      ? <><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" /></>
                      : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>
                    }
                  </svg>
                </button>
              </div>

              <div className="flex items-baseline gap-3">
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.4rem, 7vw, 4rem)", fontWeight: 900, lineHeight: 1 }}>
                  {hide ? "$ ·····" : `$${usd(total)}`}
                </span>
                <span className="text-sm text-white/25">USDT</span>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">▲ +1.18%</span>
                <span className="text-xs text-white/25">24h</span>
                <span className="text-xs text-white/25">·</span>
                <span className="text-xs text-emerald-400/70">+$824.30 today</span>
              </div>
            </div>

            {/* Mini stats */}
            <div className="flex gap-8">
              {[
                { label: "Assets", value: ASSETS.length },
                { label: "Open Orders", value: 3 },
              ].map(({ label, value }) => (
                <div key={label} className="text-right">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 mb-1">{label}</p>
                  <p className="text-xl font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sparkline */}
          <svg viewBox="0 0 600 48" className="w-full mt-8" style={{ height: 40 }} preserveAspectRatio="none">
            <defs>
              <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,44 C40,40 80,36 120,28 C160,20 200,22 240,15 C280,8 320,10 360,6 C400,2 450,4 500,3 L600,1" stroke="#10b981" strokeWidth="1.5" fill="none" opacity="0.6" />
            <path d="M0,44 C40,40 80,36 120,28 C160,20 200,22 240,15 C280,8 320,10 360,6 C400,2 450,4 500,3 L600,1 L600,48 L0,48Z" fill="url(#sg)" />
          </svg>
        </div>

        {/* Asset table */}
        <div className="fade-up" style={{ animationDelay: "120ms" }}>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[10px] uppercase tracking-[0.25em] text-white/30">Assets</h2>
            <span className="text-[10px] text-white/20">{ASSETS.length} tokens</span>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
            {/* Table header */}
            <div
              className="grid px-5 py-3 text-[9px] uppercase tracking-[0.2em] text-white/20"
              style={{ gridTemplateColumns: "2fr 1.2fr 1.2fr 1fr 1.5fr 60px", borderBottom: "1px solid rgba(255,255,255,0.04)", background: "#0a0a14" }}
            >
              <span>Asset</span>
              <span className="text-right">Balance</span>
              <span className="text-right">Value</span>
              <span className="text-right">24h</span>
              <span>Allocation</span>
              <span />
            </div>

            {ASSETS.map((asset, i) => {
              const isUp = asset.change24h >= 0;
              const pct = (asset.usdValue / total) * 100;
              const color = COLORS[asset.symbol] ?? "#666";

              return (
                <div
                  key={asset.symbol}
                  className="asset-row fade-up grid px-5 py-4 items-center transition-colors hover:bg-white/[0.02]"
                  style={{
                    gridTemplateColumns: "2fr 1.2fr 1.2fr 1fr 1.5fr 60px",
                    borderBottom: i < ASSETS.length - 1 ? "1px solid rgba(255,255,255,0.03)" : "none",
                    animationDelay: `${140 + i * 40}ms`,
                    background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.005)"
                  }}
                >
                  {/* Name */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-semibold flex-shrink-0"
                      style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
                    >
                      {asset.symbol.slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/90">{asset.symbol}</p>
                      <p className="text-[10px] text-white/25">{asset.name}</p>
                    </div>
                  </div>

                  {/* Balance */}
                  <p className="text-sm text-right text-white/60 font-light">
                    {hide ? "·····" : asset.balance.toLocaleString("en-US", { maximumFractionDigits: 6 })}
                  </p>

                  {/* Value */}
                  <p className="text-sm text-right text-white/90">
                    {hide ? "$·····" : `$${usd(asset.usdValue)}`}
                  </p>

                  {/* Change */}
                  <p className={`text-sm text-right font-medium ${isUp ? "text-emerald-400" : "text-red-400"}`}>
                    {isUp ? "+" : ""}{asset.change24h}%
                  </p>

                  {/* Allocation bar */}
                  <div className="pr-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
                        {mounted && (
                          <div
                            className="bar-fill h-full rounded-full"
                            style={{ width: `${pct}%`, background: color, opacity: 0.7 }}
                          />
                        )}
                      </div>
                      <span className="text-[9px] text-white/20 w-8 text-right">{pct.toFixed(0)}%</span>
                    </div>
                  </div>

                  {/* Trade link */}
                  <div className="text-right">
                    <Link
                      href={`/in/spot/${asset.symbol.toLowerCase()}usdt`}
                      className="trade-link text-[10px] text-white/20 hover:text-white/60 transition-all opacity-0 tracking-wide"
                    >
                      Trade →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}