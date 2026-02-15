'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Link from 'next/link';
import { fadeInUp, staggerContainer, slideLeft, slideRight } from '@/lib/animations';
import { IoShieldCheckmark, IoTime, IoWallet } from 'react-icons/io5';

const TRUST_BADGES = [
    { icon: IoShieldCheckmark, text: "Premium Quality Steel" },
    { icon: IoTime, text: "Quick Installation" },
    { icon: IoWallet, text: "Cost-Effective Solutions" },
];

export default function AboutSection() {
    return (
        <section className="relative bg-primary-950 pt-24 pb-24 overflow-hidden" id="about">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-900 to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-900/50 border border-primary-700 text-accent-400 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
                            Since 2013
                        </motion.div>

                        <motion.h2
                            variants={fadeInUp}
                            className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
                        >
                            Transforming Industrial Spaces with <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Intelligent Racking</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg text-primary-200 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
                        >
                            Well India Racking System specializes in manufacturing high-quality heavy-duty racks, mezzanine floors, and display units. We don't just sell steel; we optimize your operational efficiency.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                        >
                            <Link href="/about">
                                <Button size="lg" variant="primary" className="bg-white text-primary-950 hover:bg-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.3)] border-none">
                                    Our Story
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="border-primary-700 text-primary-200 hover:bg-primary-800 hover:text-white hover:border-white/50">
                                    Contact Us
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            variants={fadeInUp}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left border-t border-primary-800 pt-8"
                        >
                            {TRUST_BADGES.map((badge, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-primary-100 font-medium">
                                    <div className="w-10 h-10 rounded-full bg-primary-800/50 flex items-center justify-center text-accent-400 border border-primary-700">
                                        <badge.icon className="text-xl" />
                                    </div>
                                    <span className="text-sm leading-tight">{badge.text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className="flex-1 relative w-full max-w-xl lg:max-w-none"
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 group">
                            <div className="absolute inset-0 bg-accent-500/10 z-10 mix-blend-overlay"></div>
                            <div className="aspect-[4/3] bg-primary-900 relative">
                                {/* Placeholder Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center">
                                    <span className="text-primary-700 font-bold uppercase tracking-widest text-2xl">About Us Image</span>
                                </div>
                                <img
                                    src="/images/hero-warehouse.jpg"
                                    alt="Industrial Warehouse Storage"
                                    className="object-cover w-full h-full opacity-0 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                    onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                                />
                            </div>

                            {/* Floating Stats Card */}
                            <motion.div
                                variants={slideRight}
                                className="absolute -bottom-6 -left-6 z-20 glass-dark p-6 rounded-xl border border-accent-500/30 hidden md:block"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="text-left">
                                        <div className="text-4xl font-bold text-white leading-none mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">500+</div>
                                        <div className="text-xs text-accent-400 font-bold uppercase tracking-wider">Projects Completed</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
