import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import './global.css';

const meta = {
  title: 'Codeflict',
  description:
    'A blog packed with code snippets for software development enthusiasts. We provide in-depth reviews of the latest technologies and practical tips to enhance your coding skills.',
  image: `${WEBSITE_HOST_URL}/og-preview.jpg`,
  keywords: 'codeflict, software development, code, programming, blog, html, css, css tricks, java, dotnet, react, react native, angular, code flict, codeflict blog',
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: '%s | Codeflict',
  },
  keywords: meta.keywords,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: 'summary_large_image',
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className='bg-black'>
        {children}
      </body>
    </html>
  )
}
