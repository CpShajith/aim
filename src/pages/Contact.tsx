import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white text-black min-h-screen pt-32 pb-24 font-sans">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Left Column */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col"
                >
                    <div className="flex flex-col gap-1 mb-16">
                        <div className="flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase text-gray-400">
                            Contact / Demo Request + Partnership Inquiry
                        </div>
                        <a href="#" className="flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase text-black hover:underline w-fit">
                            Investor Relations <BsArrowUpRight />
                        </a>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8">
                        Interested in solving your problems with Advanced Intelligence in Motion software?
                    </h1>

                    <p className="text-xl text-gray-500 font-light max-w-md">
                        Reach out to our team to discover how our platforms can transform your organization's digital operations.
                    </p>
                </motion.div>

                {/* Right Column / Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <ContactForm />
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
