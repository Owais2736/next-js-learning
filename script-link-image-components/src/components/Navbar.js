import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <>
            <nav className='p-5 flex justify-between px-16 bg-slate-700 text-white'>
                <div className='font-bold text-[22px]'>
                    <h2>Facebook</h2>
                </div>
                <ul className='flex gap-4'>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/about"><li>About</li></Link>
                    <Link href="/contact"><li>Contact</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
