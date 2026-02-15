'use client';

import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { IoTrophy, IoShield, IoSettings, IoCarOutline, IoPricetag, IoConstruct } from 'react-icons/io5';
import type { IconType } from 'react-icons';
import companyData from '@/data/company.json';

const iconMap: Record<string, IconType> = {
    award: IoTrophy,
    shield: IoShield,
    settings: IoSettings,
    truck: IoCarOutline,
    dollar: IoPricetag,
    tool: IoConstruct,
};

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-primary-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900 via-primary-950 to-black opacity-80"></div>
            <div className="absolute inset-0 industrial-grid opacity-5 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary-800 border border-primary-700 text-primary-200 text-sm font-semibold tracking-widest uppercase">
                        The Well India Advantage
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Why Choose Us?
                    </h2>
                    <p className="text-lg text-primary-300 max-w-2xl mx-auto leading-relaxed font-light">
                        We deliver excellence through quality products, expert service, and customer satisfaction
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {companyData.whyChooseUs.map((feature, index) => {
                        const Icon = iconMap[feature.icon] || IoTrophy;

                        return (
                            <motion.div key={index} variants={staggerItem}>
                                <div className="glass-dark p-8 h-full rounded-2xl border-t border-white/10 hover:border-accent-500/50 hover:shadow-glow transition-all duration-300 group hover:-translate-y-2">
                                    <div className="w-16 h-16 bg-primary-900/50 border border-primary-700 text-accent-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-500 group-hover:text-white group-hover:border-accent-400 transition-colors duration-300 shadow-soft">
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-primary-300 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
