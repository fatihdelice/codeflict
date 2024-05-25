"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { HomeLogoButton } from "./HomeLogoButton";
import MobileHeaderLogo from '@/components/MobileHeaderLogo'
import MobileMenu from '@/components/MobileMenu'

export const Navigation: React.FC = () => {
    const ref = useRef<HTMLElement>(null);
    const [isIntersecting, setIntersecting] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting),
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <header ref={ref}>
                <div
                    className={`fixed inset-x-0 top-0 z-50 backdrop-blur mx-auto max-w-2xl lg:max-w-6xl duration-200 border-b  ${isIntersecting
                        ? "bg-zinc-900/0 border-transparent"
                        : "bg-zinc-900/500  border-zinc-800 "
                        }`}
                >
                    <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
                        <MobileHeaderLogo toggleMobileMenu={toggleMobileMenu} />
                        <div className="hidden justify-between gap-8 lg:flex">
                            <Link
                                href="/blog"
                                className="duration-200 text-zinc-400 hover:text-zinc-100"
                            >
                                Blog
                            </Link>
                            <Link
                                href="/about"
                                className="duration-200 text-zinc-400 hover:text-zinc-100"
                            >
                                About
                            </Link>
                            <Link
                                href="/products"
                                className="duration-200 text-zinc-400 hover:text-zinc-100 flex items-center"
                            >
                                Products
                                <span className="ml-1 px-2 py-0.5 animate-pulse flex rounded-full bg-gray-700 text-xs tracking-wider dark:bg-white/10 text-green-400 dark:text-orange-300"> new</span>
                            </Link>
                        </div>
                        <HomeLogoButton />
                        <Link
                            href="/"
                            className="duration-200 text-zinc-300 hover:text-zinc-100"
                        >
                            <ArrowLeft className="w-6 h-6 " />
                        </Link>
                    </div>
                </div>
            </header>
            {isMobileMenuOpen && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
        </>
    );
};
