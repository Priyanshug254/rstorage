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
                ? 'bg-primary-950/80 backdrop-blur-md shadow-lg border-b border-white/5 py-3'
                : 'bg-transparent py-6'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent-600 to-accent-800 rounded-lg flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
                            <span className="text-white font-bold text-xl">WI</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors">Well India</h1>
                            <p className="text-xs text-primary-300 uppercase tracking-widest">Racking System</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-primary-200 hover:text-accent-400 font-medium transition-colors text-sm uppercase tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button variant="primary" size="md" className="bg-accent-600 hover:bg-accent-500 text-white border-none shadow-neon">
                            Get Quote
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white hover:text-accent-400 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.nav
                        className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 bg-primary-950/95 backdrop-blur-xl rounded-xl p-4 absolute left-4 right-4 shadow-2xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block py-3 text-primary-200 hover:text-accent-400 font-medium transition-colors border-b border-white/5 last:border-0"
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
        </motion.header>
    );
}
