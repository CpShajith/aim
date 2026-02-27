import { motion } from 'framer-motion';
import { BsCheckCircle, BsGear, BsClock } from 'react-icons/bs';


const Rail = () => {
    const partners = [
        { name: "CSX", logo: "CSX" },
        { name: "CN", logo: "CN" },
        { name: "Norfolk Southern", logo: "NORFOLK SOUTHERN" }
    ];

    const workItems = [
        {
            title: "Optimizing Train Operations",
            description: "Real-time visibility into train movements, crew scheduling, and asset utilization to maximize operational efficiency.",
            metrics: ["30% reduction in delays", "25% improvement in on-time performance"]
        },
        {
            title: "Predictive Maintenance",
            description: "AI-powered analytics to predict equipment failures before they occur, reducing downtime and maintenance costs.",
            metrics: ["40% reduction in unplanned maintenance", "20% decrease in maintenance costs"]
        },
        {
            title: "Network Optimization",
            description: "Advanced algorithms to optimize routing, scheduling, and resource allocation across the entire rail network.",
            metrics: ["15% increase in network capacity", "18% reduction in fuel consumption"]
        },
        {
            title: "Safety & Compliance",
            description: "Comprehensive monitoring and reporting to ensure regulatory compliance and enhance safety protocols.",
            metrics: ["100% compliance tracking", "35% reduction in safety incidents"]
        }
    ];

    const deliverables = [
        "Real-time operational dashboards",
        "Predictive maintenance models",
        "Network optimization algorithms",
        "Crew scheduling automation",
        "Asset tracking and management",
        "Regulatory compliance reporting",
        "Safety incident analysis",
        "Performance analytics and KPIs",
        "Integration with existing systems",
        "Custom workflow automation"
    ];

    return (
        <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-black/10">
            {/* Hero Section */}
            <section className="px-6 py-32 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-light tracking-tight leading-none mb-16"
                >
                    AIM for Rail
                </motion.h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="relative aspect-video bg-gray-100 rounded-sm overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80"
                            alt="Rail Operations"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Transforming rail operations through advanced data integration, AI-powered analytics, and real-time decision-making capabilities.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            AIM for Rail brings together disparate data sources across your network to provide unprecedented visibility and control over operations, maintenance, and safety.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Partners */}
            <section className="px-6 py-20 md:px-20 lg:px-32 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-light mb-12">Our Partners</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="bg-white p-12 rounded-sm border border-gray-200 flex items-center justify-center"
                            >
                                <div className="text-3xl font-bold text-gray-800">{partner.logo}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Work */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-light mb-16">Our Work</h2>

                <div className="space-y-20">
                    {workItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-20 border-b border-gray-200 last:border-0"
                        >
                            <div>
                                <h3 className="text-2xl font-medium mb-4">{item.title}</h3>
                            </div>
                            <div className="lg:col-span-2 space-y-6">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {item.description}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {item.metrics.map((metric, idx) => (
                                        <div
                                            key={idx}
                                            className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                                        >
                                            {metric}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Inventory Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-light mb-8">Inventory</h2>
                            <p className="text-xl text-gray-300 leading-relaxed mb-6">
                                Complete visibility into your rolling stock, parts inventory, and asset lifecycle management.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Track every asset across your network in real-time, optimize inventory levels, and ensure parts availability when and where they're needed.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                                <BsGear className="text-4xl mb-4 text-blue-400" />
                                <h4 className="text-lg font-medium mb-2">Asset Tracking</h4>
                                <p className="text-gray-400 text-sm">Real-time location and status</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                                <BsClock className="text-4xl mb-4 text-green-400" />
                                <h4 className="text-lg font-medium mb-2">Lifecycle Management</h4>
                                <p className="text-gray-400 text-sm">From acquisition to retirement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-light mb-16">How It Works</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-medium">Data Integration</h3>
                        <p className="text-gray-700 leading-relaxed">
                            AIM for Rail integrates data from your existing systems—ERP, SCADA, GPS tracking, maintenance records, and more—into a unified platform.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our platform automatically cleanses, normalizes, and enriches your data, making it immediately actionable for decision-makers across your organization.
                        </p>
                    </div>
                    <div className="relative aspect-video bg-gray-100 rounded-sm overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                            alt="Data Integration"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="relative aspect-video bg-gray-100 rounded-sm overflow-hidden lg:order-2">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                            alt="Analytics"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="space-y-6 lg:order-1">
                        <h3 className="text-2xl font-medium">AI-Powered Analytics</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Advanced machine learning models analyze patterns, predict failures, and recommend optimal actions in real-time.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            From predictive maintenance to dynamic routing, our AI continuously learns from your operations to deliver increasingly accurate insights.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <blockquote className="text-3xl md:text-4xl font-light leading-snug mb-8">
                                "Shoulder to shoulder with our customers"
                            </blockquote>
                            <p className="text-gray-600 leading-relaxed">
                                We work directly with rail operators to understand their unique challenges and deliver solutions that drive measurable results. Our forward-deployed engineers become part of your team.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square bg-gray-200 rounded-sm overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                                    alt="Team collaboration"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="aspect-square bg-gray-200 rounded-sm overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
                                    alt="Operations center"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Deliverables */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-light mb-16">Key Deliverables</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {deliverables.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <BsCheckCircle className="text-2xl text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Rail;
