import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
    "Defense Reformation",
    "Warp Speed",
    "Working Intelligence",
    "DevCon 3",
    "AIPCon 8",
    "Interoperability",
    "Maven Smart System",
    "TITAN",
    "Vantage"
];

const Interoperability: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Interoperability");

    return (
        <section className="bg-[#111] text-white py-24 relative overflow-hidden">
            {/* Background Grid/Graphic Placeholder */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <motion.div
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10"
                />
            </div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
                {/* Tabs */}
                <div className="flex overflow-x-auto gap-2 mb-20 pb-4 scrollbar-hide">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab
                                ? 'bg-gray-200 text-black'
                                : 'bg-white/10 text-gray-400 hover:bg-white/20'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                    <button className="px-4 py-2 text-sm font-medium border border-white/20 text-white hover:bg-white/10 whitespace-nowrap">
                        SEE ALL
                    </button>
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    >
                        <div>
                            <div className="text-sm font-bold tracking-widest text-gray-400 mb-6 uppercase">
                                {activeTab}
                            </div>
                            <h2 className="text-4xl md:text-6xl font-medium leading-tight mb-8">
                                Activate AI. With Any Storage. Any Compute. Any Model. Anywhere <span className="inline-block transform -rotate-45">→</span>
                            </h2>
                        </div>

                        {/* Isometric Graphic Placeholder */}
                        <div className="relative h-[400px] w-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 rounded-lg flex items-center justify-center overflow-hidden">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]"
                            />
                            <div className="text-center relative z-10">
                                <div className="text-xs text-gray-500 mb-2">AIM ONTOLOGY</div>
                                <div className="w-32 h-32 border border-white/20 transform rotate-45 mx-auto flex items-center justify-center">
                                    <div className="w-20 h-20 border border-white/40" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Interoperability;
