import React from 'react';
import { motion } from 'framer-motion';
import { FaBoxOpen, FaDownload, FaStar } from 'react-icons/fa';

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`py-24 px-6 md:px-12 ${className}`}>
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
    </div>
);

const Marketplace = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero */}
            <div className="pt-32 pb-24 px-6 md:px-12 bg-indigo-950 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-purple-400">
                            The Marketplace.
                        </h1>
                        <p className="text-xl md:text-2xl text-indigo-200 max-w-3xl mx-auto leading-relaxed">
                            The App Store for the Enterprise. Stop rebuilding the wheel. Discover, install, and deploy
                            battle-tested data products, algorithms, and applications instantly.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Product Grid Mockup */}
            <div className="bg-gray-50 py-12 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Customer 360', cat: 'Data Product', rating: 4.9, img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80' },
                            { title: 'Predictive Maint.', cat: 'Algorithm', rating: 4.8, img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80' },
                            { title: 'Supply Chain Twin', cat: 'Application', rating: 5.0, img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80' },
                            { title: 'Fraud Detection', cat: 'Model', rating: 4.7, img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer">
                                <div className="h-40 overflow-hidden relative">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                    <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-bold shadow">{item.cat}</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                    <div className="flex items-center gap-1 text-yellow-400 text-sm mb-4">
                                        <FaStar /> <span className="text-gray-500 ml-1">{item.rating}</span>
                                    </div>
                                    <button className="w-full py-2 bg-indigo-50 text-indigo-600 font-bold rounded hover:bg-indigo-100 transition-colors flex items-center justify-center gap-2">
                                        <FaDownload /> Install
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Value Props */}
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-light mb-8">Reduce Time-to-Value.</h2>
                        <div className="space-y-8">
                            {[
                                { t: 'Instant Deployment', d: 'Install fully functional data pipelines and applications with one click. Hydrate them with your local data automatically.' },
                                { t: 'Governed Exchange', d: 'Share assets securely across organizational boundaries. Define strict access controls and usage policies.' },
                                { t: 'Ecosystem Innovation', d: 'Leverage the collective intelligence of your industry. Access curated solutions from top partners and developers.' }
                            ].map((p, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-8 h-8 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 font-bold">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">{p.t}</h4>
                                        <p className="text-gray-600 leading-relaxed">{p.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80"
                                alt="Modern Commerce"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-indigo-900/90 to-transparent text-white">
                                <div className="text-3xl font-bold mb-2">1,500+</div>
                                <div className="text-indigo-200">Active Ecosystem Products</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <div className="bg-indigo-600 text-white py-24 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <FaBoxOpen className="text-6xl mx-auto mb-8 opacity-50" />
                    <h2 className="text-5xl font-bold mb-8">Start Sharing Today.</h2>
                    <p className="text-xl text-indigo-100 mb-12">
                        Turn your internal tools into reusable assets. Empower your entire organization.
                    </p>
                    <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors shadow-2xl">
                        Browse the Marketplace
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
