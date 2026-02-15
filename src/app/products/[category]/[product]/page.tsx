import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import QuoteForm from '@/components/forms/QuoteForm';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { IoArrowBack, IoCheckmarkCircle, IoDocument, IoCall, IoLogoWhatsapp } from 'react-icons/io5';
import { generateProductSchema } from '@/lib/seo';

// Import product data
import productsData1 from '@/data/products-part1.json';
import productsData2 from '@/data/products-part2.json';

// Define Product interface to handle optional fields
interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    images: string[];
    specifications?: Record<string, string>;
    features?: string[];
    applications?: string[];
}

export default function ProductDetailPage() {
    const params = useParams();
    const categorySlug = params.category as string;
    const productSlug = params.product as string;
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    // Combine both product data files
    const allCategories = [...productsData1.categories, ...productsData2.categories];

    // Find the category and product
    const category = allCategories.find(cat => cat.slug === categorySlug);
    const rawProduct = category?.products.find(prod => prod.slug === productSlug);

    // Cast to Product interface
    const product = rawProduct as unknown as Product;

    if (!category || !product) {
        return (
            <div className="pt-24 pb-20 min-h-screen flex items-center justify-center bg-primary-950">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
                    <Link href="/products">
                        <Button variant="primary">Back to Products</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const productSchema = generateProductSchema(product, category.name);

    return (
        <div className="pt-24 pb-20 bg-primary-950 min-h-screen relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none"></div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Breadcrumb */}
                <div className="mb-8 flex items-center gap-2 text-sm">
                    <Link href="/products" className="text-accent-400 hover:text-accent-300 transition-colors">
                        Products
                    </Link>
                    <span className="text-primary-600">/</span>
                    <Link href={`/products/${categorySlug}`} className="text-accent-400 hover:text-accent-300 transition-colors">
                        {category.name}
                    </Link>
                    <span className="text-primary-600">/</span>
                    <span className="text-primary-200">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="sticky top-24">
                            <div className="aspect-square bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl overflow-hidden relative border border-white/5 shadow-2xl group">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white text-9xl font-bold opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                                        {product.name.charAt(0)}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-accent-500/5 mix-blend-overlay"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Product Details */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            {product.name}
                        </h1>

                        <p className="text-lg text-primary-200 mb-8 font-light leading-relaxed">
                            {product.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            <Button
                                variant="primary"
                                size="lg"
                                icon={<IoDocument />}
                                onClick={() => setIsQuoteModalOpen(true)}
                                className="bg-accent-600 hover:bg-accent-500 text-white shadow-neon border-none"
                            >
                                Request Quote
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                icon={<IoCall />}
                                onClick={() => window.location.href = 'tel:+919999999999'}
                                className="border-primary-600 text-primary-200 hover:bg-primary-800 hover:text-white"
                            >
                                Call Now
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                icon={<IoLogoWhatsapp />}
                                onClick={() => window.open('https://wa.me/919999999999', '_blank')}
                                className="border-green-600 text-green-500 hover:bg-green-900/20"
                            >
                                WhatsApp
                            </Button>
                        </div>

                        {/* Features */}
                        {product.features && product.features.length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
                                <motion.ul
                                    className="space-y-3"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {product.features.map((feature, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start"
                                            variants={staggerItem}
                                        >
                                            <IoCheckmarkCircle className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={20} />
                                            <span className="text-primary-200">{feature}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>
                        )}

                        {/* Specifications */}
                        {product.specifications && (
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-4">Specifications</h2>
                                <div className="glass-dark p-6 rounded-xl border border-white/5">
                                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {Object.entries(product.specifications).map(([key, value]) => (
                                            <div key={key}>
                                                <dt className="text-sm font-medium text-primary-400 mb-1 uppercase tracking-wider">
                                                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                                </dt>
                                                <dd className="text-base text-white font-medium">
                                                    {value as string}
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                        )}

                        {/* Applications */}
                        {product.applications && product.applications.length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-4">Applications</h2>
                                <div className="flex flex-wrap gap-2">
                                    {product.applications.map((app, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-primary-800 border border-primary-700 text-primary-200 rounded-full text-sm font-medium hover:border-accent-500/50 transition-colors"
                                        >
                                            {app}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Related Products */}
                <div className="mt-20">
                    <h2 className="text-2xl font-bold text-white mb-8">More from {category.name}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {category.products
                            .filter(p => p.id !== product.id)
                            .slice(0, 4)
                            .map((relatedProduct) => (
                                <Link key={relatedProduct.id} href={`/products/${categorySlug}/${relatedProduct.slug}`}>
                                    <div className="glass-dark p-4 rounded-xl hover:border-accent-500/50 hover:shadow-glow cursor-pointer transition-all">
                                        <div className="aspect-square bg-gradient-to-br from-primary-800 to-primary-900 rounded-lg mb-3 flex items-center justify-center border border-white/5">
                                            <span className="text-white text-4xl font-bold opacity-20">
                                                {relatedProduct.name.charAt(0)}
                                            </span>
                                        </div>
                                        <h3 className="font-semibold text-white text-sm line-clamp-2 group-hover:text-accent-400">
                                            {relatedProduct.name}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>

            {/* Quote Modal - Passing dark mode prop if supported, or ensure Modal styles are dark compatible */}
            <Modal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
                title={`Request Quote for ${product.name}`}
                size="lg"
            >
                <div className="p-1">
                    <QuoteForm
                        productName={product.name}
                        onSuccess={() => setTimeout(() => setIsQuoteModalOpen(false), 3000)}
                    />
                </div>
            </Modal>
        </div>
    );
}
