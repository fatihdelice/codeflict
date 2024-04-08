import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'

const meta = {
  title: 'Fatih Delice — Computer Engineer, developer',
  description: 'Fatih Delice; Computer Engineer — Developer',
  url: `${WEBSITE_HOST_URL}/fatihdelice`,
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

export default function Fatihdelice() {
  return (
    <div className="space-y-7">
      <p>Something new is coming.</p>
    </div>
  )
}
