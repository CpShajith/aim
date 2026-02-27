import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const AutomotiveMobility = () => {
    const [activeTab, setActiveTab] = useState('Lilium');
    const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);

    const nextPartner = () => {
        setCurrentPartnerIndex((prev) => (prev + 1) % 3);
    };

    const prevPartner = () => {
        setCurrentPartnerIndex((prev) => (prev - 1 + 3) % 3);
    };

    const partners = [
        {
            company: "STELLANTIS",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Stellantis_Logo.svg/2560px-Stellantis_Logo.svg.png",
            industry: "AUTOMOTIVE // IMPACT",
            title: "Maximizing Multinational Manufacturing",
            description: "Stellantis deploys AIM Forge across multinational brands, business functions and plant locations to accelerate its digital transformation, including improving supply chain performance, enhancing vehicle quality, and accelerating speed of delivery.",
            image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1974&auto=format&fit=crop" // Engine/Manufacturing
        },
        {
            company: "J.D. POWER",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/J.D._Power_logo.svg/2560px-J.D._Power_logo.svg.png",
            industry: "AUTOMOTIVE // IMPACT",
            title: "Operationalizing Billions of Datapoints",
            description: "With billions of vehicle configuration and performance datapoints, J.D. Power leverages AIM AIP and Forge to operationalize this hyper-scale information and support the development of new analytics models and workflow solutions.",
            image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop" // Car lot
        },
        {
            company: "AIRBUS",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Airbus_Logo_2017.svg/2560px-Airbus_Logo_2017.svg.png",
            industry: "AVIATION // IMPACT",
            title: "A Global Aviation Platform",
            description: "Better collaboration across teams accelerated delivery of A350s by 33%. Additionally, leveraged AI to accelerate supply chain collaboration as part of Skywise - a global platform with 100+ participating airlines.",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" // Airplane wing
        }
    ];

    return (
        <div className="w-full bg-white text-black pt-20">
            {/* Header Section */}
            <section className="px-6 py-12 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="text-sm font-mono text-gray-500 mb-8">
                    AIM / Automotive & Mobility
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start gap-16">
                    <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-none max-w-3xl">
                        Automotive & <br /> Mobility
                    </h1>
                    <div className="flex flex-col items-start max-w-md pt-4">
                        <p className="text-2xl md:text-3xl font-light leading-tight mb-8">
                            Mobility is on the cusp of total transformation.
                        </p>
                        <p className="text-2xl md:text-3xl font-light leading-tight text-gray-600">
                            AIM and its customers are leading the charge.
                        </p>
                    </div>
                </div>
            </section>

            <div className="border-t border-gray-200 w-full"></div>

            {/* About Our Work Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-light mb-16">About Our Work</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="h-[500px] w-full overflow-hidden bg-gray-100">
                        <img
                            src="https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop"
                            alt="Highway Light Trails"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-8">
                        <h3 className="text-3xl md:text-4xl font-light leading-tight">
                            AIM Forge, one of the world's leading Automotive software applications, is powering the mobility revolution. Most of the top 10 OEMs globally, as well as over 30 major Automotive part suppliers, use our software to analyse and understand their data.
                        </h3>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                From design to assembly — through marketing, sales, and use on the road — every vehicle produces masses of data. AIM Forge presents an end-to-end solution for the automotive ecosystem.
                            </p>
                            <p>
                                It can integrate the full lifecycle of vehicle data into a collaborative environment for analysis. OEMs, suppliers, dealers, and other mobility players can unlock its value in weeks to accelerate growth, reduce costs, and shape the future of mobility.
                            </p>
                        </div>
                        <div className="pt-4">
                            <a href="#" className="text-sm font-mono uppercase tracking-wider border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                                Learn more about our offerings &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="border-t border-gray-200 w-full"></div>

            {/* Our Partners Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto overflow-hidden">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="text-4xl md:text-5xl font-light">Our Partners</h2>
                    <div className="flex gap-4">
                        <button onClick={prevPartner} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors">
                            <FaArrowLeft className="text-sm" />
                        </button>
                        <button onClick={nextPartner} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors">
                            <FaArrowRight className="text-sm" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[...partners.slice(currentPartnerIndex), ...partners.slice(0, currentPartnerIndex)].map((partner, index) => (
                        <div key={index} className="flex flex-col h-full bg-gray-50 group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                            <div className="p-8 pb-0 flex-grow">
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
                                    {partner.industry}
                                </div>
                                <div className="h-8 mb-8">
                                    {/* Using text for logos if images fail or for simplicity, but trying image first */}
                                    <div className="text-xl font-bold font-mono">{partner.company}</div>
                                </div>
                                <h3 className="text-xl font-medium mb-4 group-hover:underline decoration-1 underline-offset-4">
                                    {partner.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                    {partner.description}
                                </p>
                            </div>
                            <div className="p-8 pt-0 mt-auto">
                                <div className="flex items-center gap-2 text-sm font-medium mb-6">
                                    Learn more <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                                </div>
                                <div className="h-48 w-full overflow-hidden">
                                    <img
                                        src={partner.image}
                                        alt={partner.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="border-t border-gray-200 w-full"></div>

            {/* Our Offerings Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-light mb-16">Our Offerings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {/* Offering 1 */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-black text-white flex items-center justify-center text-xs font-bold">QM</div>
                            <div className="text-xl leading-tight">AIM <br /> QMOS</div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            Forge's Quality Management OS integrates relevant data from suppliers, dealers, diagnostic trouble codes, connected vehicle telematics, warranty claims, and more to provide a holistic view of quality — leading to faster issue identification and resolution.
                        </p>
                        <a href="#" className="text-xs font-mono uppercase tracking-wider border-b border-gray-300 pb-1 w-fit hover:border-black transition-colors">
                            ↳ Learn more
                        </a>
                    </div>

                    {/* Offering 2 */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 border-2 border-black flex items-center justify-center text-xs font-bold rounded-full">CPM</div>
                            <div className="text-xl leading-tight">AIM <br /> CPM</div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            AIM's Component Performance Monitor enables OEMs and suppliers to prepare and integrate their data effectively, so teams can focus on working together to find solutions for impending issues. A collaborative and data-driven workflow allows OEMs to resolve problems before they cause a large number of failures, recalls, and quality costs.
                        </p>
                        <a href="#" className="text-xs font-mono uppercase tracking-wider border-b border-gray-300 pb-1 w-fit hover:border-black transition-colors">
                            ↳ Learn more
                        </a>
                    </div>

                    {/* Offering 3 */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gray-800 text-white flex items-center justify-center text-xs font-bold">SC</div>
                            <div className="text-xl leading-tight">AIM <br /> Supply Chain</div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            Manage unexpected shocks in the supply chain with a transparent digital twin of your global supply chain that proactively shows potential problems like plant shutdowns, production bottlenecks, and logistical delays. Apply complex "what-if" scenario analysis on this data asset to dynamically choose an optimal procurement and distribution strategy.
                        </p>
                        <a href="#" className="text-xs font-mono uppercase tracking-wider border-b border-gray-300 pb-1 w-fit hover:border-black transition-colors">
                            ↳ Learn more
                        </a>
                    </div>

                    {/* Offering 4 */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-black text-white flex items-center justify-center text-xs font-bold rounded-tr-xl">PDT</div>
                            <div className="text-xl leading-tight">AIM <br /> Plant Digital Twin</div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            Forge's Plant Digital Twin enables manufacturing teams to optimize production with an integrated feedback loop, leading to decreased re-work, improved in-field performance, and quicker turnaround times for critical investigations. It can help react to unforeseen production changes and supply chain disruptions without sacrificing the commitment to quality and safety.
                        </p>
                        <a href="#" className="text-xs font-mono uppercase tracking-wider border-b border-gray-300 pb-1 w-fit hover:border-black transition-colors">
                            ↳ Learn more
                        </a>
                    </div>

                    {/* Offering 5 */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-black text-white flex items-center justify-center text-xs font-bold">CR</div>
                            <div className="text-xl leading-tight">AIM <br /> Complexity Reduction</div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            Forge can help understand customer configuration demand to reduce the complexity of available vehicle configurations. Meet the challenges of rising costs per vehicle by fusing data integration and analytics with operational decision-making tools.
                        </p>
                        <a href="#" className="text-xs font-mono uppercase tracking-wider border-b border-gray-300 pb-1 w-fit hover:border-black transition-colors">
                            ↳ Learn more
                        </a>
                    </div>

                    {/* Offering 6 */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-black text-white flex items-center justify-center text-xs font-bold rounded-bl-xl">COGS</div>
                            <div className="text-xl leading-tight">AIM <br /> COGS</div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            Reducing material costs is key to staying competitive in today's automotive market. Forge can integrate data — such as composition supplier contracts, historical and forecasted raw material prices, production volumes, and more — to help identify and select COGS reduction strategies.
                        </p>
                        <a href="#" className="text-xs font-mono uppercase tracking-wider border-b border-gray-300 pb-1 w-fit hover:border-black transition-colors">
                            ↳ Learn more
                        </a>
                    </div>

                    {/* Offering 7 */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-black text-white flex items-center justify-center text-xs font-bold">NVL</div>
                            <div className="text-xl leading-tight">AIM <br /> New Vehicle Launch</div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            AIM Forge is built to help large organizations react to critical, time-sensitive work. From empowering smooth production ramp-ups to optimizing sales campaigns and monitoring initial in-service performance, data is at the core of ensuring the success of a new vehicle launch.
                        </p>
                        <a href="#" className="text-xs font-mono uppercase tracking-wider border-b border-gray-300 pb-1 w-fit hover:border-black transition-colors">
                            ↳ Learn more
                        </a>
                    </div>

                    {/* Offering 8 */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-black text-white flex items-center justify-center text-xs font-bold">NZ</div>
                            <div className="text-xl leading-tight">AIM <br /> Net-Zero</div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            Achieve an accurate and transparent accounting of CO2 contributions from your entire supply chain: from processing raw materials to in-service use, including part and vehicle distribution. Develop a carbon cost reduction roadmap and test "what-if" scenarios to determine your best strategy for reaching net zero.
                        </p>
                        <a href="#" className="text-xs font-mono uppercase tracking-wider border-b border-gray-300 pb-1 w-fit hover:border-black transition-colors">
                            ↳ Learn more
                        </a>
                    </div>
                </div>
            </section>

            <div className="border-t border-gray-200 w-full"></div>

            {/* Our Impact Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-light mb-16">Our Impact</h2>

                {/* Tabs */}
                <div className="flex gap-4 mb-16 overflow-x-auto pb-4">
                    <button
                        onClick={() => setActiveTab('Lilium')}
                        className={`px-8 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeTab === 'Lilium' ? 'bg-black text-white' : 'border border-gray-300 text-gray-600 hover:border-black hover:text-black'}`}
                    >
                        Lilium
                    </button>
                    <button
                        onClick={() => setActiveTab('Doosan')}
                        className={`px-8 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeTab === 'Doosan' ? 'bg-black text-white' : 'border border-gray-300 text-gray-600 hover:border-black hover:text-black'}`}
                    >
                        Doosan Infracore
                    </button>
                    <button
                        onClick={() => setActiveTab('Forvia')}
                        className={`px-8 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeTab === 'Forvia' ? 'bg-black text-white' : 'border border-gray-300 text-gray-600 hover:border-black hover:text-black'}`}
                    >
                        Forvia
                    </button>
                </div>

                {/* Lilium Content */}
                {activeTab === 'Lilium' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-in">
                        <div className="flex flex-col justify-between">
                            <div>
                                <div className="text-4xl font-light leading-tight mb-8">
                                    <span className="text-6xl text-gray-300 font-serif">“</span>
                                    <br />
                                    Lilium's commitment to zero operating emissions is accelerating the decarbonization of air travel, and we're mobilizing the power of our software to help them do that.
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-16">
                                    <span className="text-gray-400">↳</span> Shyam Sankar, AIM CTO
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="grid grid-cols-[120px_1fr] gap-8 border-t border-gray-200 pt-8">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Partner</div>
                                    <div className="text-lg">Lilium</div>
                                </div>
                                <div className="grid grid-cols-[120px_1fr] gap-8 border-t border-gray-200 pt-8">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Problem Space</div>
                                    <div className="text-lg text-gray-600">Lilium set out to unlock the future of fast, affordable, sustainable air mobility with an entire data ecosystem built around their electric vertical take-off and landing jets.</div>
                                </div>
                                <div className="grid grid-cols-[120px_1fr] gap-8 border-t border-gray-200 pt-8">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Solution</div>
                                    <div className="text-lg text-gray-600">With AIM Forge, Lilium jets can stream terabytes of raw sensor data into the platform to create a foundation of unified sensor data that the Ontology draws on to power predictive maintenance, battery lifetime modeling, accelerated flight readiness review and rapid defect management.</div>
                                </div>
                                <div className="grid grid-cols-[120px_1fr] gap-8 border-t border-gray-200 pt-8">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Impact</div>
                                    <div className="text-lg text-gray-600">With Forge, Lilium turned data into insights 6x faster than before, allowing their engineers to focus on action and innovation.</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="h-[400px] bg-gray-100 overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                                    alt="Shyam Sankar"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-8 left-8 text-white text-4xl font-light leading-tight">
                                    Fast. <br /> Affordable. <br /> Sustainable.
                                </div>
                            </div>
                            <div className="border-t border-gray-200 pt-8 flex justify-between items-center group cursor-pointer">
                                <span className="text-lg">Learn more about our Edge AI offering</span>
                                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Doosan Content */}
                {activeTab === 'Doosan' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-in">
                        <div className="flex flex-col justify-between">
                            <div>
                                <div className="text-2xl md:text-3xl font-light leading-tight mb-8">
                                    <span className="text-6xl text-gray-300 font-serif">“</span>
                                    <br />
                                    With our new system open, the structure of the 'virtuous cycle' of our work environment has been established, where live data paves a better way forward for new product development.
                                    <br /><br />
                                    AIM will continue to provide us with superior value service over the competition through their differentiated technology prowess. We hope the success of our joint project will be utilized as a reference point for many other companies in Korea's domestic manufacturing industry.
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-16">
                                    <span className="text-gray-400">↳</span> Dong Youn Sohn, CEO Doosan Infracore
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="grid grid-cols-[120px_1fr] gap-8 border-t border-gray-200 pt-8">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Partner</div>
                                    <div className="text-lg">Doosan Infracore</div>
                                </div>
                                <div className="grid grid-cols-[120px_1fr] gap-8 border-t border-gray-200 pt-8">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Problem Space</div>
                                    <div className="text-lg text-gray-600">Doosan needed to integrate data across the value chain, from product development to production, from sales to quality maintenance.</div>
                                </div>
                                <div className="grid grid-cols-[120px_1fr] gap-8 border-t border-gray-200 pt-8">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Solution</div>
                                    <div className="text-lg text-gray-600">Since 2019, AIM and Doosan Infracore have partnered to drive digital transformation and deliver high-quality, market-relevant products to its customers.</div>
                                </div>
                                <div className="grid grid-cols-[120px_1fr] gap-8 border-t border-gray-200 pt-8">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Impact Areas</div>
                                    <div className="text-lg text-gray-600">
                                        <ul className="space-y-2">
                                            <li>Integration</li>
                                            <li>IoT</li>
                                            <li>Production</li>
                                            <li>Quality</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="h-[400px] bg-gray-100 overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop"
                                    alt="Doosan Excavators"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold tracking-widest">
                                    DOOSAN
                                </div>
                            </div>
                            <div className="border-t border-gray-200 pt-8 flex justify-between items-center group cursor-pointer">
                                <span className="text-lg">Learn More</span>
                                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Forvia Content */}
                {activeTab === 'Forvia' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-in">
                        <div className="flex flex-col justify-between">
                            <div>
                                <div className="text-2xl md:text-3xl font-light leading-tight mb-8">
                                    <span className="text-6xl text-gray-300 font-serif">“</span>
                                    <br />
                                    Developing and strengthening our large-scale data capture and analysis will further increase agility, enhance the use of artificial intelligence and increase decision support and automation in Forvia.
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-16">
                                    <span className="text-gray-400">↳</span> Grégoire Ferré, Cockpit of the Future and Digital Services Factory SVP
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="grid grid-cols-[120px_1fr] gap-8 border-t border-gray-200 pt-8">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Partner</div>
                                    <div className="text-lg">Forvia</div>
                                </div>
                                <div className="grid grid-cols-[120px_1fr] gap-8 border-t border-gray-200 pt-8">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Problem Space</div>
                                    <div className="text-lg text-gray-600">Forvia, one of the world's leading automotive technology companies, sought to accelerate its digital transformation and ambition to be CO2 neutral.</div>
                                </div>
                                <div className="grid grid-cols-[120px_1fr] gap-8 border-t border-gray-200 pt-8">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Solution</div>
                                    <div className="text-lg text-gray-600">Built on top of Forvia's IT portfolio and contracted cloud services, AIM Forge allows Forvia to reduce raw material consumption, improve R&D competitiveness, secure purchasing excellence and track and measure overall CO2 neutrality efforts. The applications built on the data platform will contribute to generate digital twins, thus also enabling Forvia's capabilities to proactively simulate variability.</div>
                                </div>
                                <div className="grid grid-cols-[120px_1fr] gap-8 border-t border-gray-200 pt-8">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Impact</div>
                                    <div className="text-lg text-gray-600">
                                        <ul className="space-y-2">
                                            <li>CO2 Monitoring</li>
                                            <li>Data Integration</li>
                                            <li>Supply Chain Management</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="h-[400px] bg-gray-100 overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop"
                                    alt="Forvia Automotive"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold tracking-widest">
                                    FORVIA
                                </div>
                            </div>
                            <div className="border-t border-gray-200 pt-8 flex justify-between items-center group cursor-pointer">
                                <span className="text-lg">Learn More</span>
                                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            <div className="border-t border-gray-200 w-full"></div>

            {/* Define the Future Section */}
            <section className="px-6 py-24 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <h2 className="text-6xl md:text-8xl font-light tracking-tight leading-none">
                        Define the future <br /> of mobility today
                    </h2>
                    <div className="flex flex-col gap-8">
                        <p className="text-sm text-gray-500 italic">
                            Please see our <a href="#" className="underline hover:text-black transition-colors">Privacy Policy</a> regarding how we will handle this information.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AutomotiveMobility;
