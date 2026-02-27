import React from 'react';
import { motion } from 'framer-motion';
import { FaMicrochip, FaShieldAlt, FaWifi, FaRocket } from 'react-icons/fa';

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`py-24 px-6 md:px-12 ${className}`}>
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
    </div>
);

const EdgeAI = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">
            {/* Hero */}
            <div className="pt-32 pb-20 px-6 md:px-12 bg-[#0a0a0a] text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-3 py-1 mb-6 border border-green-500/30 rounded-full bg-green-900/10 text-green-400 text-xs font-mono tracking-widest uppercase">
                            Disconnected Operations
                        </div>
                        <h1 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8 leading-none">
                            Intelligence <br /> <span className="text-gray-500">at the Edge.</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                            Deploy powerful AI models to the tactical edge. From satellites in orbit to submarines in the deep,
                            run inference where data is created, even in disconnected or intermittent environments.
                        </p>
                    </motion.div>

                    <div className="aspect-[21/9] w-full bg-[#111] rounded-lg overflow-hidden relative border border-white/10 mt-12">
                        <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                            alt="Edge Computing Satellite"
                            className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute bottom-12 left-12">
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <div className="font-mono text-xs text-green-500 uppercase tracking-widest">System Online // Low Latency</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Capabilities */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: FaWifi, title: 'Intermittent Connectivity', desc: 'Seamlessly handle network drops. Models run locally and sync insights when connection is restored.' },
                        { icon: FaMicrochip, title: 'Hardware Agnostic', desc: 'Deploy to any compute substrate—NVIDIA Jetson, Raspberry Pi, or custom ruggedized hardware.' },
                        { icon: FaShieldAlt, title: 'Tamper Proof', desc: 'Cryptographically signed model artifacts ensure that edge logic has not been compromised.' }
                    ].map((item, i) => (
                        <div key={i} className="p-8 border border-gray-200 rounded-lg hover:border-black transition-colors group">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                                <item.icon />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Fleet Management */}
            <Section className="bg-slate-50">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1">
                        <h2 className="text-5xl font-light tracking-tight mb-8">Fleet Management <br /> at Scale.</h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-md">
                            Managing one edge device is easy. Managing ten thousand is a challenge.
                            Our platform provides a unified control plane to monitor health, push over-the-air updates,
                            and version control your entire distributed fleet.
                        </p>
                        <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1">
                            Explore the Control Plane <FaRocket />
                        </button>
                    </div>
                    <div className="flex-1 relative">
                        <div className="aspect-square relative rounded-full overflow-hidden border border-gray-200 bg-white p-8">
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
                                alt="Fleet Dashboard"
                                className="w-full h-full object-cover rounded-full opacity-90"
                            />
                            <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Case Study */}
            <Section>
                <div className="bg-black text-white rounded-2xl p-12 md:p-24 relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl">
                        <h3 className="text-green-400 font-mono text-sm uppercase tracking-widest mb-6">Case Study: Aerospace</h3>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Autonomous Aerial Inspection</h2>
                        <p className="text-xl text-gray-300 leading-relaxed mb-12">
                            "We deployed computer vision models to a fleet of inspection drones. They now autonomously detect structural defects in wind turbines, continuously retraining on their own findings without needing to return to base."
                        </p>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80"
                        alt="Drone"
                        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
                    />
                </div>
            </Section>
        </div>
    );
};

export default EdgeAI;
