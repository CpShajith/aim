import { motion } from 'framer-motion';
import { BsCheckCircle, BsShieldLock, BsSpeedometer2, BsGraphUp, BsPeople, BsBuilding } from 'react-icons/bs';

const FedStart = () => {
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
                        Advanced Intelligence in Motion
                        <br />
                        <span className="font-medium">FedStart</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl"
                    >
                        Accelerate your path to FedRAMP and IL5/IL6 authorization.
                    </motion.p>
                </div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative aspect-[21/9] bg-black rounded-sm overflow-hidden"
                >
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                        alt="FedStart Network"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-4xl md:text-6xl text-white font-light tracking-wider border-2 border-white/30 p-8 backdrop-blur-sm">
                            Advanced Intelligence in Motion <span className="font-bold">→ FedStart</span>
                        </h2>
                    </div>
                </motion.div>
            </section>

            {/* Innovation Accelerated */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-light mb-8">Innovation Accelerated. <br /> Accreditation Automated.</h2>
                    </div>
                    <div>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Advanced Intelligence in Motion FedStart provides a fully managed, accredited environment for your software to run in. We handle the compliance, security, and operations, so you can focus on delivering value to the government.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'FedRAMP High Ready',
                                'DoD IL5 & IL6 Authorized',
                                'Continuous Monitoring & Compliance'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg font-medium">
                                    <BsCheckCircle className="text-blue-600" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* High Bar */}
            <section className="px-6 py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32">
                    <h2 className="text-3xl font-light mb-16 text-center">The High Bar for Federal SaaS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { title: "FedRAMP High", icon: BsShieldLock, desc: "Highest baseline for civilian agencies." },
                            { title: "DoD IL5", icon: BsBuilding, desc: "Controlled Unclassified Information (CUI)." },
                            { title: "DoD IL6", icon: BsShieldLock, desc: "Classified Secret workloads." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-sm shadow-sm"
                            >
                                <item.icon className="text-5xl text-blue-600 mx-auto mb-6" />
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <h2 className="text-4xl font-light mb-16">Key Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                        { title: "Time to Market", icon: BsSpeedometer2, desc: "Reduce accreditation timelines from years to weeks. Deploy your software instantly into pre-authorized environments." },
                        { title: "Cost Savings", icon: BsGraphUp, desc: "Eliminate the millions of dollars in upfront costs associated with building and maintaining a federal compliance program." },
                        { title: "Risk Reduction", icon: BsShieldLock, desc: "Leverage Advanced Intelligence in Motion's proven security posture and continuous monitoring to mitigate risk and ensure ongoing compliance." },
                        { title: "Market Access", icon: BsPeople, desc: "Gain immediate access to the entire federal marketplace, including Defense, Intelligence, and Civilian agencies." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-6"
                        >
                            <div className="shrink-0">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-2xl">
                                    <item.icon />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-medium mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Our Partners */}
            <section className="px-6 py-24 bg-black text-white">
                <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32">
                    <h2 className="text-4xl font-light mb-16">Our Partners</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                        {/* Generating a grid of placeholder logos to match the density of the screenshot */}
                        {Array.from({ length: 24 }).map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.02 }}
                                className="aspect-video bg-white/10 flex items-center justify-center rounded-sm hover:bg-white/20 transition-colors cursor-pointer"
                            >
                                <span className="text-xs font-mono text-white/50">PARTNER {i + 1}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources/News */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <h2 className="text-4xl font-light mb-16">News & Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "FedStart Guide", category: "Whitepaper", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" },
                        { title: "Accelerating AI Adoption", category: "Blog", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" },
                        { title: "Partner Success Story", category: "Case Study", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-video overflow-hidden mb-4 bg-gray-100">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{item.category}</p>
                            <h3 className="text-xl font-medium group-hover:text-blue-600 transition-colors">{item.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FedStart;
