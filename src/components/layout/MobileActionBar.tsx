'use client';

import Link from 'next/link';
import { IoCall, IoLogoWhatsapp, IoDocument } from 'react-icons/io5';

export default function MobileActionBar() {
    const handleCall = () => {
        window.location.href = 'tel:+919999999999';
    };

    const handleWhatsApp = () => {
        const phone = '919999999999';
        const message = encodeURIComponent('Hello, I am interested in your storage rack products.');
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    };

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-neutral-200 shadow-hard">
            <div className="grid grid-cols-3 gap-2 p-2">
                <button
                    onClick={handleCall}
                    className="flex flex-col items-center justify-center py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-smooth"
                >
                    <IoCall size={24} />
                    <span className="text-xs mt-1 font-medium">Call Now</span>
                </button>

                <button
                    onClick={handleWhatsApp}
                    className="flex flex-col items-center justify-center py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-smooth"
                >
                    <IoLogoWhatsapp size={24} />
                    <span className="text-xs mt-1 font-medium">WhatsApp</span>
                </button>

                <Link
                    href="/contact"
                    className="flex flex-col items-center justify-center py-3 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-smooth"
                >
                    <IoDocument size={24} />
                    <span className="text-xs mt-1 font-medium">Get Quote</span>
                </Link>
            </div>
        </div>
    );
}
