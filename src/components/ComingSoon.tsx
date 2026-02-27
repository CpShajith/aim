import React from 'react';
import { motion } from 'framer-motion';

interface ComingSoonProps {
    title: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title }) => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 mb-6">
                        {title}
                    </h1>
                    <div className="h-1 w-24 bg-blue-500 mx-auto mb-8 rounded-full" />
                    <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
                        COMING SOON
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default ComingSoon;
