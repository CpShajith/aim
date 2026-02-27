import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { BsDownload, BsSearch } from 'react-icons/bs';

interface ContactRequest {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    job_title: string;
    company: string;
    country: string;
    project_context: string;
    created_at: string;
}

const ContactRequestsManager: React.FC = () => {
    const [requests, setRequests] = useState<ContactRequest[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('contact_requests')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setRequests(data || []);
        } catch (error) {
            console.error("Error fetching contact requests:", error);
        } finally {
            setLoading(false);
        }
    };

    const exportCSV = () => {
        if (requests.length === 0) return;
        const headers = ['First Name', 'Last Name', 'Email', 'Phone', 'Job Title', 'Company', 'Country', 'Project Context', 'Submitted At'];
        const csvRows = requests.map(req => [
            req.first_name,
            req.last_name,
            req.email,
            req.phone || '',
            req.job_title || '',
            req.company || '',
            req.country || '',
            `"${(req.project_context || '').replace(/"/g, '""')}"`,
            new Date(req.created_at).toISOString()
        ].join(','));

        const csvData = [headers.join(','), ...csvRows].join('\\n');
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');

        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', `aim_contact_requests_${new Date().getTime()}.csv`);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    const filteredRequests = requests.filter(req =>
        req.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (req.company || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        req.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        req.last_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 pb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                        <h2 className="text-xl font-bold tracking-tight text-gray-900 mb-1">Contact Requests</h2>
                        <p className="text-sm text-gray-500">Manage inquiries received from the website.</p>
                    </div>
                    <button
                        onClick={exportCSV}
                        className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 px-4 py-2 rounded text-sm font-bold tracking-widest uppercase transition-colors"
                    >
                        <BsDownload size={14} />
                        Export CSV
                    </button>
                </div>

                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
                    <BsSearch className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Search by name, email, or company..."
                        className="bg-transparent border-none outline-none w-full text-sm text-gray-800 focus:ring-0"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-600">
                    <thead className="bg-gray-50 text-xs uppercase tracking-widest text-gray-500 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 font-bold">Name & Contact</th>
                            <th className="px-6 py-4 font-bold">Company Info</th>
                            <th className="px-6 py-4 font-bold">Location</th>
                            <th className="px-6 py-4 font-bold">Submitted Date</th>
                            <th className="px-6 py-4 font-bold">Project Details</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {loading ? (
                            <tr>
                                <td colSpan={5} className="text-center py-12">
                                    <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                                    <span className="text-gray-400 uppercase tracking-widest text-xs font-bold">Loading Data...</span>
                                </td>
                            </tr>
                        ) : filteredRequests.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center py-12 text-gray-400">
                                    No contact requests found.
                                </td>
                            </tr>
                        ) : (
                            filteredRequests.map((req) => (
                                <tr key={req.id} className="hover:bg-gray-50/50 transition-colors group align-top">
                                    <td className="px-6 py-4">
                                        <div className="font-semibold text-gray-900">{req.first_name} {req.last_name}</div>
                                        <div className="text-gray-500 text-xs mt-1">{req.email}</div>
                                        {req.phone && <div className="text-gray-400 text-xs mt-0.5">{req.phone}</div>}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-800">{req.company || '-'}</div>
                                        <div className="text-gray-500 text-xs mt-1">{req.job_title}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-gray-600 border border-gray-200 text-xs">
                                            {req.country || 'N/A'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                        {formatDate(req.created_at)}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-gray-600 max-w-xs text-xs truncate" title={req.project_context}>
                                            {req.project_context || '-'}
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactRequestsManager;
