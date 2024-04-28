import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-[520px] w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold tracking-widest text-[#1E1E1E] dark:text-[#C1FF14]">404</h1>
      <div className="bg-[#C1FF14] dark:bg-white text-[#1E1E1E] dark:text-[#1E1E1E] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <a
          className="relative inline-block text-sm font-medium text-[#C1FF14] group active:text-[#C1FF14] focus:outline-none focus:ring"
        >
          <span
            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#C1FF14] group-hover:translate-y-0 group-hover:translate-x-0"
          ></span>

          <span className="relative block px-8 py-3 bg-[#1E1E1E] border border-current">
            <Link href="/">Go back to Home</Link>
          </span>
        </a>
      </button>
    </main>
  )
}
