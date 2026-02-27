import React from 'react';

const PrivacyCivilLiberties: React.FC = () => {
    return (
        <div className="bg-white text-black min-h-screen pt-32 pb-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto pl-0 lg:pl-8">
                <h1 className="text-5xl md:text-7xl font-light mb-8 tacking-tight">Privacy and Civil Liberties</h1>
                <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
                    <p>
                        AIM is fundamentally committed to designing software that empowers organizations while rigorously protecting privacy and civil liberties. Our platforms are built from the ground up with civil liberty safeguards as central engineering pillars, not afterthoughts.
                    </p>
                    <h2 className="text-2xl font-bold mt-12 mb-4">Our Core Philosophy</h2>
                    <p>
                        We believe that powerful analytical technology can and must be developed in a way that aligns with fundamental democratic values. We engineer our products—such as Archam and Ontology—to help organizations make sense of complex data ecosystems while strictly enforcing data minimization, rigorous access controls, and exhaustive auditability.
                    </p>
                    <h2 className="text-2xl font-bold mt-12 mb-4">Engineering Privacy</h2>
                    <p>
                        Our platforms incorporate structural features designed to mandate legal compliance and protect individuals' information, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li><strong>Granular Access Controls:</strong> Ensuring that users only have access to information explicitly required for their authorized duties.</li>
                        <li><strong>Data Minimization Models:</strong> Obfuscating and anonymizing sensitive personal endpoints so analytical operations can execute without exposing personally identifiable information (PII).</li>
                        <li><strong>Immutable Audit Logging:</strong> Maintaining cryptographic, unalterable logs of every interaction within the platform to ensure total accountability of operators.</li>
                        <li><strong>Purposes-based Access:</strong> Requiring operators to explicitly state and justify the legal reason for accessing specific data sets.</li>
                    </ul>
                    <h2 className="text-2xl font-bold mt-12 mb-4">The Privacy and Civil Liberties Engineering Team</h2>
                    <p>
                        AIM maintains a dedicated Privacy and Civil Liberties (PCL) Engineering capability. This team of technical experts and legal minds collaborates directly with our product engineers to seamlessly embed privacy-protective architectures directly into our codebase.
                    </p>
                    <p className="mt-12 text-sm text-gray-500">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyCivilLiberties;
