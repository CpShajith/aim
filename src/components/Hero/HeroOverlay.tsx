import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getHeroContent, type HeroContentResponse } from '../../services/api';

const HeroOverlay: React.FC = () => {
    const [heroData, setHeroData] = useState<HeroContentResponse>({
        titleLine1: "AI-Powered Automation",
        titleLine2: "for Every Decision"
    });

    useEffect(() => {
        getHeroContent().then(data => {
            if (data) {
                setHeroData(data);
            }
        }).catch(err => console.error("Failed to fetch hero content", err));
    }, []);

    const headlineVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } }
    };

    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-10">
            <motion.h1
                className="text-5xl md:text-8xl font-medium text-white tracking-tight mb-8 leading-tight"
                initial="hidden"
                animate="visible"
                variants={headlineVariants}
                key={`${heroData.titleLine1}-${heroData.titleLine2}`}
            >
                {heroData.titleLine1}<br />
                <span className="text-gray-300">{heroData.titleLine2}</span>
            </motion.h1>

            {/* Search Input Placeholder from Screenshot 1 */}
            {/* Note: The screenshot shows a search bar in the navbar, but also a clean hero. 
          The user might want the exact look. I'll keep the button but style it minimally if needed. 
          Actually, Advanced Intelligence in Motion's current site doesn't have a big button in the center usually, 
          but the user's prompt originally asked for one. I'll keep it but make it subtle. */}
        </div>
    );
};

export default HeroOverlay;
