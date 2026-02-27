import { motion } from 'framer-motion';
import { BsLayers, BsLink45Deg } from 'react-icons/bs';

const Ontology = () => {
    return (
        <div className="bg-[#f2f2f2] text-black min-h-screen pt-24 font-sans">
            {/* Hero Section */}
            <section className="px-6 md:px-12 py-24 max-w-[1600px] mx-auto min-h-[60vh] flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <BsLayers className="text-3xl text-gray-400" />
                        <span className="text-sm tracking-widest uppercase font-bold text-gray-500">The Semantic Layer</span>
                    </div>
                    <h1 className="text-6xl md:text-[100px] font-medium tracking-tighter mb-8 leading-none">
                        Ontology
                    </h1>
                    <p className="text-2xl md:text-4xl font-light text-gray-600 leading-tight">
                        Don't feed your LLMs raw, disjointed text. Bind them to a living digital twin of your organization.
                    </p>
                </motion.div>
            </section>

            {/* Core Idea Section */}
            <section className="bg-black text-white py-32 mt-12">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">Mapping the Core</h2>
                        <p className="text-xl font-light text-gray-400 leading-relaxed mb-6">
                            The AIM Ontology translates thousands of complex databases into the real-world objects your organization cares about: Factories, Flights, Suppliers, and Customers.
                        </p>
                        <p className="text-xl font-light text-gray-400 leading-relaxed">
                            It provides the context and rules required to safely unleash AI agents, ensuring they only act within the boundaries of your physical reality.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-[#111] p-8 md:p-12 rounded-3xl border border-white/10"
                    >
                        <div className="flex flex-col gap-6">
                            {/* Dummy Ontology Graph Visualization */}
                            <div className="flex items-center justify-between border-b border-white/10 pb-6">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex-1 text-center">Equipment</div>
                                <div className="px-4 text-gray-500"><BsLink45Deg size={24} /></div>
                                <div className="p-4 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20 flex-1 text-center font-medium">Sensor Data</div>
                            </div>
                            <div className="flex justify-center -my-3 z-10">
                                <span className="bg-[#111] text-xs uppercase tracking-widest text-gray-300 px-2 font-mono border border-white/10 rounded-full py-1">is connected to</span>
                            </div>
                            <div className="flex items-center justify-between border-t border-white/10 pt-6">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex-1 text-center">Maintenance Log</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Ontology;
