import React from 'react';

const Cookies: React.FC = () => {
    return (
        <div className="bg-white text-black min-h-screen pt-32 pb-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto pl-0 lg:pl-8">
                <h1 className="text-5xl md:text-7xl font-light mb-8 tacking-tight">Cookies Policy</h1>
                <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
                    <p>
                        At AIM, we utilize cookies and similar tracking technologies to ensure our website functions securely efficiently and to provide you with the best possible experience when navigating our platforms.
                    </p>
                    <h2 className="text-2xl font-bold mt-12 mb-4">What Are Cookies?</h2>
                    <p>
                        Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work, log user preferences, and provide aggregated business and marketing information to the site owners.
                    </p>
                    <h2 className="text-2xl font-bold mt-12 mb-4">How We Use Cookies</h2>
                    <p>
                        We use essential cookies that are strictly necessary for the operation of our platform. We also use functional cookies to remember choices you make, and performance cookies to analyze how visitors interact with our services, enabling us to measure and improve our ecosystem.
                    </p>
                    <h2 className="text-2xl font-bold mt-12 mb-4">Managing Cookies</h2>
                    <p>
                        You have the right to decide whether to accept or reject non-essential cookies. You can exercise your preferences by modifying your browser settings. However, please note that disabling certain essential cookies may impact your ability to fully utilize some features of our secure platforms like Forge or Archam.
                    </p>
                    <p className="mt-12 text-sm text-gray-500">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cookies;
