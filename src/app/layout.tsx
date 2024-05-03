import { ThemeProvider } from '@/app/providers'
import { Container } from '@/components/Container'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'
import './global.css'
import Header from '@/components/Header'

const meta = {
  title: 'Codeflict',
  description:
    'A blog packed with code snippets for software development enthusiasts. We provide in-depth reviews of the latest technologies and practical tips to enhance your coding skills.',
  image: `${WEBSITE_HOST_URL}/og-preview.jpg`,
  keywords: 'software development, code, programming, blog, codeflict',
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: '%s | Codeflict',
  },
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
  const currentYear = new Date().getFullYear();
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className='page-body md:mx-12'>
            <Header />
            <main>
              <Container>{children}</Container>
            </main>
            <footer className="py-16 text-gray-400">
              <Container>
                <p>
                  {currentYear} {' '}
                  <Link className="link text-gray-400 underline" href="https://codeflict.com/">
                    Codeflict
                  </Link>
                  {' '} - All right reserved
                </p>
              </Container>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
