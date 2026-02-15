'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { IoTrophy, IoShield, IoSettings, IoCarOutline, IoPricetag, IoConstruct, IoPeople, IoRibbon } from 'react-icons/io5';
import companyData from '@/data/company.json';

export default function AboutPage() {
    const stats = [
        { label: 'Years of Experience', value: `${new Date().getFullYear() - 2013}+`, icon: IoTrophy },
        { label: 'Happy Clients', value: '500+', icon: IoPeople },
        { label: 'Projects Completed', value: '1000+', icon: IoRibbon },
        { label: 'Products Range', value: '18+', icon: IoSettings },
    ];

    return (
        <div className="pt-24 pb-20">
            {/* Hero Section */}
            <section className="gradient-bg py-20 mb-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-h1 font-display text-white mb-6">
                            About {companyData.name}
                        </h1>
                        <p className="text-xl text-white/90">
                            {companyData.tagline}
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4">
                {/* Company Story */}
                <motion.section
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-h2 font-display text-primary-900 mb-6 text-center">Our Story</h2>
                        <div className="text-lg text-neutral-700 space-y-4">
                            <p>
                                Established in {companyData.established}, {companyData.name} has grown to become one of India's leading manufacturers and suppliers of industrial storage solutions. With over {new Date().getFullYear() - 2013} years of experience, we have successfully delivered innovative racking and storage systems to warehouses, supermarkets, and commercial establishments across the country.
                            </p>
                            <p>
                                Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for businesses seeking reliable and efficient storage solutions. We combine cutting-edge manufacturing techniques with premium materials to deliver products that stand the test of time.
                            </p>
                            <p>
                                {companyData.description}
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Stats */}
                <motion.section
                    className="mb-20"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div key={index} variants={staggerItem}>
                                    <Card glass className="p-6 text-center">
                                        <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                                            <Icon size={24} className="text-white" />
                                        </div>
                                        <div className="text-3xl font-bold text-primary-900 mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-neutral-600">
                                            {stat.label}
                                        </div>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.section>

                {/* Why Choose Us */}
                <motion.section
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-h2 font-display text-primary-900 mb-12 text-center">Why Choose Us</h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {companyData.whyChooseUs.map((item, index) => {
                            const iconMap: { [key: string]: any } = {
                                award: IoTrophy,
                                shield: IoShield,
                                settings: IoSettings,
                                truck: IoCarOutline,
                                dollar: IoPricetag,
                                tool: IoConstruct,
                            };
                            const Icon = iconMap[item.icon] || IoTrophy;

                            return (
                                <motion.div key={index} variants={staggerItem}>
                                    <Card glass className="p-6 h-full">
                                        <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                                            <Icon size={28} className="text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-primary-900 mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-neutral-600">
                                            {item.description}
                                        </p>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.section>

                {/* Core Features */}
                <motion.section
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-h2 font-display text-primary-900 mb-12 text-center">Our Capabilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {companyData.features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-4 glass p-6 rounded-card">
                                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <IoSettings className="text-accent-600" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary-900 mb-1">{feature}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* CTA */}
                <motion.section
                    className="text-center glass p-12 rounded-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-h2 font-display text-primary-900 mb-4">
                        Ready to Transform Your Storage Space?
                    </h2>
                    <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                        Let our experts help you design the perfect storage solution for your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact">
                            <button className="px-8 py-4 bg-gradient-accent text-white rounded-button font-semibold hover:shadow-glow-lg transition-smooth">
                                Get Free Consultation
                            </button>
                        </a>
                        <a href="/products">
                            <button className="px-8 py-4 border-2 border-accent-600 text-accent-600 rounded-button font-semibold hover:bg-accent-600 hover:text-white transition-smooth">
                                Browse Products
                            </button>
                        </a>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
