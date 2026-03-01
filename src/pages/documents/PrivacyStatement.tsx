import React from 'react';

const PrivacyStatement: React.FC = () => {
    return (
        <div className="bg-white text-black min-h-screen pt-32 pb-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto pl-0 lg:pl-8">
                <h1 className="text-5xl md:text-7xl font-light mb-8 tacking-tight">Privacy Statement</h1>
                <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
                    <p>
                        This Privacy Statement describes how Advanced Intelligence in Motion collects, uses, protects, and discloses information obtained from visitors to our corporate website and users interacting with our direct corporate portals.
                    </p>
                    <p className="bg-gray-100 p-4 border-l-4 border-black font-medium">
                        Please Note: This statement governs data collected directly by Advanced Intelligence in Motion as a corporate entity. It does NOT apply to the data that our clients process using our software platforms (such as Forge or Archam). Advanced Intelligence in Motion is strictly a data processor and custodian for our clients; our clients retain full sovereign ownership and control over their data at all times.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Information We Collect</h2>
                    <p>
                        We may collect business contact information (such as name, email address, job title, and company) when you voluntarily submit it through our website forms, request product demonstrations, or register for our events. Additionally, our servers automatically record standard technical metadata such as browser types and IP addresses for security and operational monitoring.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">How We Use Your Information</h2>
                    <p>
                        The information we directly collect is used exclusively to respond to inquiries, provide requested materials, maintain the security of our corporate infrastructure, and, with your consent, send you relevant corporate communications or product updates regarding our AI platforms.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Data Security</h2>
                    <p>
                        As a company that builds software for the defense and intelligence communities, we apply extreme rigor to security. We employ multi-layered, state-of-the-art cryptographic and physical security measures designed to protect any information submitted to us from unauthorized access, alteration, or destruction.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Information Sharing</h2>
                    <p>
                        We do not sell, rent, or lease your personal information to third parties. We may share necessary technical information with trusted service providers who assist us in operating our website, provided those parties agree to maintain the strict confidentiality of the data and comply with all applicable global privacy regulations (including GDPR and CCPA).
                    </p>

                    <p className="mt-12 text-sm text-gray-500">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyStatement;
