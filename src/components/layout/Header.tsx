'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { IoMenu, IoClose } from 'react-icons/io5';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'Services', href: '/services' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-primary-100 py-3'
                : 'bg-transparent py-6'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 md:px-12 relative z-50">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-4 group">
                        <div className="w-14 h-14 bg-accent-700 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-accent-600 group-hover:rotate-3 transition-all duration-500">
                            <span className="text-white font-black text-2xl tracking-tighter">WI</span>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className={`text-2xl font-black transition-colors leading-tight ${isScrolled || isMobileMenuOpen ? 'text-accent-950' : 'text-accent-950'}`}>Well India</h1>
                            <div className="flex items-center gap-1.5">
                                <span className="h-px w-3 bg-industrial-500"></span>
                                <p className="text-[10px] text-accent-700 uppercase tracking-[0.3em] font-black italic">Racking System</p>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`group relative font-bold transition-all text-xs uppercase tracking-[0.15em] ${isScrolled ? 'text-primary-800 hover:text-accent-600' : 'text-primary-900 hover:text-accent-600'}`}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-industrial-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Button variant="primary" size="md" className="bg-accent-900 hover:bg-accent-800 text-white border-none shadow-industrial px-8 rounded-full">
                            Get Quote
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden transition-colors ${isScrolled || isMobileMenuOpen ? 'text-accent-950' : 'text-accent-950'}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.nav
                        className="md:hidden mt-4 pb-6 border-t border-primary-100 pt-6 bg-white rounded-xl absolute left-6 right-6 shadow-hard p-6"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block py-3 text-primary-700 hover:text-accent-700 font-bold transition-colors border-b border-primary-50 last:border-0"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-6">
                            <Button variant="primary" size="md" fullWidth className="bg-accent-600">
                                Get Quote
                            </Button>
                        </div>
                    </motion.nav>
                )}
            </div>
        </motion.header >
    );
}
