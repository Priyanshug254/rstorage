import { Metadata } from 'next';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import companyData from '@/data/company.json';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { IoConstruct, IoCreate, IoStatsChart, IoBuild, IoShieldCheckmark, IoPeople } from 'react-icons/io5';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Our Services - Well India Racking System',
    description: 'Comprehensive industrial storage services including site inspection, custom design, manufacturing, installation, and maintenance.',
};

const iconMap = {
    'inspection': IoStatsChart,
    'design': IoCreate,
    'manufacturing': IoConstruct,
    'installation': IoBuild,
    'maintenance': IoShieldCheckmark,
    'consultation': IoPeople,
};

export default function ServicesPage() {
    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                >
                    <h1 className="text-h1 font-display text-primary-900 mb-6">Our Services</h1>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        We don't just sell racks; we provide end-to-end storage solutions. From initial planning to final installation and maintenance, we are with you every step of the way.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {companyData.services.map((service, index) => {
                        const Icon = iconMap[service.icon as keyof typeof iconMap] || IoConstruct;

                        return (
                            <motion.div
                                key={service.id}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card hover className="h-full p-8 flex flex-col items-start">
                                    <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary-900 mb-4">{service.title}</h3>
                                    <p className="text-neutral-600 mb-6 flex-grow">{service.description}</p>
                                    <Link href="/contact">
                                        <Button variant="outline" size="sm">Enquire Now</Button>
                                    </Link>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <motion.div
                    className="bg-primary-900 rounded-3xl p-12 text-center text-white relative overflow-hidden"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 industrial-grid pointer-events-none"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Warehouse?</h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Get a free consultation and customized quote for your storage requirements today.
                        </p>
                        <Link href="/contact">
                            <Button variant="primary" size="lg">Get Free Quote</Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
