import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SupplyChain = () => {
    const partners = [
        { name: "Siemens", logo: "SIEMENS" },
        { name: "Airbus", logo: "AIRBUS" },
        { name: "Thales", logo: "THALES" },
        { name: "Lockheed Martin", logo: "LOCKHEED MARTIN" },
        { name: "Raytheon", logo: "RAYTHEON" },
        { name: "BAE Systems", logo: "BAE SYSTEMS" }
    ];

    const impactStories = [
        {
            title: "Reducing Lead Times",
            description: "How a global manufacturer reduced procurement lead times by 40% through better visibility and collaboration.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
        },
        {
            title: "Optimizing Inventory",
            description: "A defense contractor optimized inventory levels across 50+ locations, reducing carrying costs by $50M annually.",
            image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80"
        }
    ];

    const industryImages = [
        "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1581092918484-8313e1f7e8c7?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80"
    ];

    const solutionImages = [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
    ];

    return (
        <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-black/10">
            {/* Hero Video/Image Section */}
            <section className="relative w-full h-screen">
                <div className="absolute inset-0 bg-black">
                    <img
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
                        alt="Supply Chain"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

                <div className="absolute bottom-20 left-0 right-0 px-6 md:px-20 lg:px-32">
                    <div className="max-w-7xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-light text-white tracking-tight leading-tight"
                        >
                            Supply Chain
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* About Our Work */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-light mb-8">About Our Work</h2>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Transforming supply chain operations through data integration and advanced analytics.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed">
                            Advanced Intelligence in Motion's supply chain solutions bring together data from across your enterprise—procurement, logistics, manufacturing, and more—to provide unprecedented visibility and control.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            From predicting disruptions to optimizing inventory to ensuring compliance, our platform helps you build resilient, efficient supply chains that adapt to changing conditions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Partners */}
            <section className="px-6 py-20 md:px-20 lg:px-32 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-light mb-12">Our Partners</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-sm border border-gray-200 flex items-center justify-center aspect-video"
                            >
                                <div className="text-2xl font-bold text-gray-800">{partner.logo}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Real-World Impact */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-light mb-16">Real-World Impact</h2>

                <div className="space-y-20">
                    {impactStories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className="relative aspect-video bg-gray-100 rounded-sm overflow-hidden">
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                <h3 className="text-3xl font-light mb-6">{story.title}</h3>
                                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                    {story.description}
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group"
                                >
                                    Read Case Study
                                    <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Our Industry Impact */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-light mb-16">Our Industry Impact</h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {industryImages.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative aspect-video bg-gray-200 rounded-sm overflow-hidden group cursor-pointer"
                            >
                                <img
                                    src={image}
                                    alt={`Industry ${index + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learn about Solutions */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-light mb-16">
                    Learn about Advanced Intelligence in Motion Supply Chain Solutions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {solutionImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative aspect-video bg-gray-100 rounded-sm overflow-hidden group cursor-pointer"
                        >
                            <img
                                src={image}
                                alt={`Solution ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-white text-xl font-light">
                                    {index === 0 ? "Procurement" :
                                        index === 1 ? "Logistics" :
                                            index === 2 ? "Manufacturing" :
                                                "Planning"}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="px-6 py-32 md:px-20 lg:px-32 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-light mb-8 leading-tight">
                                See what Advanced Intelligence in Motion can do for your Supply Chain
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Transform your supply chain operations with the power of data integration and advanced analytics.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                From visibility to optimization to resilience, Advanced Intelligence in Motion provides the platform you need to compete in today's complex global environment.
                            </p>
                            <Link to="/contact" className="px-8 py-4 bg-white text-black font-medium rounded-sm hover:bg-gray-200 transition-colors inline-flex items-center gap-2 group mt-8">
                                Get Started
                                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities List */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-light mb-16">Key Capabilities</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Visibility",
                                items: ["End-to-end tracking", "Real-time monitoring", "Multi-tier visibility", "Risk identification"]
                            },
                            {
                                title: "Optimization",
                                items: ["Inventory optimization", "Route planning", "Demand forecasting", "Resource allocation"]
                            },
                            {
                                title: "Resilience",
                                items: ["Disruption prediction", "Scenario modeling", "Alternative sourcing", "Risk mitigation"]
                            },
                            {
                                title: "Collaboration",
                                items: ["Supplier portals", "Cross-functional teams", "Secure data sharing", "Workflow automation"]
                            }
                        ].map((capability, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                                <h3 className="text-xl font-medium mb-4">{capability.title}</h3>
                                <ul className="space-y-2">
                                    {capability.items.map((item, idx) => (
                                        <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SupplyChain;
