import { motion } from 'framer-motion';
import { BsCheckCircle } from 'react-icons/bs';

const GovtFinancialManagement = () => {
    return (
        <div className="w-full min-h-screen bg-black text-white font-sans selection:bg-white/20 pt-20">
            {/* Hero Section */}
            <section className="px-6 py-12 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-light tracking-tight leading-none"
                    >
                        Financial
                        <br />
                        Management
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-center space-y-4"
                    >
                        <p className="text-xl font-medium mb-4">Ensure every dollar delivers mission impact.</p>
                        {['Budgeting', 'Audit Readiness', 'Contract Management'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-400">
                                <BsCheckCircle className="text-blue-500" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative aspect-[21/9] bg-gray-900 rounded-sm overflow-hidden"
                >
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                        alt="Financial Dashboard"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute bottom-8 left-8">
                        <p className="text-sm font-mono uppercase tracking-wider mb-2 text-blue-400">Case Study</p>
                        <h3 className="text-2xl font-bold max-w-md">CONSOLIDATING FINANCIAL DATA FOR THE ARMY</h3>
                    </div>
                </motion.div>
            </section>

            {/* Critical Missions Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-light mb-8">Critical Missions, Limited Budgets</h2>
                        <img
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                            alt="Mission Critical"
                            className="w-full rounded-sm opacity-80"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-2xl font-light leading-snug mb-8 text-gray-300">
                            "Every dollar lost to inefficiency is a dollar not spent on the mission. Government organizations must do more with less, and financial transparency is the first step."
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Legacy systems fragment financial data, making it impossible to get a clear picture of spending. Advanced Intelligence in Motion integrates data from across the enterprise to provide a single source of truth for financial management.
                        </p>
                    </div>
                </div>
            </section>

            {/* Army Vantage Case Study */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-800">
                <h2 className="text-4xl md:text-5xl font-light mb-16">Case Study: Army Vantage Contract Management</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-8">
                        <div className="border-l-2 border-blue-500 pl-6">
                            <p className="text-lg text-gray-300">
                                "During Fiscal Year 2020, Army Vantage tools enabled global users to de-obligate $3.3 billion in excess funds."
                            </p>
                        </div>
                        <p className="text-gray-400 text-sm">
                            From March to September 2020, specifically, users de-obligated approximately $1.7 billion in funds.
                        </p>
                    </div>
                    <div className="lg:col-span-2">
                        <img
                            src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80"
                            alt="Data Visualization"
                            className="w-full rounded-sm border border-gray-800"
                        />
                    </div>
                </div>
            </section>

            {/* Power More Impact */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-800">
                <h2 className="text-4xl md:text-5xl font-light mb-16">Power More Impact</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-xl text-gray-300 mb-8">
                            Eliminate the trade-offs between speed, accuracy, and auditability.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            Leverage automated workflows to streamline procurement, reconcile transactions in real-time, and identify cost-saving opportunities instantly.
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80"
                            alt="Server Room"
                            className="w-full rounded-sm opacity-80"
                        />
                    </div>
                </div>
            </section>

            {/* End-to-End Financial Solutions */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-800">
                <h2 className="text-4xl md:text-5xl font-light mb-16">End-to-End Financial Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                        {
                            title: "Budgeting",
                            desc: "Align resources with strategic priorities. Model scenarios and track execution in real-time.",
                            img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
                        },
                        {
                            title: "Auditing",
                            desc: "Automate compliance checks and generate audit-ready reports with a single click.",
                            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                        }
                    ].map((item, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-video overflow-hidden mb-6 bg-gray-900 rounded-sm">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-2xl font-medium mb-4 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default GovtFinancialManagement;
