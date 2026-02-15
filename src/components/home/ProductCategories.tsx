'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { staggerContainer, staggerItem } from '@/lib/animations';
import Image from 'next/image';
import Link from 'next/link';

// Import product data
import productsData1 from '@/data/products-part1.json';
import productsData2 from '@/data/products-part2.json';

export default function ProductCategories() {
    // Combine both product data files
    const allCategories = [...productsData1.categories, ...productsData2.categories];

    // State for pagination
    const [visibleCount, setVisibleCount] = useState(9);
    const visibleCategories = allCategories.slice(0, visibleCount);
    const hasMore = visibleCount < allCategories.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => Math.min(prev + 9, allCategories.length));
    };

    return (
        <section className="py-24 bg-primary-900 relative overflow-hidden" id="products">
            {/* Background Pattern */}
            <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-950 to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block mb-4 px-4 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-semibold tracking-widest uppercase shadow-glow">
                        Our Solutions
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-400">Storage Systems</span>
                    </h2>
                    <p className="text-lg text-primary-300 max-w-2xl mx-auto font-light">
                        Explore our range of industrial storage solutions designed for maximum efficiency
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <AnimatePresence mode='popLayout'>
                        {visibleCategories.map((category) => (
                            <motion.div
                                key={category.id}
                                variants={staggerItem}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link href={`/products/${category.slug}`}>
                                    <Card hover className="h-full glass-dark border-transparent hover:border-accent-500/50 group">
                                        <div className="image-zoom h-48 bg-primary-800 relative overflow-hidden rounded-t-xl border-b border-white/5">
                                            {/* Placeholder for category image */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-800 to-primary-900 group-hover:scale-110 transition-transform duration-700">
                                                <span className="text-white text-6xl font-bold opacity-5 transform -rotate-12 translate-y-4 group-hover:opacity-10 transition-opacity">
                                                    {category.name.substring(0, 2)}
                                                </span>
                                                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent opacity-60"></div>
                                            </div>

                                            {/* Neon Line on Hover */}
                                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-2 truncate group-hover:text-accent-400 transition-colors">
                                                {category.name}
                                            </h3>
                                            <p className="text-primary-400 text-sm line-clamp-2 mb-4 h-10">
                                                {category.description}
                                            </p>
                                            <div className="text-accent-400 font-semibold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                                                View Products
                                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Load More Button */}
                {hasMore && (
                    <motion.div
                        className="text-center mt-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Button
                            onClick={handleLoadMore}
                            variant="outline"
                            size="lg"
                            className="border-accent-500/30 text-accent-400 hover:bg-accent-500/10 min-w-[200px] backdrop-blur-sm"
                        >
                            Load More Products
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
