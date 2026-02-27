import React from 'react';

const TermsOfUse: React.FC = () => {
    return (
        <div className="bg-white text-black min-h-screen pt-32 pb-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto pl-0 lg:pl-8">
                <h1 className="text-5xl md:text-7xl font-light mb-8 tacking-tight">Terms of Use</h1>
                <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
                    <p>
                        By accessing or using the AIM website and its associated corporate properties, you agree to comply with and be bound by the following Terms of Use. If you do not agree to these terms, please do not use this site.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Intellectual Property Rights</h2>
                    <p>
                        All content, graphics, format, design, and intellectual property found on this site, including the concepts behind our platforms like Forge, Archam, Areies, and Ontology, are the exclusive property of Advance Intelligence in Motion (AIM) or its licensors. They are protected by domestic and international copyright, trademark, and other applicable intellectual property laws.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Use Constraints</h2>
                    <p>
                        You are permitted to view, copy, and download informational content on this site solely for personal, non-commercial use, provided you do not remove any copyright or proprietary notices. You are strictly prohibited from attempting to access secured, non-public areas of the site, attempting to reverse engineer the site's codebase, or utilizing the site for any malicious data extraction.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Disclaimers</h2>
                    <p>
                        The information provided on this website is for general informational purposes only and is provided "as is" without warranty of any kind, either express or implied. AIM does not warrant that the website will be uninterrupted or error-free. The capabilities of our software platforms described herein are subject to formal corporate agreements and operational contexts.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Limitation of Liability</h2>
                    <p>
                        In no event shall AIM be liable for any direct, indirect, special, punitive, incidental, exemplary or consequential damages arising out of your reliance on the information contained on this website or your inability to use this website.
                    </p>

                    <p className="mt-12 text-sm text-gray-500">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;
