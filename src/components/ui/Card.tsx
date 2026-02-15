'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { hoverLift } from '@/lib/animations';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    glass?: boolean;
    onClick?: () => void;
}

export default function Card({
    children,
    className = '',
    hover = false,
    glass = false,
    onClick
}: CardProps) {
    const baseStyles = 'rounded-2xl overflow-hidden transition-all duration-300';
    // Use clean white style by default, or glass if requested (though we're moving away from it)
    const cardStyles = glass
        ? 'glass'
        : 'bg-white border border-neutral-200 shadow-sm';

    // Add hover effects if requested
    const hoverStyles = hover
        ? 'hover:-translate-y-1 hover:shadow-md hover:border-primary-200 cursor-pointer'
        : '';

    // Use motion.div if explicitly needed for complex animations, otherwise standard div is better for simple CSS transitions
    const Component = hover ? motion.div : 'div';

    // We can keep motion props for entering animations if needed, but for hover, let's use CSS for performance and consistency with clean-card
    const motionProps = hover ? {
        whileHover: { y: -4, transition: { duration: 0.2 } },
        initial: { y: 0 }
    } : {};

    return (
        <motion.div
            className={`${baseStyles} ${cardStyles} ${hover ? 'cursor-pointer' : ''} ${className}`}
            onClick={onClick}
            {...(hover ? { whileHover: { y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" } } : {})}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.div>
    );
}
