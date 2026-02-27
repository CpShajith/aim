import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs';
import { supabase } from '../supabaseClient';

const Contact = () => {
    // Form State
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        jobTitle: '',
        company: '',
        country: '',
        projectContext: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const { error } = await supabase
                .from('contact_requests')
                .insert([
                    {
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        email: formData.email,
                        phone: formData.phone || null,
                        job_title: formData.jobTitle || null,
                        company: formData.company || null,
                        country: formData.country || null,
                        project_context: formData.projectContext || null
                    }
                ]);

            if (error) throw error;

            setSubmitStatus('success');
            // Reset form
            setFormData({
                firstName: '', lastName: '', email: '', phone: '',
                jobTitle: '', company: '', country: '', projectContext: ''
            });

        } catch (error: any) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setErrorMessage(error.message || 'An unexpected error occurred.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        Interested in solving your problems with AIM software?
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
                    className="bg-gray-50 p-8 md:p-12 border border-gray-200"
                >
                    {submitStatus === 'success' && (
                        <div className="mb-8 p-6 bg-green-50 border border-green-200 text-green-800 rounded-lg">
                            <h3 className="text-xl font-medium mb-2">Message Sent Successfully!</h3>
                            <p className="text-sm">Thank you for reaching out. Our team will get back to you shortly.</p>
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                            There was an error submitting your request: {errorMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">First Name: <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Last Name: <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Business Email Address: <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Phone Number:</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Job Title:</label>
                            <input
                                type="text"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleInputChange}
                                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Company / Institution:</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Country:</label>
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
                            >
                                <option value="">Select...</option>
                                <option value="US">United States</option>
                                <option value="UK">United Kingdom</option>
                                <option value="CA">Canada</option>
                                <option value="AU">Australia</option>
                                <option value="JP">Japan</option>
                                <option value="KR">Korea</option>
                            </select>
                        </div>

                        <div className="space-y-1 pt-4">
                            <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Tell us about your project, a bit of context will allow us to connect you to the right team faster.</label>
                            <textarea
                                name="projectContext"
                                value={formData.projectContext}
                                onChange={handleInputChange}
                                rows={4}
                                className="w-full border border-gray-300 p-2 mt-2 focus:outline-none focus:border-black transition-colors resize-none bg-transparent"
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting || submitStatus === 'success'}
                                className="w-full px-8 py-4 border border-black text-sm font-bold uppercase tracking-widest text-white bg-black hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Form'}
                            </button>
                        </div>



                        <p className="text-xs text-gray-500 italic">
                            Please see our <a href="#" className="underline hover:text-black">Privacy Policy</a> regarding how we will handle this information.
                        </p>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
