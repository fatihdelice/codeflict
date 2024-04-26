import React, { useState, useContext } from 'react';
import { useTheme } from 'next-themes'

export function HomeLogoButton() {
    let { resolvedTheme } = useTheme()
    return (
        <div className="flex w-full lg:w-auto items-center justify-between">
            <a href="/" className="flex items-center gap-2">
                {resolvedTheme === 'dark' ?
                    <img src="/logos/codeflict-logo-light.svg" alt="Codeflict Logo" className="w-8 h-8" />
                    :
                    <img src="/logos/codeflict-logo.svg" alt="Codeflict Logo" className="w-8 h-8" />
                }

                <div className="text-3xl home-logo-text">
                    <span className="text-gray-800 dark:text-white">Code</span>
                    <span className="text-[#848580]">flict</span>
                </div>
            </a>
        </div>
    )
}
