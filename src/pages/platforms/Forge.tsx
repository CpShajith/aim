import { motion } from 'framer-motion';
import { BsLayers, BsDiagram3, BsCpu, BsGlobe, BsLightning } from 'react-icons/bs';

const Forge = () => {
    return (
        <div className="bg-[#0a0a0a] text-white min-h-screen pt-24 font-sans selection:bg-white/20">
            {/* Hero Section */}
            <section className="px-6 md:px-12 py-20 max-w-[1600px] mx-auto min-h-[70vh] flex flex-col justify-center relative">
                <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-full point-events-none" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl relative z-10"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm">
                            <BsLayers className="text-xl" />
                        </div>
                        <span className="text-xl tracking-widest uppercase font-bold text-gray-400">AIM Platform</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 leading-tight">
                        Forge.
                        <br />
                        <span className="text-gray-500">The Ontology OS.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
                        Reimagine how your organization operates. Forge binds disparate enterprise data into a living Ontology that powers high-fidelity decision making across your entire business.
                    </p>
                </motion.div>
            </section>

            {/* Core Capabilities */}
            <section className="px-6 md:px-12 py-24 bg-white text-black border-t border-white/10">
                <div className="max-w-[1600px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Core Capabilities</h2>
                        <div className="w-20 h-1 bg-black"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <BsDiagram3 size={32} />,
                                title: "Data Integration",
                                desc: "Connect any system, securely scale to petabytes of data, and manage complex transformations with ease."
                            },
                            {
                                icon: <BsGlobe size={32} />,
                                title: "Ontology Modeling",
                                desc: "Map physical realities to your digital landscape. Objects, properties, and relationships become your building blocks."
                            },
                            {
                                icon: <BsCpu size={32} />,
                                title: "Analytical Applications",
                                desc: "Empower non-technical users to build operational applications directly on top of the Ontology."
                            },
                            {
                                icon: <BsLightning size={32} />,
                                title: "Real-time Action",
                                desc: "Don't just observe data—act on it. Push decisions back into source systems natively from Forge."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 border border-gray-200 hover:border-black transition-colors rounded-xl bg-gray-50 hover:bg-white group"
                            >
                                <div className="mb-6 text-gray-400 group-hover:text-black transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 tracking-tight">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-light">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Forge;
