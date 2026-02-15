'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { IoArrowBack, IoCheckmarkCircle } from 'react-icons/io5';

// Import product data
import productsData1 from '@/data/products-part1.json';
import productsData2 from '@/data/products-part2.json';

export default function CategoryPage() {
    const params = useParams();
    const categorySlug = params.category as string;

    // Combine both product data files
    const allCategories = [...productsData1.categories, ...productsData2.categories];

    // Find the category
    const category = allCategories.find(cat => cat.slug === categorySlug);

    if (!category) {
        return (
            <div className="pt-24 pb-20 min-h-screen flex items-center justify-center bg-primary-950">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
                    <Link href="/products">
                        <Button variant="primary">Back to Products</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-primary-950 min-h-screen relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link href="/products" className="inline-flex items-center text-accent-400 hover:text-accent-300 transition-colors">
                        <IoArrowBack className="mr-2" />
                        Back to All Products
                    </Link>
                </div>

                {/* Category Header */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight">
                        {category.name}
                    </h1>
                    <p className="text-lg text-primary-200 max-w-3xl font-light">
                        {category.description}
                    </p>
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {category.products.map((product) => (
                        <motion.div key={product.id} variants={staggerItem}>
                            <Card hover className="h-full flex flex-col glass-dark border-transparent hover:border-accent-500/50 group">
                                {/* Product Image */}
                                <div className="image-zoom h-64 bg-primary-900/50 relative border-b border-white/5">
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-800 to-primary-900 group-hover:scale-110 transition-transform duration-700">
                                        <span className="text-white text-6xl font-bold opacity-10 group-hover:opacity-20 transition-opacity">
                                            {product.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>

                                {/* Product Info */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-primary-300 text-sm mb-4 line-clamp-3 flex-1 font-light">
                                        {product.description}
                                    </p>

                                    {/* Key Features */}
                                    {product.features && product.features.length > 0 && (
                                        <div className="mb-6">
                                            <ul className="space-y-2">
                                                {product.features.slice(0, 3).map((feature, index) => (
                                                    <li key={index} className="flex items-start text-sm text-primary-200">
                                                        <IoCheckmarkCircle className="text-accent-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* CTA */}
                                    <Link href={`/products/${categorySlug}/${product.slug}`}>
                                        <Button variant="primary" fullWidth className="bg-primary-800 hover:bg-accent-600 border border-primary-700 hover:border-accent-500 text-white shadow-none hover:shadow-glow transition-all">
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="mt-16 text-center glass-dark p-10 rounded-2xl border border-accent-500/30 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute inset-0 bg-accent-500/5"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Need a Custom Solution?
                        </h2>
                        <p className="text-primary-200 mb-8 max-w-2xl mx-auto font-light">
                            We offer customized storage solutions tailored to your specific requirements. Get in touch with our experts today.
                        </p>
                        <Link href="/contact">
                            <Button variant="primary" size="lg" className="bg-accent-600 hover:bg-accent-500 text-white shadow-neon border-none">
                                Request Quote
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
