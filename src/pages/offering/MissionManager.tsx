import { motion } from 'framer-motion';
import { BsArrowRight, BsCheckCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const MissionManager = () => {
    const benefits = [
        "Flexible and configurable",
        "Continuous feature provisioning",
        "Comprehensive data integration and analysis",
        "Secure and scalable",
        "Accessible collaboration and reporting with a user-friendly interface",
        "Real-time information sharing and reporting"
    ];

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-white/10">
            {/* Hero Section */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                    alt="Mission Manager"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]" />

                <div className="absolute inset-0 flex items-center px-6 md:px-20 lg:px-32">
                    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-8xl font-light tracking-tight leading-none mb-6">
                                Mission Manager
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-gray-300"
                        >
                            <p className="text-lg leading-relaxed">
                                Helping government agencies securely facilitate operations, onboarding, deployment, and management.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* The Ecosystem Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-light mb-20">The Ecosystem</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg overflow-hidden p-8 flex items-center justify-center border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80"
                                alt="Ecosystem Diagram"
                                className="w-full h-full object-contain opacity-80"
                            />
                        </div>

                        <div>
                            <p className="text-2xl font-light leading-snug mb-8 text-gray-200">
                                Quickly onboard innovative, traditional and non-traditional software services into balanced ecosystems.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Mission Manager provides a unified platform for managing complex operational environments, enabling seamless integration of diverse software services while maintaining security and compliance standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tailored to Your Program Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-[#0f0f0f] border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-light mb-8">
                                Tailored to Your Program
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-xl text-gray-200 leading-relaxed">
                                Mission Manager offers the flexibility to adapt to the specific needs of your government program.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                We can set it up for more information on how we can customize your mission requirements.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium group mt-4"
                            >
                                Learn More
                                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Benefits Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-[#0a0a0a] border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-light mb-16">The Benefits</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start gap-4 p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <BsCheckCircle className="text-2xl text-blue-400 flex-shrink-0 mt-1" />
                                <p className="text-lg text-gray-200">{benefit}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-[#0f0f0f] border-t border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <blockquote className="text-3xl md:text-4xl font-light leading-snug text-gray-200 mb-8">
                        "Mission Manager provides tools for the U.S. government to support mission-critical operations with the speed and scale needed to maintain strategic advantage."
                    </blockquote>
                    <p className="text-gray-500 text-sm">
                        — Defense and Intelligence Operations
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 py-32 md:px-20 lg:px-32 bg-gradient-to-b from-[#0a0a0a] to-black border-t border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-6xl font-light mb-8">
                        Ready to Transform Your Operations?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Discover how Mission Manager can enhance your government program's capabilities.
                    </p>
                    <Link to="/contact" className="px-8 py-4 bg-white text-black font-medium rounded-sm hover:bg-gray-200 transition-colors inline-flex items-center gap-2 group">
                        Get Started
                        <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default MissionManager;
