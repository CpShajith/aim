import React from 'react';
import { motion } from 'framer-motion';
import { FaStream, FaProjectDiagram, FaMagic, FaTools } from 'react-icons/fa';

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`py-24 px-6 md:px-12 ${className}`}>
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
    </div>
);

const PipelineBuilder = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">
            {/* Hero */}
            <div className="pt-32 pb-24 px-6 bg-gradient-to-b from-orange-50 to-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-8">
                            Data Engineering <br />
                            <span className="font-bold text-orange-600">Democratized.</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-12">
                            Stop writing boilerplate Spark code. Build resilient, scalable batch and streaming pipelines
                            with a drag-and-drop interface that writes production-grade code for you.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-orange-600 text-white px-8 py-4 rounded font-bold hover:bg-orange-700 transition-colors">
                                Start Building
                            </button>
                            <button className="border border-gray-300 px-8 py-4 rounded font-bold hover:bg-gray-50 transition-colors">
                                View Demo
                            </button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-video bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                                alt="Pipeline Interface"
                                className="w-full h-full object-cover opacity-90"
                            />
                            {/* Overlay UI Mock */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-xl border border-orange-100 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded bg-orange-100 flex items-center justify-center text-orange-600">
                                        <FaProjectDiagram size={24} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-800">Transformation_01</div>
                                        <div className="text-xs text-green-600 font-mono">Status: Healthy</div>
                                    </div>
                                    <div className="w-8 h-[2px] bg-gray-300"></div>
                                    <div className="w-12 h-12 rounded bg-blue-100 flex items-center justify-center text-blue-600">
                                        <FaStream size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Features */}
            <Section>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl font-light mb-6">Complexity, Simplified.</h2>
                    <p className="text-gray-600 text-lg">
                        Pipeline Builder bridges the gap between business analysts and data engineers.
                        Visual logic is compiled into high-performance backend code.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { t: 'Streaming & Batch', d: 'Switch between batch processing and low-latency streaming with a single toggle. The robust backend handles the infrastructure complexity.', i: FaStream },
                        { t: 'Instant Previews', d: 'Debug in real-time. See exactly how your data transforms at every step of the pipeline without waiting for full job runs.', i: FaMagic },
                        { t: 'Git Integration', d: 'Every change is versioned. Collaborate with branches, pull requests, and code reviews, even on visual pipelines.', i: FaTools },
                    ].map((item, index) => (
                        <div key={index} className="p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
                            <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center text-orange-500 text-2xl mb-6">
                                <item.i />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.t}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Code View split */}
            <Section className="bg-[#1e1e1e] text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-light mb-8">What you see is <br /> what you execute.</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Don't get locked into a black box. Pipeline Builder generates clean, optimizing Spark/SQL code
                            that you can inspect, export, and audit at any time.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded border border-white/10">
                                <span className="font-mono text-green-400">01</span>
                                <span>Visual Logic Defined by Analyst</span>
                            </div>
                            <div className="w-px h-8 bg-white/20 ml-8"></div>
                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded border border-white/10">
                                <span className="font-mono text-blue-400">02</span>
                                <span>Compiles to Optimize Spark Plan</span>
                            </div>
                        </div>
                    </div>
                    <div className="font-mono text-sm bg-black p-6 rounded-lg border border-white/10 shadow-2xl overflow-hidden">
                        <div className="flex gap-2 mb-4 opacity-50">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="space-y-2 text-gray-400">
                            <p><span className="text-purple-400">def</span> <span className="text-blue-400">compute_metrics</span>(df):</p>
                            <p>&nbsp;&nbsp;return df.groupBy(<span className="text-green-400">"region"</span>)</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;.agg(</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F.sum(<span className="text-green-400">"sales"</span>).alias(<span className="text-green-400">"total_sales"</span>),</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F.avg(<span className="text-green-400">"latency"</span>).alias(<span className="text-green-400">"avg_latency"</span>)</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;)</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default PipelineBuilder;
