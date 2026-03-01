import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaPython, FaDocker, FaTerminal, FaCode, FaArrowRight, FaCheck } from 'react-icons/fa';
import { SiTypescript, SiJupyter } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
}

const Section = ({ children, className = "" }: SectionProps) => (
    <div className={`py-24 px-6 ${className}`}>
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
    </div>
);

// Rebranded to Advanced Intelligence in Motion for Developers
const Hero = () => {
    return (
        <div className="relative min-h-screen bg-[#050505] text-white flex flex-col justify-center pt-32 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505]" />

            <div className="max-w-7xl mx-auto px-6 z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <span className="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-wider">
                            Developer Preview
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-none">
                        The most powerful <br />
                        <span className="text-gray-500">developer platform.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
                        Advanced Intelligence in Motion provides the primitives you need to build LLM-powered applications.
                        Integrate directly with your existing stack, from VS Code to CI/CD pipelines.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-20">
                        <button className="px-8 py-4 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                            Start Building <FaArrowRight />
                        </button>
                        <button className="px-8 py-4 bg-[#1a1a1a] text-white rounded font-bold hover:bg-[#252525] transition-colors border border-white/10">
                            Read the Docs
                        </button>
                    </div>
                </motion.div>

                {/* Hero Image / IDE Interface */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="relative rounded-t-xl overflow-hidden border-t border-x border-white/10 bg-[#0A0A0A] shadow-2xl"
                >
                    <div className="h-10 bg-[#151515] flex items-center px-4 gap-2 border-b border-white/5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>
                        <div className="ml-4 text-xs text-gray-500 font-mono">aim_pipeline.tsx — Advanced Intelligence in Motion Developer Console</div>
                    </div>
                    <div className="aspect-[16/9] relative">
                        <img
                            src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80"
                            alt="Developer IDE"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

                        {/* Overlay Code Snippet Mockup */}
                        <div className="absolute top-12 left-12 right-12 bottom-12 bg-black/80 backdrop-blur-md rounded border border-white/10 p-6 font-mono text-sm overflow-hidden hidden md:block">
                            <div className="text-pink-400">import</div> <div className="text-white inline">{`{ Agent, Ontology }`}</div> <div className="text-pink-400 inline">from</div> <div className="text-green-400 inline">'@aim/core'</div>;
                            <br /><br />
                            <div className="text-blue-400">const</div> <div className="text-yellow-200 inline">flightTracker</div> = <div className="text-blue-400 inline">new</div> <div className="text-yellow-200 inline">Agent</div>({`{`}<br />
                            &nbsp;&nbsp;model: <div className="text-green-400 inline">'gpt-4'</div>,<br />
                            &nbsp;&nbsp;tools: [<div className="text-yellow-200 inline">Ontology</div>.objects.<div className="text-yellow-200 inline">Flights</div>.search()],<br />
                            &nbsp;&nbsp;security: <div className="text-green-400 inline">'high-assurance'</div><br />
                            {`}`});
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const IntegrationsGrid = () => {
    const integrations = [
        { icon: VscVscode, name: "VS Code", desc: "Native extension for seamless dev." },
        { icon: FaGithub, name: "GitHub", desc: "CI/CD integration & version control." },
        { icon: SiTypescript, name: "TypeScript", desc: "Type-safe definitions SDK." },
        { icon: FaPython, name: "Python", desc: "Data science & model integration." },
        { icon: SiJupyter, name: "Jupyter", desc: "Interactive notebook support." },
        { icon: FaDocker, name: "Docker", desc: "Containerized deployments." }
    ];

    return (
        <Section className="bg-[#050505] border-t border-white/10">
            <div className="mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Ship faster with the <br />tools you rely on.</h2>
                <div className="w-20 h-1 bg-blue-600 mb-6" />
                <p className="text-gray-400 max-w-2xl text-lg">
                    Don't change your workflow. Advanced Intelligence in Motion integrates directly into your existing development environment and pipelines.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
                {integrations.map((item, i) => (
                    <div key={i} className="bg-[#0A0A0A] p-8 hover:bg-[#111] transition-colors group">
                        <item.icon className="text-4xl text-gray-500 mb-6 group-hover:text-blue-400 transition-colors" />
                        <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    )
}

const Architecture3D = () => {
    return (
        <Section className="bg-black">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1">
                    <h2 className="text-4xl font-bold text-white mb-8">Build on a solid foundation.</h2>
                    <p className="text-lg text-gray-400 mb-12">
                        The Advanced Intelligence in Motion Stack provides a unified architecture for logic, data, and action.
                    </p>

                    <div className="space-y-6">
                        {[
                            { title: 'Ontology Layer', desc: 'The semantic layer connecting data to objects.' },
                            { title: 'Reasoning Engine', desc: 'Orchestrates LLMs and deterministic code.' },
                            { title: 'Application Layer', desc: 'User-facing apps, APIs, and agents.' }
                        ].map((layer, i) => (
                            <div key={i} className="flex gap-4 p-4 border border-white/10 rounded bg-white/5">
                                <span className="font-mono text-blue-500">0{i + 1}</span>
                                <div>
                                    <h4 className="text-white font-bold">{layer.title}</h4>
                                    <p className="text-sm text-gray-500">{layer.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 relative">
                    {/* Abstract Cube/Stack Representation */}
                    <div className="relative aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-blue-500/20 blur-[100px]" />
                        <img
                            src="https://images.unsplash.com/photo-1759270463226-c5e04a4542c1?auto=format&fit=crop&q=80"
                            alt="Architecture Stack"
                            className="relative z-10 w-full h-full object-contain drop-shadow-2xl opacity-80"
                            style={{ mixBlendMode: 'screen' }}
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}

interface FeatureSectionProps {
    title: string;
    desc: string;
    img: string;
    align?: 'left' | 'right';
}

const FeatureSection = ({ title, desc, img, align = "left" }: FeatureSectionProps) => {
    return (
        <div className="py-24 border-t border-white/5 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className={`${align === 'right' ? 'lg:order-2' : ''}`}>
                    <h3 className="text-3xl font-bold text-white mb-6">{title}</h3>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed">{desc}</p>
                    <button className="text-blue-400 font-bold text-sm tracking-widest uppercase hover:text-blue-300 transition-colors flex items-center gap-2">
                        Learn More <FaArrowRight className="text-xs" />
                    </button>
                </div>
                <div className={`${align === 'right' ? 'lg:order-1' : ''}`}>
                    <div className="rounded-lg overflow-hidden border border-white/10 bg-[#111] shadow-2xl group">
                        <div className="h-8 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4">
                            <div className="flex gap-1.5 opacity-50">
                                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            </div>
                        </div>
                        <div className="aspect-video relative overflow-hidden">
                            <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const DevWorkflow = () => {
    return (
        <div className="bg-[#0A0A0A] py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl font-bold text-white mb-6">Developer Workflow</h2>
                    <p className="text-gray-400">From local prototype to production deployment.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: '1. Prototype', desc: 'Build locally with the Advanced Intelligence in Motion extension for VS Code.', icon: FaCode },
                        { title: '2. Evaluate', desc: 'Run rigorous test suites to measure performance.', icon: FaTerminal },
                        { title: '3. Deploy', desc: 'Ship to production with one click.', icon: FaArrowRight },
                    ].map((step, i) => (
                        <div key={i} className="bg-[#050505] p-8 rounded-xl border border-white/5 hover:border-blue-500/50 transition-colors">
                            <div className="w-12 h-12 bg-blue-900/20 text-blue-400 rounded-lg flex items-center justify-center mb-6 text-xl">
                                <step.icon />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                            <p className="text-gray-400">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const CompareTable = () => {
    return (
        <Section className="bg-[#050505]">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">Why developers choose Advanced Intelligence in Motion</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="py-6 px-4 text-gray-500 font-normal uppercase tracking-widest text-sm">Feature</th>
                            <th className="py-6 px-4 text-blue-400 font-bold text-xl">Advanced Intelligence in Motion</th>
                            <th className="py-6 px-4 text-gray-600 font-normal">Standard LLM APIs</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-300">
                        {[
                            { name: 'Ontology Awareness', aip: true, other: false },
                            { name: 'Enterprise Security', aip: true, other: 'Partial' },
                            { name: 'Versioning & Governance', aip: true, other: false },
                            { name: 'Visual Debugging', aip: true, other: false },
                        ].map((row, i) => (
                            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="py-6 px-4 font-bold">{row.name}</td>
                                <td className="py-6 px-4 text-blue-400">{row.aip === true ? <FaCheck /> : row.aip}</td>
                                <td className="py-6 px-4 text-gray-600">{row.other === false ? '-' : row.other}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Section>
    )
}

const AIMForDevelopers = () => {
    return (
        <div className="bg-[#050505] min-h-screen">
            <Hero />
            <IntegrationsGrid />
            <Architecture3D />

            <FeatureSection
                title="Ontology"
                desc="Don't feed your LLMs raw text. Bind them to a living digital twin of your organization. Advanced Intelligence in Motion Ontology provides the semantic layer that gives models deep understanding."
                img="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
            />

            <FeatureSection
                title="Logic"
                desc="Chain of thought, visualized. Build complex reasoning chains using a mix of Python code and LLM prompts, all versioned and testable."
                img="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
                align="right"
            />

            <FeatureSection
                title="Actions"
                desc="Safely write back to your systems. Advanced Intelligence in Motion handles the 'last mile' problem of determining which actions to take and executing them securely."
                img="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
            />

            <DevWorkflow />
            <CompareTable />

            <div className="bg-blue-600 text-white py-32 px-6 text-center">
                <h2 className="text-5xl font-bold mb-8">Start building today.</h2>
                <button className="bg-white text-blue-600 px-10 py-5 rounded font-bold text-xl hover:bg-gray-100 transition-colors">
                    Get Developer Access
                </button>
            </div>
        </div>
    );
};

export default AIMForDevelopers;
