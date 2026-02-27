import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';

interface MediaAsset {
    id: string;
    filename: string;
    url: string;
    type: 'video' | 'image' | 'model';
    created_at: string;
}

const MediaManager: React.FC = () => {
    const [assets, setAssets] = useState<MediaAsset[]>([]);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchAssets();
    }, []);

    const fetchAssets = async () => {
        try {
            const { data, error } = await supabase
                .from('media_assets')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setAssets(data || []);
        } catch (error) {
            console.error('Error fetching assets', error);
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        setUploading(true);
        setMessage('');

        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
            const filePath = `${fileName}`;

            let type = 'image';
            if (file.type.startsWith('video/')) type = 'video';
            if (file.name.endsWith('.gltf') || file.name.endsWith('.glb')) type = 'model';

            // Upload via Supabase Storage
            const { error: uploadError } = await supabase.storage
                .from('aim_media')
                .upload(filePath, file, { upsert: false });

            if (uploadError) throw uploadError;

            // Get public URL
            const { data: { publicUrl } } = supabase.storage
                .from('aim_media')
                .getPublicUrl(filePath);

            // Record in Database
            const { error: dbError } = await supabase
                .from('media_assets')
                .insert([{ filename: file.name, url: publicUrl, type }]);

            if (dbError) throw dbError;

            setMessage('File uploaded successfully!');
            fetchAssets(); // Refresh list
        } catch (error) {
            console.error('Error uploading file:', error);
            setMessage('Error uploading file. Please ensure Supabase Storage is configured.');
        } finally {
            setUploading(false);
            e.target.value = ''; // Reset input
        }
    };

    return (
        <div className="bg-white p-8 rounded border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-light mb-8 text-black">Media Manager</h2>

            {message && (
                <div className={`p-4 mb-6 rounded text-sm font-medium ${message.includes('Error') ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-green-50 text-green-600 border border-green-100'}`}>
                    {message}
                </div>
            )}

            <div className="mb-10 p-6 bg-gray-50 border border-dashed border-gray-300 rounded flex flex-col items-center justify-center text-center">
                <label className="cursor-pointer">
                    <span className="bg-black text-white py-3 px-8 rounded hover:bg-gray-800 transition-colors uppercase text-sm font-bold tracking-widest inline-block mb-4">
                        {uploading ? 'Uploading...' : 'Upload New File'}
                    </span>
                    <input
                        type="file"
                        className="hidden"
                        onChange={handleFileUpload}
                        disabled={uploading}
                    />
                </label>
                <p className="text-sm font-medium text-gray-400">Supported: Images, Videos, GLTF/GLB</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {assets.map((asset) => (
                    <div key={asset.id} className="border border-gray-200 rounded overflow-hidden bg-gray-50 flex flex-col group relative">
                        <div className="aspect-video bg-gray-200 flex items-center justify-center overflow-hidden">
                            {asset.type === 'image' && (
                                <img src={asset.url} alt={asset.filename} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                            )}
                            {asset.type === 'video' && (
                                <video src={asset.url} className="w-full h-full object-cover" controls preload="metadata" />
                            )}
                            {asset.type === 'model' && (
                                <div className="text-4xl text-gray-400 font-light px-4 text-center break-all">3D Model</div>
                            )}
                        </div>
                        <div className="p-4 flex-1">
                            <p className="font-medium text-sm text-black truncate mb-1" title={asset.filename}>{asset.filename}</p>
                            <span className="inline-block px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded uppercase tracking-wider font-bold">
                                {asset.type}
                            </span>
                        </div>
                        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="bg-white/90 backdrop-blur text-black text-xs font-bold px-2 py-1 rounded shadow hover:bg-white" onClick={() => navigator.clipboard.writeText(asset.url)}>
                                Copy URL
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {assets.length === 0 && (
                <div className="text-center text-gray-500 py-12">No media assets found.</div>
            )}
        </div>
    );
};

export default MediaManager;
