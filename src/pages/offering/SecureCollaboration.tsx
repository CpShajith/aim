import { motion } from 'framer-motion';
import { BsArrowRight, BsShieldCheck, BsLock, BsPeople, BsGlobe, BsCheckCircle } from 'react-icons/bs';

const SecureCollaboration = () => {
    const features = [
        {
            icon: BsShieldCheck,
            title: "End-to-End Security",
            description: "Military-grade encryption and access controls ensure data remains protected at all times."
        },
        {
            icon: BsLock,
            title: "Granular Permissions",
            description: "Control exactly who can see what, down to individual data elements and operations."
        },
        {
            icon: BsPeople,
            title: "Multi-Organization Support",
            description: "Securely collaborate across organizational boundaries while maintaining data sovereignty."
        },
        {
            icon: BsGlobe,
            title: "Global Scale",
            description: "Deploy across multiple security domains and geographic regions with confidence."
        }
    ];

    const capabilities = [
        "Secure data sharing across classification levels",
        "Real-time collaboration on sensitive operations",
        "Audit trails for complete accountability",
        "Integration with existing security infrastructure",
        "Role-based access control (RBAC)",
        "Data masking and redaction",
        "Secure APIs for system integration",
        "Compliance with government security standards"
    ];

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-white/10">
            {/* Hero Section */}
            <section className="px-6 py-32 md:px-20 lg:px-32 min-h-[60vh] flex items-center">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-none mb-8">
                                Secure
                                <br />
                                Collaboration
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="text-2xl font-light text-gray-300 leading-relaxed">
                                Powering a data-centric force.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content Section with Image */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-[#0f0f0f]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="relative aspect-[4/3] bg-gray-900 rounded-sm overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                                alt="Secure Collaboration"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <h3 className="text-2xl font-light mb-2">Secure Collaboration in Action</h3>
                                <p className="text-gray-300">Enabling mission-critical operations across organizational boundaries</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-light">Overview</h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Enable secure information sharing and collaboration across allies and mission partners.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                In today's complex security environment, effective collaboration is essential. But sharing sensitive information across organizational boundaries introduces significant risks. Advanced Intelligence in Motion's Secure Collaboration platform solves this challenge.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium group"
                            >
                                Learn More
                                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Description */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-black border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-light mb-6">The Platform</h2>
                        </div>

                        <div className="lg:col-span-2 space-y-6">
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Advanced Intelligence in Motion's platforms are designed for secure information sharing in the most demanding environments.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Whether you're coordinating operations with coalition partners, sharing intelligence across agencies, or collaborating with contractors, our platform provides the security controls and flexibility you need. Built on zero-trust principles with defense-in-depth architecture.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Deploy on-premises, in classified clouds, or in hybrid configurations. Maintain complete control over your data while enabling seamless collaboration with allies and mission partners.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-[#0f0f0f] border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-light mb-16">Key Features</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <feature.icon className="text-4xl mb-6 text-blue-400" />
                                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Explore the Features */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-black border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-light mb-8">
                                Explore the Features
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed mb-6">
                                Discover how Secure Collaboration enables mission success through trusted information sharing.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                From tactical operations to strategic planning, our platform provides the security and flexibility needed for effective collaboration in any environment.
                            </p>
                        </div>

                        <div className="relative aspect-video bg-gradient-to-br from-blue-900/20 to-gray-900 rounded-sm overflow-hidden border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                                alt="Features"
                                className="w-full h-full object-cover opacity-60"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities List */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-[#0f0f0f] border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-light mb-16">Capabilities</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {capabilities.map((capability, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                            >
                                <BsCheckCircle className="text-2xl text-green-400 flex-shrink-0 mt-1" />
                                <span className="text-gray-300">{capability}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="px-6 py-24 md:px-20 lg:px-32 bg-black border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-light mb-16">Use Cases</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Coalition Operations",
                                description: "Share intelligence and coordinate operations with allied forces while maintaining data sovereignty and security."
                            },
                            {
                                title: "Inter-Agency Collaboration",
                                description: "Break down silos between agencies to enable faster, more informed decision-making on critical missions."
                            },
                            {
                                title: "Contractor Integration",
                                description: "Securely collaborate with contractors and vendors without compromising sensitive information."
                            }
                        ].map((useCase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/5 p-8 rounded-lg border border-white/10"
                            >
                                <h3 className="text-2xl font-light mb-4">{useCase.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Statement */}
            <section className="px-6 py-32 md:px-20 lg:px-32 bg-gradient-to-b from-[#0f0f0f] to-black border-t border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-light mb-8 leading-tight">
                            Secure collaboration for mission-critical operations
                        </h2>
                        <p className="text-xl text-gray-400">
                            Trust, security, and flexibility in every interaction.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SecureCollaboration;
