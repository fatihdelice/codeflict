import { ThemeProvider } from '@/app/providers'
import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import { HomeLogoButton } from '@/components/HomeLogoButton'
import ThemeSwitch from '@/components/ThemeSwitch'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'
import './global.css'

const meta = {
  title: 'Codeflict',
  description:
    'Sleep deprived father. FE Engineer in China. Lover of Ramen and Kpop',
  image: `${WEBSITE_HOST_URL}/og-preview.jpg`,
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
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className='page-body md:mx-12 md:border-l-2 md:border-r-2 border-black dark:border-white'>
            <header className="py-2 mb-8 md:mb-24 border-b-2 border-black dark:border-white">
              <Container>
                <div className="flex items-center justify-between py-6">
                  <HomeLogoButton />
                  <Navigation />
                  <ThemeSwitch />
                </div>
              </Container>
            </header>
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
