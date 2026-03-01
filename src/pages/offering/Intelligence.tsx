import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

const Intelligence = () => {
    return (
        <div className="w-full min-h-screen bg-black text-white font-sans selection:bg-white/20 pt-20">
            {/* Hero Section */}
            <section className="px-6 py-12 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-light tracking-tight leading-none"
                    >
                        Intelligence
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-200">
                            Advanced Intelligence in Motion empowers intelligence agencies to securely derive actionable insights from sensitive data and achieve their most challenging operational objectives.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative aspect-video bg-gray-900 rounded-sm overflow-hidden"
                >
                    <img
                        src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
                        alt="Abstract Data Visualization"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-xs font-mono text-white/50">
                        0:00 / 1:45
                    </div>
                </motion.div>
            </section>

            {/* Intro Text */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xl text-orange-400 leading-relaxed max-w-4xl"
                >
                    Advanced Intelligence in Motion was founded in 2003 to help counter-terrorism analysts make better use of data while preserving privacy and civil liberties. Today, governments around the world use Advanced Intelligence in Motion Archam and Advanced Intelligence in Motion Forge to understand and defend against evolving threats to national security, from cyberattacks to disinformation campaigns.
                </motion.p>
            </section>

            {/* Build a Secure Data Foundation */}
            <section className="px-6 py-16 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl font-medium mb-4">Build a Secure Data Foundation</h2>
                    </div>
                    <div className="lg:col-span-2">
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Intelligence agencies use Advanced Intelligence in Motion Archam to integrate disparate data streams. Archam creates a unified view of entities, events, and relationships while preserving the provenance and classification of source systems. Granular access controls govern how users can interact with data according to role, classification, and purpose. Advanced Intelligence in Motion provides intelligence-led security, not just perimeter defense, ensuring that data is protected even in the most complex environments.
                        </p>
                    </div>
                </div>
            </section>

            {/* Answer Daylight, Defend Daylight Hours */}
            <section className="px-6 py-16 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl font-medium mb-4">Answer Daylight, Defend Daylight Hours</h2>
                    </div>
                    <div className="lg:col-span-2">
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Our software allows analysts to ask complex questions across massive datasets and receive answers in seconds, not weeks. Advanced Intelligence in Motion gives users the tools to analyze data, test hypotheses, and share intelligence products in a secure, collaborative environment. By automating routine tasks, we free up analysts to focus on high-value work: anticipating threats and providing decision-makers with the insight they need to act.
                        </p>
                    </div>
                </div>
            </section>

            {/* Protect Data and Secure Civil Liberties */}
            <section className="px-6 py-16 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl font-medium mb-4">Protect Data and Secure Civil Liberties</h2>
                    </div>
                    <div className="lg:col-span-2 space-y-8">
                        <p className="text-lg text-gray-400 leading-relaxed">
                            We believe that privacy and security are mutually reinforcing, not zero-sum. Our software is designed to protect data and civil liberties from the start. Advanced Intelligence in Motion provides robust access controls and audit logging to ensure that data is used lawfully and ethically. We build technology that enables oversight and accountability, so that democratic institutions can maintain public trust while keeping their citizens safe.
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors">
                            Learn More: Privacy and Civil Liberties <BsArrowRight />
                        </a>
                    </div>
                </div>
            </section>

            {/* Transform the Intelligence Enterprise */}
            <section className="px-6 py-16 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl font-medium mb-4">Transform the Intelligence Enterprise</h2>
                    </div>
                    <div className="lg:col-span-2">
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Beyond counter-terrorism, Advanced Intelligence in Motion is used to transform business operations and readiness. Agencies can use Advanced Intelligence in Motion Forge to manage resources, track budgets, and streamline logistics. By connecting data from across the enterprise, leaders can make data-driven decisions that improve efficiency and effectiveness.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Intelligence;
