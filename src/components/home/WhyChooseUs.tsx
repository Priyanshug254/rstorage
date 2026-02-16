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
        <section className="py-24 bg-white relative overflow-hidden" id="features">
            {/* Background Pattern */}
            <div className="absolute inset-0 industrial-grid opacity-5 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary-50 border border-primary-100 text-accent-700 text-sm font-bold tracking-widest uppercase">
                        The Well India Advantage
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-accent-950 mb-6 font-display tracking-tight">
                        The Advantage <span className="text-industrial-500 cursor-default uppercase text-sm tracking-[0.4em] block mt-2 opacity-50">Industrial Grade</span>
                    </h2>
                    <p className="text-lg text-primary-600 max-w-2xl mx-auto leading-relaxed font-normal">
                        We deliver industrial excellence through certified quality,
                        innovative design, and end-to-end operational support.
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
                                <div className="bg-white p-10 h-full rounded-xl border border-primary-100 hover:border-accent-200 shadow-medium hover:shadow-industrial transition-all duration-500 group hover:-translate-y-3 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-accent-700 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
                                    <div className="w-16 h-16 bg-accent-50 text-accent-700 rounded-xl flex items-center justify-center mb-8 group-hover:bg-accent-700 group-hover:text-white transition-all duration-500 shadow-sm border border-accent-100">
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black text-accent-950 mb-4 group-hover:text-accent-700 transition-colors font-display tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-primary-700 leading-relaxed text-sm font-bold opacity-80">
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
