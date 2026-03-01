import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// --- Shared Components ---
const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`py-24 px-6 md:px-12 ${className}`}>
        <div className="max-w-[1800px] mx-auto">
            {children}
        </div>
    </div>
);

// --- Sections ---

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <div className="relative h-screen w-full bg-gray-900 text-white overflow-hidden flex flex-col items-center justify-center">
            {/* Background Image */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
                    alt="Industrial Wind Farm"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-8xl lg:text-9xl font-medium tracking-tight mb-8"
                >
                    AI-Powered Automation <br />
                    for Every Decision
                </motion.h1>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
            >
                <FaArrowRight className="rotate-90 text-white text-xl" />
                <span className="text-sm font-medium tracking-widest uppercase">Scroll to Explore</span>
            </motion.div>
        </div>
    );
};

const IntroSection = () => {
    return (
        <Section className="bg-white text-black py-40">
            <div className="max-w-5xl mx-auto text-center">
                <p className="text-4xl md:text-6xl font-light leading-tight tracking-tight text-gray-900">
                    Our software powers real-time, <span className="text-gray-400">AI-driven decisions</span> in critical government and commercial enterprises in the West, from the factory floors to the front lines.
                </p>
            </div>
        </Section>
    );
}

const ProductRow = ({
    index,
    name,
    desc,
    image,
    link
}: {
    index: string,
    name: string,
    desc: string,
    image: string,
    link: string
}) => {
    return (
        <Link to={link} className="block min-h-[50vh] border-t border-gray-200 py-16 flex flex-col lg:flex-row items-stretch gap-8 group hover:bg-gray-50 transition-colors duration-500 px-6 md:px-12 bg-white text-black overflow-hidden cursor-pointer">
            {/* Left Col: Description & Index */}
            <div className="lg:w-[30%] flex flex-col justify-between py-2 z-10">
                <p className="text-xl font-medium max-w-xs leading-relaxed text-gray-800">
                    {desc}
                </p>
                <div className="font-mono text-gray-400 text-sm mt-8 lg:mt-0">
                    {index}
                </div>
            </div>

            {/* Middle Col: Image */}
            <div className="lg:w-[45%] w-full flex items-center justify-center p-4 lg:p-8 z-10">
                <div className="aspect-[16/9] w-full overflow-hidden rounded shadow-lg transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Right Col: Huge Title */}
            <div className="lg:w-[25%] flex items-center justify-start z-0 lg:pl-8">
                <h2 className="text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold tracking-tighter leading-none text-gray-900 group-hover:text-black transition-colors break-words w-full">
                    {name}
                </h2>
            </div>
        </Link>
    );
};

const ProductList = () => {
    const products = [
        {
            index: "/0.1",
            name: "AIP",
            desc: "Automate operations, from the factory floor to the front lines",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80", // Interface/Map
            link: "/aip-developers"
        },
        {
            index: "/0.2",
            name: "Archam",
            desc: "Achieve AI-driven combat superiority, from space to mud",
            image: "https://images.unsplash.com/photo-1595878715977-2a8f8d689b9d?auto=format&fit=crop&q=80", // Military/Soldier
            link: "/archam"
        },
        {
            index: "/0.3",
            name: "Forge",
            desc: "Build and manage Ontology-powered software, with a complete developer platform",
            image: "https://images.unsplash.com/photo-1558494949-efc5270f313f?auto=format&fit=crop&q=80", // Node Graph
            link: "/forge"
        },
        {
            index: "/0.4",
            name: "Ontology",
            desc: "The central system for orchestrating decisions across Human+AI teams",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80", // Abstract/Tech
            link: "/ontology"
        },
        {
            index: "/0.5",
            name: "Areies",
            desc: "Autonomously deploy, monitor, and manage software across any environment",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80", // Server/Chip
            link: "/areies"
        }
    ];

    return (
        <div className="bg-white">
            <h3 className="px-6 md:px-12 text-4xl font-medium mb-12 mt-24">Our Software</h3>
            {products.map((p, i) => (
                <ProductRow key={i} {...p} />
            ))}
        </div>
    );
};

const CultureSection = () => {
    return (
        <Section className="bg-white text-black py-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="h-[500px] w-full relative overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
                        alt="Team Collaboration"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="lg:pl-12">
                    <h2 className="text-4xl md:text-6xl font-normal mb-8 leading-tight tracking-tight">
                        There is so much left to build
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-800 mb-12 max-w-lg leading-relaxed">
                        Advanced Intelligence in Motion team deliver mission-critical outcomes for the West's most important institutions.
                    </p>
                    <Link to="/contact" className="inline-block border border-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                        Learn More
                    </Link>
                </div>
            </div>
        </Section>
    );
};

const FooterCTA = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 bg-black text-white">
            <Link to="/contact" className="min-h-[500px] flex flex-col justify-between p-12 lg:p-24 border-r border-white/10 hover:bg-[#111] transition-colors group">
                <h3 className="text-4xl md:text-5xl font-light">Request a Demo</h3>
                <div className="flex justify-end">
                    <FaArrowRight className="text-4xl group-hover:translate-x-4 transition-transform duration-300" />
                </div>
            </Link>
            <Link to="/aip-developers" className="min-h-[500px] flex flex-col justify-between p-12 lg:p-24 hover:bg-[#111] transition-colors group">
                <h3 className="text-4xl md:text-5xl font-light">Start Building</h3>
                <div className="flex justify-end">
                    <FaArrowRight className="text-4xl group-hover:translate-x-4 transition-transform duration-300" />
                </div>
            </Link>
        </div>
    );
};

const Home = () => {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-black selection:text-white">
            <Hero />
            <IntroSection />
            <ProductList />
            <CultureSection />
            <FooterCTA />
        </div>
    );
};

export default Home;