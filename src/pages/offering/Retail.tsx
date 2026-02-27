import { motion } from 'framer-motion';
import { BsArrowRight, BsBox, BsGraphUp, BsPeople, BsLightning, BsShieldCheck, BsGear } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Retail = () => {
    const capabilities = [
        {
            icon: BsBox,
            title: "Inventory Optimization",
            description: "Real-time visibility into stock levels across all locations"
        },
        {
            icon: BsGraphUp,
            title: "Demand Forecasting",
            description: "AI-powered predictions for better planning"
        },
        {
            icon: BsPeople,
            title: "Customer Analytics",
            description: "Deep insights into customer behavior and preferences"
        },
        {
            icon: BsLightning,
            title: "Supply Chain Visibility",
            description: "End-to-end tracking and optimization"
        },
        {
            icon: BsShieldCheck,
            title: "Loss Prevention",
            description: "Advanced analytics to reduce shrinkage"
        },
        {
            icon: BsGear,
            title: "Operations Management",
            description: "Streamline store and warehouse operations"
        }
    ];

    const useCases = [
        {
            title: "Inventory Management",
            description: "Optimize stock levels across your entire retail network. Reduce overstock and stockouts while improving cash flow and customer satisfaction.",
            benefits: [
                "Real-time inventory visibility",
                "Automated replenishment",
                "Multi-location optimization",
                "Seasonal demand planning"
            ]
        },
        {
            title: "Customer Experience",
            description: "Create personalized shopping experiences that drive loyalty and revenue. Understand customer journeys across all touchpoints.",
            benefits: [
                "360-degree customer view",
                "Personalization at scale",
                "Omnichannel integration",
                "Predictive recommendations"
            ]
        },
        {
            title: "Supply Chain Optimization",
            description: "Build resilient, efficient supply chains that adapt to changing conditions. From sourcing to last-mile delivery.",
            benefits: [
                "Supplier performance tracking",
                "Route optimization",
                "Demand sensing",
                "Risk mitigation"
            ]
        }
    ];

    const easeOfUse = [
        "Intuitive dashboards for all user levels",
        "No-code workflow automation",
        "Seamless integration with existing systems",
        "Mobile-first design for on-the-go access",
        "Collaborative workspaces for teams",
        "Real-time alerts and notifications"
    ];

    return (
        <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-black/10">
            {/* Hero Section */}
            <section className="px-6 py-32 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-none">
                            AIM for Retail
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-gray-700 leading-relaxed">
                            A complete platform that brings data-driven decision making to every aspect of retail operations.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            From inventory management to customer analytics, AIM for Retail transforms how retailers operate in an increasingly complex and competitive landscape.
                        </p>
                    </motion.div>
                </div>

                <div className="relative aspect-[16/9] bg-gray-100 rounded-sm overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80"
                        alt="Retail Warehouse"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* Our Work Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-light mb-8">Our Work</h2>
                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                We partner with leading retailers to solve their most complex operational challenges.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                From global chains to regional players, our platform scales to meet the unique needs of each business while delivering measurable results.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-8 rounded-lg border border-gray-200">
                                <div className="text-4xl font-light text-blue-600 mb-2">30%</div>
                                <p className="text-gray-700">Reduction in inventory carrying costs</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg border border-gray-200">
                                <div className="text-4xl font-light text-blue-600 mb-2">25%</div>
                                <p className="text-gray-700">Improvement in forecast accuracy</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg border border-gray-200">
                                <div className="text-4xl font-light text-blue-600 mb-2">40%</div>
                                <p className="text-gray-700">Faster decision-making processes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real-time Data Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-light mb-6">Real-time data</h2>
                        </div>

                        <div className="lg:col-span-2 space-y-6">
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Make decisions based on what's happening right now, not what happened last week.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                AIM for Retail integrates data from POS systems, e-commerce platforms, warehouses, and suppliers to provide a real-time view of your entire operation. See inventory levels, sales trends, and supply chain status update as they happen.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our platform processes millions of transactions per day, turning raw data into actionable insights that help you respond to changing conditions faster than your competition.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Capabilities */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-light mb-16">Our Capabilities</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                <p className="text-gray-600">{capability.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-white">
                <div className="max-w-7xl mx-auto space-y-24">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-24 border-b border-gray-200 last:border-0"
                        >
                            <div>
                                <h3 className="text-3xl font-light mb-6">{useCase.title}</h3>
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    {useCase.description}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-medium mb-6 text-gray-500 uppercase tracking-wide">
                                    Key Benefits
                                </h4>
                                <ul className="space-y-4">
                                    {useCase.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                            <span className="text-gray-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Ease of Use Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-light mb-8">
                                Ease of use includes
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Powerful doesn't have to mean complicated. Our platform is designed for users at all technical levels.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {easeOfUse.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-center gap-3 p-4 bg-white/5 rounded border border-white/10"
                                >
                                    <BsArrowRight className="text-blue-400 flex-shrink-0" />
                                    <span className="text-gray-200">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Bring Forge Section */}
            <section className="px-6 py-32 md:px-20 lg:px-32 bg-white">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none mb-12"
                    >
                        Bring Forge to Your Retail Operations
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Transform your retail business with the same platform trusted by the world's most demanding organizations.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Whether you're optimizing inventory, enhancing customer experiences, or building resilient supply chains, Forge provides the foundation for data-driven retail excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-gray-50 border-t border-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-light mb-8">
                        Ready to Transform Your Retail Operations?
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        Discover how AIM can help you compete and win in today's retail landscape.
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

export default Retail;
