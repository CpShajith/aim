
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

const Defense = () => {
    return (
        <div className="w-full min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20">
            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/90 z-0" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10 text-center"
                >
                    <div className="flex items-center justify-center gap-8 mb-10">
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="w-20 h-20 md:w-24 md:h-24 border-2 border-white rounded-full flex items-center justify-center"
                        >
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full" />
                        </motion.div>
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "8rem", opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="w-[1px] bg-white/30"
                        />
                        <div className="text-left flex flex-col justify-center">
                            <motion.h1
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                                className="text-5xl md:text-7xl font-light tracking-wide leading-none"
                            >
                                AIM
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                                className="text-5xl md:text-7xl font-medium tracking-wide leading-none"
                            >
                                Defense
                            </motion.h1>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* The Software Advantage */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-24"
                >
                    The Software Advantage
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-light leading-tight mb-8">
                            AI-enabled technology to deter and defend <BsArrowRight className="inline ml-2 text-2xl" />
                        </h3>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Differentiated software derives exceptional outcomes. For nearly 20 years, AIM solutions have been deployed around the world and on the front lines, powering decision dominance for the U.S. and allies.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Tactical Edge */}
            <section className="px-6 py-32 md:px-20 lg:px-32 bg-[#0a0a0a] border-t border-white/10">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative inline-block"
                    >
                        {/* Decorative corners */}
                        <div className="absolute -top-8 -left-8 w-16 h-16 border-t border-l border-white/20" />
                        <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b border-r border-white/20" />

                        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
                            Engineering Starts At The Tactical Edge
                        </h2>
                        <a href="#" className="text-lg text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2">
                            Explore Solutions <BsArrowRight />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Discover by Service */}
            <section className="px-6 py-32 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Grid Visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] w-full perspective-1000"
                    >
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-12 transform rotate-x-60">
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-full h-48 border border-white/20 relative grid-bg transform"
                                    style={{
                                        transform: `translateZ(${i * 40}px) scale(${1 - i * 0.1})`,
                                        opacity: 1 - i * 0.2
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-light mb-8"
                        >
                            Discover by Service
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl text-gray-300 mb-12 leading-relaxed"
                        >
                            AIM provides configurable solutions to confront the most complex Defense challenges.
                        </motion.p>

                        <div className="space-y-6">
                            {['US Army', 'U.S. Air & Space Force', 'U.S. Navy & Marines'].map((service, index) => (
                                <motion.div
                                    key={service}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="group flex items-center justify-between py-6 border-b border-white/20 cursor-pointer hover:border-white transition-colors"
                                >
                                    <span className="text-xl text-gray-400 group-hover:text-white transition-colors">{service}</span>
                                    <BsArrowRight className="text-gray-600 group-hover:text-white transition-colors text-2xl" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="px-6 py-32 md:px-20 lg:px-32 max-w-5xl mx-auto text-center lg:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-white/20 pl-8 md:pl-12"
                >
                    <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
                        "AIM was founded on the belief that the United States, its allies, and partners should harness the most advanced technical capabilities for their defense and prosperity."
                    </p>
                    <p className="text-gray-500 uppercase tracking-widest text-sm">
                        Dr. Alex Karp, CEO, AIM
                    </p>
                </motion.div>
            </section>

            {/* Hiring & Partnering Sections */}
            <section className="px-6 md:px-20 lg:px-32 max-w-7xl mx-auto">
                {/* Hiring */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="py-24 border-t border-white/20 grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                    <div>
                        <h3 className="text-3xl md:text-4xl font-light flex items-start gap-4">
                            <span className="text-gray-500 transform translate-y-1">↳</span> We're Hiring
                        </h3>
                    </div>
                    <div className="flex flex-col justify-between gap-8">
                        <p className="text-xl text-gray-400 max-w-md lg:ml-auto lg:text-right">
                            To learn about life at AIM, visit our careers page.
                        </p>
                        <div className="flex justify-end">
                            <a href="#" className="text-lg text-white hover:text-blue-400 transition-colors flex items-center gap-4 group border-b border-white/20 pb-2 w-full lg:w-auto justify-between lg:justify-start">
                                Learn More <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Partnering */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="py-24 border-t border-white/20 grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                    <div>
                        <h3 className="text-3xl md:text-4xl font-light flex items-start gap-4">
                            <span className="text-gray-500 transform translate-y-1">↳</span> We're Partnering
                        </h3>
                    </div>
                    <div className="flex flex-col gap-12">
                        <p className="text-2xl text-white font-light leading-relaxed">
                            As we grow our critical work supporting the U.S. Armed Forces and allies, we're looking for industry partners to join us.
                        </p>
                        <div className="flex flex-col lg:items-end gap-6">
                            <p className="text-gray-400 lg:text-right">
                                To start a conversation today, contact us.
                            </p>
                            <a href="#" className="text-lg text-white hover:text-blue-400 transition-colors flex items-center gap-4 group border-b border-white/20 pb-2 w-full lg:w-auto justify-between lg:justify-start">
                                Contact Us <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>

            <style>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .grid-bg {
                    background-image: 
                        linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
                    background-size: 40px 40px;
                    transform-style: preserve-3d;
                }
            `}</style>
        </div>
    );
};

export default Defense;
