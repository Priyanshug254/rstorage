'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { staggerContainer, staggerItem } from '@/lib/animations';
import Image from 'next/image';
import Link from 'next/link';
import { IoCube } from 'react-icons/io5';

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
        <section className="py-24 bg-gray-50 relative overflow-hidden" id="products">
            {/* Background Pattern */}
            <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block mb-4 px-4 py-1 rounded-full bg-accent-100 border border-accent-200 text-accent-800 text-sm font-bold tracking-widest uppercase">
                        Product Categories
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-accent-950 mb-6 tracking-tighter">
                        Elite <span className="text-accent-700">Storage Ecosystems</span>
                    </h2>
                    <p className="text-lg text-primary-600 max-w-2xl mx-auto font-normal">
                        Discover our comprehensive range of industrial racking systems, high-density storage, and supermarket shelving solutions.
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
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
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link href={`/products/${category.slug}`}>
                                    <Card hover className="h-full flex flex-col group">
                                        <div className="image-zoom h-64 bg-primary-100 relative overflow-hidden rounded-t-xl border-b border-primary-100">
                                            {/* Placeholder for category image */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white to-primary-50 group-hover:to-accent-50 transition-colors duration-700">
                                                <div className="relative">
                                                    <IoCube className="text-7xl text-accent-800/10" />
                                                    <span className="absolute inset-0 flex items-center justify-center text-accent-800/20 text-4xl font-black tracking-tighter">
                                                        {category.name.substring(0, 1)}
                                                    </span>
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                                            </div>

                                            {/* Orange Accent Bar on Hover */}
                                            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-industrial-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                        </div>
                                        <div className="p-8 flex flex-col flex-1 bg-white">
                                            <h3 className="text-2xl font-black text-accent-950 mb-3 group-hover:text-accent-700 transition-colors tracking-tight leading-tight">
                                                {category.name}
                                            </h3>
                                            <p className="text-primary-700 text-sm line-clamp-2 mb-6 h-10 leading-relaxed font-bold opacity-70">
                                                {category.description}
                                            </p>
                                            <div className="mt-auto pt-6 border-t border-primary-50 text-accent-800 font-black text-xs uppercase tracking-widest flex items-center group-hover:text-industrial-600 transition-all">
                                                View Documentation
                                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
                        className="text-center mt-20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Button
                            onClick={handleLoadMore}
                            variant="outline"
                            size="lg"
                            className="min-w-[220px]"
                        >
                            View All Categories
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
