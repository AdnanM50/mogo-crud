"use client";

import Link from "next/link";

const Navber = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-3 text-white bg-slate-800">
        <Link href={'/'}>
        Home.io
        </Link>
        <Link href={'/add-new'} className="bg-gray-400 p-3">
       Add  New
        </Link>
    </nav>
      
    
  )
}

export default Navber
