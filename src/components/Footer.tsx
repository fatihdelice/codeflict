'use client'
import { useState } from 'react';
import { Container } from '@/components/Container'
import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [isHovered, setIsHovered] = useState(false);
    return (
        <footer className="py-16 text-[#848580] bg-[#090C12] mt-24 text-center">
            <Container>
                <div className="flex w-full lg:w-auto items-center justify-center">
                    <a href="/" className="flex items-center gap-2"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img src={isHovered ? "/logos/codeflict-logo-light.svg" : "/logos/codeflict-logo-gray.svg"} alt="Codeflict Logo" className="w-8 h-8" />
                        <div className="text-3xl home-logo-text">
                            <span className={isHovered ? "text-[#C1FF14]" : "text-[#848580]"}>Code</span>
                            <span className={isHovered ? "text-white" : "text-[#848580]"}>flict</span>
                        </div>
                    </a>
                </div>
                <p>
                    {'Copyright © '}
                    {currentYear} {' '}
                    <Link className="link text-[#848580] hover:text-white underline" href="https://codeflict.com/">
                        Codeflict
                    </Link>
                    {' '} - All right reserved
                </p>
            </Container>
        </footer>
    )
}
