'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '@/components/ui/Card';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [activeCategory, setActiveCategory] = useState<string>('all');

    const faqs: FAQItem[] = [
        {
            category: 'General',
            question: 'What types of storage racks do you manufacture?',
            answer: 'We manufacture a comprehensive range of storage solutions including Industrial Storage Racks, Heavy Duty Racks, Pallet Racks, Mezzanine Floors, Display Racks, Slotted Angle Racks, and many more specialized storage systems for various industries.'
        },
        {
            category: 'General',
            question: 'Do you provide customized storage solutions?',
            answer: 'Yes, we specialize in custom storage solutions tailored to your specific requirements. Our team of experts will visit your site, assess your needs, and design a solution that maximizes your storage space and efficiency.'
        },
        {
            category: 'General',
            question: 'What areas do you serve?',
            answer: 'We provide our products and services across India. We offer PAN India delivery and installation services for all our storage solutions.'
        },
        {
            category: 'Products',
            question: 'What is the load capacity of your heavy-duty racks?',
            answer: 'Our heavy-duty racks are designed to handle varying load capacities depending on the model and configuration. Capacities range from 500 kg to 5000 kg per level. We can customize the load capacity based on your specific requirements.'
        },
        {
            category: 'Products',
            question: 'What materials are used in manufacturing?',
            answer: 'We use high-quality MS (Mild Steel) and SS (Stainless Steel) materials for our racks. All materials are sourced from reputed manufacturers and undergo strict quality checks to ensure durability and strength.'
        },
        {
            category: 'Products',
            question: 'Are your racks adjustable?',
            answer: 'Yes, most of our rack systems feature adjustable shelving that allows you to modify shelf heights according to your storage needs. This flexibility ensures optimal space utilization.'
        },
        {
            category: 'Installation',
            question: 'Do you provide installation services?',
            answer: 'Yes, we provide complete installation services by our trained professionals. Our team ensures proper assembly and installation according to safety standards and your specific requirements.'
        },
        {
            category: 'Installation',
            question: 'How long does installation take?',
            answer: 'Installation time varies depending on the size and complexity of the project. A typical warehouse setup can take anywhere from 2-7 days. We provide a detailed timeline during the consultation phase.'
        },
        {
            category: 'Installation',
            question: 'Do I need to prepare the site before installation?',
            answer: 'Basic site preparation includes ensuring a level floor, adequate space for installation, and clear access to the installation area. Our team will provide specific requirements during the site survey.'
        },
        {
            category: 'Pricing',
            question: 'How do I get a quote?',
            answer: 'You can request a quote by filling out our contact form, calling us directly, or messaging us on WhatsApp. Our team will respond promptly with a detailed quotation based on your requirements.'
        },
        {
            category: 'Pricing',
            question: 'Do you offer bulk discounts?',
            answer: 'Yes, we offer competitive pricing for bulk orders. Please contact our sales team with your requirements for a customized quote with volume discounts.'
        },
        {
            category: 'Pricing',
            question: 'What payment methods do you accept?',
            answer: 'We accept various payment methods including bank transfers, cheques, and online payments. Payment terms can be discussed during the quotation process.'
        },
        {
            category: 'Warranty',
            question: 'Do your products come with a warranty?',
            answer: 'Yes, all our products come with a manufacturer\'s warranty. The warranty period varies by product type. We also offer extended warranty options and maintenance contracts.'
        },
        {
            category: 'Warranty',
            question: 'What does the warranty cover?',
            answer: 'Our warranty covers manufacturing defects and structural issues. It does not cover damage due to misuse, overloading, or natural disasters. Detailed warranty terms are provided with each purchase.'
        },
    ];

    const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category)))];

    const filteredFAQs = activeCategory === 'all'
        ? faqs
        : faqs.filter(faq => faq.category === activeCategory);

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
                            Frequently Asked Questions
                        </h1>
                        <p className="text-xl text-white/90">
                            Find answers to common questions about our products and services
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Category Filter */}
                    <motion.div
                        className="flex flex-wrap gap-3 mb-12 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-button font-medium transition-smooth ${activeCategory === category
                                        ? 'bg-gradient-accent text-white shadow-glow'
                                        : 'bg-white text-neutral-700 border-2 border-neutral-200 hover:border-accent-600'
                                    }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </motion.div>

                    {/* FAQ List */}
                    <motion.div
                        className="space-y-4"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {filteredFAQs.map((faq, index) => (
                            <motion.div key={index} variants={staggerItem}>
                                <Card className="overflow-hidden">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full p-6 text-left flex items-center justify-between hover:bg-neutral-50 transition-smooth"
                                    >
                                        <div className="flex-1 pr-4">
                                            <span className="text-xs font-medium text-accent-600 mb-2 block">
                                                {faq.category}
                                            </span>
                                            <h3 className="text-lg font-semibold text-primary-900">
                                                {faq.question}
                                            </h3>
                                        </div>
                                        <div className="flex-shrink-0">
                                            {openIndex === index ? (
                                                <IoChevronUp size={24} className="text-accent-600" />
                                            ) : (
                                                <IoChevronDown size={24} className="text-neutral-400" />
                                            )}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 text-neutral-700 leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Still Have Questions CTA */}
                    <motion.div
                        className="mt-16 text-center glass p-12 rounded-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-primary-900 mb-4">
                            Still Have Questions?
                        </h2>
                        <p className="text-neutral-600 mb-6">
                            Can't find the answer you're looking for? Our team is here to help!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <button className="px-8 py-4 bg-gradient-accent text-white rounded-button font-semibold hover:shadow-glow-lg transition-smooth">
                                    Contact Us
                                </button>
                            </a>
                            <a href="tel:+919999999999">
                                <button className="px-8 py-4 border-2 border-accent-600 text-accent-600 rounded-button font-semibold hover:bg-accent-600 hover:text-white transition-smooth">
                                    Call Now
                                </button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
