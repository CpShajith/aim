import { motion } from 'framer-motion';
import { BsCloudUpload, BsShieldCheck, BsArrowRepeat } from 'react-icons/bs';

const Areies = () => {
    return (
        <div className="bg-white text-black min-h-screen pt-24 font-sans">
            {/* Hero Section */}
            <section className="px-6 md:px-12 py-24 max-w-[1600px] mx-auto min-h-[60vh] flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-sm tracking-widest uppercase font-bold text-gray-500 border border-gray-300 px-4 py-1 rounded-full">Continuous Delivery</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-8">
                        Areies
                    </h1>
                    <p className="text-2xl md:text-3xl font-light text-gray-600 max-w-3xl leading-snug">
                        Autonomously deploy, monitor, and manage software across any environment, from public clouds to disconnected submarines.
                    </p>
                </motion.div>
            </section>

            {/* Content Video Area */}
            <section className="px-6 md:px-12 py-12 max-w-[1600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="aspect-video bg-gray-100 w-full mb-24 overflow-hidden"
                >
                    <img
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000"
                        alt="Server deployment"
                        className="w-full h-full object-cover grayscale opacity-80"
                    />
                </motion.div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200 pt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-6"
                    >
                        <BsCloudUpload size={40} className="text-gray-400" />
                        <h3 className="text-2xl font-medium">Write Once, Run Anywhere</h3>
                        <p className="text-gray-600 font-light">
                            Deploy your software stack consistently across AWS, Azure, on-premises datacenters, and edge devices without changing your workflows.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col gap-6"
                    >
                        <BsArrowRepeat size={40} className="text-gray-400" />
                        <h3 className="text-2xl font-medium">Autonomous Operations</h3>
                        <p className="text-gray-600 font-light">
                            Areies resolves dependencies, schedules upgrades, and rolls back failed deployments autonomously, transforming DevOps from manual to automatic.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        <BsShieldCheck size={40} className="text-gray-400" />
                        <h3 className="text-2xl font-medium">Built-In Security</h3>
                        <p className="text-gray-600 font-light">
                            Maintain strict compliance. Areies continuously monitors for vulnerabilities, automatically pushing critical patches across your entire fleet in hours.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Areies;
