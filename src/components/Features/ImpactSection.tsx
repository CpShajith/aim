import React from 'react';

const ImpactSection: React.FC = () => {
    return (
        <section className="bg-white text-black py-24 px-6 md:px-12">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left: Image */}
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                        alt="Advanced Intelligence in Motion team working"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right: Content */}
                <div className="flex flex-col justify-center lg:pl-12">
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 leading-tight">
                        There is so much left to build
                    </h2>
                    <p className="text-xl md:text-2xl font-normal leading-relaxed text-gray-700 mb-12 max-w-xl">
                        Advanced Intelligence in Motion team deliver mission-critical outcomes for the West's most important institutions.
                    </p>
                    <div>
                        <button className="px-8 py-4 border border-black text-sm font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
