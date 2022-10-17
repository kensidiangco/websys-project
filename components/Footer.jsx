import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className="p-12 bg-black text-white flex flex-col gap-4 justify-center items-center">
        <Link href="/Reviews">
            <p className="text-2xl font-bold cursor-pointer">Make a Review</p>
        </Link>
        <p className="text-sm"><a href="/About"> Team X7 Websystem Project @2022 </a> | Saint Jude College Manila</p>
    </div>
  )
}

export default Footer