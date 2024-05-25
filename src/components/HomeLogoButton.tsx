
export function HomeLogoButton() {

    return (
        <div className="flex lg:w-auto items-center justify-between">
            <a href="/" className="flex items-center gap-2">
                <img src="/logos/codeflict-logo-light.svg" alt="Codeflict Logo" className="w-8 h-8" />
                <div className="text-3xl home-logo-text">
                    <span className="text-gray-800 dark:text-white">Code</span>
                    <span className="text-[#848580]">flict</span>
                </div>
            </a>
        </div>
    )
}
