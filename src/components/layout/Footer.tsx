'use client';

import Link from 'next/link';
import { IoMail, IoCall, IoLocation, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5';
import companyData from '@/data/company.json';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const productCategories = [
        'Industrial Storage Rack',
        'Heavy Duty Racks',
        'Mezzanine Floor',
        'Pallet Rack',
        'Display Rack',
        'Slotted Angle Racks'
    ];

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
    ];

    return (
        <footer className="bg-black text-white relative overflow-hidden border-t border-white/5">
            {/* Background Pattern */}
            <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none"></div>
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-primary-900 border border-primary-700 rounded-lg flex items-center justify-center text-accent-500">
                                <span className="font-bold text-xl">WI</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Well India</h3>
                                <p className="text-sm text-primary-400">Racking System</p>
                            </div>
                        </div>
                        <p className="text-primary-300 text-sm mb-6 leading-relaxed">
                            {companyData.tagline}
                        </p>
                        <div className="flex space-x-3">
                            <a href="#" className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center hover:bg-accent-600 hover:text-white text-primary-400 transition-colors border border-primary-800">
                                <IoLogoFacebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center hover:bg-accent-600 hover:text-white text-primary-400 transition-colors border border-primary-800">
                                <IoLogoTwitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center hover:bg-accent-600 hover:text-white text-primary-400 transition-colors border border-primary-800">
                                <IoLogoLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 border-b border-accent-500/30 pb-2 inline-block">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-primary-300 hover:text-accent-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Categories */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 border-b border-accent-500/30 pb-2 inline-block">Our Products</h4>
                        <ul className="space-y-3">
                            {productCategories.map((category) => (
                                <li key={category}>
                                    <Link
                                        href="/products"
                                        className="text-primary-300 hover:text-accent-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 border-b border-accent-500/30 pb-2 inline-block">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 group">
                                <div className="mt-1 w-8 h-8 rounded-full bg-primary-900 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500/20 transition-colors">
                                    <IoLocation className="text-accent-500" size={16} />
                                </div>
                                <span className="text-primary-300 text-sm leading-relaxed">
                                    {companyData.contact.address}, {companyData.contact.city}, {companyData.contact.state} - {companyData.contact.pincode}
                                </span>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <div className="w-8 h-8 rounded-full bg-primary-900 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500/20 transition-colors">
                                    <IoCall className="text-accent-500" size={16} />
                                </div>
                                <span className="text-primary-300 text-sm">{companyData.contact.phone}</span>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <div className="w-8 h-8 rounded-full bg-primary-900 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500/20 transition-colors">
                                    <IoMail className="text-accent-500" size={16} />
                                </div>
                                <span className="text-primary-300 text-sm">{companyData.contact.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 bg-black/50">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-primary-500 text-sm">
                            © {currentYear} Well India Racking System. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link href="/privacy" className="text-primary-400 hover:text-accent-500 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-primary-400 hover:text-accent-500 transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
