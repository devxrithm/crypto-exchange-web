import Link from 'next/link'

const NavBar = () => {
    return (
        <div>
            <nav className='text-white flex justify-around mt-5 items-center'>
                <ul className='flex justify-center item-center gap-5'>
                    <li className="text-2xl font-extrabold">CRYPTO EXCHANGE</li>
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
                    <div className="bg-[#0b0e11] w-34 text-center p-2 rounded-xl">Login</div>
                    <div className="bg-[#0b0e11] w-34 text-center p-2 rounded-xl">Signup</div>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar