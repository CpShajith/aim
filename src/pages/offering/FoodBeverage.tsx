import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

const FoodBeverage = () => {
    const [activeOffering, setActiveOffering] = useState('supply');

    const offerings = [
        {
            id: 'supply',
            title: 'Supply Chain',
            desc: "The system provides end-to-end visibility across the supply chain, from raw material sourcing to manufacturing and distribution. Optimize inventory levels, reduce waste, and ensure on-time delivery.",
            link: "Explore Supply Chain"
        },
        {
            id: 'quality',
            title: 'Quality & Safety',
            desc: "Ensure product quality and safety with real-time monitoring and predictive analytics. Detect anomalies early, manage recalls efficiently, and maintain compliance with regulatory standards.",
            link: "Explore Quality"
        },
        {
            id: 'manufacturing',
            title: 'Manufacturing',
            desc: "Maximize production efficiency and asset utilization. Connect data from sensors, machines, and operators to identify bottlenecks and optimize production schedules.",
            link: "Explore Manufacturing"
        },
        {
            id: 'sales',
            title: 'Sales & Marketing',
            desc: "Drive growth with data-driven insights into consumer preferences and market trends. Optimize pricing, promotions, and trade spend to maximize ROI.",
            link: "Explore Sales"
        }
    ];

    return (
        <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-black/10">
            {/* Hero Section */}
            <section className="pt-32 pb-12 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-light tracking-tight leading-none mb-12"
                >
                    Food and
                    <br />
                    Beverage
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="w-full h-[60vh] overflow-hidden rounded-sm"
                >
                    <img
                        src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80"
                        alt="Food Supply Chain"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </section>

            {/* Partners */}
            <section className="px-6 py-12 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32 flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {['General Mills', 'Tyson', 'Aramark', 'Sweetgreen', 'QSO', 'Coca-Cola'].map((partner, i) => (
                        <span key={i} className="text-xl font-bold text-gray-500">{partner}</span>
                    ))}
                </div>
            </section>

            {/* Forge for Food and Beverage */}
            <section className="px-6 py-32 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
                            alt="Aerial View"
                            className="w-full rounded-sm shadow-lg"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-light mb-8">Forge for Food and Beverage</h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Forge is the operating system for the modern food and beverage industry. It integrates data from across the value chain—from agriculture and sourcing to manufacturing and distribution—to drive operational excellence.
                            </p>
                            <p>
                                By connecting disparate data sources, Forge enables organizations to anticipate disruptions, ensure quality and safety, and meet sustainability goals.
                            </p>
                            <p>
                                Whether it's optimizing production schedules, managing complex supply chains, or predicting consumer trends, Forge provides the decision intelligence needed to thrive in a rapidly changing market.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Our Offerings */}
            <section className="px-6 py-32 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-200">
                <h2 className="text-4xl font-light mb-16">Our Offerings</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-1 space-y-2">
                        {offerings.map((offer) => (
                            <button
                                key={offer.id}
                                onClick={() => setActiveOffering(offer.id)}
                                className={`w-full text-left py-4 px-4 border-l-2 transition-all duration-300 text-lg ${activeOffering === offer.id
                                    ? 'border-black text-black font-medium bg-gray-50'
                                    : 'border-gray-200 text-gray-500 hover:text-black hover:border-gray-400'
                                    }`}
                            >
                                {offer.title}
                            </button>
                        ))}
                    </div>
                    <div className="lg:col-span-2">
                        <AnimatePresence mode="wait">
                            {offerings.map((offer) => (
                                activeOffering === offer.id && (
                                    <motion.div
                                        key={offer.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                            {offer.desc}
                                        </p>
                                        <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-2 font-medium group">
                                            {offer.link} <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* AIP in Practice */}
            <section className="px-6 py-32 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-200">
                <h2 className="text-4xl font-light mb-16">AIP in practice</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            category: "Video",
                            title: "Tyson's Digital Transformation",
                            desc: "How Tyson Foods uses Forge to optimize its supply chain and improve operational efficiency.",
                            link: "Watch Now"
                        },
                        {
                            category: "Case Study",
                            title: "Optimizing Production at Scale",
                            desc: "A leading beverage company increased throughput by 15% using Forge's predictive maintenance capabilities.",
                            link: "Read Case Study"
                        },
                        {
                            category: "Blog",
                            title: "AI-Powered Quality Control",
                            desc: "Leveraging computer vision and sensor data to detect defects in real-time and reduce waste.",
                            link: "Read Blog"
                        }
                    ].map((item, i) => (
                        <div key={i} className="group cursor-pointer">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">{item.category}</p>
                            <h3 className="text-2xl font-light mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                            <p className="text-gray-600 mb-4">{item.desc}</p>
                            <span className="text-blue-600 flex items-center gap-2 text-sm font-medium">
                                {item.link} <BsArrowRight />
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* More on Food and Beverage */}
            <section className="px-6 py-32 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-200">
                <h2 className="text-4xl font-light mb-16">More on Food and Beverage</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { title: "Autonomous Planning", desc: "The future of supply chain management." },
                        { title: "AI-Powered Food Safety", desc: "Protecting consumers with data." },
                        { title: "Sustainability in F&B", desc: "Reducing carbon footprint with Forge." },
                        { title: "Supply Chain Resilience", desc: "Navigating disruptions in a global market." }
                    ].map((item, i) => (
                        <div key={i} className="group cursor-pointer border-t border-gray-200 pt-6 hover:border-black transition-colors">
                            <h3 className="text-lg font-medium mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                            <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
                            <span className="text-gray-400 text-sm flex items-center gap-2 group-hover:text-black transition-colors">
                                Read More <BsArrowRight />
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FoodBeverage;
