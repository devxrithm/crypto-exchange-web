"use client"

import Link from 'next/link';

const page = () => {
  const coins = [
    {
      name: 'Bitcoin',
      ticker: 'BTC',
      price: '$65,432.10',
      change: '+1.25%',
      positive: true,
      marketCap: '$1.29T',
      volume: '$38.4B',
      spark: 'M0,20 L10,18 L20,15 L30,17 L40,10 L50,12 L60,6 L70,8 L80,3',
    },
    {
      name: 'Ethereum',
      ticker: 'ETH',
      price: '$3,512.80',
      change: '-0.50%',
      positive: false,
      marketCap: '$422.1B',
      volume: '$17.2B',
      spark: 'M0,8 L10,10 L20,9 L30,13 L40,14 L50,16 L60,15 L70,18 L80,20',
    },
    {
      name: 'Tether',
      ticker: 'USDT',
      price: '$1.00',
      change: '+0.01%',
      positive: true,
      marketCap: '$112.5B',
      volume: '$55.1B',
      spark: 'M0,11 L10,11 L20,11 L30,12 L40,11 L50,11 L60,12 L70,11 L80,11',
    },
    {
      name: 'Solana',
      ticker: 'SOL',
      price: '$135.70',
      change: '+3.80%',
      positive: true,
      marketCap: '$62.7B',
      volume: '$4.8B',
      spark: 'M0,22 L10,19 L20,16 L30,18 L40,12 L50,10 L60,7 L70,5 L80,2',
    },
    {
      name: 'BNB',
      ticker: 'BNB',
      price: '$589.50',
      change: '-1.10%',
      positive: false,
      marketCap: '$87.0B',
      volume: '$2.1B',
      spark: 'M0,6 L10,8 L20,7 L30,10 L40,12 L50,14 L60,13 L70,16 L80,18',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Create an Account',
      desc: 'Sign up in minutes with just your email. No lengthy verification to get started.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Deposit Funds',
      desc: 'Securely transfer crypto to your wallet. Supports 50+ networks with instant confirmation.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18-3a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Start Trading',
      desc: 'Access 400+ pairs with advanced charts, limit orders, and real-time market data.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { label: 'Trading Volume', value: '$4.2B', sub: 'in the last 24 hours' },
    { label: 'Active Users', value: '2.8M', sub: 'traders worldwide' },
    { label: 'Trading Pairs', value: '400+', sub: 'across major chains' },
    { label: 'Uptime', value: '99.9%', sub: 'platform reliability' },
  ];

  return (
    <div
      className="min-h-screen text-sm mt-5
      "
      style={{
        background: '#000000',
        color: 'hsl(210 20% 98%)',
        fontFamily: "'Geist', 'Inter', system-ui, sans-serif",
      }}
    >
      <section className="relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(215 20.2% 65.1% / 0.3) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: "url('/close-up-hand-bitcoin-concept.jpg')" }}
        />

        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-24 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
              style={{
                background: 'hsl(217.2 32.6% 17.5%)',
                color: 'hsl(215 20.2% 65.1%)',
                border: '1px solid hsl(217.2 32.6% 22%)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live markets · 400+ pairs
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-5 text-['hsl(210 20% 98%)']"
          >
            The Future of<br />
            <span className="text-gray-400">Crypto Trading</span> is Here
          </h1>

          <p
            className="text-base mb-8 max-w-xl mx-auto leading-relaxed"
            style={{ color: 'hsl(215 20.2% 65.1%)' }}
          >
            Trade 400+ cryptocurrencies with institutional-grade security, sub-millisecond execution,
            and the deepest liquidity on the market.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/in/auth/signup"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-semibold transition-all"
              style={{
                background: 'hsl(210 20% 98%)',
                color: 'hsl(224 71.4% 4.1%)',
              }}
            >
              Start Trading Free
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="#markets"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-medium transition-colors"
              style={{
                background: 'hsl(217.2 32.6% 17.5%)',
                color: 'hsl(210 20% 98%)',
                border: '1px solid hsl(217.2 32.6% 22%)',
              }}
            >
              View Markets
            </Link>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs"
            style={{ color: 'hsl(215 20.2% 45%)' }}
          >
            {['SOC 2 Certified', '256-bit Encryption', '$350M Insurance Fund', 'Regulated Exchange'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid hsl(217.2 32.6% 17.5%)', borderBottom: '1px solid hsl(217.2 32.6% 17.5%)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x" style={{ divideColor: 'hsl(217.2 32.6% 17.5%)' }}>
          {stats.map((s, i) => (
            <div
              key={i}
              className="px-8 py-6 text-center"
              style={{ borderRight: i < 3 ? '1px solid hsl(217.2 32.6% 17.5%)' : 'none' }}
            >
              <p className="text-2xl font-bold tracking-tight" style={{ color: 'hsl(210 20% 98%)' }}>{s.value}</p>
              <p className="text-xs font-medium mt-0.5" style={{ color: 'hsl(215 20.2% 65.1%)' }}>{s.label}</p>
              <p className="text-xs mt-0.5" style={{ color: 'hsl(215 20.2% 45%)' }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <section id="markets" className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs font-medium mb-1" style={{ color: 'hsl(215 20.2% 45%)' }}>LIVE DATA</p>
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: 'hsl(210 20% 98%)' }}>Market Trends</h2>
          </div>
          <Link
            href="#"
            className="text-xs font-medium transition-colors"
            style={{ color: 'hsl(215 20.2% 65.1%)' }}
          >
            View all markets →
          </Link>
        </div>

        <div
          className="rounded-lg overflow-hidden"
          style={{
            border: '1px solid hsl(217.2 32.6% 17.5%)',
            background: 'hsl(222.2 84% 4.9%)',
          }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: '1px solid hsl(217.2 32.6% 17.5%)' }}>
                {['#', 'Asset', 'Price', '24h Change', 'Market Cap', 'Volume', '7D Chart', ''].map((h, i) => (
                  <th
                    key={i}
                    className={`py-3 px-4 text-xs font-medium ${i > 1 ? 'text-right' : 'text-left'} ${i === 7 ? 'text-right' : ''}`}
                    style={{ color: 'hsl(215 20.2% 45%)' }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {coins.map((coin, idx) => (
                <tr
                  key={coin.ticker}
                  className="group transition-colors"
                  style={{ borderBottom: idx < coins.length - 1 ? '1px solid hsl(217.2 32.6% 12%)' : 'none' }}
                >
                  <td className="py-4 pl-4 pr-2 w-8">
                    <span className="text-xs" style={{ color: 'hsl(215 20.2% 40%)' }}>{String(idx + 1).padStart(2, '0')}</span>
                  </td>
    
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      {/* Placeholder icon */}
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                        style={{
                          background: 'hsl(217.2 32.6% 17.5%)',
                          color: 'hsl(210 20% 98%)',
                        }}
                      >
                        {coin.ticker.slice(0, 2)}
                      </div>
                      <div>
                        <p className="font-semibold text-xs" style={{ color: 'hsl(210 20% 98%)' }}>{coin.name}</p>
                        <p className="text-xs mt-0.5" style={{ color: 'hsl(215 20.2% 45%)' }}>{coin.ticker}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className="font-mono font-medium text-xs" style={{ color: 'hsl(210 20% 98%)' }}>{coin.price}</span>
                  </td>

                  <td className="py-4 px-4 text-right">
                    <span
                      className="inline-flex items-center justify-end gap-1 font-mono text-xs font-medium px-2 py-0.5 rounded"
                      style={{
                        background: coin.positive ? 'hsl(142.1 76.2% 36.3% / 0.1)' : 'hsl(0 72.2% 50.6% / 0.1)',
                        color: coin.positive ? 'hsl(142.1 76.2% 46.3%)' : 'hsl(0 72.2% 60.6%)',
                      }}
                    >
                      {coin.positive ? '▲' : '▼'} {coin.change}
                    </span>
                  </td>

                  <td className="py-4 px-4 text-right">
                    <span className="font-mono text-xs" style={{ color: 'hsl(215 20.2% 65.1%)' }}>{coin.marketCap}</span>
                  </td>

                  <td className="py-4 px-4 text-right">
                    <span className="font-mono text-xs" style={{ color: 'hsl(215 20.2% 65.1%)' }}>{coin.volume}</span>
                  </td>

                  <td className="py-4 px-4 text-right">
                    <svg width="80" height="28" viewBox="0 0 80 28" className="inline-block">
                      <path
                        d={coin.spark}
                        stroke={coin.positive ? 'hsl(142.1 76.2% 46.3%)' : 'hsl(0 72.2% 60.6%)'}
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </td>

                  <td className="py-4 pl-4 pr-4 text-right">
                    <Link
                      href={`/in/spot/${coin.ticker.toLowerCase()}usdt`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors"
                      style={{
                        background: 'hsl(217.2 32.6% 17.5%)',
                        color: 'hsl(210 20% 98%)',
                        border: '1px solid hsl(217.2 32.6% 22%)',
                      }}
                    >
                      Trade
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section
        className="py-20 px-6"
        style={{ borderTop: '1px solid hsl(217.2 32.6% 17.5%)' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-medium mb-2" style={{ color: 'hsl(215 20.2% 45%)' }}>HOW IT WORKS</p>
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: 'hsl(210 20% 98%)' }}>
              Get started in 3 easy steps
            </h2>
            <p className="mt-2 text-sm" style={{ color: 'hsl(215 20.2% 65.1%)' }}>
              From sign-up to first trade in under 5 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative rounded-lg p-6 transition-colors"
                style={{
                  background: 'hsl(222.2 84% 4.9%)',
                  border: '1px solid hsl(217.2 32.6% 17.5%)',
                }}
              >
          
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-10 -right-2.5 w-5 h-px z-10"
                    style={{ background: 'hsl(217.2 32.6% 22%)' }}
                  />
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'hsl(217.2 32.6% 17.5%)',
                      color: 'hsl(215 20.2% 65.1%)',
                      border: '1px solid hsl(217.2 32.6% 22%)',
                    }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="text-xs font-mono font-medium mt-2.5"
                    style={{ color: 'hsl(215 20.2% 40%)' }}
                  >
                    {step.num}
                  </span>
                </div>

                <h3
                  className="font-semibold text-sm mb-2"
                  style={{ color: 'hsl(210 20% 98%)' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: 'hsl(215 20.2% 55%)' }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/in/auth/signup"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-semibold"
              style={{
                background: 'hsl(210 20% 98%)',
                color: 'hsl(224 71.4% 4.1%)',
              }}
            >
              Create Free Account →
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-16 px-6"
        style={{ borderTop: '1px solid hsl(217.2 32.6% 17.5%)' }}
      >
        <div
          className="max-w-5xl mx-auto rounded-lg p-8 md:p-12"
          style={{
            background: 'hsl(222.2 84% 4.9%)',
            border: '1px solid hsl(217.2 32.6% 17.5%)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-medium mb-3" style={{ color: 'hsl(215 20.2% 45%)' }}>SECURITY FIRST</p>
              <h2 className="text-2xl font-bold tracking-tight mb-3" style={{ color: 'hsl(210 20% 98%)' }}>
                Your assets,<br />fully protected.
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(215 20.2% 65.1%)' }}>
                We hold 95% of user funds in offline cold wallets, backed by a
                $350M insurance fund and audited by top security firms.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Cold Storage', val: '95%', desc: 'of assets offline' },
                { label: 'Insurance Fund', val: '$350M', desc: 'user protection' },
                { label: 'Uptime', val: '99.9%', desc: 'platform reliability' },
                { label: 'Security Audits', val: 'Quarterly', desc: 'by top firms' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-md p-4"
                  style={{
                    background: 'hsl(217.2 32.6% 10%)',
                    border: '1px solid hsl(217.2 32.6% 17.5%)',
                  }}
                >
                  <p className="font-bold text-sm" style={{ color: 'hsl(210 20% 98%)' }}>{item.val}</p>
                  <p className="text-xs font-medium mt-0.5" style={{ color: 'hsl(215 20.2% 65.1%)' }}>{item.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'hsl(215 20.2% 40%)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer
        className="px-6 py-10 mt-10"
        style={{ borderTop: '1px solid hsl(217.2 32.6% 17.5%)' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">

            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold"
                style={{ background: 'hsl(210 20% 98%)', color: 'hsl(224 71.4% 4.1%)' }}
              >
                CX
              </div>
              <span className="font-semibold text-sm" style={{ color: 'hsl(210 20% 98%)' }}>CryptoExchange</span>
            </div>

     
            <div className="flex flex-wrap items-center justify-center gap-6">
              {['About Us', 'Careers', 'Blog', 'Contact', 'Terms of Service', 'Privacy Policy'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs transition-colors"
                  style={{ color: 'hsl(215 20.2% 50%)' }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 text-xs"
            style={{
              borderTop: '1px solid hsl(217.2 32.6% 17.5%)',
              color: 'hsl(215 20.2% 40%)',
            }}
          >
            <p>© {new Date().getFullYear()} CryptoExchange Inc. All rights reserved.</p>
            <p>Regulated · Insured · SOC 2 Certified</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;