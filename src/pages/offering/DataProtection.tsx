import React, { useState } from 'react';

const DataProtection = () => {
    const [activeModule, setActiveModule] = useState(0);

    const modules = [
        {
            title: "Data Subject Access Request Module",
            id: "01",
            description: "This module seeks to assist organizations with implementing Article 15 GDPR or comparable privacy regulations, giving data subjects the right to obtain confirmation from the controller whether any data is being processed about them as well as access to basic information about that data."
        },
        {
            title: "Right to be Forgotten Module",
            id: "02",
            description: "This module helps organizations comply with Article 17 GDPR, allowing data subjects to request the erasure of personal data concerning them."
        }
    ];

    React.useEffect(() => {
        console.log("DataProtection component mounted");
    }, []);

    return (
        <div className="w-full min-h-screen bg-white text-black pt-20 relative z-10">
            {/* Header */}
            <section className="px-6 py-20 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16">
                    <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-none max-w-3xl">
                        Advanced Intelligence in Motion and Data <br /> Protection
                    </h1>
                    <div className="flex flex-col items-start max-w-md pt-4">
                        <p className="text-2xl md:text-3xl font-light leading-tight text-gray-800">
                            A comprehensive approach to privacy and governance
                        </p>
                    </div>
                </div>
            </section>

            {/* Hero Image */}
            <div className="w-full h-[500px] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" // Circuit board
                    alt="Data Protection Circuit Board"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Intro Text */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                            Around the world, Advanced Intelligence in Motion is helping customers meet their compliance obligations in ever-evolving regulatory environments.
                        </h2>
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-light leading-tight mb-8">
                            At Advanced Intelligence in Motion, we're committed to helping organizations protect privacy and strengthen trust in how they use information and achieve the potential of their digital transformation.
                        </h3>
                        <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
                            <p>
                                Organizations use Advanced Intelligence in Motion Forge as their secure and accountable infrastructure to maximize the utility of their data while making sure that it's processed in accordance with the rules, regulations, and norms that govern data privacy.
                            </p>
                            <p>
                                Among others, Advanced Intelligence in Motion currently offers the following data protection modules, which were specifically developed to help our customers comply with data subject rights requests under the EU General Data Protection Regulation (GDPR) and comparable privacy laws in other jurisdictions (e.g., Brazil's Lei Geral de Proteção de Dados Pessoais (LGPD), the California Consumer Privacy Act (CCPA) and its recent amendments through the California Privacy Rights Act (CPRA), the Virginia Consumer Data Protection Act (VCDPA), etc.
                            </p>
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-sm font-medium cursor-pointer hover:gap-4 transition-all">
                            Privacy & Civil Liberties <span className="text-lg">→</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="border-t border-gray-200 w-full"></div>

            {/* Modules Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="mb-20">
                    <span className="text-4xl mr-4">↳</span>
                    <h2 className="text-4xl md:text-5xl font-light inline">Data Protection Modules <br /> and Capabilities</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: List */}
                    <div className="flex flex-col">
                        {modules.map((module, index) => (
                            <div
                                key={index}
                                className={`py-6 border-b border-gray-200 cursor-pointer transition-colors ${activeModule === index ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
                                onClick={() => setActiveModule(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-medium">{module.title}</span>
                                    <sup className="text-xs">{module.id}</sup>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col gap-8">
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                            {modules[activeModule].id} — {modules[activeModule].title.toUpperCase()}
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {modules[activeModule].description}
                        </p>

                        {/* Visualization Image */}
                        <div className="w-full h-[300px] mt-8">
                            {/* Placeholder for the point cloud visualization */}
                            <img
                                src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000&auto=format&fit=crop"
                                alt="Data Visualization"
                                className="w-full h-full object-contain grayscale opacity-50"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-start">
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Both of these modules can be deployed together as they share a common data asset that tracks data sources and sensitive data.
                            </p>
                            <div className="flex items-center gap-2 text-sm font-medium cursor-pointer hover:gap-4 transition-all justify-end">
                                Learn More About Data Protection in Advanced Intelligence in Motion Forge <span className="text-lg">→</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="border-t border-gray-200 w-full"></div>

            {/* Handling Personal Data Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Card Image */}
                    <div className="w-full aspect-[4/3] bg-[#C4A484] relative p-8 flex flex-col justify-between text-white overflow-hidden group cursor-pointer">
                        {/* Background Pattern Placeholder */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="w-full h-full grid grid-cols-4 gap-4 p-4">
                                {[...Array(16)].map((_, i) => (
                                    <div key={i} className="rounded-full border border-white/50 aspect-square flex items-center justify-center">
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Big 'A' */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="text-[300px] font-bold text-white/20 leading-none">A</span>
                        </div>

                        <div className="relative z-10">
                            <div className="text-xs font-mono mb-2">Advanced Intelligence in Motion EXPLAINED SERIES</div>
                            <h3 className="text-3xl font-light leading-tight mb-2">
                                Beyond <br /> Anonymisation <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                            </h3>
                        </div>

                        <div className="relative z-10 text-sm font-light border-l border-white/50 pl-4">
                            A Comprehensive Approach to Handling Personal Data
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-4xl md:text-5xl font-light">Handling Personal Data</h2>
                        <p className="text-xl text-gray-600 font-light leading-relaxed">
                            Learn more about our approach to helping customers <a href="#" className="underline hover:text-black transition-colors">reduce data re-identification risk</a>.
                        </p>
                        <div className="pt-8 border-t border-gray-200">
                            <div className="flex items-center gap-2 text-sm font-medium cursor-pointer hover:gap-4 transition-all">
                                Download the Whitepaper <span className="text-lg">→</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="border-t border-gray-200 w-full"></div>

            {/* Footer CTA Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight max-w-2xl">
                        Interested in using Advanced Intelligence in Motion software for data protection?
                    </h2>
                    <div className="flex flex-col gap-8 items-start lg:items-end">
                        <button className="text-xl md:text-2xl border border-black px-8 py-4 hover:bg-black hover:text-white transition-colors">
                            Submit your interest
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DataProtection;
