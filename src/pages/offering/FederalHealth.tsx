import { motion } from 'framer-motion';
import { BsArrowRight, BsPlayFill } from 'react-icons/bs';

const FederalHealth = () => {
    return (
        <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-black/10">
            {/* Hero Section */}
            <section className="pt-32 pb-12 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-light tracking-tight leading-none"
                    >
                        Federal Health
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl"
                    >
                        Transforming federal health agencies through data integration and operational excellence.
                    </motion.p>
                </div>

                {/* Hero Image/Video */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative aspect-[21/9] bg-gray-100 rounded-sm overflow-hidden group cursor-pointer"
                >
                    <img
                        src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80"
                        alt="Scientist with Microscope"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                            <BsPlayFill className="text-4xl text-white ml-1" />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Our Impact */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-light mb-16"
                >
                    Our Impact
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            title: "Accelerating Research",
                            desc: "Unifying data across disparate systems to speed up clinical trials and drug discovery."
                        },
                        {
                            title: "Public Health",
                            desc: "Enabling real-time disease surveillance and coordinated response to health threats."
                        },
                        {
                            title: "Supply Chain",
                            desc: "Optimizing the distribution of critical medical supplies and pharmaceuticals."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-medium">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-2 text-sm font-medium group">
                                Learn More <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Our Solutions */}
            <section className="px-6 py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-light mb-16"
                    >
                        Our Solutions
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Clinical Trials", img: "https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80" },
                            { title: "Disease Surveillance", img: "https://images.unsplash.com/photo-1584036561566-b93a945c3cbc?auto=format&fit=crop&q=80" },
                            { title: "Health Equity", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80" },
                            { title: "Pandemic Response", img: "https://images.unsplash.com/photo-1584483766114-2cea6fac2578?auto=format&fit=crop&q=80" },
                            { title: "Medical Logistics", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="aspect-video overflow-hidden mb-4 bg-gray-100">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h3 className="text-xl font-medium mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                                <a href="#" className="text-sm text-gray-500 flex items-center gap-2">
                                    Explore <BsArrowRight />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Capabilities */}
            <section className="px-6 py-32 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div>
                        <h2 className="text-4xl font-light mb-8">Our Capabilities</h2>
                        <ul className="space-y-4">
                            {['Data Integration', 'Analytics & AI', 'Security & Privacy', 'Interoperability', 'Case Management'].map((item, i) => (
                                <li key={i} className={`text-lg cursor-pointer transition-colors ${i === 0 ? 'text-blue-600 font-medium' : 'text-gray-500 hover:text-black'}`}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-light mb-6">Execute complex, cross-agency missions with a fragmented data landscape.</h3>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                Advanced Intelligence in Motion Forge serves as the connective tissue for federal health data, enabling agencies to securely integrate, analyze, and act on information from disparate sources without disrupting existing workflows.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Connect to any data source, legacy or modern.',
                                    'Harmonize data models for cross-agency collaboration.',
                                    'Apply granular access controls to protect sensitive PHI/PII.'
                                ].map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Resources */}
            <section className="px-6 py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32">
                    <h2 className="text-4xl font-light mb-16">Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { type: "Case Study", title: "NIH N3C", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80" },
                            { type: "Whitepaper", title: "Health Data Fabric", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" },
                            { type: "Video", title: "CDC Modernization", img: "https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80" },
                            { type: "Blog", title: "The Future of Public Health", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[4/3] overflow-hidden mb-4 bg-gray-200">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{item.type}</p>
                                <h3 className="text-lg font-medium group-hover:text-blue-600 transition-colors">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* News & Accolades */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <h2 className="text-4xl font-light mb-16">News & Accolades</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    {[
                        { title: "Advanced Intelligence in Motion Awarded Contract to Support HHS", date: "October 2023", source: "Press Release" },
                        { title: "How Data is Transforming Federal Health", date: "September 2023", source: "FedScoop" },
                        { title: "Advanced Intelligence in Motion and the Future of Disease Surveillance", date: "August 2023", source: "HealthIT News" },
                        { title: "Modernizing the VA Supply Chain", date: "July 2023", source: "GovExec" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border-t border-gray-200 pt-6 group cursor-pointer"
                        >
                            <p className="text-sm text-gray-500 mb-2">{item.source} • {item.date}</p>
                            <h3 className="text-xl font-medium group-hover:text-blue-600 transition-colors">{item.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-32 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="max-w-4xl">
                    <h2 className="text-5xl md:text-7xl font-light mb-12 leading-tight">
                        Interested in solving problems with Advanced Intelligence in Motion software?
                    </h2>
                    <a href="#" className="text-xl text-black hover:text-blue-600 transition-colors inline-flex items-center gap-2 group border-b border-black pb-2">
                        Contact Us <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default FederalHealth;
