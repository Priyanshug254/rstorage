'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { fadeInUp } from '@/lib/animations';
import { IoCheckmarkCircle } from 'react-icons/io5';

export default function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden border-t border-accent-500/30">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-accent-900 opacity-90"></div>
            <div className="absolute inset-0 industrial-grid opacity-10 mix-blend-overlay"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight">
                        Ready to Optimize Your Space?
                    </h2>
                    <p className="text-xl text-primary-200 mb-10 max-w-2xl mx-auto font-light">
                        Our experts will visit your facility, assess your storage needs, and provide detailed CAD drawings and load calculations.
                    </p>

                    {/* Benefits */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
                        {[
                            'Free Site Visit',
                            'Custom Design',
                            'Competitive Pricing'
                        ].map((benefit) => (
                            <div key={benefit} className="flex items-center space-x-2 text-white bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                                <IoCheckmarkCircle size={20} className="text-accent-400" />
                                <span className="font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    <Button
                        variant="primary"
                        size="lg"
                        className="bg-accent-600 hover:bg-accent-500 text-white shadow-glow-lg border-none text-lg h-14 px-8"
                    >
                        Request Free Inspection
                    </Button>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-secondary-500/20 rounded-full blur-[100px]"></div>
        </section>
    );
}
