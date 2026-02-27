import React from 'react';
import { motion } from 'framer-motion';

const products = [
    {
        id: '0.1',
        name: 'AIP',
        description: 'Automate operations, from the factory floor to the front lines',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070'
    },
    {
        id: '0.2',
        name: 'Archam',
        description: 'Achieve AI-driven combat superiority, from space to mud',
        image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=2069'
    },
    {
        id: '0.3',
        name: 'Forge',
        description: 'Build and manage Ontology-powered software, with a complete developer platform',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070'
    },
    {
        id: '0.4',
        name: 'Ontology',
        description: 'The central system for orchestrating decisions across Human+AI teams',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070'
    },
    {
        id: '0.5',
        name: 'Areies',
        description: 'Autonomously deploy, monitor, and manage software across any environment',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070'
    }
];

const SoftwareGrid: React.FC = () => {
    return (
        <section className="bg-white text-black py-24 px-6 md:px-12">
            <div className="max-w-[1600px] mx-auto mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-medium tracking-tight"
                >
                    Our Software
                </motion.h2>
            </div>

            <div className="flex flex-col gap-32 max-w-[1600px] mx-auto">
                {products.map((product, index) => (
                    <motion.div
                        key={product.name}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-gray-200 pt-12"
                    >
                        {/* Left: Description & Version */}
                        <div className="lg:col-span-3 flex flex-col justify-between h-full min-h-[200px]">
                            <p className="text-xl md:text-2xl font-normal leading-tight max-w-xs">
                                {product.description}
                            </p>
                            <span className="text-gray-400 font-mono mt-8">/{product.id}</span>
                        </div>

                        {/* Middle: Image */}
                        <div className="lg:col-span-5">
                            <div className="aspect-video bg-gray-100 overflow-hidden relative group">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                            </div>
                        </div>

                        {/* Right: Big Title */}
                        <div className="lg:col-span-4 flex lg:justify-start lg:pl-8">
                            <h3 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-none opacity-90 break-words w-full">
                                {product.name}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SoftwareGrid;
