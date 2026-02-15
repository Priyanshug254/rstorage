import { MetadataRoute } from 'next';
import productsData1 from '@/data/products-part1.json';
import productsData2 from '@/data/products-part2.json';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://wellindiaracking.com';

    // Static routes
    const routes = [
        '',
        '/about',
        '/products',
        '/contact',
        '/faq',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Category routes
    const allCategories = [...productsData1.categories, ...productsData2.categories];

    const categoryRoutes = allCategories.map((category) => ({
        url: `${baseUrl}/products/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Product routes
    const productRoutes = allCategories.flatMap((category) =>
        category.products.map((product) => ({
            url: `${baseUrl}/products/${category.slug}/${product.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        }))
    );

    return [...routes, ...categoryRoutes, ...productRoutes];
}
