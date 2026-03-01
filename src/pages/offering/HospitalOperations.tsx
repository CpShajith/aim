import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowRight, BsPlayFill, BsBuilding, BsCurrencyDollar, BsPeople } from 'react-icons/bs';

const HospitalOperations = () => {
    const [activeTab, setActiveTab] = useState('cleveland');

    const caseStudies = {
        cleveland: {
            title: "Cleveland Clinic",
            desc: "See how Cleveland Clinic uses Advanced Intelligence in Motion to improve patient flow and reduce wait times.",
            img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
        },
        tampa: {
            title: "Tampa General Hospital",
            desc: "Tampa General Hospital leverages AI to optimize care coordination and discharge planning.",
            img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80"
        },
        hca: {
            title: "HCA Healthcare",
            desc: "HCA Healthcare partners with Advanced Intelligence in Motion to drive operational excellence across its network.",
            img: "https://images.unsplash.com/photo-1516549655169-df83a092fc43?auto=format&fit=crop&q=80"
        }
    };

    return (
        <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-black/10">
            {/* Hero Section */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1516549655169-df83a092fc43?auto=format&fit=crop&q=80"
                    alt="Hospital Operations"
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
                            Advanced Intelligence in Motion for Hospitals
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl">
                            AI platforms delivering speed and impact for healthcare operations.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* AI-Powered Operating System */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                            An AI-Powered Operating System for Hospitals.
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Bring your workforce, data, and decisions together in one place. Advanced Intelligence in Motion Forge integrates disparate systems to create a digital twin of your hospital operations, enabling real-time decision-making and predictive insights.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-8 rounded-sm"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
                            alt="System Architecture"
                            className="w-full rounded-sm shadow-sm mix-blend-multiply"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Transformation Journeys */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto bg-gray-50">
                <h2 className="text-3xl font-light mb-12">Transformation Journeys Start with Advanced Intelligence in Motion</h2>
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

            {/* Partners */}
            <section className="px-6 py-12 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32 flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {['HCA Healthcare', 'Cleveland Clinic', 'Tampa General', 'NHS', 'Mount Sinai'].map((partner, i) => (
                        <span key={i} className="text-xl font-bold text-gray-500">{partner}</span>
                    ))}
                </div>
            </section>

            {/* Operationalizing AI */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-light mb-24 max-w-3xl">
                    Operationalizing AI from the back office to the bedside.
                </h2>

                <div className="space-y-32">
                    {/* Capacity Management */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-gray-200 pt-12">
                        <div>
                            <h3 className="text-3xl font-medium mb-4">Capacity Management</h3>
                            <BsBuilding className="text-4xl text-gray-400 mb-4" />
                        </div>
                        <div className="lg:col-span-2">
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                Comprehensive visibility into bed availability, patient flow, and discharge planning. Predict bottlenecks before they happen and optimize resource allocation to improve throughput.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                                <p className="font-mono text-sm text-gray-500 mb-2">OUTCOME</p>
                                <p className="text-lg font-medium">Reduced length of stay by 15% and improved bed turnover times.</p>
                            </div>
                            <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-medium mt-6 group">
                                Learn More <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Revenue Cycle Management */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-gray-200 pt-12">
                        <div>
                            <h3 className="text-3xl font-medium mb-4">Revenue Cycle Management</h3>
                            <BsCurrencyDollar className="text-4xl text-gray-400 mb-4" />
                        </div>
                        <div className="lg:col-span-2">
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                Automate claims processing and denial management. Identify patterns in denials to prevent future revenue leakage and accelerate cash flow.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                                <p className="font-mono text-sm text-gray-500 mb-2">OUTCOME</p>
                                <p className="text-lg font-medium">Identify $50M+ in annual revenue opportunities through automated denial prevention.</p>
                            </div>
                            <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-medium mt-6 group">
                                Learn More <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Staffing & Scheduling */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-gray-200 pt-12">
                        <div>
                            <h3 className="text-3xl font-medium mb-4">Staffing & Scheduling</h3>
                            <BsPeople className="text-4xl text-gray-400 mb-4" />
                        </div>
                        <div className="lg:col-span-2">
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                Align staffing levels with patient demand. Use predictive models to forecast census and acuity, ensuring the right staff are in the right place at the right time.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                                <p className="font-mono text-sm text-gray-500 mb-2">OUTCOME</p>
                                <p className="text-lg font-medium">Optimized nurse-to-patient ratios and reduced reliance on agency staff.</p>
                            </div>
                            <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-medium mt-6 group">
                                Learn More <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HospitalOperations;
