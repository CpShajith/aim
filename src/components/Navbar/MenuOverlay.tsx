import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface MenuOverlayProps {
    onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ onClose }) => {
    const menuItems = [
        {
            title: 'Generate Alpha',
            subItems: [
                { title: 'AIP', path: '/aip-developers' },
                { title: 'Forge', path: '/forge' },
                { title: 'Archam', path: '/archam' },
                { title: 'Ontology', path: '/ontology' },
                { title: 'Areies', path: '/areies' },
                { title: 'Artificial Intelligence', path: '/ai' }
            ]
        },
        { title: 'Anti-Money Laundering', path: '/anti-money-laundering' },
        { title: 'Automotive & Mobility', path: '/automotive-mobility' },
        { title: 'Data Protection', path: '/data-protection' },
        { title: 'Offerings' },

        { title: 'Documentation' },
        { title: 'Careers' },
        { title: 'Newsroom' },
        { title: 'Advanced Intelligence in Motion Explained' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#111111] text-white overflow-y-auto"
        >
            <div className="max-w-[1600px] mx-auto px-6 py-4">
                {/* Header */}
                <div className="flex justify-between items-center mb-12">
                    <div className="text-xl font-bold tracking-tight flex items-center gap-2 break-words text-wrap max-w-[80vw]">
                        <img src="/aimlogo.jpeg" alt="Advanced Intelligence in Motion Logo" className="w-8 h-8 object-contain rounded-sm" />
                        <span>Advanced Intelligence in Motion</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>

                <div className="border-t border-white/20 mb-8" />

                <div className="text-xs font-bold text-gray-500 tracking-widest mb-8 uppercase">
                    Navigation
                </div>

                {/* Menu Items */}
                <div className="flex flex-col gap-6 pb-20">
                    {menuItems.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            {item.path ? (
                                <Link
                                    to={item.path}
                                    onClick={onClose}
                                    className="text-4xl md:text-5xl font-light hover:text-gray-300 transition-colors"
                                >
                                    {item.title}
                                </Link>
                            ) : (
                                <a href="#" className="text-4xl md:text-5xl font-light hover:text-gray-300 transition-colors">
                                    {item.title}
                                </a>
                            )}

                            {item.subItems && (
                                <div className="flex flex-col gap-3 pl-2">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <Link
                                            key={subIndex}
                                            to={subItem.path || '#'}
                                            onClick={onClose}
                                            className="flex items-center gap-4 text-2xl md:text-3xl text-gray-300 hover:text-white transition-colors"
                                        >
                                            <span className="text-gray-500 text-xl">↳</span>
                                            {subItem.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default MenuOverlay;
