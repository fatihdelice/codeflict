'use client'
import { useState } from 'react';
import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import { HomeLogoButton } from '@/components/HomeLogoButton'
import ThemeSwitch from '@/components/ThemeSwitch'
import MobileHeaderLogo from '@/components/MobileHeaderLogo'
import MobileMenu from '@/components/MobileMenu'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            <header className="py-2 mb-8 md:mb-24">
                <Container>
                    <div className="flex items-center justify-between py-6 gap-4">
                        <HomeLogoButton />
                        <Navigation />
                        <ThemeSwitch />
                        <MobileHeaderLogo toggleMobileMenu={toggleMobileMenu} />
                    </div>
                </Container>
            </header>
            {isMobileMenuOpen && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
        </>
    )
}
