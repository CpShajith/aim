import { motion } from 'framer-motion';
import { BsArrowRight, BsBroadcast, BsGraphUp, BsShieldCheck, BsPeople, BsLightning, BsGear } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Telecommunications = () => {
    const capabilities = [
        {
            icon: BsBroadcast,
            title: "Network Optimization",
            description: "Maximize network performance and capacity utilization with AI-powered analytics"
        },
        {
            icon: BsGraphUp,
            title: "Revenue Assurance",
            description: "Identify revenue leakage and optimize pricing strategies across services"
        },
        {
            icon: BsShieldCheck,
            title: "Fraud Detection",
            description: "Detect and prevent fraud in real-time across voice, data, and billing systems"
        },
        {
            icon: BsPeople,
            title: "Customer Analytics",
            description: "Understand customer behavior and reduce churn with predictive insights"
        },
        {
            icon: BsLightning,
            title: "5G Deployment",
            description: "Accelerate 5G rollout with data-driven site selection and optimization"
        },
        {
            icon: BsGear,
            title: "Operations Intelligence",
            description: "Streamline operations and reduce costs through automation and analytics"
        }
    ];

    const useCases = [
        {
            title: "Network Planning & Optimization",
            description: "Optimize network capacity, coverage, and quality of service using integrated data from across your infrastructure.",
            details: [
                "Predictive capacity planning",
                "Coverage gap analysis",
                "Quality of service monitoring",
                "Infrastructure investment optimization"
            ]
        },
        {
            title: "Customer Experience Management",
            description: "Deliver superior customer experiences by understanding and predicting customer needs and behaviors.",
            details: [
                "Churn prediction and prevention",
                "Personalized service recommendations",
                "Customer journey analytics",
                "Real-time issue resolution"
            ]
        },
        {
            title: "Fraud & Revenue Protection",
            description: "Protect revenue and detect fraud across voice, data, and billing systems with advanced analytics.",
            details: [
                "Real-time fraud detection",
                "Revenue leakage identification",
                "Billing accuracy verification",
                "Subscription fraud prevention"
            ]
        }
    ];

    return (
        <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-black/10">
            {/* Hero Section */}
            <section className="relative w-full h-[70vh]">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                        alt="Telecommunications"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
                </div>

                <div className="absolute inset-0 flex items-end px-6 md:px-20 lg:px-32 pb-20">
                    <div className="max-w-7xl mx-auto w-full">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-light text-white tracking-tight leading-tight"
                        >
                            Telecommunications
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* Cell Tower Image Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="relative aspect-video bg-gray-100 rounded-sm overflow-hidden mb-12">
                    <img
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                        alt="Cell Tower"
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
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Empowering telecommunications providers to optimize networks, enhance customer experiences, and drive innovation.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <p className="text-gray-600 leading-relaxed">
                                From 5G deployment to fraud detection to customer analytics, AIM helps telcos navigate the complexities of modern telecommunications infrastructure and services.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our platform integrates data from network equipment, billing systems, customer touchpoints, and more to provide a unified view of your operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Network Visualization Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-light mb-12">Network Intelligence</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-square bg-gray-50 rounded-sm overflow-hidden border border-gray-200 p-8">
                            {/* Simulated network diagram */}
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="relative w-full h-full">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-32 h-32 bg-blue-600 rounded-full opacity-20" />
                                    </div>
                                    <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-500 rounded-full opacity-40" />
                                    <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-blue-500 rounded-full opacity-40" />
                                    <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-blue-500 rounded-full opacity-40" />
                                    <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-blue-500 rounded-full opacity-40" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-3xl font-light">Visualize Your Network</h3>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Gain complete visibility into your network infrastructure, from cell towers to fiber optics to data centers.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Identify bottlenecks, optimize capacity, and plan expansions with confidence using our advanced network visualization and analytics tools.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Grid */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-light mb-16">Key Capabilities</h2>

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
                                <p className="text-gray-600 text-sm">{capability.description}</p>
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
                                    Key Features
                                </h4>
                                <ul className="space-y-4">
                                    {useCase.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                            <span className="text-gray-700">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Video/Image Sections */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div className="relative aspect-video bg-gray-900 rounded-sm overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80"
                                alt="Telecom Operations"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex items-center">
                            <div className="space-y-6">
                                <h3 className="text-3xl font-light">Real-Time Operations</h3>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Monitor and manage your network in real-time with comprehensive operational dashboards.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative aspect-video bg-gray-900 rounded-sm overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                            alt="5G Technology"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-12">
                            <h3 className="text-4xl font-light mb-4">5G & Beyond</h3>
                            <p className="text-xl text-gray-300">
                                Accelerate your 5G deployment with data-driven insights and optimization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Strategy Section */}
            <section className="px-6 py-32 md:px-20 lg:px-32 bg-white">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-12"
                    >
                        Get started with a strong AI strategy for telcos
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Transform your telecommunications business with AI-powered insights and automation.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            From network optimization to customer experience to fraud detection, AIM provides the AI foundation you need to compete in the modern telecommunications landscape.
                        </p>
                        <Link to="/contact" className="px-8 py-4 bg-black text-white font-medium rounded-sm hover:bg-gray-800 transition-colors inline-flex items-center gap-2 group mt-8">
                            Get Started
                            <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Impact Metrics */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {[
                            { metric: "35%", label: "Reduction in Network Downtime" },
                            { metric: "50%", label: "Improvement in Fraud Detection" },
                            { metric: "25%", label: "Decrease in Customer Churn" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="text-6xl font-light mb-4 text-blue-600">{item.metric}</div>
                                <div className="text-gray-600">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Telecommunications;
