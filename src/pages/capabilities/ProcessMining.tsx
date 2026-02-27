import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaStopwatch, FaChartLine, FaProjectDiagram } from 'react-icons/fa';

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`py-24 px-6 md:px-12 ${className}`}>
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
    </div>
);

const ProcessMining = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero */}
            <div className="pt-32 pb-24 px-6 md:px-12 bg-teal-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 L 100 0" stroke="white" strokeWidth="0.5" />
                        <path d="M0 0 L 100 100" stroke="white" strokeWidth="0.5" />
                    </svg>
                </div>
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-light mb-8">
                            X-Ray <br /> <span className="font-bold text-teal-400">Your Operations.</span>
                        </h1>
                        <p className="text-xl text-teal-100 max-w-3xl leading-relaxed mb-12">
                            Stop guessing how your business works. Visualize the reality.
                            From digital footprints to process maps in minutes, identifying bottlenecks and inefficiencies instantly.
                        </p>
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                            alt="Process Map"
                            className="w-full max-w-4xl rounded-lg shadow-2xl border border-teal-800"
                        />
                    </motion.div>
                </div>
            </div>

            {/* How it works */}
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-light mb-6">From Logs to Logic.</h2>
                        <p className="text-gray-600 mb-8">
                            Process Mining ingests event logs from your ERPs (SAP, Salesforce, Oracle) and reconstructs the digital trace of every case, order, or ticket.
                        </p>
                        <button className="text-teal-700 font-bold uppercase tracking-widest border-b border-teal-700 pb-1">See Integration List</button>
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-teal-50 rounded-lg">
                            <FaSearch className="text-3xl text-teal-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Automated Discovery</h3>
                            <p className="text-gray-600">Instantly generate process maps showing the "Happy Path" and every deviation.</p>
                        </div>
                        <div className="p-6 bg-teal-50 rounded-lg">
                            <FaStopwatch className="text-3xl text-teal-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Bottleneck Analysis</h3>
                            <p className="text-gray-600">Heatmaps reveal where time is lost. Drill down to specific users or steps causing delays.</p>
                        </div>
                        <div className="p-6 bg-teal-50 rounded-lg">
                            <FaCheck className="text-3xl text-teal-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Conformance Checking</h3>
                            <p className="text-gray-600">Compare reality against your designed compliance models. Flag violations automatically.</p>
                        </div>
                        <div className="p-6 bg-teal-50 rounded-lg">
                            <FaChartLine className="text-3xl text-teal-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Continuous Improvement</h3>
                            <p className="text-gray-600">Track KPIs over time to validate the impact of your process optimization efforts.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Visual Break */}
            <div className="h-[500px] w-full relative bg-fixed bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80')` }}>
                <div className="absolute inset-0 bg-teal-900/80 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                        <div className="text-7xl font-bold mb-4">30%</div>
                        <div className="text-2xl font-light">Average Efficiency Gain</div>
                        <div className="mt-8 text-teal-200">Across Supply Chain & Procurement Deployments</div>
                    </div>
                </div>
            </div>

            {/* Action Section */}
            <Section>
                <div className="flex flex-col items-center text-center">
                    <FaProjectDiagram className="text-6xl text-gray-300 mb-8" />
                    <h2 className="text-4xl font-bold mb-8">Don't just analyze. Act.</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mb-12">
                        Most tools stop at the dashboard. Forge allows you to trigger actions directly from your analysis.
                        Retrain a model, re-route an order, or alert a manager—all without leaving the platform.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-teal-700 text-white px-8 py-4 rounded font-bold hover:bg-teal-800 transition-colors">
                            Request a Demo
                        </button>
                    </div>
                </div>
            </Section>
        </div>
    );
};

// Start Icon helper
const FaCheck = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
)

export default ProcessMining;
