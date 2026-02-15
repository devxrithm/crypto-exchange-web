"use client"
import { api } from "@/src/lib/axios";
import { useEffect, useState } from "react";

const WalletDashboard = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await api.get("/wallet/balance");
        setBalance(res.data);
      } catch (error) {
        console.error("Failed to fetch balance:", error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="text-white m-16">
      <div className=" text-2xl font-semibold ">
        <h1 className="text-2xl">Total Balance</h1>
        <h1 className="text-9xl font-mono">$ 320000.25 <span className="text-6xl text-gray-300">USDT</span></h1>
      </div>
      <hr className="text-gray-700 mt-3" />
      <div className="mt-10">
        <h1 className="text-3xl font-semibold">Wallet</h1>
        <div className="flex gap-5 items-center flex-wrap mt-5">
          <div className="bg-[#0b0e11] min-w-64 p-5 rounded-xl">
            <p className="font-semibold text-2xl">BTCUSDT</p>
            <p className="font-semibold text-5xl font-mono">0.255554</p>
          </div>
          <div className="bg-[#0b0e11] min-w-64 p-5 rounded-xl">
            <p className="font-semibold text-2xl">BTCUSDT</p>
            <p className="font-semibold text-5xl font-mono">0.255554</p>
          </div>
          <div className="bg-[#0b0e11] min-w-64 p-5 rounded-xl">
            <p className="font-semibold text-2xl">BTCUSDT</p>
            <p className="font-semibold text-5xl font-mono">0.255554</p>
          </div>
          <div className="bg-[#0b0e11] min-w-64 p-5 rounded-xl">
            <p className="font-semibold text-2xl">BTCUSDT</p>
            <p className="font-semibold text-5xl font-mono">0.255554</p>
          </div>
          <div className="bg-[#0b0e11] min-w-64 p-5 rounded-xl">
            <p className="font-semibold text-2xl">BTCUSDT</p>
            <p className="font-semibold text-5xl font-mono">0.255554</p>
          </div>
          <div className="bg-[#0b0e11] min-w-64 p-5 rounded-xl">
            <p className="font-semibold text-2xl">BTCUSDT</p>
            <p className="font-semibold text-5xl font-mono">0.255554</p>
          </div>
          <div className="bg-[#0b0e11] min-w-64 p-5 rounded-xl">
            <p className="font-semibold text-2xl">BTCUSDT</p>
            <p className="font-semibold text-5xl font-mono">0.255554</p>
          </div>
          <div className="bg-[#0b0e11] min-w-64 p-5 rounded-xl">
            <p className="font-semibold text-2xl">BTCUSDT</p>
            <p className="font-semibold text-5xl font-mono">0.255554</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default WalletDashboard;


// "use client";

// import { api } from "@/src/lib/axios";
// import { useEffect, useState } from "react";
// import Link from "next/link";

// interface WalletAsset {
//   symbol: string;
//   name: string;
//   balance: number;
//   usdValue: number;
//   change24h: number;
// }

// const C = {
//   bg:        "#000000",
//   surface:   "hsl(222.2 84% 4.9%)",
//   surfaceHi: "hsl(217.2 32.6% 10%)",
//   border:    "hsl(217.2 32.6% 17.5%)",
//   text:      "hsl(210 20% 98%)",
//   muted:     "hsl(215 20.2% 65.1%)",
//   faint:     "hsl(215 20.2% 40%)",
//   green:     "hsl(142.1 76.2% 46.3%)",
//   greenBg:   "hsl(142.1 76.2% 36.3% / 0.12)",
//   red:       "hsl(0 72.2% 60.6%)",
//   redBg:     "hsl(0 72.2% 50.6% / 0.12)",
// };

// // Dummy wallet data — replace with real API response shape
// const DUMMY_ASSETS: WalletAsset[] = [
//   { symbol: "BTC",  name: "Bitcoin",  balance: 0.255554,   usdValue: 16_722.41, change24h:  1.25 },
//   { symbol: "ETH",  name: "Ethereum", balance: 4.820000,   usdValue: 16_939.96, change24h: -0.50 },
//   { symbol: "SOL",  name: "Solana",   balance: 38.75000,   usdValue:  5_254.63, change24h:  3.80 },
//   { symbol: "BNB",  name: "BNB",      balance: 6.120000,   usdValue:  3_607.44, change24h: -1.10 },
//   { symbol: "USDT", name: "Tether",   balance: 2_840.000,  usdValue:  2_840.00, change24h:  0.01 },
//   { symbol: "XRP",  name: "XRP",      balance: 2_120.000,  usdValue:  1_573.00, change24h:  2.40 },
//   { symbol: "ADA",  name: "Cardano",  balance: 3_200.000,  usdValue:  1_184.00, change24h:  0.88 },
//   { symbol: "AVAX", name: "Avalanche",balance: 28.50000,   usdValue:  1_094.40, change24h:  4.12 },
// ];

// // ── Helper components ──────────────────────────────────────────────────────────

// const Card = ({
//   children,
//   className = "",
//   style = {},
// }: {
//   children: React.ReactNode;
//   className?: string;
//   style?: React.CSSProperties;
// }) => (
//   <div
//     className={`rounded-xl ${className}`}
//     style={{ background: C.surface, border: `1px solid ${C.border}`, ...style }}
//   >
//     {children}
//   </div>
// );

// const TokenAvatar = ({ symbol }: { symbol: string }) => (
//   <div
//     className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
//     style={{ background: C.surfaceHi, color: C.muted, border: `1px solid ${C.border}` }}
//   >
//     {symbol.slice(0, 2)}
//   </div>
// );

// // ── Main Component ─────────────────────────────────────────────────────────────

// const WalletDashboard = () => {
//   const [balance, setBalance] = useState<number | null>(null);
//   const [assets] = useState<WalletAsset[]>(DUMMY_ASSETS);
//   const [hideBalance, setHideBalance] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const totalUSD = assets.reduce((sum, a) => sum + a.usdValue, 0);

//   useEffect(() => {
//     const fetchBalance = async () => {
//       try {
//         const res = await api.get("/wallet/balance");
//         setBalance(res.data);
//       } catch (error) {
//         console.error("Failed to fetch balance:", error);
//         // Fall back to computed total from assets
//         setBalance(totalUSD);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBalance();
//   }, []);

//   const displayBalance = balance ?? totalUSD;

//   return (
//     <div className="min-h-screen" style={{ background: C.bg, color: C.text }}>
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">

//         {/* ── PAGE TITLE ── */}
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-xs font-medium uppercase tracking-widest" style={{ color: C.faint }}>
//               My Wallet
//             </p>
//             <h1 className="text-xl font-semibold mt-0.5" style={{ color: C.text }}>
//               Overview
//             </h1>
//           </div>
//           <div className="flex items-center gap-2">
//             <button
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium"
//               style={{ background: C.surface, color: C.muted, border: `1px solid ${C.border}` }}
//             >
//               <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 5v14M5 12l7-7 7 7" />
//               </svg>
//               Deposit
//             </button>
//             <button
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
//               style={{ background: C.text, color: "#000" }}
//             >
//               <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
//               </svg>
//               Transfer
//             </button>
//           </div>
//         </div>

//         {/* ── BALANCE HERO ── */}
//         <Card className="p-6 sm:p-8 relative overflow-hidden">
//           {/* Glow */}
//           <div
//             className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
//             style={{ background: "radial-gradient(circle, hsl(210 20% 98% / 0.03) 0%, transparent 70%)" }}
//           />

//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
//             {/* Left: balance */}
//             <div>
//               <div className="flex items-center gap-2 mb-3">
//                 <p className="text-xs font-medium uppercase tracking-widest" style={{ color: C.faint }}>
//                   Total Balance
//                 </p>
//                 {/* Hide/show toggle */}
//                 <button
//                   onClick={() => setHideBalance((v) => !v)}
//                   className="flex items-center justify-center w-5 h-5 rounded transition-colors"
//                   style={{ color: C.faint }}
//                 >
//                   {hideBalance ? (
//                     <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                       <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" />
//                     </svg>
//                   ) : (
//                     <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
//                     </svg>
//                   )}
//                 </button>
//               </div>

//               {loading ? (
//                 <div className="h-14 w-64 rounded-lg animate-pulse" style={{ background: C.surfaceHi }} />
//               ) : (
//                 <div className="flex items-end gap-3">
//                   <p
//                     className="font-mono font-bold leading-none"
//                     style={{ fontSize: "clamp(2.2rem, 6vw, 3.5rem)", color: C.text }}
//                   >
//                     {hideBalance
//                       ? "$ ••••••••"
//                       : `$ ${displayBalance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
//                   </p>
//                   <span className="text-lg font-mono mb-1" style={{ color: C.faint }}>USDT</span>
//                 </div>
//               )}

//               <div className="flex items-center gap-3 mt-3">
//                 <span
//                   className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded"
//                   style={{ color: C.green, background: C.greenBg }}
//                 >
//                   ▲ +1.18%
//                 </span>
//                 <span className="text-xs" style={{ color: C.faint }}>24h change</span>
//               </div>
//             </div>

//             {/* Right: quick stats */}
//             <div className="flex gap-6 sm:gap-10">
//               {[
//                 { label: "Assets",    value: assets.length.toString() },
//                 { label: "P&L Today", value: "+$824.30", positive: true },
//                 { label: "Open Orders", value: "3" },
//               ].map((s) => (
//                 <div key={s.label} className="text-right">
//                   <p className="text-xs" style={{ color: C.faint }}>{s.label}</p>
//                   <p
//                     className="text-sm font-semibold font-mono mt-0.5"
//                     style={{ color: s.positive ? C.green : C.text }}
//                   >
//                     {s.value}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Sparkline */}
//           <svg
//             viewBox="0 0 400 40"
//             className="w-full mt-6 opacity-30"
//             preserveAspectRatio="none"
//             style={{ height: "32px" }}
//           >
//             <defs>
//               <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stopColor={C.text} stopOpacity="0.15" />
//                 <stop offset="100%" stopColor={C.text} stopOpacity="0" />
//               </linearGradient>
//             </defs>
//             <path
//               d="M0,36 L30,30 L60,32 L100,22 L130,24 L170,14 L200,16 L240,9 L270,11 L310,5 L350,7 L400,2"
//               stroke={C.text} strokeWidth="1.5" fill="none"
//             />
//             <path
//               d="M0,36 L30,30 L60,32 L100,22 L130,24 L170,14 L200,16 L240,9 L270,11 L310,5 L350,7 L400,2 L400,40 L0,40 Z"
//               fill="url(#wg)"
//             />
//           </svg>

//           {/* Quick action row */}
//           <div
//             className="grid grid-cols-3 gap-3 mt-5 pt-5"
//             style={{ borderTop: `1px solid ${C.border}` }}
//           >
//             {[
//               { label: "Deposit",  icon: <path d="M12 19V5M5 12l7 7 7-7" /> },
//               { label: "Withdraw", icon: <path d="M12 5v14M5 12l7-7 7 7" /> },
//               { label: "Send",     icon: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /> },
//             ].map((a) => (
//               <button
//                 key={a.label}
//                 className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-medium transition-colors"
//                 style={{ background: C.surfaceHi, color: C.muted, border: `1px solid ${C.border}` }}
//               >
//                 <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   {a.icon}
//                 </svg>
//                 {a.label}
//               </button>
//             ))}
//           </div>
//         </Card>

//         <div>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-sm font-semibold" style={{ color: C.text }}>Your Assets</h2>
//             <span className="text-xs" style={{ color: C.faint }}>{assets.length} tokens</span>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
//             {assets.map((asset) => {
//               const isUp = asset.change24h >= 0;
//               const pct = (asset.usdValue / totalUSD) * 100;

//               return (
//                 <Card
//                   key={asset.symbol}
//                   className="p-4 group cursor-pointer transition-colors hover:border-white/20"
//                 >
//                   {/* Header row */}
//                   <div className="flex items-center justify-between mb-3">
//                     <div className="flex items-center gap-2.5">
//                       <TokenAvatar symbol={asset.symbol} />
//                       <div>
//                         <p className="text-xs font-semibold" style={{ color: C.text }}>{asset.symbol}</p>
//                         <p className="text-xs mt-0.5" style={{ color: C.faint }}>{asset.name}</p>
//                       </div>
//                     </div>
//                     <span
//                       className="text-xs font-mono font-medium px-1.5 py-0.5 rounded"
//                       style={{
//                         color: isUp ? C.green : C.red,
//                         background: isUp ? C.greenBg : C.redBg,
//                       }}
//                     >
//                       {isUp ? "+" : ""}{asset.change24h}%
//                     </span>
//                   </div>

//                   {/* Balance */}
//                   <p
//                     className="font-mono font-bold text-lg leading-none"
//                     style={{ color: C.text }}
//                   >
//                     {hideBalance ? "••••••" : asset.balance.toLocaleString("en-US", { maximumFractionDigits: 6 })}
//                   </p>
//                   <p className="text-xs font-mono mt-1" style={{ color: C.faint }}>
//                     {hideBalance
//                       ? "$ ••••••"
//                       : `≈ $${asset.usdValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
//                   </p>

//                   {/* Allocation bar */}
//                   <div className="mt-3">
//                     <div
//                       className="w-full h-1 rounded-full overflow-hidden"
//                       style={{ background: C.surfaceHi }}
//                     >
//                       <div
//                         className="h-full rounded-full transition-all duration-500"
//                         style={{ width: `${pct}%`, background: C.muted }}
//                       />
//                     </div>
//                     <div className="flex items-center justify-between mt-1.5">
//                       <span className="text-xs" style={{ color: C.faint }}>{pct.toFixed(1)}% of portfolio</span>
//                       <Link
//                         href={`/in/spot/${asset.symbol.toLowerCase()}usdt`}
//                         className="text-xs font-medium transition-colors opacity-0 group-hover:opacity-100"
//                         style={{ color: C.muted }}
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         Trade →
//                       </Link>
//                     </div>
//                   </div>
//                 </Card>
//               );
//             })}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default WalletDashboard;