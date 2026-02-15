'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import { modalBackdrop, modalContent } from '@/lib/animations';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Modal({
    isOpen,
    onClose,
    children,
    title,
    size = 'md'
}: ModalProps) {
    const sizeStyles = {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl'
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
        }

        return () => {
            window.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                        variants={modalBackdrop}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            className={`bg-white rounded-card shadow-hard w-full ${sizeStyles[size]} max-h-[90vh] overflow-y-auto`}
                            variants={modalContent}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            {title && (
                                <div className="flex items-center justify-between p-6 border-b border-neutral-200">
                                    <h2 className="text-2xl font-bold text-primary-900">{title}</h2>
                                    <button
                                        onClick={onClose}
                                        className="text-neutral-400 hover:text-neutral-600 transition-smooth"
                                    >
                                        <IoClose size={28} />
                                    </button>
                                </div>
                            )}

                            {/* Body */}
                            <div className={title ? 'p-6' : 'p-6 relative'}>
                                {!title && (
                                    <button
                                        onClick={onClose}
                                        className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-smooth z-10"
                                    >
                                        <IoClose size={28} />
                                    </button>
                                )}
                                {children}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
