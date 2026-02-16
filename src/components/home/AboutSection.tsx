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
        <section className="relative bg-white pt-24 pb-24 overflow-hidden" id="about">
            {/* Background Pattern */}
            <div className="absolute inset-0 industrial-grid opacity-5 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary-100 border border-primary-200 text-accent-800 text-sm font-bold tracking-wide uppercase">
                            Leading Manufacturer Since 2013
                        </motion.div>

                        <motion.h2
                            variants={fadeInUp}
                            className="text-4xl md:text-6xl font-black text-accent-950 leading-[1.1] mb-8 tracking-tighter font-display"
                        >
                            Optimizing Your <br />
                            <span className="text-industrial-500 italic">Operational Core</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg text-primary-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
                        >
                            Well India Racking System specializes in manufacturing high-quality heavy-duty racks,
                            mezzanine floors, and premium display units. We prioritize safety,
                            durability, and space efficiency in every system we engineer.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12"
                        >
                            <Link href="/about">
                                <Button size="lg" className="min-w-[200px] rounded-full bg-accent-900">
                                    Our Story
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="min-w-[200px] rounded-full">
                                    Contact Us
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            variants={fadeInUp}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left border-t border-primary-100 pt-10"
                        >
                            {TRUST_BADGES.map((badge, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-primary-700 font-semibold">
                                    <div className="w-10 h-10 rounded-lg bg-accent-50 flex items-center justify-center text-accent-800 border border-accent-100 shadow-sm">
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
                        <div className="relative">
                            {/* Decorative Frame */}
                            <div className="absolute -top-4 -right-4 w-48 h-48 border-t-2 border-r-2 border-industrial-200 -z-10"></div>
                            <div className="absolute -bottom-4 -left-4 w-48 h-48 border-b-2 border-l-2 border-accent-200 -z-10"></div>

                            <div className="rounded-lg overflow-hidden shadow-industrial border border-primary-100 group relative">
                                <div className="aspect-[4/3] bg-primary-50 relative">
                                    <div className="absolute inset-0 bg-accent-800/10 z-10 mix-blend-overlay"></div>
                                    <img
                                        src="/images/hero-warehouse.jpg"
                                        alt="Industrial Racking Systems"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                {/* Professional Stat Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-accent-950/90 to-transparent z-20">
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <div className="text-4xl font-bold text-white mb-1">10+</div>
                                            <div className="text-xs text-white/70 font-bold uppercase tracking-widest">Years Industry Expertise</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-4xl font-bold text-industrial-400 mb-1">500+</div>
                                            <div className="text-xs text-white/70 font-bold uppercase tracking-widest">Clients Nationwide</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
