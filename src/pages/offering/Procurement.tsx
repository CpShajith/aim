import { motion } from 'framer-motion';
import { BsArrowRight, BsLightning, BsShieldCheck, BsGraphUp, BsGear, BsFileText, BsSearch } from 'react-icons/bs';

const Procurement = () => {
    const pillars = [
        {
            title: "Sourcing",
            description: "Identify the best suppliers and negotiate optimal terms with comprehensive market intelligence and supplier analytics.",
            icon: BsSearch
        },
        {
            title: "Contracting",
            description: "Streamline contract creation, approval, and management with automated workflows and compliance tracking.",
            icon: BsFileText
        },
        {
            title: "Procurement",
            description: "Execute purchases efficiently with integrated catalogs, automated approvals, and real-time spend visibility.",
            icon: BsGear
        },
        {
            title: "Payment",
            description: "Optimize payment processes with automated invoice matching, fraud detection, and cash flow management.",
            icon: BsGraphUp
        }
    ];

    const aiFeatures = [
        {
            title: "AI-Driven Supplier Discovery",
            description: "Leverage artificial intelligence to identify and evaluate potential suppliers based on your specific requirements, historical performance data, and market trends.",
            details: [
                "Automated supplier matching based on capabilities and requirements",
                "Risk assessment using multiple data sources",
                "Performance prediction based on historical patterns",
                "Continuous market monitoring for new opportunities"
            ]
        },
        {
            title: "AI-Powered Contract Intelligence",
            description: "Transform contract management with AI that understands, analyzes, and optimizes your agreements throughout their lifecycle.",
            details: [
                "Automated contract review and risk identification",
                "Intelligent clause recommendations",
                "Compliance monitoring and alerts",
                "Contract performance analytics"
            ]
        },
        {
            title: "AI-Enhanced Spend Analytics",
            description: "Gain unprecedented visibility into spending patterns and opportunities for optimization through advanced AI-powered analytics.",
            details: [
                "Real-time spend categorization and analysis",
                "Anomaly detection and fraud prevention",
                "Predictive budget forecasting",
                "Automated savings opportunity identification"
            ]
        }
    ];

    return (
        <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-black/10">
            {/* Hero Section */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                    alt="Procurement"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

                <div className="absolute inset-0 flex items-center px-6 md:px-20 lg:px-32">
                    <div className="max-w-7xl mx-auto w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl"
                        >
                            <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-none text-white mb-6">
                                Advanced Intelligence in Motion for Procurement
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                                End-to-End Procurement Transformation
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Introduction Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-light mb-8">
                                How the Software Works
                            </h2>
                        </div>
                        <div className="space-y-6">
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Advanced Intelligence in Motion for Procurement integrates your entire procurement ecosystem into a single, intelligent platform.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                From sourcing to payment, our AI-powered platform provides end-to-end visibility, automation, and optimization across your procurement operations. Make data-driven decisions, reduce costs, and mitigate risks while ensuring compliance and maximizing value.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Foundational Pillars */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-light mb-4">Foundational Pillars</h2>
                    <p className="text-xl text-gray-600 mb-16 max-w-3xl">
                        Four integrated pillars that form the foundation of modern procurement excellence.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-2xl mb-6">
                                    <pillar.icon />
                                </div>
                                <h3 className="text-2xl font-medium mb-4">{pillar.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Operationalizing AI Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-light mb-6">
                            Operationalizing AI From Procurement Strategy to Payment
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Harness the power of artificial intelligence across every stage of your procurement lifecycle.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100">
                            <BsLightning className="text-5xl text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-medium mb-3">Speed</h3>
                            <p className="text-gray-600">Accelerate procurement cycles by up to 70% with AI automation</p>
                        </div>
                        <div className="text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-lg border border-green-100">
                            <BsShieldCheck className="text-5xl text-green-600 mx-auto mb-4" />
                            <h3 className="text-xl font-medium mb-3">Compliance</h3>
                            <p className="text-gray-600">Ensure 100% policy compliance with intelligent monitoring</p>
                        </div>
                        <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-100">
                            <BsGraphUp className="text-5xl text-purple-600 mx-auto mb-4" />
                            <h3 className="text-xl font-medium mb-3">Savings</h3>
                            <p className="text-gray-600">Identify and capture 15-25% cost savings opportunities</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI-Driven Features */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-gray-50">
                <div className="max-w-7xl mx-auto space-y-24">
                    {aiFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                <h3 className="text-3xl md:text-4xl font-light mb-6">{feature.title}</h3>
                                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                                    {feature.description}
                                </p>
                                <ul className="space-y-4">
                                    {feature.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <BsArrowRight className="text-blue-600 flex-shrink-0 mt-1" />
                                            <span className="text-gray-600">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-white rounded-lg overflow-hidden border border-gray-200 ${index % 2 === 1 ? 'lg:order-1' : ''
                                }`}>
                                <img
                                    src={`https://images.unsplash.com/photo-${index === 0 ? '1551288049-2a9bc6e1e8b8' :
                                        index === 1 ? '1450101499163-c8848c66ca85' :
                                            '1551836022-deb4988cc6c0'
                                        }?auto=format&fit=crop&q=80`}
                                    alt={feature.title}
                                    className="w-full h-full object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Benefits Overview */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
                        Transform Your Procurement Operations
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { stat: "70%", label: "Faster Procurement Cycles" },
                            { stat: "25%", label: "Cost Reduction" },
                            { stat: "100%", label: "Compliance Rate" },
                            { stat: "90%", label: "Process Automation" },
                            { stat: "50%", label: "Risk Reduction" },
                            { stat: "3x", label: "ROI in First Year" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center p-8 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <div className="text-5xl font-light mb-4 text-blue-400">{item.stat}</div>
                                <div className="text-gray-300">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Procurement;
