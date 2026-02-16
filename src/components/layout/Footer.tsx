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
        <footer className="bg-accent-950 text-white relative overflow-hidden border-t border-accent-900">
            {/* Background Pattern */}
            <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none"></div>

            {/* Gradient Glow */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent-800/20 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Main Footer */}
            <div className="container mx-auto px-6 md:px-12 py-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-8">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-accent-700 shadow-md">
                                <span className="font-bold text-xl">WI</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white font-display">Well India</h3>
                                <p className="text-xs text-primary-400 uppercase tracking-widest font-bold">Racking System</p>
                            </div>
                        </div>
                        <p className="text-primary-300 text-base mb-8 leading-relaxed font-medium opacity-90 max-w-xs">
                            {companyData.tagline}
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: IoLogoFacebook, href: '#' },
                                { icon: IoLogoTwitter, href: '#' },
                                { icon: IoLogoLinkedin, href: '#' }
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} className="w-10 h-10 bg-accent-900 rounded-lg flex items-center justify-center hover:bg-industrial-500 text-white transition-all duration-300 border border-accent-800 shadow-sm">
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold text-industrial-500 mb-8 uppercase tracking-[0.2em] relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-industrial-500/30"></span>
                        </h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-primary-100 hover:text-industrial-400 transition-all text-sm font-bold flex items-center gap-3 group"
                                    >
                                        <span className="w-2 h-0.5 bg-industrial-500 rounded-full opacity-30 group-hover:opacity-100 transition-opacity"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Categories */}
                    <div>
                        <h4 className="text-sm font-bold text-industrial-500 mb-8 uppercase tracking-[0.2em] relative inline-block">
                            Key Solutions
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-industrial-500/30"></span>
                        </h4>
                        <ul className="space-y-4">
                            {productCategories.slice(0, 6).map((category) => (
                                <li key={category}>
                                    <Link
                                        href="/products"
                                        className="text-primary-100 hover:text-industrial-400 transition-all text-sm font-bold flex items-center gap-3 group"
                                    >
                                        <span className="w-2 h-0.5 bg-industrial-500 rounded-full opacity-30 group-hover:opacity-100 transition-opacity"></span>
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-bold text-industrial-500 mb-8 uppercase tracking-[0.2em] relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-industrial-500/30"></span>
                        </h4>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4 group">
                                <div className="mt-1 w-10 h-10 rounded-lg bg-accent-900 border border-accent-800 flex items-center justify-center flex-shrink-0 group-hover:bg-industrial-500/20 transition-colors shadow-sm">
                                    <IoLocation className="text-industrial-500" size={20} />
                                </div>
                                <span className="text-white text-sm leading-relaxed font-bold">
                                    {companyData.contact.address}, {companyData.contact.city}, {companyData.contact.state} - {companyData.contact.pincode}
                                </span>
                            </li>
                            <li className="flex items-center space-x-4 group">
                                <div className="w-10 h-10 rounded-lg bg-accent-900 border border-accent-800 flex items-center justify-center flex-shrink-0 group-hover:bg-industrial-500 transition-all shadow-sm">
                                    <IoCall className="text-industrial-500 group-hover:text-white" size={20} />
                                </div>
                                <span className="text-white text-sm font-black tracking-wide">{companyData.contact.phone}</span>
                            </li>
                            <li className="flex items-center space-x-4 group">
                                <div className="w-10 h-10 rounded-lg bg-accent-900 border border-accent-800 flex items-center justify-center flex-shrink-0 group-hover:bg-industrial-500 transition-all shadow-sm">
                                    <IoMail className="text-industrial-500 group-hover:text-white" size={20} />
                                </div>
                                <span className="text-white text-sm font-black tracking-wide">{companyData.contact.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-accent-900 bg-accent-950/50">
                <div className="container mx-auto px-6 md:px-12 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-primary-500 text-xs font-bold uppercase tracking-widest">
                            © {currentYear} Well India Racking System. All rights reserved.
                        </p>
                        <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest">
                            <Link href="/privacy" className="text-primary-400 hover:text-industrial-500 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-primary-400 hover:text-industrial-500 transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
