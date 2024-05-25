import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import { Navigation } from '@/components/nav'

const meta = {
  title: 'Products',
  description: 'I like to blog about web development',
  url: `${WEBSITE_HOST_URL}/about`,
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: meta.url,
  },
}

export default function Products() {
  return (
    <div>
      <Navigation />
      <div className='bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 pt-24 lg:pt-32 pb-8 h-screen'>
        <div className="space-y-7 mx-auto max-w-2xl px-6 lg:max-w-6xl">
          <h1>Products</h1>
          <p>Something new is coming.</p>
        </div>
      </div>
    </div>
  )
}
