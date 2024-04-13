import { Container } from "./Container"
import { HomeLogoButton } from "./HomeLogoButton"
import MobileHeaderLogo from "./MobileHeaderLogo"
import ThemeSwitch from "./ThemeSwitch"
import Link from 'next/link'

export default function MobileMenu({ toggleMobileMenu }) {
    return (
        <div className="fixed top-0 left-0 w-full flex-col flex h-full bg-white dark:bg-black z-40">
            <header className="py-2 mb-8 md:mb-24 border-b-2 border-black dark:border-white">
                <Container>
                    <div className="flex items-center justify-between py-6 gap-4">
                        <HomeLogoButton />
                        <ThemeSwitch />
                        <MobileHeaderLogo toggleMobileMenu={toggleMobileMenu} />
                    </div>
                </Container>
            </header>
            <div className="flex-1 overflow-auto p-6 border-t border-white/10">
                <Container>
                    <nav className="grid gap-y-4">
                        <Link href="/about" className="flex items-center text-2xl py-1.5 px-4">
                            <span>About</span>
                        </Link>
                        <Link href="/products" className="flex items-center text-2xl py-1.5 px-4">
                            <span>Products</span>
                            <span className="ml-1 px-2 py-0.5 animate-pulse flex rounded-full bg-gray-700 text-xs tracking-wider dark:bg-white/10 text-green-400 dark:text-orange-300"> new</span>
                        </Link>
                    </nav>
                </Container>
            </div>
        </div>
    )
}
