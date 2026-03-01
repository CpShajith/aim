import { motion } from 'framer-motion';
import { BsArrowRight, BsLightningCharge, BsGraphUp, BsShieldCheck, BsGear, BsCloudCheck, BsGrid3X3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Utilities = () => {
    const capabilities = [
        {
            icon: BsLightningCharge,
            title: "Grid Optimization",
            description: "Optimize power distribution and reduce energy waste with real-time grid analytics"
        },
        {
            icon: BsGraphUp,
            title: "Demand Forecasting",
            description: "Predict energy demand patterns and optimize resource allocation"
        },
        {
            icon: BsShieldCheck,
            title: "Infrastructure Security",
            description: "Protect critical infrastructure from physical and cyber threats"
        },
        {
            icon: BsGear,
            title: "Asset Management",
            description: "Monitor and maintain infrastructure assets across your entire network"
        },
        {
            icon: BsCloudCheck,
            title: "Renewable Integration",
            description: "Seamlessly integrate renewable energy sources into your grid"
        },
        {
            icon: BsGrid3X3,
            title: "Smart Grid Analytics",
            description: "Leverage IoT and sensor data for intelligent grid management"
        }
    ];

    const useCases = [
        {
            title: "Grid Modernization",
            description: "Transform your legacy infrastructure into a smart, responsive grid that adapts to changing energy demands.",
            details: [
                "Real-time grid monitoring and control",
                "Predictive maintenance for infrastructure",
                "Automated fault detection and response",
                "Integration with distributed energy resources"
            ]
        },
        {
            title: "Renewable Energy Integration",
            description: "Manage the complexity of integrating solar, wind, and other renewable sources into your energy mix.",
            details: [
                "Renewable output forecasting",
                "Grid stability management",
                "Energy storage optimization",
                "Carbon footprint tracking"
            ]
        },
        {
            title: "Customer Experience",
            description: "Deliver superior service while empowering customers with insights into their energy usage.",
            details: [
                "Usage analytics and insights",
                "Outage prediction and prevention",
                "Personalized energy recommendations",
                "Demand response programs"
            ]
        }
    ];

    return (
        <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-black/10">
            {/* Hero Section */}
            <section className="relative w-full h-[70vh]">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
                        alt="Utilities Infrastructure"
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
                            Advanced Intelligence in Motion for Utilities
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* Solar Farm Image Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="relative aspect-video bg-gray-100 rounded-sm overflow-hidden mb-12">
                    <img
                        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80"
                        alt="Solar Farm"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* About Our Work Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-light mb-8">About Our Work</h2>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Empowering utilities to modernize infrastructure, integrate renewables, and deliver reliable service.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <p className="text-gray-600 leading-relaxed">
                                From grid optimization to renewable integration to customer analytics, Advanced Intelligence in Motion helps utilities navigate the energy transition while maintaining reliability and affordability.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our platform integrates data from SCADA systems, smart meters, weather forecasts, and more to provide a unified view of your operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid Visualization Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-light mb-12">Smart Grid Intelligence</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-square bg-gray-50 rounded-sm overflow-hidden border border-gray-200 p-8">
                            {/* Simulated grid diagram */}
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="relative w-full h-full">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-32 h-32 bg-green-600 rounded-full opacity-20" />
                                    </div>
                                    <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-green-500 rounded-full opacity-40" />
                                    <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-green-500 rounded-full opacity-40" />
                                    <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-green-500 rounded-full opacity-40" />
                                    <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-green-500 rounded-full opacity-40" />
                                    {/* Grid lines */}
                                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                                        <line x1="25" y1="25" x2="50" y2="50" stroke="#22c55e" strokeWidth="0.5" opacity="0.3" />
                                        <line x1="75" y1="25" x2="50" y2="50" stroke="#22c55e" strokeWidth="0.5" opacity="0.3" />
                                        <line x1="25" y1="75" x2="50" y2="50" stroke="#22c55e" strokeWidth="0.5" opacity="0.3" />
                                        <line x1="75" y1="75" x2="50" y2="50" stroke="#22c55e" strokeWidth="0.5" opacity="0.3" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-3xl font-light">Visualize Your Grid</h3>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Gain complete visibility into your power grid, from generation to transmission to distribution.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Identify inefficiencies, predict failures, and optimize operations with our advanced grid visualization and analytics tools.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Capabilities Grid */}
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
                                <capability.icon className="text-4xl mb-6 text-green-600" />
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
                                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                                            <span className="text-gray-700">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Visual Sections */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div className="relative aspect-video bg-gray-900 rounded-sm overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80"
                                alt="Control Room"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex items-center">
                            <div className="space-y-6">
                                <h3 className="text-3xl font-light">Real-Time Operations</h3>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Monitor and manage your grid in real-time with comprehensive operational dashboards.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div className="flex items-center order-2 lg:order-1">
                            <div className="space-y-6">
                                <h3 className="text-3xl font-light">Predictive Maintenance</h3>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Prevent failures before they happen with AI-powered predictive maintenance.
                                </p>
                            </div>
                        </div>

                        <div className="relative aspect-video bg-gray-900 rounded-sm overflow-hidden order-1 lg:order-2">
                            <img
                                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
                                alt="Power Infrastructure"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="relative aspect-video bg-gray-900 rounded-sm overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80"
                            alt="Wind Turbines"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-12">
                            <h3 className="text-4xl font-light mb-4">Renewable Future</h3>
                            <p className="text-xl text-gray-300">
                                Lead the energy transition with intelligent renewable integration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-video bg-white rounded-sm overflow-hidden border border-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                                alt="Data Analytics Dashboard"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-3xl font-light">Data-Driven Decisions</h3>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Transform raw data into actionable insights that drive operational excellence.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our platform brings together data from across your organization, enabling you to make informed decisions faster.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get Started Section */}
            <section className="px-6 py-32 md:px-20 lg:px-32 bg-white">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-12"
                    >
                        Get started with Advanced Intelligence in Motion Forge for Utilities
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Transform your utility operations with AI-powered insights and automation.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            From grid optimization to renewable integration to customer experience, Advanced Intelligence in Motion provides the foundation you need to lead the energy transition.
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
                            { metric: "30%", label: "Reduction in Unplanned Outages" },
                            { metric: "25%", label: "Improvement in Grid Efficiency" },
                            { metric: "40%", label: "Faster Renewable Integration" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="text-6xl font-light mb-4 text-green-600">{item.metric}</div>
                                <div className="text-gray-600">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Utilities;
