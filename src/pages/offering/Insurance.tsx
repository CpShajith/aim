import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsPlayFill, BsFileText, BsShieldCheck, BsPeople, BsGraphUp, BsLightning } from 'react-icons/bs';

const Insurance = () => {
    const [activeTab, setActiveTab] = useState('sompo');

    const caseStudies = {
        sompo: {
            title: "Sompo Holdings",
            desc: "Sompo Holdings uses Advanced Intelligence in Motion to transform nursing care with data.",
            img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
        },
        swissre: {
            title: "Swiss Re",
            desc: "Swiss Re leverages Advanced Intelligence in Motion to enhance risk assessment and underwriting.",
            img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
        },
        axa: {
            title: "AXA",
            desc: "AXA partners with Advanced Intelligence in Motion to accelerate digital transformation.",
            img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
        }
    };

    return (
        <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-black/10">
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                    alt="Insurance Skyscrapers"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end pb-24 px-6 md:px-20 lg:px-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-6xl md:text-8xl font-light text-white tracking-tight leading-none mb-6">
                            Advanced Intelligence in Motion for Insurance
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl">
                            Reimagining the AI-driven future of insurance.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Intro Text */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-lg text-gray-600 leading-relaxed">
                    <p>
                        The insurance industry is at a tipping point. Legacy systems and siloed data are preventing carriers from realizing the full potential of AI.
                    </p>
                    <p>
                        Advanced Intelligence in Motion Forge integrates data from across the enterprise—from policy administration to claims and billing—to create a single source of truth.
                    </p>
                    <p>
                        By operationalizing AI at scale, insurers can automate underwriting, streamline claims, and deliver personalized customer experiences.
                    </p>
                </div>
            </section>

            {/* AI Underwriting Automation */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-200">
                <h2 className="text-4xl font-light mb-16">AI Underwriting Automation</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        {[
                            { icon: BsFileText, title: "Data Ingestion", desc: "Ingest structured and unstructured data from any source." },
                            { icon: BsShieldCheck, title: "Risk Assessment", desc: "Automate risk scoring with advanced ML models." },
                            { icon: BsLightning, title: "Decisioning", desc: "Instant quotes for low-risk policies, flagged review for complex cases." }
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
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                            alt="Underwriting Dashboard"
                            className="w-full rounded-sm shadow-sm mix-blend-multiply"
                        />
                    </div>
                </div>
            </section>

            {/* AI Smart Claims */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-200">
                <h2 className="text-4xl font-light mb-16">AI Smart Claims</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        {[
                            { icon: BsLightning, title: "FNOL Automation", desc: "Automate First Notice of Loss with natural language processing." },
                            { icon: BsGraphUp, title: "Fraud Detection", desc: "Identify suspicious patterns and networks in real-time." },
                            { icon: BsCheckCircle, title: "Straight-Through Processing", desc: "Settle simple claims instantly, improving customer satisfaction." }
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
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
                            alt="Claims Dashboard"
                            className="w-full rounded-sm shadow-sm mix-blend-multiply"
                        />
                    </div>
                </div>
            </section>

            {/* Real-time AI Customer Intelligence */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-200">
                <h2 className="text-4xl font-light mb-16 max-w-2xl">Real-time AI Customer Intelligence</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        {[
                            { icon: BsPeople, title: "Customer 360", desc: "A holistic view of every policyholder interaction." },
                            { icon: BsGraphUp, title: "Churn Prediction", desc: "Proactively identify at-risk customers and offer retention incentives." },
                            { icon: BsLightning, title: "Next Best Action", desc: "Recommend personalized coverage options based on life events." }
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
                            alt="Customer Intelligence"
                            className="w-full rounded-sm shadow-sm mix-blend-multiply"
                        />
                    </div>
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
        </div>
    );
};

function BsCheckCircle(props: any) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>;
}

export default Insurance;
