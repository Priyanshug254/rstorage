'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoLogoWhatsapp } from 'react-icons/io5';

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show button after a short delay
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleWhatsAppClick = () => {
        const phone = '919999999999'; // Replace with actual number
        const message = encodeURIComponent('Hello, I am interested in your storage rack products. Please share more details.');
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-hard hover:shadow-glow-lg transition-smooth group"
                    onClick={handleWhatsAppClick}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <IoLogoWhatsapp size={32} className="text-white" />

                    {/* Pulse Animation */}
                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>

                    {/* Tooltip */}
                    <div className="absolute right-full mr-3 px-3 py-2 bg-white rounded-lg shadow-medium opacity-0 group-hover:opacity-100 transition-smooth whitespace-nowrap">
                        <p className="text-sm font-medium text-neutral-900">Chat with us!</p>
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
