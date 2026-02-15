import { Metadata } from 'next';
import ProductCategories from '@/components/home/ProductCategories';

export const metadata: Metadata = {
    title: 'Our Products - Well India Racking System',
    description: 'Explore our comprehensive range of industrial storage solutions including heavy duty racks, mezzanine floors, pallet racks, display racks, and more.',
};

export default function ProductsPage() {
    return (
        <div className="pt-32 pb-20 bg-primary-950 relative overflow-hidden min-h-screen">
            {/* Background Pattern */}
            <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                        Our Products
                    </h1>
                    <p className="text-xl text-primary-200 max-w-2xl mx-auto font-light">
                        Browse our complete range of industrial storage and racking solutions designed for warehouses, supermarkets, and commercial spaces.
                    </p>
                </div>
            </div>

            {/* Product Categories */}
            <ProductCategories />
        </div>
    );
}
