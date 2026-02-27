import React from 'react';

const Sustainability: React.FC = () => {
    return (
        <div className="bg-white text-black min-h-screen pt-32 pb-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto pl-0 lg:pl-8">
                <h1 className="text-5xl md:text-7xl font-light mb-8 tacking-tight">Sustainability</h1>
                <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
                    <p>
                        At AIM, we recognize that our operations and the software platforms we deploy have a global footprint. We are deeply committed to environmentally responsible practices and to leveraging our technology to accelerate the global transition to a sustainable future.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Our Environmental Operations</h2>
                    <p>
                        We are actively managing and mitigating our corporate environmental impact. This includes adopting high-efficiency server architectures for our cloud processing platforms, minimizing the energy expenditure of AI model training within the Areies platform, and ensuring our global office infrastructure targets zero-waste operational procedures.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Technology for Global Sustainability</h2>
                    <p>
                        Our most profound impact on global sustainability comes not just from internal practices, but from the immense power of our software deployed across primary industries. AIM Ontology and Forge are currently utilized by global energy providers, automotive manufacturers, and logistics giants to radically optimize their physical footprint.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li><strong>Energy Grid Optimization:</strong> Assisting utilities in balancing load distribution to minimize waste and accelerate the integration of renewable sources.</li>
                        <li><strong>Supply Chain Emissivity:</strong> Providing massive multinational corporations the visual capabilities to track and surgically reduce their Scope 3 carbon emissions across their entire vendor network.</li>
                        <li><strong>Resource Allocation:</strong> Using advanced predictive modeling to prevent over-extraction of raw materials in the manufacturing process.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Looking Forward</h2>
                    <p>
                        We continuously assess our climate risks and opportunities in alignment with the Task Force on Climate-related Financial Disclosures (TCFD). By engineering software that makes the world's most vital institutions run more efficiently, we inherently drive out waste from the global supply chain.
                    </p>

                    <p className="mt-12 text-sm text-gray-500">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sustainability;
