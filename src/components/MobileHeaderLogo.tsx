export default function MobileHeaderLogo({ toggleMobileMenu }) {
    return (
        <button className="pr-2 md:hidden" onClick={toggleMobileMenu}>
            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="26" width="26" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path>
            </svg>
        </button>
    )
}
