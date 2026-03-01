import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

const Readiness = () => {
    const readinessAreas = [
        {
            title: "ASSET READINESS",
            subtitle: "Equipment and Infrastructure",
            description: "Maintain complete visibility into asset status, maintenance schedules, and operational readiness across your entire fleet and infrastructure.",
            details: [
                "Real-time asset tracking and status monitoring",
                "Predictive maintenance scheduling",
                "Supply chain and parts inventory management",
                "Compliance and certification tracking"
            ]
        },
        {
            title: "PERSONNEL READINESS",
            subtitle: "Workforce Management",
            description: "Ensure your personnel are trained, certified, and ready to execute missions with comprehensive workforce readiness management.",
            details: [
                "Training and certification tracking",
                "Skills inventory and gap analysis",
                "Deployment readiness assessment",
                "Personnel assignment optimization"
            ]
        },
        {
            title: "FINANCIAL MANAGEMENT",
            subtitle: "Budget and Resource Planning",
            description: "Optimize resource allocation and financial planning to ensure readiness objectives are met within budget constraints.",
            details: [
                "Budget planning and execution tracking",
                "Cost analysis and forecasting",
                "Resource allocation optimization",
                "Financial compliance reporting"
            ]
        }
    ];

    return (
        <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-black/10">
            {/* Hero Section */}
            <section className="px-6 py-32 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-light tracking-tight leading-none mb-8">
                            Advanced Intelligence in Motion Readiness
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-gray-700 leading-relaxed">
                            A comprehensive platform for managing and optimizing readiness across assets, personnel, and financial resources.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            From equipment maintenance to workforce training to budget planning, Advanced Intelligence in Motion Readiness provides the visibility and insights needed to maintain peak operational readiness.
                        </p>
                    </motion.div>
                </div>

                <div className="mt-16 relative aspect-[16/9] bg-gray-100 rounded-sm overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                        alt="Readiness Operations"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* Are You Ready Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[4/3] bg-gray-200 rounded-sm overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                                alt="Team Readiness"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-light">Are you ready?</h2>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Readiness is not a static state—it's a continuous process of assessment, improvement, and adaptation.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Advanced Intelligence in Motion Readiness brings together data from across your organization to provide a real-time, comprehensive view of readiness status. Identify gaps, optimize resources, and ensure mission success.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group"
                            >
                                Read More
                                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Readiness Areas */}
            {readinessAreas.map((area, index) => (
                <div key={index}>
                    {/* Dark Hero Section */}
                    <section className="px-6 py-24 md:px-20 lg:px-32 bg-black text-white">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-4">
                                    {area.title.split(' ')[0]} <span className="text-blue-400">{area.title.split(' ')[1]}</span>
                                </h2>
                                <p className="text-xl text-gray-400">{area.subtitle}</p>
                            </motion.div>
                        </div>
                    </section>

                    {/* Content Section */}
                    <section className="px-6 py-24 md:px-20 lg:px-32 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                <div>
                                    <h3 className="text-3xl font-light mb-6">{area.subtitle}</h3>
                                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                        {area.description}
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="text-xl font-medium mb-6">Key Capabilities</h4>
                                    <ul className="space-y-4">
                                        {area.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                                <span className="text-gray-700">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            ))}

            {/* Quote Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <blockquote className="text-3xl md:text-4xl font-light leading-snug mb-8">
                                "It's not a line segment"
                            </blockquote>
                            <p className="text-gray-600 leading-relaxed">
                                Readiness isn't a simple metric that goes from 0 to 100. It's a complex, multidimensional challenge that requires understanding the relationships between assets, personnel, training, maintenance, supply chains, and budgets.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">
                                Advanced Intelligence in Motion Readiness models these complex relationships, helping you understand not just where you are, but what actions will have the greatest impact on overall readiness.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our platform enables you to simulate scenarios, optimize resource allocation, and make data-driven decisions that improve readiness across all dimensions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Green is Good Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-light">Green is good</h2>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Visual dashboards provide at-a-glance readiness status across your entire organization.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Quickly identify areas that need attention, drill down into specific issues, and track improvement over time. From executive overviews to detailed operational views, Advanced Intelligence in Motion Readiness provides the right information to the right people.
                            </p>
                        </div>

                        <div className="relative aspect-video bg-gradient-to-br from-green-900/20 to-gray-100 rounded-sm overflow-hidden border border-gray-200 p-8">
                            <div className="grid grid-cols-3 gap-4 h-full">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`rounded ${i < 6 ? 'bg-green-500' : i < 8 ? 'bg-yellow-500' : 'bg-red-500'
                                            } opacity-60`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-light mb-8">
                                Integrated Platform
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Advanced Intelligence in Motion Readiness integrates with your existing systems to provide a unified view of readiness.
                            </p>
                        </div>

                        <div className="space-y-6 text-gray-400">
                            <p className="leading-relaxed">
                                Connect to maintenance management systems, HR databases, financial systems, training platforms, and more. Our platform automatically aggregates and analyzes data to provide actionable insights.
                            </p>
                            <p className="leading-relaxed">
                                Whether you're managing a fleet of aircraft, a battalion of soldiers, or a network of facilities, Advanced Intelligence in Motion Readiness scales to meet your needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
                        Measurable Impact
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { metric: "35%", label: "Increase in Asset Availability" },
                            { metric: "50%", label: "Reduction in Maintenance Delays" },
                            { metric: "40%", label: "Improvement in Training Completion" },
                            { metric: "25%", label: "Optimization in Resource Allocation" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center p-8 bg-white rounded-lg border border-gray-200"
                            >
                                <div className="text-5xl font-light mb-4 text-blue-600">{item.metric}</div>
                                <div className="text-gray-600">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Readiness;
