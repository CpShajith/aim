import { Link } from 'react-router-dom';

const AntiMoneyLaundering = () => {
    return (
        <div className="w-full bg-white text-black pt-20">
            {/* Section 1: Header */}
            <section className="px-6 py-20 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                    <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight">
                        Anti-Money <br /> Laundering
                    </h1>
                    <div className="flex flex-col items-start">
                        <p className="text-2xl md:text-3xl font-light text-gray-800 max-w-md mb-8">
                            Fighting the Future of Financial Crime
                        </p>
                        <Link to="/contact" className="text-sm font-mono uppercase tracking-wider border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                            Get Started &rarr;
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section 2: Dark Hero with Text */}
            <section className="relative w-full h-[80vh] bg-gray-900 text-white flex items-center justify-center overflow-hidden">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    alt="Cityscape"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />

                <div className="relative z-20 max-w-6xl mx-auto px-6 w-full">
                    <div className="border-t border-white/30 pt-8 mb-8 text-xs font-mono tracking-widest opacity-70">
                        AIM TECHNOLOGIES INC. <br />
                        ANTI-MONEY LAUNDERING
                    </div>
                    <h2 className="text-4xl md:text-6xl font-light leading-tight max-w-4xl">
                        For over a decade, global <br />
                        banks and regulators have relied <br />
                        on <span className="underline decoration-1 underline-offset-8">AIM Forge</span>
                    </h2>
                </div>
            </section>

            {/* Section 3: One Approach */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                            One Approach, Every <br /> Challenge
                        </h2>
                    </div>
                    <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                        <p>
                            Financial crime is harder than ever for institutions to detect and prevent, with digital transformation accelerating sophisticated attacks, and new, unregulated digital assets like cryptocurrencies heightening risk exposure.
                        </p>
                        <p>
                            AIM's software is trusted by banking giants, up-and-coming fintechs, and regulators alike, leveraging multi-layered security with best-in-class architecture.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 4: AIM Solves For */}
            <section className="px-6 py-12 md:px-20 lg:px-32 max-w-7xl mx-auto flex justify-end">
                <div className="w-full md:w-1/2">
                    <h3 className="text-3xl font-light mb-8">AIM Solves For:</h3>
                    <ul className="space-y-4">
                        {['Transaction Monitoring', 'Investigations and Financial Intelligence Units', 'KYC', 'Customer and Transaction Risk Rating', 'Sanctions Screening', 'Enhanced & Customer Due Diligence'].map((item) => (
                            <li key={item} className="flex items-center gap-3 text-lg text-gray-800 border-l-2 border-transparent hover:border-black pl-0 hover:pl-4 transition-all duration-300 cursor-pointer group">
                                <span className="text-xs text-gray-400 group-hover:text-black">↳</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Section 5: AML in Action */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-light mb-16">AML in Action</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="group cursor-pointer">
                        <div className="h-64 bg-gray-200 mb-6 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop" alt="Abstract Black" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <p className="text-xs font-mono text-gray-500 mb-2">01</p>
                        <p className="text-lg leading-snug">
                            Forge for AML has allowed global financial organizations to <span className="font-semibold">lower their costs by 90%</span> and improve their true positive rate by 45X.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="group cursor-pointer">
                        <div className="h-64 bg-gray-200 mb-6 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="Abstract Lines" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <p className="text-xs font-mono text-gray-500 mb-2">02</p>
                        <p className="text-lg leading-snug">
                            Our solution provides banks with the flexibility to <span className="font-semibold">deliver 70+ use cases on a single platform</span>.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className="group cursor-pointer">
                        <div className="h-64 bg-gray-200 mb-6 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop" alt="Abstract Shapes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <p className="text-xs font-mono text-gray-500 mb-2">03</p>
                        <p className="text-lg leading-snug">
                            Forge <span className="font-semibold">cuts investigative time in half</span> while improving risk posture and relationships with the regulators.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 6: Forge for AML */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-light mb-12 tracking-tight">Forge for AML</h2>
                        <div className="text-lg text-gray-700 space-y-8 mb-12">
                            <p>
                                Financial institutions need to comprehensively understand the behavior of their customers, counterparties, and all related networks.
                            </p>
                            <p>
                                Forge for AML is a regulator approved approach to improving your AML risk posture by deploying a next generation AI-based AML and compliance process within days.
                            </p>
                        </div>
                        <h3 className="text-2xl font-light mb-4">What sets AIM apart:</h3>
                    </div>
                    <div className="h-[500px] bg-gray-100 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1558494949-efc5e60c9480?q=80&w=2000&auto=format&fit=crop"
                            alt="Server Room"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Section 7: Features List */}
            <section className="px-6 pb-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="flex flex-col">
                    {/* Feature 1 */}
                    <div className="border-t border-gray-200 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <h3 className="text-4xl font-light leading-tight">Powerful AI Foundation</h3>
                        <div className="flex gap-4">
                            <span className="text-gray-400 mt-1">↳</span>
                            <p className="text-gray-600 leading-relaxed">
                                AIM's machine learning-based entity resolution and advanced network-based risk models enable easy and accurate linking of customers, networks and unknown counterparties. This empowers the bank with a solid, future-proofed foundation, and a central client file — or "customer 360" — that can be updated dynamically across AML functions.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="border-t border-gray-200 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <h3 className="text-4xl font-light leading-tight">Holistic Risk-Based Models & Scenarios</h3>
                        <div className="flex gap-4">
                            <span className="text-gray-400 mt-1">↳</span>
                            <p className="text-gray-600 leading-relaxed">
                                AIM's solution takes a hybrid approach, providing comprehensive out-of-the-box modules, scenarios and models, while offering the flexibility needed to meet regulatory demands driven by your precise customer-base and risk tolerance. Ultimately, this improves alert accuracy and efficiency while providing more high-quality, automated SARs and reports for regulators.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="border-t border-gray-200 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <h3 className="text-4xl font-light leading-tight">Government-Approved Security</h3>
                        <div className="flex gap-4">
                            <span className="text-gray-400 mt-1">↳</span>
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    Initially built for use by government intelligence and defense agencies, with privacy and civil liberties concerns at top of mind, AIM Forge includes unparalleled, granular security controls.
                                </p>
                                <p>
                                    All data is encrypted both in transit and at rest, and AIM offers high auditability and role-based access control frameworks so that all teams can access and share the necessary data without compromising security.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="border-t border-gray-200 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <h3 className="text-4xl font-light leading-tight">Best-in-Class Investigative Tooling & Reporting</h3>
                        <div className="flex gap-4">
                            <span className="text-gray-400 mt-1">↳</span>
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    With a holistic understanding across transaction, relationship, counterparty, KYC, and sanctions risk, analysts can quickly triage alerts and ask follow-up questions to disposition the full network of related entities. Built-in workflow management enables timely and proper escalation, triage, and review — with full collaboration and transparency across all relevant teams.
                                </p>
                                <p>
                                    Once an investigation is complete, AIM generates required reporting information with full data lineage to source systems, updates reports dynamically as information changes, and alerts analysts of new risks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 8: A Proven Solution */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-black">
                <h2 className="text-5xl md:text-7xl font-light mb-24 text-center tracking-tight">A Proven Solution</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Item 1 */}
                    <div>
                        <h3 className="text-3xl font-light mb-6">Commercial Off-the-Shelf Product</h3>
                        <div className="flex gap-4">
                            <span className="text-gray-400 mt-1">↳</span>
                            <p className="text-gray-600 leading-relaxed">
                                AIM Forge is the industry's leading commercial data infrastructure, and provides the basis for the Next Generation Financial Crime Solution as a productized, out-of-the-box solution. It includes a stable, scalable back-end built for complex data environments.
                            </p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div>
                        <h3 className="text-3xl font-light mb-6">Cost-Effectiveness</h3>
                        <div className="flex gap-4">
                            <span className="text-gray-400 mt-1">↳</span>
                            <p className="text-gray-600 leading-relaxed">
                                Forge is a fully integrated SaaS solution, with high speed-to-value and multiple features for optimizing Total Cost of Ownership — even when deployed on-premises. By packaging a suite of versatile applications, organizations save on labor, maintenance, support and operational costs.
                            </p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div>
                        <h3 className="text-3xl font-light mb-6">Speed to Implementation</h3>
                        <div className="flex gap-4">
                            <span className="text-gray-400 mt-1">↳</span>
                            <p className="text-gray-600 leading-relaxed">
                                The proposed Solution can be rapidly implemented and will deliver a significant portion of the solution functionality out-of-the-box - meeting needs on an expedited timeline of weeks rather than years.
                            </p>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div>
                        <h3 className="text-3xl font-light mb-6">Openness & Interoperability</h3>
                        <div className="flex gap-4">
                            <span className="text-gray-400 mt-1">↳</span>
                            <p className="text-gray-600 leading-relaxed">
                                Forge is an open, extensible, and scalable system. All data in Forge can be securely exported in industry standard, open formats for use in other systems, and all of the logic used to integrate our clients' data is available and usable in any environment.
                            </p>
                        </div>
                    </div>

                    {/* Item 5 */}
                    <div>
                        <h3 className="text-3xl font-light mb-6">Foundation for Future Capabilities</h3>
                        <div className="flex gap-4">
                            <span className="text-gray-400 mt-1">↳</span>
                            <p className="text-gray-600 leading-relaxed">
                                Forge provides a data foundation for continued digital transformation. As the world changes, the data infrastructure is designed to adapt and scale along with changing organizational needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 9: Contact Form */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto border-t border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-light leading-tight tracking-tight mb-8">
                            Get more out of your data platforms with AIM Forge
                        </h2>
                    </div>
                    <div>
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">First Name: <span className="text-red-500">*</span></label>
                                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Last Name: <span className="text-red-500">*</span></label>
                                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Business Email: <span className="text-red-500">*</span></label>
                                <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Phone Number: <span className="text-red-500">*</span></label>
                                <input type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Job Title: <span className="text-red-500">*</span></label>
                                <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Company / Institution: <span className="text-red-500">*</span></label>
                                <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Country: <span className="text-red-500">*</span></label>
                                <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent text-gray-500">
                                    <option>Select...</option>
                                    <option>United States</option>
                                    <option>United Kingdom</option>
                                    <option>Canada</option>
                                    {/* Add more countries as needed */}
                                </select>
                            </div>

                            <div className="space-y-2 pt-4">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Tell us about your project, a bit of context will allow us to connect you to the right team faster:</label>
                                <textarea rows={4} className="w-full border border-gray-300 p-2 focus:outline-none focus:border-black transition-colors bg-transparent"></textarea>
                            </div>

                            <div className="space-y-4 pt-4">
                                <div className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1" />
                                    <label className="text-sm text-gray-600">Opt-in to receive AIM product updates.</label>
                                </div>
                                <div className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1" />
                                    <label className="text-sm text-gray-600">Opt-in to personalized sales outreach.</label>
                                </div>
                                <div className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1" />
                                    <label className="text-sm text-gray-600">Opt-in to receive invites to future events.</label>
                                </div>
                                <div className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1" />
                                    <label className="text-sm text-gray-600">Opt-in to receive educational resources.</label>
                                </div>
                            </div>

                            <div className="pt-8">
                                <button type="submit" className="w-full md:w-auto px-12 py-3 border border-black text-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                                    Submit
                                </button>
                            </div>



                            <p className="text-sm text-gray-500 italic">
                                Please see our <a href="#" className="underline hover:text-black">Privacy Policy</a> regarding how we will handle this information.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AntiMoneyLaundering;
