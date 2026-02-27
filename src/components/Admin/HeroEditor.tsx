import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';

const HeroEditor: React.FC = () => {
    const [formData, setFormData] = useState({
        titleLine1: '',
        titleLine2: '',
        videoUrl: '',
        screenTextureUrl: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data, error } = await supabase
                .from('hero_content')
                .select('*')
                .eq('active', true)
                .order('created_at', { ascending: false })
                .limit(1)
                .maybeSingle();

            if (error) throw error;

            if (data) {
                setFormData({
                    titleLine1: data.title_line1 || '',
                    titleLine2: data.title_line2 || '',
                    videoUrl: data.video_url || '',
                    screenTextureUrl: data.screen_texture_url || ''
                });
            }
        } catch (error) {
            console.error('Error fetching hero content', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const dbData = {
                title_line1: formData.titleLine1,
                title_line2: formData.titleLine2,
                video_url: formData.videoUrl,
                screen_texture_url: formData.screenTextureUrl,
                active: true
            };

            const { data: existing } = await supabase
                .from('hero_content')
                .select('id')
                .eq('active', true)
                .limit(1)
                .maybeSingle();

            if (existing) {
                const { error } = await supabase
                    .from('hero_content')
                    .update(dbData)
                    .eq('id', existing.id);
                if (error) throw error;
            } else {
                const { error } = await supabase
                    .from('hero_content')
                    .insert([dbData]);
                if (error) throw error;
            }

            setMessage('Hero content updated successfully!');
            setTimeout(() => setMessage(''), 3000);
        } catch (error) {
            console.error(error);
            setMessage('Error updating content');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded border border-gray-100 shadow-sm max-w-3xl">
            <h2 className="text-2xl font-light mb-8 text-black">Edit Hero Content</h2>

            {message && (
                <div className={`p-4 mb-6 rounded text-sm font-medium ${message.includes('Error') ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-green-50 text-green-600 border border-green-100'}`}>
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Headline Line 1</label>
                    <input
                        type="text"
                        name="titleLine1"
                        value={formData.titleLine1}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:ring-0 focus:border-black transition-colors"
                        required
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Headline Line 2</label>
                    <input
                        type="text"
                        name="titleLine2"
                        value={formData.titleLine2}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:ring-0 focus:border-black transition-colors"
                        required
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Video URL</label>
                    <input
                        type="text"
                        name="videoUrl"
                        value={formData.videoUrl}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:ring-0 focus:border-black transition-colors"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Screen Texture URL</label>
                    <input
                        type="text"
                        name="screenTextureUrl"
                        value={formData.screenTextureUrl}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:ring-0 focus:border-black transition-colors"
                    />
                </div>

                <div className="pt-6">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-black text-white py-3 px-8 rounded hover:bg-gray-800 disabled:opacity-50 transition-colors uppercase text-sm font-bold tracking-widest"
                    >
                        {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default HeroEditor;
