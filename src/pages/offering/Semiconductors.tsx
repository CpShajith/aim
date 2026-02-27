import { motion } from 'framer-motion';
import { BsArrowRight, BsCpu, BsGraphUp, BsLightning, BsShieldCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Semiconductors = () => {
    const newsItems = [
        {
            title: "Optimizing Chip Design with AI",
            description: "How leading semiconductor manufacturers are using AIM to accelerate design cycles.",
            date: "Dec 2024"
        },
        {
            title: "Supply Chain Resilience in Semiconductor Manufacturing",
            description: "Building robust supply chains in an uncertain global environment.",
            date: "Nov 2024"
        }
    ];

    const capabilities = [
        {
            icon: BsCpu,
            title: "Design Optimization",
            description: "Accelerate chip design cycles with AI-powered analysis and simulation"
        },
        {
            icon: BsGraphUp,
            title: "Yield Improvement",
            description: "Identify patterns and optimize manufacturing processes to maximize yield"
        },
        {
            icon: BsLightning,
            title: "Supply Chain Visibility",
            description: "End-to-end visibility into complex global supply chains"
        },
        {
            icon: BsShieldCheck,
            title: "Quality Assurance",
            description: "Advanced analytics for defect detection and quality control"
        }
    ];

    return (
        <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-black/10">
            {/* Hero Section */}
            <section className="px-6 py-32 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight mb-8">
                        AIM for
                        <br />
                        Semiconductors
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl space-y-8"
                >
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Perform sensitivity analysis and quickly design the next set of experiments to improve chip yield.
                    </p>
                    <button className="px-6 py-3 bg-black text-white font-medium rounded-sm hover:bg-gray-800 transition-colors">
                        Learn More
                    </button>
                </motion.div>
            </section>

            {/* Accelerating R&D Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[4/3] bg-white rounded-sm overflow-hidden border border-gray-200 p-8">
                            <div className="space-y-4">
                                {/* Simulated chart/diagram */}
                                <div className="grid grid-cols-4 gap-2">
                                    {[...Array(12)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="aspect-square bg-gray-900 rounded"
                                            style={{
                                                opacity: Math.random() * 0.5 + 0.5
                                            }}
                                        />
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 gap-2 mt-4">
                                    {[...Array(4)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="h-12 bg-gray-800 rounded"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-4xl font-light">
                                Accelerating Research & Development Time
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Identify key variables and correlations that impact chip performance and yield.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                AIM enables semiconductor manufacturers to rapidly iterate on designs, run complex simulations, and identify optimal parameters—reducing time-to-market and improving product quality.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group"
                            >
                                Learn More
                                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manufacturing Intelligence Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-light">
                                Manufacturing Intelligence
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Unify data from across your manufacturing operations to gain unprecedented visibility into production processes.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                From wafer fabrication to packaging and testing, AIM integrates data from equipment sensors, quality control systems, and supply chain platforms to provide a complete picture of your operations.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Real-time production monitoring",
                                    "Predictive maintenance for critical equipment",
                                    "Automated defect detection and classification",
                                    "Root cause analysis for yield issues"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative aspect-video bg-gray-100 rounded-sm overflow-hidden border border-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                                alt="Manufacturing Dashboard"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Grid */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-light mb-16">Key Capabilities</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {capabilities.map((capability, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                            >
                                <capability.icon className="text-4xl mb-6 text-blue-600" />
                                <h3 className="text-xl font-medium mb-3">{capability.title}</h3>
                                <p className="text-gray-600 text-sm">{capability.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Supply Chain Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-light mb-6">Supply Chain Resilience</h2>
                        </div>

                        <div className="lg:col-span-2 space-y-6">
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Navigate complex global supply chains with confidence.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                The semiconductor supply chain is one of the most complex in any industry. AIM provides end-to-end visibility, helping you anticipate disruptions, optimize inventory, and ensure continuity of supply for critical materials and components.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Track materials from raw silicon to finished chips, monitor supplier performance, and model scenarios to build resilience into your supply chain.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Latest News */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-light mb-12">The Latest News</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {newsItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                            >
                                <div className="text-sm text-gray-500 mb-3">{item.date}</div>
                                <h3 className="text-2xl font-light mb-4">{item.title}</h3>
                                <p className="text-gray-600 mb-6">{item.description}</p>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group"
                                >
                                    Read More
                                    <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {[
                            { metric: "40%", label: "Faster Design Cycles" },
                            { metric: "25%", label: "Yield Improvement" },
                            { metric: "30%", label: "Reduced Time-to-Market" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="text-6xl font-light mb-4 text-blue-400">{item.metric}</div>
                                <div className="text-gray-300">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-6 py-32 md:px-20 lg:px-32 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-6xl font-light mb-8">
                        Transform Your Semiconductor Operations
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        Discover how AIM can help you accelerate innovation and optimize manufacturing.
                    </p>
                    <Link to="/contact" className="px-8 py-4 bg-black text-white font-medium rounded-sm hover:bg-gray-800 transition-colors inline-flex items-center gap-2 group">
                        Get Started
                        <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Semiconductors;
