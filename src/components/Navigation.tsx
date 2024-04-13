import Link from 'next/link'

export function Navigation() {
  return (
    <nav className='w-full lg:w-auto mt-2 lg:flex lg:mt-0 hidden'>
      <ul className='flex flex-col lg:flex-row lg:gap-3'>
        <li>
          <Link href="/about" className="flex lg:px-3 py-2 items-center text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white">
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link href="/products" className="flex lg:px-3 py-2 items-center text-gray-600  dark:text-slate-300 hover:text-gray-900 dark:hover:text-white">
            <span>Products</span>
            <span className="ml-1 px-2 py-0.5 animate-pulse flex rounded-full bg-gray-700 text-xs tracking-wider dark:bg-white/10 text-green-400 dark:text-orange-300"> new</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
