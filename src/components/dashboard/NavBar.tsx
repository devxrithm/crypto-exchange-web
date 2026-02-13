import Link from 'next/link'

const NavBar = () => {
    return (
        <div>
            <nav className='text-white flex justify-around mt-5 items-center'>
                <ul className='flex justify-center items-center gap-5'>
                    <div
                        className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold"
                        style={{ background: 'hsl(210 20% 98%)', color: 'hsl(224 71.4% 4.1%)' }}
                    >
                        CX
                    </div>
                    <li className="text-2xl font-extrabold">CryptoExchange</li>
                </ul>
                <ul className='flex justify-center item-center gap-5'>
                    <Link href={'/in/spot/btcusdt'}>
                        <li className="bg-[#0b0e11] w-34 text-center p-2 rounded-xl">Dashboard</li>
                    </Link>
                    <Link href={'/in/wallet'}>
                        <li className="bg-[#0b0e11] w-34 text-center p-2 rounded-xl">Wallet</li>
                    </Link>
                    <Link href={'/in/market'}>
                        <li className="bg-[#0b0e11] w-34 text-center p-2 rounded-xl">Market</li>
                    </Link>
                </ul>
                <ul className='flex justify-center item-center gap-3'>
                    <Link href={'/in/auth/login'}>
                        <div className="bg-[#0b0e11] w-34 text-center p-2 rounded-xl border ">Login</div>
                    </Link>
                    <Link href={'/in/auth/signup'}>
                        <div className="bg-[#0b0e11] w-34 text-center p-2 rounded-xl bg-white text-black px-4 py-2 rounded-md font-bold">Signup</div>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar