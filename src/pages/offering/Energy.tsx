
import { motion } from 'framer-motion';
import { BsArrowRight, BsPlayFill } from 'react-icons/bs';

const Energy = () => {
    return (
        <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-black/10">
            {/* Hero Section */}
            <section className="pt-32 pb-12 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-8xl font-light tracking-tight leading-none mb-6">
                        Advanced Intelligence in Motion
                        <br />
                        <span className="font-medium">for Energy</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                        Powering the energy transition with data-driven decision making and operational excellence.
                    </p>
                </motion.div>
            </section>

            {/* Hero Image */}
            <section className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
                        alt="Energy Infrastructure"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </motion.div>
            </section>

            {/* The Energy Transition */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                            The Energy Transition requires a new operating system.
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            From oil and gas to renewables and utilities, the energy sector is undergoing a fundamental transformation. Advanced Intelligence in Motion Forge connects data, analytics, and operations to help organizations navigate this complexity.
                        </p>
                        <a href="#" className="text-lg text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-2 group">
                            Read the Whitepaper <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Abstract Network Graphic Placeholder */}
                        <img
                            src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80"
                            alt="Network Graph"
                            className="w-full rounded-lg shadow-xl"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Our Partners */}
            <section className="px-6 py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-medium mb-12 uppercase tracking-wider text-gray-500"
                    >
                        Our Partners
                    </motion.h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {['BP', 'Kinder Morgan', 'E.ON', 'Engie', 'PG&E', 'National Grid', 'Enel', 'ExxonMobil'].map((partner, i) => (
                            <motion.div
                                key={partner}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="h-12 flex items-center justify-center"
                            >
                                <span className="text-xl font-bold text-gray-400 hover:text-black transition-colors">{partner}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Oil & Gas */}
            <section className="px-6 py-32 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-200">
                <motion.div className="mb-16">
                    <h2 className="text-5xl md:text-7xl font-light mb-6">Oil & Gas</h2>
                </motion.div>

                {/* BP Video Section */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative aspect-[21/9] bg-black rounded-sm overflow-hidden group cursor-pointer mb-6"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1521791136064-7985c2d18854?auto=format&fit=crop&q=80"
                            alt="BP Transformation"
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                                <BsPlayFill className="text-4xl text-white ml-1" />
                            </div>
                        </div>
                    </motion.div>
                    <h3 className="text-2xl font-medium">Digital Transformation at BP</h3>
                    <p className="text-gray-600 mt-2">Accelerating energy transition through data integration.</p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Upstream Production", img: "https://images.unsplash.com/photo-1518332840326-c48816c6ce42?auto=format&fit=crop&q=80", desc: "Optimizing well performance and reservoir management." },
                        { title: "Downstream Operations", img: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80", desc: "Enhancing refinery efficiency and safety." },
                        { title: "Supply Chain", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80", desc: "End-to-end visibility and logistics optimization." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-video overflow-hidden mb-4">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h4 className="text-xl font-medium mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Utilities */}
            <section className="px-6 py-32 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-200">
                <motion.div className="mb-16">
                    <h2 className="text-5xl md:text-7xl font-light mb-6">Utilities</h2>
                </motion.div>

                {/* PG&E Video Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative aspect-video bg-black rounded-sm overflow-hidden group cursor-pointer"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
                            alt="PG&E"
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                                <BsPlayFill className="text-3xl text-white ml-1" />
                            </div>
                        </div>
                    </motion.div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-light mb-4">PG&E: Safety & Reliability</h3>
                        <p className="text-xl text-gray-600 leading-relaxed mb-6">
                            "Forge allows us to see the grid in a way we never could before, enabling us to prevent wildfires and improve reliability for millions of customers."
                        </p>
                        <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-2 font-medium">
                            Watch the Story <BsArrowRight />
                        </a>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { title: "Grid Modernization", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80", desc: "Integrating distributed energy resources and smart meters." },
                        { title: "Wildfire Mitigation", img: "https://images.unsplash.com/photo-1599933397666-0797ce0a593d?auto=format&fit=crop&q=80", desc: "Predictive analytics for vegetation management and asset health." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-video overflow-hidden mb-4">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h4 className="text-xl font-medium mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Renewables */}
            <section className="px-6 py-32 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-200">
                <motion.div className="mb-16">
                    <h2 className="text-5xl md:text-7xl font-light mb-6">Renewables</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] overflow-hidden rounded-sm"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80"
                            alt="Renewables"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
                            <h3 className="text-3xl text-white font-light">Scaling Clean Energy</h3>
                        </div>
                    </motion.div>

                    <div className="space-y-12">
                        {[
                            { title: "Asset Performance", desc: "Maximize output and extend life of wind and solar assets." },
                            { title: "Grid Integration", desc: "Seamlessly connect renewable generation to the grid." },
                            { title: "Development & Construction", desc: "Streamline permitting, land acquisition, and build." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="border-b border-gray-200 pb-8"
                            >
                                <h4 className="text-2xl font-light mb-2">{item.title}</h4>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Carbon */}
            <section className="px-6 py-32 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-light mb-8">Carbon</h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Measure, report, and reduce emissions across the entire value chain. Advanced Intelligence in Motion Forge provides the source of truth for your net-zero journey.
                        </p>
                        <a href="#" className="text-lg text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-2 group">
                            Explore Carbon Solutions <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1611273426728-c009c9eb8475?auto=format&fit=crop&q=80"
                            alt="Carbon Management"
                            className="w-full rounded-sm shadow-xl"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Get in Touch */}
            <section className="px-6 py-32 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-light mb-8">Get in Touch</h2>
                    </div>
                    <div className="flex flex-col gap-8">
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Ready to transform your energy operations? Contact our team to learn more about Advanced Intelligence in Motion for Energy.
                        </p>
                        <a href="#" className="text-lg text-black hover:text-blue-600 transition-colors inline-flex items-center gap-2 group border-b border-black pb-2 w-fit">
                            Contact Us <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Energy;
