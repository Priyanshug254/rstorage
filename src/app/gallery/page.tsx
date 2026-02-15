import { Metadata } from 'next';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Project Gallery - Well India Racking System',
    description: 'View our completed industrial storage projects, warehouse racking installations, and retail display setups.',
};

export default function GalleryPage() {
    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                >
                    <h1 className="text-h1 font-display text-primary-900 mb-6">Project Gallery</h1>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        A glimpse into our successful installations across warehouses, supermarkets, and industrial facilities.
                    </p>
                </motion.div>

                <div className="flex flex-col items-center justify-center py-20 bg-neutral-50 rounded-3xl border border-neutral-200 border-dashed">
                    <div className="w-20 h-20 bg-neutral-200 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-10 h-10 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-800 mb-2">Gallery Coming Soon</h3>
                    <p className="text-neutral-500 mb-8 max-w-md text-center">
                        We are currently curating high-quality images of our recent projects. Check back soon for updates.
                    </p>
                    <Link href="/products">
                        <Button variant="primary">Browse Products</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
