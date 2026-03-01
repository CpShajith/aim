import { motion } from 'framer-motion';
import { BsCpu, BsRobot, BsLightningCharge } from 'react-icons/bs';

const ArtificialIntelligence = () => {
    return (
        <div className="bg-[#05051a] text-white min-h-screen pt-24 font-sans">
            {/* Hero Section */}
            <section className="px-6 md:px-12 py-24 max-w-[1600px] mx-auto min-h-[70vh] flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-purple-600/10 blur-[150px] rounded-full point-events-none" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-5xl relative z-10 text-center mx-auto"
                >
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="text-sm tracking-widest uppercase font-bold text-purple-400 border border-purple-500/30 px-4 py-1 rounded-full bg-purple-500/10">Advanced Intelligence in Motion Artificial Intelligence</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-medium tracking-tighter mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-300 bg-clip-text text-transparent">
                        Intelligence, Amplified.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
                        Transition from chat interfaces to autonomous enterprise agents. We provide the connective tissue required to safely orchestrate LLMs over your private network.
                    </p>
                </motion.div>
            </section>

            {/* Core Pillars */}
            <section className="px-6 md:px-12 py-24 border-t border-white/5 bg-black/40 backdrop-blur-xl">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-10 border border-white/10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent hover:border-purple-500/50 transition-colors"
                    >
                        <BsRobot size={48} className="text-purple-400 mb-8" />
                        <h3 className="text-2xl font-medium mb-4">Autonomous Agents</h3>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Deploy AI that doesn't just analyze data, but takes action. From resolving supply chain bottlenecks to executing trades natively within your systems.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="p-10 border border-white/10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent hover:border-blue-500/50 transition-colors"
                    >
                        <BsCpu size={48} className="text-blue-400 mb-8" />
                        <h3 className="text-2xl font-medium mb-4">Model Agnostic</h3>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Flexibility is key. Use OpenAI, Anthropic, open-source HuggingFace models, or your own custom fine-tuned neural networks interchangeably within the platform.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-10 border border-white/10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent hover:border-pink-500/50 transition-colors"
                    >
                        <BsLightningCharge size={48} className="text-pink-400 mb-8" />
                        <h3 className="text-2xl font-medium mb-4">Secure & Auditable</h3>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Every AI action is governed by strict Role-Based Access Controls (RBAC) and full lineage tracking, ensuring models only access what they are permitted to.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ArtificialIntelligence;
