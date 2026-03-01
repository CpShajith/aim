import React, { useState, useEffect } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import SearchOverlay from './SearchOverlay';
import MenuOverlay from './MenuOverlay';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const showScrolledStyle = isScrolled || !isHomePage;

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 px-2 md:px-4 pointer-events-none">
                <nav
                    className={`
                pointer-events-auto
                w-full max-w-[1600px] rounded-full px-3 md:px-6 py-2 md:py-3 flex items-center justify-between transition-all duration-500 ease-in-out
                ${showScrolledStyle
                            ? 'bg-white/80 backdrop-blur-xl shadow-lg text-black border border-white/40 translate-y-0'
                            : 'bg-white/5 backdrop-blur-sm text-white border border-white/10 translate-y-0'
                        }
            `}
                >
                    {/* Logo */}
                    <div className="flex items-center shrink-0">
                        <Link to="/" className="text-lg md:text-xl font-bold tracking-tight flex items-center gap-1.5 md:gap-2">
                            <img src="/aimlogo.jpeg" alt="Advanced Intelligence in Motion Logo" className="w-5 h-5 md:w-8 md:h-8 object-contain rounded-sm" />
                            <span className="hidden md:inline">Advanced Intelligence in Motion</span>
                        </Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-1 md:space-x-3 shrink-0">
                        <Link
                            to="/contact"
                            className={`
                        px-3 md:px-6 py-1.5 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 border whitespace-nowrap
                        ${showScrolledStyle
                                    ? 'border-black bg-black text-white hover:bg-gray-800'
                                    : 'border-white bg-white text-black hover:bg-gray-200'
                                }
                    `}
                        >
                            Get Started
                        </Link>

                        <div className="flex items-center gap-1 md:gap-2 pl-2 border-l border-current/20 ml-1 md:ml-2">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className={`p-1.5 md:p-2 rounded-full transition-colors ${showScrolledStyle ? 'hover:bg-black/5' : 'hover:bg-white/10'}`}
                            >
                                <FaSearch className="w-3 h-3 md:w-4 md:h-4" />
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className={`p-1.5 md:p-2 rounded-full transition-colors ${showScrolledStyle ? 'hover:bg-black/5' : 'hover:bg-white/10'}`}
                            >
                                <FaBars className="w-3 h-3 md:w-4 md:h-4" />
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            {isSearchOpen && <SearchOverlay onClose={() => setIsSearchOpen(false)} />}
            {isMenuOpen && <MenuOverlay onClose={() => setIsMenuOpen(false)} />}
        </>
    );
};

export default Navbar;
