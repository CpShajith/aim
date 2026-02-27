/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DashboardScreen: React.FC = () => {
    const [streamData, setStreamData] = useState<string[]>([]);
    const [timelineHeights, setTimelineHeights] = useState<number[]>([]);

    useEffect(() => {
        setStreamData(Array.from({ length: 8 }).map(() =>
            `0x${Math.random().toString(16).substr(2, 8).toUpperCase()} :: PACKET_RECEIVED`
        ));
        setTimelineHeights(Array.from({ length: 20 }).map(() => Math.random() * 80 + 20));
    }, []);

    return (
        <div className="w-full h-full bg-slate-900 text-cyan-400 font-mono text-[10px] p-4 overflow-hidden flex flex-col relative border-4 border-slate-800">
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

            {/* Top Bar */}
            <div className="flex justify-between items-center mb-2 border-b border-cyan-500/30 pb-1">
                <div className="flex gap-2">
                    <span className="bg-cyan-900/50 px-2 py-0.5 rounded">SYS.ONLINE</span>
                    <span className="text-cyan-600">V.2.0.4</span>
                </div>
                <div className="text-xs tracking-widest">AIM_OS // MONITORING</div>
            </div>

            <div className="flex-1 flex gap-2 min-h-0">
                {/* Left Panel - Data */}
                <div className="w-1/3 flex flex-col gap-2 border-r border-cyan-500/20 pr-2">
                    <div className="bg-slate-800/50 p-2 rounded border border-cyan-500/20">
                        <h3 className="text-cyan-200 mb-1 border-b border-cyan-500/20">ACTIVE NODES</h3>
                        <ul className="space-y-1 opacity-80">
                            <li className="flex justify-between"><span>ALPHA</span><span className="text-green-400">OK</span></li>
                            <li className="flex justify-between"><span>BRAVO</span><span className="text-green-400">OK</span></li>
                            <li className="flex justify-between"><span>CHARLIE</span><span className="text-yellow-400">WARN</span></li>
                            <li className="flex justify-between"><span>DELTA</span><span className="text-green-400">OK</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-800/50 p-2 rounded border border-cyan-500/20 flex-1">
                        <h3 className="text-cyan-200 mb-1 border-b border-cyan-500/20">STREAM DATA</h3>
                        <div className="space-y-1 font-mono text-[8px] opacity-60">
                            {streamData.map((text, i) => (
                                <div key={i} className="truncate">
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Panel - Radar & Map */}
                <div className="flex-1 flex flex-col relative">
                    <div className="absolute top-2 right-2 flex gap-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-red-400 text-[8px]">LIVE TRACKING</span>
                    </div>

                    {/* Radar Visualization */}
                    <div className="flex-1 flex items-center justify-center relative">
                        <div className="w-32 h-32 border border-cyan-500/30 rounded-full flex items-center justify-center relative">
                            <div className="w-24 h-24 border border-cyan-500/20 rounded-full absolute" />
                            <div className="w-16 h-16 border border-cyan-500/10 rounded-full absolute" />
                            <div className="absolute w-full h-[1px] bg-cyan-500/20 top-1/2 left-0" />
                            <div className="absolute h-full w-[1px] bg-cyan-500/20 top-0 left-1/2" />

                            {/* Rotating Scan Line */}
                            <motion.div
                                className="absolute w-1/2 h-1/2 bg-gradient-to-t from-transparent to-cyan-500/20 origin-bottom-right top-0 left-0 border-r border-cyan-500/40"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                style={{ borderBottomRightRadius: '100%' }}
                            />

                            {/* Blips */}
                            <motion.div
                                className="absolute w-1 h-1 bg-white rounded-full top-8 left-10 shadow-[0_0_5px_#fff]"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute w-1 h-1 bg-yellow-400 rounded-full bottom-10 right-8"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Panel - Timeline */}
            <div className="h-12 mt-2 border-t border-cyan-500/30 pt-1 flex items-end gap-1">
                {timelineHeights.map((height, i) => (
                    <motion.div
                        key={i}
                        className="flex-1 bg-cyan-600/40"
                        initial={{ height: '20%' }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
                    />
                ))}
            </div>
        </div>
    );
};

export default DashboardScreen;
