import React from 'react';
import { motion } from 'framer-motion';

const AIMExplained: React.FC = () => {
    return (
        <div className="bg-white text-black min-h-screen pt-32 pb-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto pl-0 lg:pl-8">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter"
                >
                    AIM Explained
                </motion.h1>
                <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
                    <p className="text-2xl font-light leading-snug">
                        Advance Intelligence in Motion (AIM) does not collect or monetize your data. We build software platforms that empower organizations to integrate their own disparate data, make operational decisions, and execute intelligent actions at scale.
                    </p>

                    <h2 className="text-3xl font-bold mt-16 mb-6">What We Actually Do</h2>
                    <p>
                        There is a common misconception about companies that work with vast amounts of data. AIM is not a data broker. We do not operate a commercial marketplace for personal intelligence, nor do we amass databases of consumer information to sell to third parties.
                    </p>
                    <p>
                        We are fundamentally a software company. Our core business is providing massive institutions—from allied defensive military structures to global telecommunications providers—with the infrastructure needed to securely manage the information they already legally possess.
                    </p>

                    <h2 className="text-3xl font-bold mt-16 mb-6">The Operating System for the Modern Enterprise</h2>
                    <p>
                        Modern organizations are drowning in siloed systems. Their logistics networks, billing platforms, HR databases, and supply chain manifests operate in disjointed isolation. AIM's platforms (like Forge and Archam) act as a connective tissue. They ingest these disparate nodes and weave them into a unified, ontological model of the organization's reality.
                    </p>
                    <p>
                        This allows human operators, aided by Artificial Intelligence through platforms like Areies, to ask complex questions of their entire operating landscape in milliseconds, enabling rapid, informed, and accountable decision-making.
                    </p>

                    <h2 className="text-3xl font-bold mt-16 mb-6">Security and Custodianship</h2>
                    <p>
                        When an organization uses AIM software, the data belongs entirely to them. We act strictly as a custodian of their software infrastructure. Our platforms are built to deploy into the most secure, air-gapped classified networks on Earth, functioning entirely under the sovereign control of our partners.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AIMExplained;
