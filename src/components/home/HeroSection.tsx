'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { IoArrowDown, IoPlayCircleOutline, IoHardwareChip, IoCube, IoFlash } from 'react-icons/io5';

export default function HeroSection() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-primary-950">
            {/* Cinematic Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                {/* Dark Overlay with radial gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-900/50 to-primary-950 z-10"></div>

                {/* Cyberpunk Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:100px_100px] perspective-[500px] transform-gpu"></div>

                {/* Glow Orbs */}
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
            </motion.div>

            {/* Content Container */}
            <div className="container mx-auto px-4 relative z-20 pt-20">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Text Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* High-Tech Badge */}
                        <motion.div
                            variants={fadeInUp}
                            className="mb-8 inline-flex justify-center lg:justify-start"
                        >
                            <div className="px-4 py-2 rounded-lg border border-accent-500/30 bg-accent-500/10 backdrop-blur-md text-accent-400 text-sm font-mono tracking-widest uppercase flex items-center gap-3 shadow-glow">
                                <IoHardwareChip className="animate-spin-slow" />
                                <span>Next-Gen Storage Systems</span>
                            </div>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8 tracking-tight font-display"
                        >
                            ENGINEER THE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-white to-accent-500 drop-shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                                IMPOSSIBLE
                            </span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            variants={fadeInUp}
                            className="text-xl text-primary-200 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light border-l-2 border-accent-500/50 pl-6"
                        >
                            Advanced industrial racking solutions designed for the future of logistics. Maximize density, velocity, and safety with precision engineering.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
                        >
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-accent-600 hover:bg-accent-500 text-white min-w-[180px] h-14 text-lg border-none shadow-neon hover:shadow-glow-lg transition-all duration-300 rounded-none skew-x-[-10deg]"
                                >
                                    <span className="skew-x-[10deg] inline-block">Initialize Project</span>
                                </Button>
                            </Link>
                            <Link href="/products">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-accent-500/30 text-accent-400 hover:bg-accent-500/10 backdrop-blur-sm min-w-[180px] h-14 text-lg rounded-none skew-x-[-10deg]"
                                >
                                    <span className="skew-x-[10deg] inline-block flex items-center gap-2">
                                        <IoCube /> View Systems
                                    </span>
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Visual Content - Abstract 3D Representation */}
                    <motion.div
                        className="flex-1 relative w-full h-[500px] hidden lg:block perspective-[1000px]"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        {/* Floating Cards / Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 right-10 w-72 h-80 glass-dark rounded-2xl p-6 border-t border-l border-accent-500/50 z-20"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="h-2 w-20 bg-accent-500/50 rounded-full"></div>
                                <IoFlash className="text-accent-400 text-xl" />
                            </div>
                            <div className="space-y-4">
                                <div className="h-24 w-full bg-gradient-to-br from-primary-800 to-primary-900 rounded-lg border border-white/5 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-accent-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                </div>
                                <div className="flex justify-between text-sm text-primary-300 font-mono">
                                    <span>Efficiency</span>
                                    <span className="text-accent-400">98.5%</span>
                                </div>
                                <div className="w-full bg-primary-900 rounded-full h-1.5 overflow-hidden">
                                    <div className="bg-accent-500 h-full w-[98.5%] shadow-[0_0_10px_rgba(14,165,233,0.8)]"></div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 30, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 left-10 w-64 h-64 glass-dark rounded-2xl p-6 border-b border-r border-secondary-500/50 z-10 backdrop-blur-md"
                        >
                            <div className="text-4xl font-bold text-white mb-2">15+</div>
                            <div className="text-sm text-primary-400 uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Years Ex.</div>
                            <div className="grid grid-cols-2 gap-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="h-12 bg-white/5 rounded-md border border-white/5 hover:border-accent-500/50 transition-colors"></div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-400"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-accent-500 to-transparent"></div>
            </motion.div>
        </section>
    );
}
