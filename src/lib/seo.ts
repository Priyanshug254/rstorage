import { Product } from 'schema-dts';

export function generateProductSchema(product: any, categoryName: string): Product {
    return {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.images ? product.images[0] : undefined,
        category: categoryName,
        brand: {
            '@type': 'Brand',
            name: 'Well India Racking System'
        },
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'INR',
            price: '0', // Price on request
            url: `https://wellindiaracking.com/products/${product.slug}`
        }
    };
}

export function generateOrganizationSchema() {
    return {
        '@type': 'Organization',
        name: 'Well India Racking System',
        url: 'https://wellindiaracking.com',
        logo: 'https://wellindiaracking.com/logo.png',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-9999999999',
            contactType: 'sales',
            areaServed: 'IN',
            availableLanguage: ['en', 'hi']
        },
        sameAs: [
            'https://www.facebook.com/wellindiaracking',
            'https://twitter.com/wellindiaracking',
            'https://www.linkedin.com/company/wellindiaracking'
        ]
    };
}
