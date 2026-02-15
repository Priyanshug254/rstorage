'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { IoMail, IoCall, IoLocation, IoLogoWhatsapp, IoTime, IoPerson, IoDocument } from 'react-icons/io5';
import companyData from '@/data/company.json';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        productInterest: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        alert('Thank you for your inquiry! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
            productInterest: ''
        });
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: IoLocation,
            title: 'Visit Us',
            details: [`${companyData.contact.address}`, `${companyData.contact.city}, ${companyData.contact.state} - ${companyData.contact.pincode}`]
        },
        {
            icon: IoCall,
            title: 'Call Us',
            details: [companyData.contact.phone],
            action: () => window.location.href = `tel:${companyData.contact.phone}`
        },
        {
            icon: IoMail,
            title: 'Email Us',
            details: [companyData.contact.email],
            action: () => window.location.href = `mailto:${companyData.contact.email}`
        },
        {
            icon: IoTime,
            title: 'Business Hours',
            details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: Closed']
        }
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
                            Get In Touch
                        </h1>
                        <p className="text-xl text-white/90">
                            Have a question or need a custom storage solution? We're here to help!
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <Card className="p-8">
                            <h2 className="text-2xl font-bold text-primary-900 mb-6">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <Input
                                    label="Full Name *"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                    icon={<IoPerson />}
                                    placeholder="John Doe"
                                />

                                <Input
                                    label="Email Address *"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                    icon={<IoMail />}
                                    placeholder="john@example.com"
                                />

                                <Input
                                    label="Phone Number *"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                    icon={<IoCall />}
                                    placeholder="+91 98765 43210"
                                />

                                <Input
                                    label="Company Name"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    fullWidth
                                    placeholder="Your Company"
                                />

                                <div className="w-full">
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        Product Interest
                                    </label>
                                    <select
                                        name="productInterest"
                                        value={formData.productInterest}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-input border-2 border-neutral-200 hover:border-neutral-300 focus:border-accent-600 focus:shadow-glow transition-smooth outline-none"
                                    >
                                        <option value="">Select a product category</option>
                                        <option value="industrial-storage-rack">Industrial Storage Rack</option>
                                        <option value="heavy-duty-rack">Heavy Duty Rack</option>
                                        <option value="mezzanine-floor">Mezzanine Floor</option>
                                        <option value="pallet-rack">Pallet Rack</option>
                                        <option value="display-rack">Display Rack</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="w-full">
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-input border-2 border-neutral-200 hover:border-neutral-300 focus:border-accent-600 focus:shadow-glow transition-smooth outline-none resize-none"
                                        placeholder="Tell us about your storage requirements..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    fullWidth
                                    isLoading={isSubmitting}
                                    icon={<IoDocument />}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </Card>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-primary-900 mb-6">Contact Information</h2>

                            <motion.div
                                className="space-y-4"
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                            >
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon;
                                    return (
                                        <motion.div key={index} variants={staggerItem}>
                                            <Card
                                                glass
                                                className="p-6 cursor-pointer"
                                                hover={!!info.action}
                                                onClick={info.action}
                                            >
                                                <div className="flex items-start space-x-4">
                                                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                                                        <Icon size={24} className="text-white" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-primary-900 mb-2">{info.title}</h3>
                                                        {info.details.map((detail, idx) => (
                                                            <p key={idx} className="text-neutral-600 text-sm">
                                                                {detail}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Card>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>

                            {/* Quick Actions */}
                            <div className="mt-8">
                                <h3 className="font-semibold text-primary-900 mb-4">Quick Actions</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={() => window.open(`https://wa.me/${companyData.contact.phone.replace(/\D/g, '')}`, '_blank')}
                                        className="flex items-center justify-center space-x-2 px-6 py-4 bg-green-500 text-white rounded-button font-semibold hover:bg-green-600 transition-smooth"
                                    >
                                        <IoLogoWhatsapp size={20} />
                                        <span>WhatsApp</span>
                                    </button>
                                    <button
                                        onClick={() => window.location.href = `tel:${companyData.contact.phone}`}
                                        className="flex items-center justify-center space-x-2 px-6 py-4 bg-primary-500 text-white rounded-button font-semibold hover:bg-primary-600 transition-smooth"
                                    >
                                        <IoCall size={20} />
                                        <span>Call Now</span>
                                    </button>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <Card className="p-0 overflow-hidden mt-8">
                                <div className="aspect-video bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <IoLocation size={48} className="mx-auto mb-2 opacity-50" />
                                        <p className="text-sm opacity-75">Map integration coming soon</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
