
import { motion } from 'framer-motion';
import { FaArrowRight, FaAws, FaMicrosoft, FaGoogle, FaServer } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative h-screen bg-[#050505] text-white overflow-hidden flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505]" />
            <div className="absolute inset-0 bg-grid-white opacity-20" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 text-center"
            >
                <h1 className="text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 select-none">
                    AIP
                </h1>
                <p className="text-2xl md:text-3xl text-gray-400 font-light tracking-[0.2em] -mt-4 uppercase">
                    Artificial Intelligence Platform
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10 pointer-events-none"
            >
                <span className="text-sm text-gray-500 uppercase tracking-widest whitespace-nowrap">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
            </motion.div>
        </div>
    );
};

const ValueProp = () => {
    return (
        <div className="bg-white text-black py-32 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 block"
                >
                    Go Beyond LLMs
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-8xl font-bold tracking-tight mb-8"
                >
                    Context. Logic. Action.<br />
                    <span className="text-gray-400">Enterprise Automation.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                >
                    AIP activates your LLMs on your private network, allowing them to communicate with your data and operations safely, securely, and effectively.
                </motion.p>
            </div>
        </div>
    );
};

const WorkflowSticky = () => {
    return (
        <div className="bg-[#0A0A0A] py-32 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="sticky top-32 h-fit">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                        The OS <br />
                        <span className="text-blue-500">for Artificial Intelligence</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        AIP provides the complete infrastructure to build, deploy, and manage LLM-powered applications across your enterprise.
                    </p>
                    <div className="flex flex-col gap-6">
                        {[
                            { title: 'Ontology', desc: 'Map your physical assets to digital twins.' },
                            { title: 'Logic', desc: 'Orchestrate models and deterministic code.' },
                            { title: 'Actions', desc: 'Write back to systems of record safely.' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 text-gray-300 group cursor-default">
                                <div className="w-1 h-full bg-gray-800 group-hover:bg-blue-500 transition-colors" />
                                <div>
                                    <h4 className="font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    {/* UI Screen 1: Graph/Ontology */}
                    <div className="aspect-video bg-gray-900 rounded-lg border border-gray-800 relative overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                            alt="Ontology Graph"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-blue-900/10" />
                        <div className="absolute top-4 left-4 text-xs font-mono text-blue-400 bg-black/50 px-2 py-1 rounded border border-blue-500/30">ONTOLOGY_MANAGER</div>
                    </div>

                    {/* UI Screen 2: Code/Logic */}
                    <div className="aspect-video bg-gray-900 rounded-lg border border-gray-800 relative overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80"
                            alt="Logic Editor"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-purple-900/10" />
                        <div className="absolute top-4 left-4 text-xs font-mono text-purple-400 bg-black/50 px-2 py-1 rounded border border-purple-500/30">LOGIC_STUDIO</div>
                    </div>

                    {/* UI Screen 3: Dashboard/Analytics */}
                    <div className="aspect-video bg-gray-900 rounded-lg border border-gray-800 relative overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                            alt="Analytics Dashboard"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-green-900/10" />
                        <div className="absolute top-4 left-4 text-xs font-mono text-green-400 bg-black/50 px-2 py-1 rounded border border-green-500/30">MONITOR_DASHBOARD</div>
                    </div>

                    {/* UI Screen 4: Pipeline/Flow */}
                    <div className="aspect-video bg-gray-900 rounded-lg border border-gray-800 relative overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80"
                            alt="Data Pipeline"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-orange-900/10" />
                        <div className="absolute top-4 left-4 text-xs font-mono text-orange-400 bg-black/50 px-2 py-1 rounded border border-orange-500/30">PIPELINE_VIEW</div>
                    </div>

                    {/* UI Screen 5: Applications */}
                    <div className="aspect-video bg-gray-900 rounded-lg border border-gray-800 relative overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                            alt="User Application"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-cyan-900/10" />
                        <div className="absolute top-4 left-4 text-xs font-mono text-cyan-400 bg-black/50 px-2 py-1 rounded border border-cyan-500/30">WORKSHOP_APP</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DetailedFeatures = () => {
    return (
        <div className="bg-white py-32 px-6">
            <div className="max-w-7xl mx-auto space-y-40">
                {/* Feature 1: Build */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                            <span className="font-mono font-bold text-blue-600">01</span>
                        </div>
                        <h3 className="text-4xl font-bold mb-6">Build</h3>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Interactively develop agents and tools in AIP Logic. Leverage the Ontology to bind LLMs to real-world objects and actions without writing boilerplate code.
                        </p>
                        <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                            Start Building <FaArrowRight />
                        </button>
                    </div>
                    <div className="bg-gray-50 rounded-xl aspect-[16/10] relative overflow-hidden shadow-2xl border border-gray-100">
                        <img
                            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80"
                            alt="Build Interface"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Feature 2: Evaluate */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
                    <div className="lg:pl-10">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                            <span className="font-mono font-bold text-purple-600">02</span>
                        </div>
                        <h3 className="text-4xl font-bold mb-6">Evaluate</h3>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Test your agents against rigorous evaluation datasets. Compare model performance, latency, and cost before shipping to production.
                        </p>
                        <button className="text-purple-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                            Explore Evals <FaArrowRight />
                        </button>
                    </div>
                    <div className="bg-gray-50 rounded-xl aspect-[16/10] relative overflow-hidden shadow-2xl border border-gray-100">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                            alt="Evaluation Metrics"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Feature 3: Release */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                            <span className="font-mono font-bold text-green-600">03</span>
                        </div>
                        <h3 className="text-4xl font-bold mb-6">Release</h3>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            deploy your agents as APIs, interactive applications, or background services. Manage versioning and access control with enterprise-grade governance.
                        </p>
                        <button className="text-green-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                            Deployment Options <FaArrowRight />
                        </button>
                    </div>
                    <div className="bg-gray-50 rounded-xl aspect-[16/10] relative overflow-hidden shadow-2xl border border-gray-100">
                        <img
                            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
                            alt="Release Pipeline"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Feature 4: Monitor */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
                    <div className="lg:pl-10">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                            <span className="font-mono font-bold text-orange-600">04</span>
                        </div>
                        <h3 className="text-4xl font-bold mb-6">Monitor</h3>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Observe agent behavior in real-time. Trace reasoning steps (Chain of Thought), audit actions, and continuously improve performance based on feedback.
                        </p>
                        <button className="text-orange-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                            Observability <FaArrowRight />
                        </button>
                    </div>
                    <div className="bg-gray-50 rounded-xl aspect-[16/10] relative overflow-hidden shadow-2xl border border-gray-100">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                            alt="Monitoring"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const DeploymentSection = () => {
    return (
        <div className="bg-[#050505] text-white py-32 px-6 border-t border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-900/5" />
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Deploy anywhere</h2>
                    <p className="text-xl text-gray-400">
                        AIP is infrastructure-agnostic. Run your AI operating system on any cloud, on-premises, or in disconnected environments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: FaAws, name: 'AWS', status: 'Managed' },
                        { icon: FaMicrosoft, name: 'Azure', status: 'Managed' },
                        { icon: FaGoogle, name: 'GCP', status: 'Managed' },
                        { icon: FaServer, name: 'On-Premises', status: 'Air-gapped' }
                    ].map((item, i) => (
                        <div key={i} className="group p-8 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                            <div className="flex justify-between items-start mb-8">
                                <item.icon className="text-4xl text-gray-400 group-hover:text-white transition-colors" />
                                <span className={`text-xs border px-2 py-1 rounded font-mono ${item.status === 'Air-gapped'
                                    ? 'border-green-500/30 text-green-400 bg-green-500/10'
                                    : 'border-blue-500/30 text-blue-400 bg-blue-500/10'
                                    }`}>
                                    {item.status.toUpperCase()}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                            <p className="text-sm text-gray-500">Full platform support</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const BuildNow = () => {
    return (
        <div className="relative bg-black text-white py-32 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/20 to-black" />
            <div className="absolute inset-0 bg-grid-white opacity-10" />

            <div className="max-w-5xl mx-auto relative z-10 text-center">
                <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                    Start building <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">the future today.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Join the thousands of developers and organizations transforming their operations with the Artificial Intelligence Platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link to="/contact" className="bg-white text-black px-8 py-4 rounded font-bold text-lg flex items-center justify-center hover:bg-gray-200 transition-colors min-w-[200px]">
                        Get Started
                    </Link>
                    <button className="border border-white/20 text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors min-w-[200px]">
                        Contact Sales
                    </button>
                </div>

                <p className="mt-12 text-sm text-gray-600">
                    Trusted by the world's most critical institutions.
                </p>
            </div>
        </div>
    )
}

const AIandML = () => {
    return (
        <div className="bg-black min-h-screen">
            <Hero />
            <ValueProp />
            <WorkflowSticky />
            <DetailedFeatures />
            <DeploymentSection />
            <BuildNow />
        </div>
    );
};

export default AIandML;
