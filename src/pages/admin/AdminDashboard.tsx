import React, { useState, useEffect } from 'react';
import HeroEditor from '../../components/Admin/HeroEditor';
import MediaManager from '../../components/Admin/MediaManager';
import DashboardStats from '../../components/Admin/DashboardStats';
import ContactRequestsManager from '../../components/Admin/ContactRequestsManager';
import { supabase } from '../../supabaseClient';
import { BsGrid1X2, BsLayoutTextWindow, BsImages, BsEnvelopePaper, BsBoxArrowRight } from 'react-icons/bs';

const AdminDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [adminUser, setAdminUser] = useState<any>(null);

    useEffect(() => {
        checkSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session) {
                checkRole(session.user);
            } else {
                setIsAuthenticated(false);
                setAdminUser(null);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const checkSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            await checkRole(session.user);
        } else {
            setLoading(false);
        }
    };

    const checkRole = async (user: any) => {
        try {
            // Check if user is in user_roles table with ADMIN role
            const { data, error } = await supabase
                .from('user_roles')
                .select('role')
                .eq('id', user.id)
                .single();

            if (error) throw error;

            if (data && data.role === 'ADMIN') {
                setIsAuthenticated(true);
                setAdminUser(user);
            } else {
                setLoginError('User does not have admin privileges.');
                await supabase.auth.signOut();
            }
        } catch (error) {
            console.error('Role check failed', error);
            setLoginError('Error verifying admin status.');
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setLoginError('');

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) throw error;
            // The onAuthStateChange listener will handle the role check
        } catch (error: any) {
            setLoginError(error.message || 'Failed to login');
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin"></div></div>;
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center font-sans px-4">
                <div className="bg-white p-8 md:p-12 rounded shadow-lg max-w-md w-full border border-gray-100">
                    <div className="mb-8 text-center">
                        <img src="/aimlogo.jpeg" alt="Advanced Intelligence in Motion Logo" className="w-16 h-16 object-contain rounded-sm mx-auto mb-4" />
                        <h1 className="text-2xl font-light uppercase tracking-widest text-black">Advanced Intelligence in Motion Admin</h1>
                        <p className="text-sm text-gray-400 mt-2">Sign in with your administrator account</p>
                    </div>

                    {loginError && <div className="bg-red-50 text-red-600 p-3 rounded text-sm mb-6 border border-red-100">{loginError}</div>}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:ring-0 focus:border-black transition-colors"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:ring-0 focus:border-black transition-colors"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full bg-black text-white py-3 rounded uppercase tracking-widest text-sm font-bold hover:bg-gray-800 transition-colors mt-4">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'hero':
                return <HeroEditor />;
            case 'media':
                return <MediaManager />;
            case 'requests':
                return <ContactRequestsManager />;
            case 'dashboard':
            default:
                return <DashboardStats />;
        }
    };

    const getTabTitle = () => {
        const titles: Record<string, string> = {
            'dashboard': 'Dashboard Overview',
            'hero': 'Hero Content Manager',
            'media': 'Media Management Library',
            'requests': 'Contact Inquiries'
        };
        return titles[activeTab] || 'Dashboard';
    };

    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: BsGrid1X2 },
        { id: 'requests', label: 'Contact Requests', icon: BsEnvelopePaper },
        { id: 'hero', label: 'Hero Content', icon: BsLayoutTextWindow },
        { id: 'media', label: 'Media Library', icon: BsImages }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex font-sans">
            {/* Sidebar */}
            <div className="w-72 bg-black text-white p-6 flex flex-col fixed inset-y-0 z-50">
                <div className="mb-10 pt-4 flex items-center justify-between">
                    <h1 className="text-xl font-bold uppercase tracking-wide flex items-center gap-3">
                        <img src="/aimlogo.jpeg" alt="Advanced Intelligence in Motion Logo" className="w-8 h-8 object-contain rounded-sm" />
                        Advanced Intelligence in Motion <span className="text-gray-400 font-light ml-1">ADMIN</span>
                    </h1>
                </div>

                <nav className="space-y-2 flex-1 pt-6">
                    <div className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4 px-4">Menu</div>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full flex items-center gap-4 text-left px-4 py-3 rounded-lg text-sm font-bold tracking-wide transition-all ${isActive
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'text-gray-400 hover:bg-gray-900 hover:text-white'
                                    }`}
                            >
                                <Icon size={18} className={isActive ? 'text-white' : 'text-gray-500'} />
                                {item.label}
                            </button>
                        );
                    })}
                </nav>

                <div className="mt-8 pt-4 border-t border-gray-800">
                    <div className="px-4 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center font-bold text-lg">
                            {adminUser?.email?.charAt(0).toUpperCase() || 'A'}
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-300">Admin Session</p>
                            <p className="text-xs text-gray-500 truncate">{adminUser?.email}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold tracking-wide transition-colors text-red-500 hover:bg-red-500/10"
                    >
                        <BsBoxArrowRight size={18} />
                        Sign Out
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-72 flex flex-col min-h-screen overflow-x-hidden">
                <header className="bg-white border-b border-gray-200 sticky top-0 z-40 bg-opacity-90 backdrop-blur-md px-10 py-5 flex items-center justify-between shadow-sm">
                    <h2 className="text-2xl font-light text-black tracking-tight">{getTabTitle()}</h2>
                    <div className="text-xs font-mono text-gray-400">
                        {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                </header>

                <main className="p-10 flex-1 w-full max-w-7xl mx-auto">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
