import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck, FaCode, FaHistory, FaNetworkWired } from 'react-icons/fa';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
}

const Section = ({ children, className = "" }: SectionProps) => (
    <div className={`py-24 px-6 md:px-12 ${className}`}>
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
    </div>
);

const Hero = () => {
    return (
        <div className="pt-32 pb-16 px-6 md:px-12 bg-white text-black border-b border-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-16">
                    <div className="max-w-2xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-light tracking-tight leading-none mb-12"
                        >
                            The Operating System <br /> for Data Integration.
                        </motion.h1>
                    </div>
                    <div className="max-w-sm pt-4">
                        <p className="text-sm font-medium leading-relaxed text-gray-800 mb-8">
                            Transcend traditional ETL. Bind disparate enterprise data into a living Ontology that powers high-fidelity decision making across your organization.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-12 h-1 bg-black" />
                            <div className="w-12 h-1 bg-gray-200" />
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-16 relative aspect-[21/9] w-full overflow-hidden rounded-sm"
                >
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
                        alt="Elena Rodriguez - VP of Data Engineering"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-8 left-8 text-white">
                        <h3 className="text-4xl font-light leading-tight">
                            Elena <br /> Rodriguez
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="w-3 h-3 bg-white rounded-full" />
                            <span className="text-xl font-medium">VP of Data Engineering</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const FeatureCards = () => {
    const features = [
        {
            title: "Universal Connectivity",
            desc: "Seamlessly ingest from 200+ sources. From legacy mainframes and ERPs to modern SaaS and edge IoT sensors, unify your entire estate.",
            img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80",
            color: "bg-blue-100"
        },
        {
            title: "Semantic Resolution",
            desc: "Leverage AI-driven entity resolution to probabilistically merge duplicate records and link disparate datasets into a coherent single source of truth.",
            img: "https://images.unsplash.com/photo-1550684847-75bdda21cc95?auto=format&fit=crop&q=80",
            color: "bg-green-800"
        },
        {
            title: "Dynamic Orchestration",
            desc: "Construct sophisticated data pipelines with visual builders or code. The system intelligently manages dependencies, resource allocation, and job scheduling.",
            img: "https://images.unsplash.com/photo-1550684847-cccf3d3258c0?auto=format&fit=crop&q=80",
            color: "bg-pink-100"
        },
        {
            title: "Governed Logic",
            desc: "Treat transformation logic as a versioned software asset. Share libraries across teams to enforce metric consistency and eliminate definition drift.",
            img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80",
            color: "bg-slate-800"
        }
    ];

    return (
        <Section>
            <h2 className="text-5xl md:text-6xl font-light mb-16 max-w-2xl">
                Intelligence, <br /> Quantified.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {features.map((f, i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className={`aspect-[2/1] w-full overflow-hidden mb-8 ${f.color}`}>
                            <img src={f.img} alt={f.title} className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-md">{f.desc}</p>
                        <div className="mt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                            View Documentation <FaArrowRight />
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}

const FutureSection = () => {
    const items = [
        {
            title: "Radical Transparency",
            desc: "Eliminate the black box. Forge generates an interactive lineage map for every dataset, allowing users to trace any metric back to its raw source for complete auditability.",
            icon: FaNetworkWired,
            img: "https://images.unsplash.com/photo-1558494949-efc5270f313f?auto=format&fit=crop&q=80"
        },
        {
            title: "Data as Code",
            desc: "Bring software engineering rigor to data engineering. Branch, commit, review, and merge your pipelines. Roll back instantly if issues arise, ensuring production stability.",
            icon: FaCode,
            img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
        },
        {
            title: "Active Intelligence",
            desc: "Pipelines that heal themselves. set granular expectations on freshness, schema, and statistical drift to catch anomalies before they impact downstream decision-making.",
            icon: FaHistory,
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
        }
    ];

    return (
        <Section className="bg-gray-50">
            <div className="flex flex-col lg:flex-row justify-between mb-24">
                <h2 className="text-5xl md:text-6xl font-light mb-8 lg:mb-0 max-w-md">
                    The Architecture <br /> of Trust.
                </h2>
                <p className="text-xl text-gray-600 max-w-md">
                    From chaos to clarity. A software-defined approach to the entire data lifecycle.
                </p>
            </div>

            <div className="space-y-32">
                {items.map((item, i) => (
                    <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
                        <div className="flex-1">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6">
                                <item.icon />
                            </div>
                            <h3 className="text-3xl font-bold mb-6">{item.title}</h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">{item.desc}</p>
                            <div className="h-px w-24 bg-gray-300" />
                        </div>
                        <div className="flex-1 w-full">
                            <div className="rounded shadow-2xl overflow-hidden border border-gray-200 bg-white aspect-video relative group">
                                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}

const Transforms3D = () => {
    return (
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-light mb-8">Polylingual Compute Engine</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-md">
                        Write transformations in the language best suited for the task—SQL, Python, Java, or Scala.
                        The engine automatically optimizes compute resources, parallelization, and caching for maximum throughput.
                    </p>

                    <ul className="space-y-4 font-medium text-gray-800">
                        {['Incremental Build Optimization', 'Spark-Native Execution', 'Cross-Language Interoperability', 'Auto-Scaling Infrastructure'].map((feat, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <FaCheck className="text-xs" /> {feat}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative aspect-square max-w-md mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1545987768-ca5436980d28?auto=format&fit=crop&q=80"
                        alt="3D Data Mesh"
                        className="w-full h-full object-contain mix-blend-multiply"
                    />
                </div>
            </div>
        </Section>
    )
}

const CaseStudy = () => {
    return (
        <Section className="border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
                <div>
                    <h2 className="text-3xl font-light mb-8 text-gray-400">Impact Stories</h2>
                    <h3 className="text-4xl font-bold mb-6">OmniGrid Energy</h3>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        "Forge unified telemetry from 50,000 wind turbines into a single real-time ontology.
                        We now predict component failures 48 hours in advance, optimizing dispatch schedules and
                        saving $200M annually in maintenance costs."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-gray-200" />
                        <span className="text-sm font-bold tracking-widest uppercase">Read Full Case Study</span>
                    </div>
                </div>
                <div className="h-[400px] w-full bg-gray-100 rounded-sm overflow-hidden relative">
                    <img
                        src="https://images.unsplash.com/photo-1605000797499-95a059c91b73?auto=format&fit=crop&q=80"
                        alt="Wind Farm Technology"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-12">
                        <div className="text-white">
                            <div className="text-6xl font-light mb-2">99.9%</div>
                            <div className="text-sm font-mono opacity-80">Grid Uptime Achieved</div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

const DataIntegration = () => {
    return (
        <div className="bg-white min-h-screen">
            <Hero />
            <FeatureCards />
            <FutureSection />
            <Transforms3D />
            <CaseStudy />
        </div>
    );
};

export default DataIntegration;
