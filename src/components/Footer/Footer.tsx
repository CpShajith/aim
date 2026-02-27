import React from 'react';
import { FaYoutube, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-black pt-24 pb-12 px-6 md:px-12 border-t border-gray-100">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Left Column: Copyright & Social */}
                <div className="lg:col-span-3 flex flex-col h-full">
                    <div className="mb-8">
                        <div className="text-xl font-bold flex items-center gap-2 mb-8">
                            <img src="/aimlogo.jpeg" alt="AIM Logo" className="w-8 h-8 object-contain rounded-sm" />
                            AIM
                        </div>

                        {/* Region Selector */}
                        <div className="flex gap-3 text-xs font-bold text-gray-500 mb-8">
                            <span className="text-black cursor-pointer">US</span>
                            <span className="cursor-pointer hover:text-black">UK</span>
                            <span className="cursor-pointer hover:text-black">JP</span>
                            <span className="cursor-pointer hover:text-black">KR</span>
                        </div>

                        <div className="flex flex-col gap-4 mb-12">
                            <div className="flex gap-4">
                                <button className="w-full border border-gray-300 rounded-full py-2 px-6 text-sm font-medium hover:bg-gray-50 transition-colors uppercase tracking-widest flex items-center justify-center gap-2">
                                    YouTube <FaYoutube />
                                </button>
                            </div>
                            <div className="flex gap-4">
                                <button className="w-full border border-gray-300 rounded-full py-2 px-6 text-sm font-medium hover:bg-gray-50 transition-colors uppercase tracking-widest flex items-center justify-center gap-2">
                                    X <FaXTwitter />
                                </button>
                            </div>
                            <div className="flex gap-4">
                                <button className="w-full border border-gray-300 rounded-full py-2 px-6 text-sm font-medium hover:bg-gray-50 transition-colors uppercase tracking-widest flex items-center justify-center gap-2">
                                    LinkedIn <FaLinkedinIn />
                                </button>
                            </div>
                            <div className="flex gap-4">
                                <button className="w-full border border-gray-300 rounded-full py-2 px-6 text-sm font-medium hover:bg-gray-50 transition-colors uppercase tracking-widest flex items-center justify-center gap-2">
                                    GitHub <FaGithub />
                                </button>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500 mt-auto">
                            © 2025 AIM Technologies Inc.<br />
                            All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Links Columns */}
                <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-3 gap-8">

                    {/* Column 1: Offerings */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Offerings</h4>
                        <ul className="space-y-3 text-sm font-medium text-gray-600">
                            <li><Link to="/anti-money-laundering" className="hover:text-black">Anti-Money Laundering</Link></li>
                            <li><Link to="/automotive-mobility" className="hover:text-black">Automotive & Mobility</Link></li>
                            <li><Link to="/data-protection" className="hover:text-black">Data Protection</Link></li>
                            <li><Link to="/defense" className="hover:text-black">Defense</Link></li>
                            <li><Link to="/energy" className="hover:text-black">Energy</Link></li>
                            <li><Link to="/federal-health" className="hover:text-black">Federal Health</Link></li>
                            <li><Link to="/fedstart" className="hover:text-black">FedStart</Link></li>
                            <li><Link to="/financial-services" className="hover:text-black">Financial Services</Link></li>
                            <li><Link to="/food-beverage" className="hover:text-black">Food & Beverage</Link></li>
                            <li><Link to="/AIM-for-builders" className="hover:text-black">AIM for Builders</Link></li>
                            <li><Link to="/govt-financial-management" className="hover:text-black">Govt Financial Management</Link></li>
                            <li><Link to="/hospital-operations" className="hover:text-black">Hospital Operations</Link></li>
                            <li><Link to="/insurance" className="hover:text-black">Insurance</Link></li>
                            <li><Link to="/intelligence" className="hover:text-black">Intelligence</Link></li>
                            <li><Link to="/life-sciences" className="hover:text-black">Life Sciences</Link></li>
                            <li><Link to="/mission-manager" className="hover:text-black">Mission Manager</Link></li>
                            <li><Link to="/procurement" className="hover:text-black">Procurement</Link></li>
                            <li><Link to="/rail" className="hover:text-black">Rail</Link></li>
                            <li><Link to="/readiness" className="hover:text-black">Readiness</Link></li>
                            <li><Link to="/retail" className="hover:text-black">Retail</Link></li>
                            <li><Link to="/secure-collaboration" className="hover:text-black">Secure Collaboration</Link></li>
                            <li><Link to="/semiconductors" className="hover:text-black">Semiconductors</Link></li>
                            <li><Link to="/supply-chain" className="hover:text-black">Supply Chain</Link></li>
                            <li><Link to="/telecommunications" className="hover:text-black">Telecommunications</Link></li>
                            <li><Link to="/utilities" className="hover:text-black">Utilities</Link></li>
                        </ul>
                    </div>



                    {/* Column 3: Capabilities */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Capabilities</h4>
                        <ul className="space-y-3 text-sm font-medium text-gray-600">
                            <li><Link to="/ai-ml" className="hover:text-black">AI + ML</Link></li>
                            <li><Link to="/aip-developers" className="hover:text-black">AIP for Developers</Link></li>
                            <li><Link to="/data-integration" className="hover:text-black">Data Integration</Link></li>
                            <li><Link to="/edge-ai" className="hover:text-black">Edge AI</Link></li>
                            <li><Link to="/marketplace" className="hover:text-black">Marketplace</Link></li>
                            <li><Link to="/pipeline-builder" className="hover:text-black">Pipeline Builder</Link></li>
                            <li><Link to="/process-mining" className="hover:text-black">Process Mining</Link></li>
                            <li><Link to="/real-time-alerting" className="hover:text-black">Real-Time Alerting</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Documents */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Documents</h4>
                        <ul className="space-y-3 text-sm font-medium text-gray-600">
                            <li><Link to="/cookies" className="hover:text-black">Cookies</Link></li>
                            <li><Link to="/privacy-and-civil-liberties" className="hover:text-black">Privacy and Civil Liberties</Link></li>
                            <li><Link to="/aim-explained" className="hover:text-black">AIM Explained</Link></li>
                            <li><Link to="/sustainability" className="hover:text-black">Sustainability</Link></li>
                            <li><Link to="/human-rights-policy" className="hover:text-black">Human Rights Policy</Link></li>
                            <li><Link to="/privacy-statement" className="hover:text-black">Privacy Statement</Link></li>
                            <li><Link to="/terms-of-use" className="hover:text-black">Terms of Use</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
