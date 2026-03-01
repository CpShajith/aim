import React from 'react';
import { motion } from 'framer-motion';
import { FaBell, FaBolt, FaMobileAlt, FaExclamationTriangle } from 'react-icons/fa';

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`py-24 px-6 md:px-12 ${className}`}>
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
    </div>
);

const RealTimeAlerting = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero */}
            <div className="pt-32 pb-24 px-6 md:px-12 bg-red-950 text-white relative">
                <div className="absolute inset-0 bg-[#330000]" />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center"
                >
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                            <span className="text-red-400 font-mono text-sm uppercase tracking-widest">Live Monitoring</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
                            Decisions at <br /> the Speed of Data.
                        </h1>
                        <p className="text-xl text-red-100/70 leading-relaxed mb-12">
                            Transform passive dashboards into active command centers.
                            Detect anomalies, trigger complex event processing, and notify the right person
                            the instant a threshold is breached.
                        </p>
                        <button className="bg-red-600 text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-900/50">
                            Configure Alerts
                        </button>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="bg-black/40 backdrop-blur-md border border-red-500/30 rounded-xl p-8 shadow-2xl">
                            {/* Mock Alert UI */}
                            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                                <h3 className="font-bold text-lg">Alert Feed</h3>
                                <span className="text-xs text-gray-400">Updates: Live</span>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-red-900/40 border-l-4 border-red-500 p-4 rounded flex gap-4">
                                    <FaExclamationTriangle className="text-red-500 text-xl flex-shrink-0" />
                                    <div>
                                        <div className="font-bold text-sm">Pressure Critical: Pump #4</div>
                                        <div className="text-xs text-gray-400 mt-1">Value: 850 PSI (Limit: 800) • 2s ago</div>
                                    </div>
                                </div>
                                <div className="bg-white/5 border-l-4 border-yellow-500 p-4 rounded flex gap-4">
                                    <FaBell className="text-yellow-500 text-xl flex-shrink-0" />
                                    <div>
                                        <div className="font-bold text-sm">Inventory Low: SKU-992</div>
                                        <div className="text-xs text-gray-400 mt-1">Stock: 12 units • 5m ago</div>
                                    </div>
                                </div>
                                <div className="bg-white/5 border-l-4 border-blue-500 p-4 rounded flex gap-4">
                                    <FaBolt className="text-blue-500 text-xl flex-shrink-0" />
                                    <div>
                                        <div className="font-bold text-sm">Job Completed: ETL_Daily</div>
                                        <div className="text-xs text-gray-400 mt-1">Duration: 4m 12s • 10m ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Features */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { t: 'Complex Events', d: 'Go beyond simple thresholds. Correlate events across time windows and multiple data streams.' },
                        { t: 'Multi-Channel', d: 'Deliver alerts via email, SMS, Slack, mobile push, or webhook triggers to downstream systems.' },
                        { t: 'Context Rich', d: 'Alerts come with data. Don\'t just say "Error". Attach the relevant object history and metadata.' },
                        { t: 'Actionable', d: 'Embed "Fix It" buttons directly in the alert. Close the loop without switching context.' }
                    ].map((item, i) => (
                        <div key={i} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-red-900">{item.t}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{item.d}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Mobile View */}
            <Section className="bg-gray-50">
                <div className="flex flex-col md:flex-row items-center justify-center gap-16">
                    <div className="max-w-md">
                        <h2 className="text-4xl font-bold mb-6">The Control Room <br /> in Your Pocket.</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Operational reality doesn't stop when you leave your desk.
                            Monitor live streams, acknowledge alerts, and trigger remediation actions
                            from a secure, native mobile experience.
                        </p>
                        <div className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-sm">
                            <FaMobileAlt /> Mobile Native
                        </div>
                    </div>
                    <div className="relative h-[600px] w-[300px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
                        {/* Phone Screen Mock */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-black z-20 rounded-b-xl mx-12"></div>
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                            alt="Mobile Interface"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex flex-col justify-end p-6 pb-12 text-white">
                            <div className="bg-red-500 px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">Critical Alert</div>
                            <div className="font-bold text-xl mb-2">Temperature Spike</div>
                            <div className="text-sm opacity-80 mb-6">Sensor A-42 exceeded 90°C. Immediate check required.</div>
                            <button className="w-full bg-white text-black font-bold py-3 rounded-lg">Acknowledge</button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default RealTimeAlerting;
