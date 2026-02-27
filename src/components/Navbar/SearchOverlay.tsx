import React, { useEffect, useRef } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface SearchOverlayProps {
    onClose: () => void;
}

const popularSearches = [
    "Forge",
    "Archam",
    "Areies",
    "Ontology",
    "Artificial Intelligence (AI)"
];

const SearchOverlay: React.FC<SearchOverlayProps> = ({ onClose }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Focus input on mount
        if (inputRef.current) {
            inputRef.current.focus();
        }

        // Prevent scrolling on body when overlay is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[60] bg-[#1a1a1a] text-white flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4">
                <div className="text-xl font-bold tracking-tight flex items-center gap-2">
                    <img src="/aimlogo.jpeg" alt="AIM Logo" className="w-8 h-8 object-contain rounded-sm" />
                    AIM
                </div>

                <div className="flex items-center space-x-4">
                    <Link to="/contact" onClick={onClose} className="px-4 py-2 text-sm font-medium border border-white hover:bg-white hover:text-black transition-colors flex items-center justify-center">
                        Get Started
                    </Link>
                    <div className="flex items-center border border-white/30 rounded-sm">
                        <button onClick={onClose} className="p-2 hover:bg-white/10 transition-colors border-r border-white/30">
                            <FaTimes size={18} />
                        </button>
                        <button className="p-2 hover:bg-white/10 transition-colors">
                            <FaBars size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col justify-center px-6 md:px-24 max-w-7xl mx-auto w-full">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Start typing to search"
                    className="w-full bg-transparent border-b border-gray-600 text-2xl md:text-3xl py-4 focus:outline-none focus:border-white transition-colors placeholder-gray-600 font-light"
                />

                <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
                    <span className="text-gray-500 font-bold tracking-widest uppercase text-xs">Popular Searches</span>
                    {popularSearches.map(term => (
                        <button key={term} className="text-white underline decoration-1 underline-offset-4 hover:text-gray-300 transition-colors">
                            {term}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchOverlay;
