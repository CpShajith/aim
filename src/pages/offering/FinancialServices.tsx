import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowRight, BsPlayFill, BsShieldCheck, BsPerson, BsGraphUp, BsSearch, BsFileText, BsBriefcase } from 'react-icons/bs';

const FinancialServices = () => {
    const [activeTab, setActiveTab] = useState('aml');

    const tabs = [
        { id: 'aml', label: 'Anti-Money Laundering' },
        { id: 'customer360', label: 'Customer 360' },
        { id: 'fraud', label: 'Fraud Detection' },
        { id: 'claims', label: 'Optimized Claims' }
    ];

    const tabContent = {
        aml: {
            quote: "The primary value is the ability to see the whole picture.",
            desc: "Legacy AML systems generate high volumes of false positives. Forge integrates data from across the bank to surface high-risk behavior that rules-based systems miss, reducing false positives and accelerating investigations.",
            img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
        },
        customer360: {
            quote: "Understanding the customer journey is key to retention.",
            desc: "Create a single, dynamic view of every customer by integrating data from CRM, transaction systems, and support logs. Empower relationship managers with real-time insights to drive personalization and growth.",
            img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
        },
        fraud: {
            quote: "Detecting sophisticated fraud rings requires network analysis.",
            desc: "Uncover hidden connections between seemingly unrelated accounts and transactions. Forge's graph analytics capabilities allow investigators to dismantle complex fraud networks before losses mount.",
            img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80"
        },
        claims: {
            quote: "Speed and accuracy are not mutually exclusive.",
            desc: "Automate routine claims processing while flagging anomalies for human review. Forge helps insurers reduce settlement times and improve customer satisfaction without compromising on fraud detection.",
            img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
        }
    };

    return (
        <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-black/10">
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                    alt="Financial District"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <section className="bg-black text-white py-24 px-6 md:px-20 lg:px-32">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-light tracking-tight leading-none mb-16"
                    >
                        Advanced Intelligence in Motion for Financial
                        <br />
                        Services
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-400">
                        <p>
                            Building the central operating system for the modern financial institution.
                        </p>
                        <p>
                            Unifying data to drive alpha, manage risk, and ensure compliance.
                        </p>
                        <p>
                            Trusted by the world's leading banks, asset managers, and insurers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Driving Industry Outcomes */}
            <section className="px-6 py-32 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <h2 className="text-5xl font-light mb-16">Driving Industry Outcomes</h2>

                {/* Tabs */}
                <div className="flex flex-wrap gap-4 mb-12 border-b border-gray-200 pb-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                                ? 'bg-black text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-12"
                    >
                        <div className="lg:col-span-1 border-l-2 border-black pl-6 py-2">
                            <p className="text-2xl font-light leading-snug">
                                "{tabContent[activeTab as keyof typeof tabContent].quote}"
                            </p>
                        </div>
                        <div className="lg:col-span-1 py-2">
                            <p className="text-gray-600 leading-relaxed">
                                {tabContent[activeTab as keyof typeof tabContent].desc}
                            </p>
                            <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-2 mt-6 font-medium group">
                                Learn More <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="relative aspect-video bg-gray-100 rounded-sm overflow-hidden group cursor-pointer">
                                <img
                                    src={tabContent[activeTab as keyof typeof tabContent].img}
                                    alt="Feature"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                                        <BsPlayFill className="text-3xl text-white ml-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* Where We Work */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-200">
                <h2 className="text-5xl font-light mb-24">Where We Work</h2>

                {/* Retail & Investment Banking */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
                    <div>
                        <h3 className="text-3xl font-medium">Retail & Investment Banking</h3>
                    </div>
                    <div className="lg:col-span-2">
                        <p className="text-2xl font-light leading-snug mb-12 text-gray-800">
                            "Only customer knowledge is real. Everything else is conjecture."
                        </p>
                        <div className="space-y-8">
                            {[
                                { title: "Customer 360", icon: BsPerson, desc: "The foundation for personalized service and targeted offers." },
                                { title: "Fraud Detection", icon: BsShieldCheck, desc: "Real-time monitoring to protect assets and reputation." },
                                { title: "Compliance", icon: BsFileText, desc: "Streamlined reporting for KYC, AML, and regulatory requirements." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-600 group-hover:bg-black group-hover:text-white transition-colors">
                                        <item.icon />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Asset Management */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24 border-t border-gray-200 pt-24">
                    <div>
                        <h3 className="text-3xl font-medium">Asset Management</h3>
                    </div>
                    <div className="lg:col-span-2">
                        <p className="text-2xl font-light leading-snug mb-12 text-gray-800">
                            Achieve a 360 view of your portfolio. Combine market data, research, and alternative data to drive alpha.
                        </p>
                        <div className="space-y-8">
                            {[
                                { title: "Portfolio 360", icon: BsGraphUp, desc: "Real-time exposure analysis and performance attribution." },
                                { title: "Investment Research", icon: BsSearch, desc: "Collaborative workspace for analysts and portfolio managers." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-600 group-hover:bg-black group-hover:text-white transition-colors">
                                        <item.icon />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Private Equity */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-gray-200 pt-24">
                    <div>
                        <h3 className="text-3xl font-medium">Private Equity</h3>
                    </div>
                    <div className="lg:col-span-2">
                        <p className="text-2xl font-light leading-snug mb-12 text-gray-800">
                            "We used to make decisions based on spreadsheets. Now we make decisions based on data."
                        </p>
                        <div className="space-y-8">
                            {[
                                { title: "Deal Sourcing", icon: BsSearch, desc: "Identify targets that match your investment thesis using alternative data." },
                                { title: "Due Diligence", icon: BsFileText, desc: "Accelerate analysis of target company data and market conditions." },
                                { title: "Portfolio Monitoring", icon: BsBriefcase, desc: "Track value creation initiatives across portfolio companies." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-600 group-hover:bg-black group-hover:text-white transition-colors">
                                        <item.icon />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default FinancialServices;
