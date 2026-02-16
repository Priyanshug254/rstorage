'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { IoArrowDown, IoPlayCircleOutline, IoHardwareChip, IoCube, IoFlash } from 'react-icons/io5';

export default function HeroSection() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-white pt-48 pb-24">
            {/* Professional Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-60">
                <div className="absolute inset-0 industrial-grid"></div>
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-accent-50/50 via-primary-50/20 to-transparent"></div>
                <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-accent-100/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={fadeInUp} className="mb-6">
                            <span className="text-industrial-600 font-bold tracking-widest uppercase text-sm flex items-center gap-2 justify-center lg:justify-start">
                                <span className="w-8 h-[2px] bg-industrial-500"></span>
                                India's Leading Racking Manufacturer
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-accent-950 leading-[0.95] mb-8 tracking-tighter font-display"
                        >
                            Engineered <br />
                            <span className="text-industrial-500">Stability.</span> <br />
                            <span className="text-accent-900">Maximum Space.</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-xl md:text-2xl text-primary-700 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium opacity-90"
                        >
                            Custom-engineered racking and storage solutions designed to maximize efficiency,
                            enhance safety, and optimize warehouse space across India.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
                        >
                            <Link href="/products">
                                <Button size="lg" className="min-w-[240px] h-16 text-lg rounded-full bg-accent-900 hover:bg-accent-950 shadow-industrial">
                                    Explore Solutions
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="min-w-[240px] h-16 text-lg rounded-full border-accent-900 text-accent-900 hover:bg-accent-50">
                                    Get Quote
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            variants={fadeInUp}
                            className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start items-center opacity-70"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-accent-700">
                                    <IoHardwareChip />
                                </div>
                                <span className="text-sm font-semibold text-primary-700">ISO Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-accent-700">
                                    <IoCube />
                                </div>
                                <span className="text-sm font-semibold text-primary-700">Premium Steel</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-accent-700">
                                    <IoFlash />
                                </div>
                                <span className="text-sm font-semibold text-primary-700">Pan-India Support</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image / Visual Representation */}
                    <motion.div
                        className="flex-1 w-full relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-industrial-500 opacity-20"></div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-accent-800 opacity-20"></div>

                            {/* Main Industrial Visual (Placeholder/Illustration) */}
                            <div className="aspect-[4/3] bg-primary-50 rounded-lg overflow-hidden border border-primary-100 shadow-industrial relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent-900/10 to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-full h-full industrial-grid opacity-20"></div>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                                        <div className="w-20 h-20 bg-accent-700 rounded-xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-12 transition-transform duration-500">
                                            <IoCube className="text-4xl" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-accent-900 mb-2">Precision Engineering</h3>
                                        <p className="text-primary-500 max-w-xs">Visualizing the next generation of industrial storage infrastructure.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Counter */}
                            <motion.div
                                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-hard border border-primary-50 hidden md:block"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="text-3xl font-bold text-accent-800">1,500+</div>
                                <div className="text-sm font-semibold text-industrial-600 uppercase tracking-wider">Projects Delivered</div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-[1px] h-12 bg-accent-800"></div>
            </motion.div>
        </section>
    );
}
