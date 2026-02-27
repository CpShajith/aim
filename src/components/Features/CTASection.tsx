import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CTASection: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row w-full min-h-[220px]">
            {/* Left: Request a Demo */}
            <div className="flex-1 bg-gray-200 text-black p-8 md:p-12 flex flex-row items-center justify-between group cursor-pointer transition-colors hover:bg-gray-300">
                <h2 className="text-2xl md:text-4xl font-medium tracking-tight">
                    Request a Demo
                </h2>
                <FaArrowRight className="text-2xl md:text-3xl transform group-hover:translate-x-2 transition-transform" />
            </div>

            {/* Right: Start Building */}
            <div className="flex-1 bg-[#111] text-white p-8 md:p-12 flex flex-row items-center justify-between group cursor-pointer transition-colors hover:bg-black">
                <h2 className="text-2xl md:text-4xl font-medium tracking-tight">
                    Start Building
                </h2>
                <FaArrowRight className="text-2xl md:text-3xl transform group-hover:translate-x-2 transition-transform" />
            </div>
        </section>
    );
};

export default CTASection;
