import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { BsEnvelope, BsImages, BsLayoutTextWindow } from 'react-icons/bs';
import { motion } from 'framer-motion';

const DashboardStats: React.FC = () => {
    const [stats, setStats] = useState({
        contactRequests: 0,
        mediaAssets: 0,
        heroConfig: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        setLoading(true);
        try {
            const { count: contactCount } = await supabase
                .from('contact_requests')
                .select('*', { count: 'exact', head: true });

            const { count: mediaCount } = await supabase
                .from('media_assets')
                .select('*', { count: 'exact', head: true });

            const { count: heroCount } = await supabase
                .from('hero_content')
                .select('*', { count: 'exact', head: true });

            setStats({
                contactRequests: contactCount || 0,
                mediaAssets: mediaCount || 0,
                heroConfig: heroCount || 0
            });
        } catch (error) {
            console.error("Error fetching stats:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex h-64 items-center justify-center">
                <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    const statCards = [
        {
            title: "Contact Requests",
            value: stats.contactRequests,
            icon: BsEnvelope,
            color: "bg-blue-50 text-blue-600 border-blue-100",
        },
        {
            title: "Media Assets",
            value: stats.mediaAssets,
            icon: BsImages,
            color: "bg-purple-50 text-purple-600 border-purple-100",
        },
        {
            title: "Hero Configurations",
            value: stats.heroConfig,
            icon: BsLayoutTextWindow,
            color: "bg-green-50 text-green-600 border-green-100",
        }
    ];

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-light tracking-tight text-gray-900 mb-2">Overview</h2>
                <p className="text-gray-500">Welcome to the AIM Management Dashboard.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {statCards.map((stat, index) => (
                    <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-6 rounded-xl border bg-white shadow-sm flex flex-col justify-between h-48 group hover:shadow-md transition-shadow`}
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">{stat.title}</p>
                                <h3 className="text-4xl font-light text-black">{stat.value}</h3>
                            </div>
                            <div className={`p-4 rounded-lg ${stat.color}`}>
                                <stat.icon className="text-2xl" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
                <h3 className="text-lg font-bold tracking-widest uppercase text-gray-900 mb-4">Quick Limits & Security</h3>
                <p className="text-gray-600 leading-relaxed mb-6 block">
                    Use the sidebar to navigate between managing front-page hero content, uploading background videos and images, and observing the incoming stream of contact requests.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-100 p-4 rounded-lg bg-gray-50">
                        <h4 className="font-bold text-gray-800 text-sm uppercase mb-1">Row Level Security (RLS)</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">All data operations are authenticated automatically using Supabase session validation, protecting both API access and direct database modification.</p>
                    </div>
                    <div className="border border-gray-100 p-4 rounded-lg bg-gray-50">
                        <h4 className="font-bold text-gray-800 text-sm uppercase mb-1">Storage Rules</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">Media files are uploaded to the aim_media bucket supporting high-performance video streaming. Bucket access aligns with the RLS policies.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardStats;
