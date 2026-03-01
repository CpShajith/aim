import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsPlayFill, BsClipboardData, BsGraphUp, BsSearch, BsGear } from 'react-icons/bs';

const LifeSciences = () => {
    const [activeTab, setActiveTab] = useState('sanofi');

    const caseStudies = {
        sanofi: {
            title: "Sanofi",
            desc: "Sanofi partners with Advanced Intelligence in Motion to accelerate R&D and improve patient outcomes.",
            img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80"
        },
        merck: {
            title: "Merck KGaA",
            desc: "Merck KGaA leverages Advanced Intelligence in Motion to optimize its supply chain and manufacturing operations.",
            img: "https://images.unsplash.com/photo-1579165466741-7f35a4755657?auto=format&fit=crop&q=80"
        },
        novartis: {
            title: "Novartis",
            desc: "Novartis uses Advanced Intelligence in Motion to integrate data across the enterprise and drive digital transformation.",
            img: "https://images.unsplash.com/photo-1581093458891-2f30890918b6?auto=format&fit=crop&q=80"
        }
    };

    return (
        <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-black/10">
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80"
                    alt="Life Sciences Lab"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end pb-24 px-6 md:px-20 lg:px-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-8xl font-light text-white tracking-tight leading-none mb-6">
                            Advanced Intelligence in Motion for Life Sciences
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl">
                            Transforming Pharma Development with AI.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Intro Text */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-lg text-gray-600 leading-relaxed">
                    <p>
                        A Real AI Operating System for the pharmaceutical value chain. From discovery to distribution, Advanced Intelligence in Motion Forge integrates data to accelerate innovation.
                    </p>
                    <p>
                        Break down silos between R&D, clinical operations, and commercial teams. Enable cross-functional collaboration and data-driven decision-making at every stage.
                    </p>
                    <p>
                        Harness the power of AI to predict patient outcomes, optimize clinical trials, and ensure the safety and efficacy of new therapies.
                    </p>
                </div>
            </section>

            {/* Real AI Transformation Starts with Advanced Intelligence in Motion */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto bg-gray-50">
                <h2 className="text-3xl font-light mb-12">Real AI Transformation Starts with Advanced Intelligence in Motion</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1 space-y-4">
                        {Object.entries(caseStudies).map(([key, study]) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`w-full text-left py-4 px-6 border-l-2 transition-all duration-300 ${activeTab === key
                                    ? 'border-black bg-white shadow-sm'
                                    : 'border-gray-200 hover:border-gray-400'
                                    }`}
                            >
                                <h3 className="text-lg font-medium">{study.title}</h3>
                            </button>
                        ))}
                    </div>
                    <div className="lg:col-span-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="relative aspect-video bg-black rounded-sm overflow-hidden group cursor-pointer"
                            >
                                <img
                                    src={caseStudies[activeTab as keyof typeof caseStudies].img}
                                    alt={caseStudies[activeTab as keyof typeof caseStudies].title}
                                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                                        <BsPlayFill className="text-3xl text-white ml-1" />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-white text-lg font-light">
                                        {caseStudies[activeTab as keyof typeof caseStudies].desc}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Clinical Development */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-200">
                <h2 className="text-4xl font-light mb-16">Clinical Development</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        {[
                            { icon: BsClipboardData, title: "Study Design", desc: "Optimize protocol design using real-world data." },
                            { icon: BsGraphUp, title: "Site Selection", desc: "Identify high-performing sites to accelerate recruitment." },
                            { icon: BsSearch, title: "Patient Cohort Identification", desc: "Find the right patients for your trials faster." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-600 shrink-0">
                                    <item.icon />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-gray-50 p-8 rounded-sm flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
                            alt="Clinical Development Dashboard"
                            className="w-full rounded-sm shadow-sm mix-blend-multiply"
                        />
                    </div>
                </div>
            </section>

            {/* Commercial Operations */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-200">
                <h2 className="text-4xl font-light mb-16">Commercial Operations</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        {[
                            { icon: BsGraphUp, title: "Omnichannel Marketing", desc: "Orchestrate personalized engagement across all channels." },
                            { icon: BsClipboardData, title: "Sales Force Effectiveness", desc: "Optimize territory alignment and targeting." },
                            { icon: BsSearch, title: "Market Access", desc: "Demonstrate value to payers and secure reimbursement." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-600 shrink-0">
                                    <item.icon />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-gray-50 p-8 rounded-sm flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                            alt="Commercial Operations Dashboard"
                            className="w-full rounded-sm shadow-sm mix-blend-multiply"
                        />
                    </div>
                </div>
            </section>

            {/* Research & Discovery */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-200">
                <h2 className="text-4xl font-light mb-16">Research & Discovery</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        {[
                            { icon: BsSearch, title: "Target Identification", desc: "Discover novel targets using multi-omics data." },
                            { icon: BsClipboardData, title: "Lead Optimization", desc: "Accelerate hit-to-lead cycles with AI." },
                            { icon: BsGraphUp, title: "Biomarker Discovery", desc: "Identify biomarkers for patient stratification." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-600 shrink-0">
                                    <item.icon />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-gray-50 p-8 rounded-sm flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80"
                            alt="Research Dashboard"
                            className="w-full rounded-sm shadow-sm mix-blend-multiply"
                        />
                    </div>
                </div>
            </section>

            {/* Biomanufacturing */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-200">
                <h2 className="text-4xl font-light mb-16">Biomanufacturing</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        {[
                            { icon: BsGear, title: "Yield Optimization", desc: "Maximize yield and reduce variability." },
                            { icon: BsClipboardData, title: "Quality Control", desc: "Ensure product quality with real-time monitoring." },
                            { icon: BsGraphUp, title: "Supply Chain Resilience", desc: "Anticipate and mitigate supply chain disruptions." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-600 shrink-0">
                                    <item.icon />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-gray-50 p-8 rounded-sm flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1581093588402-41141199a041?auto=format&fit=crop&q=80"
                            alt="Biomanufacturing Dashboard"
                            className="w-full rounded-sm shadow-sm mix-blend-multiply"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LifeSciences;
