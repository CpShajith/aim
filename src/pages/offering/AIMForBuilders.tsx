import { motion } from 'framer-motion';
import { BsArrowRight, BsPlayFill, BsDatabase, BsLightning, BsCpu, BsCodeSlash, BsGear } from 'react-icons/bs';

const AIMForBuilders = () => {
    return (
        <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-black/10 pt-20">
            {/* Hero Section */}
            <section className="px-6 py-12 md:px-20 lg:px-32 max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center justify-center gap-4 mb-8"
                >
                    <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-current rounded-full"></div>
                    <span className="text-4xl md:text-5xl font-light tracking-tight">
                        <span className="font-normal text-gray-400">↳</span> for Builders
                    </span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl md:text-5xl font-light leading-tight max-w-4xl mx-auto"
                >
                    Empowering innovators to launch bold companies, build faster and harmonize human expertise with AI
                </motion.h1>
            </section>

            {/* Main Video Section */}
            <section className="px-6 py-12 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-xl font-medium mb-6">The Work of Building Tomorrow Begins Today.</p>
                    <div className="relative aspect-video bg-gray-900 rounded-sm overflow-hidden group cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                            alt="Builders Video"
                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                                <BsPlayFill className="text-4xl text-white ml-1" />
                            </div>
                        </div>
                        <div className="absolute bottom-8 right-8 text-white text-right">
                            <p className="text-sm font-mono uppercase tracking-wider mb-1">Featured</p>
                            <p className="text-2xl font-bold">Alex Karp</p>
                            <p className="text-sm opacity-80">CEO</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Big Data Solutions Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-light leading-tight"
                    >
                        Big data solutions shouldn't just be for big companies.
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-lg text-gray-600 leading-relaxed"
                    >
                        <p>
                            Advanced Intelligence in Motion for Builders gives early and growth-stage startups full access to the Advanced Intelligence in Motion Forge and AIP enterprise-grade platforms.
                        </p>
                        <p>
                            From Day 1, you can leverage the same tools used by the world's most important institutions to solve complex problems. Accelerate your product roadmap, streamline operations, and scale your infrastructure without the overhead of building from scratch.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Cloud and AI Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto bg-gray-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative aspect-video bg-black rounded-sm overflow-hidden group cursor-pointer shadow-lg"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                            alt="Discussion"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <BsPlayFill className="text-6xl text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-light mb-6">Advanced Intelligence in Motion's Cloud and AI solutions are the backbone of our program.</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            See how early-stage companies are using Advanced Intelligence in Motion to disrupt their industries. Our program provides not just software, but a partnership dedicated to your success.
                        </p>
                        <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-2 font-medium group text-lg">
                            Watch the Series <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Infrastructure Features */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-light mb-16 max-w-3xl">
                    Advanced Intelligence in Motion offers a continuous updated, fully managed AI infrastructure spanning:
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: BsDatabase, title: "Data hosting and side integration", color: "text-purple-600" },
                        { icon: BsLightning, title: "Real-time sync and visualization", color: "text-yellow-600" },
                        { icon: BsCpu, title: "Access to state-of-the-art LLMs & APIs", color: "text-blue-600" },
                        { icon: BsCodeSlash, title: "Agent building and application deployment", color: "text-green-600" },
                        { icon: BsGear, title: "Operational decision-making and capture", color: "text-red-600" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gray-50 p-8 rounded-sm hover:shadow-md transition-shadow"
                        >
                            <item.icon className={`text-3xl ${item.color} mb-4`} />
                            <h3 className="text-xl font-medium">{item.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom Branding */}
            <section className="px-6 py-32 md:px-20 lg:px-32 max-w-7xl mx-auto text-center border-t border-gray-200">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-current rounded-full"></div>
                        <div className="text-left">
                            <span className="block text-4xl md:text-5xl font-medium tracking-tight">Advanced Intelligence in Motion</span>
                            <span className="block text-4xl md:text-5xl font-light tracking-tight text-gray-500">↳ for Builders</span>
                        </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-light leading-tight max-w-3xl text-gray-600">
                        Empowering innovators to launch bold companies, build faster and harmonize human expertise with AI
                    </h2>
                    <p className="text-lg font-medium mt-12">
                        The Work of building tomorrow Begins Today.
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default AIMForBuilders;
