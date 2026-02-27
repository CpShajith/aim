import { motion } from 'framer-motion';
import { BsActivity, BsEye } from 'react-icons/bs';

const Archam = () => {
    return (
        <div className="bg-[#050505] text-white min-h-screen pt-24 font-sans selection:bg-green-500/30">
            {/* Hero Section */}
            <section className="px-6 md:px-12 py-20 max-w-[1600px] mx-auto min-h-[75vh] flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20 filter grayscale contrast-150"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-5xl relative z-10 border-l-4 border-gray-100 pl-8 md:pl-12"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-sm tracking-widest uppercase font-bold text-gray-400 border border-gray-700 px-4 py-1 rounded-full bg-black/50 backdrop-blur">AIM Defense Platform</span>
                    </div>
                    <h1 className="text-6xl md:text-[100px] font-light tracking-tighter mb-8 leading-none">
                        Archam
                    </h1>
                    <p className="text-2xl md:text-3xl font-medium text-gray-300 max-w-3xl leading-snug mb-6">
                        Achieve AI-driven combat superiority. Protect the perimeter. Uncover hidden threats.
                    </p>
                    <p className="text-lg text-gray-500 font-light max-w-2xl leading-relaxed">
                        Archam integrates intelligence from every available source—sensors, signals, human intelligence, and open data—creating a cohesive battlefield operating system for the world's most critical missions.
                    </p>
                </motion.div>
            </section>

            {/* Features Row */}
            <section className="py-24 border-t border-white/10 bg-black">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-center"
                        >
                            <BsEye size={48} className="text-gray-400 mb-8" />
                            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Unprecedented Awareness</h2>
                            <p className="text-xl text-gray-400 font-light leading-relaxed">
                                Identify patterns across billions of data points. Archam accelerates the discovery of actionable intelligence by surfacing needles in the digital haystack, turning raw noise into strategic advantages.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="aspect-square bg-gray-900 border border-gray-800 rounded-3xl p-8 relative overflow-hidden flex items-center justify-center group"
                        >
                            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
                            <BsActivity size={120} className="text-gray-800 group-hover:text-gray-600 transition-colors" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 2, ease: "linear" }}
                                        className="h-full bg-blue-500"
                                    />
                                </div>
                                <div className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-mono">Signal processing active</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Archam;
