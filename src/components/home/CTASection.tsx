'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { fadeInUp } from '@/lib/animations';
import { IoCheckmarkCircle } from 'react-icons/io5';

export default function CTASection() {
    return (
        <section className="py-32 relative overflow-hidden bg-accent-950">
            {/* Background Texture & Spotlight */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 industrial-grid opacity-[0.15]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.3)_0%,transparent_70%)]"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Professional Background Elements */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-accent-900/40 via-transparent to-transparent"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="inline-block mb-6 px-4 py-1 rounded-full bg-industrial-500/10 border border-industrial-500/30 text-industrial-400 text-sm font-bold tracking-widest uppercase">
                        Consultation & Design
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-8 tracking-tighter leading-[1.1]">
                        Architecting <span className="text-industrial-500">Industry Excellence.</span>
                    </h2>

                    <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto font-normal opacity-90">
                        Our engineering team provides comprehensive site assessments, custom CAD layouts,
                        and precise load calculations for every project.
                    </p>

                    {/* Benefits */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
                        {[
                            'Free Technical Audit',
                            'Custom CAD & Layouts',
                            'Safety Certifications',
                            'Turnkey Installation'
                        ].map((benefit) => (
                            <div key={benefit} className="flex items-center space-x-3 text-white bg-accent-900/40 backdrop-blur-sm px-6 py-3 rounded-card border border-accent-800/50 shadow-lg">
                                <IoCheckmarkCircle size={22} className="text-industrial-500" />
                                <span className="font-bold text-xs uppercase tracking-wider">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button
                            variant="primary"
                            size="lg"
                            className="bg-industrial-500 hover:bg-industrial-600 text-white min-w-[240px] h-14 text-lg"
                        >
                            Schedule Free Inspection
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-white text-white hover:bg-white hover:text-accent-950 min-w-[240px] h-14 text-lg"
                        >
                            Download Catalogue
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
