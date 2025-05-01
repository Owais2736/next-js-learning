import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <>
      <nav>
        <ul className='flex justify-start gap-10 bg-slate-400 text-white items-center p-5'>
          <Link href={"/"}> <li className='cursor-pointer'>Home</li>   </Link>
          <Link href={"/about"}> <li className='cursor-pointer'>About</li></Link>
          <Link href={"/contact"}> <li className='cursor-pointer'>Contact</li></Link>
        </ul>
      </nav>

    </>
  )
}

export default Navbar
