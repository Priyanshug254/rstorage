'use client';

import { InputHTMLAttributes, ReactNode, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: ReactNode;
    fullWidth?: boolean;
}

export default function Input({
    label,
    error,
    icon,
    fullWidth = false,
    className = '',
    ...props
}: InputProps) {
    const [isFocused, setIsFocused] = useState(false);

    const baseStyles = 'px-4 py-3 rounded-input border-2 transition-smooth outline-none';
    const focusStyles = isFocused
        ? 'border-accent-600 shadow-glow'
        : error
            ? 'border-red-500'
            : 'border-neutral-200 hover:border-neutral-300';
    const widthStyle = fullWidth ? 'w-full' : '';
    const iconPadding = icon ? 'pl-12' : '';

    return (
        <div className={`${fullWidth ? 'w-full' : ''}`}>
            {label && (
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                    {label}
                </label>
            )}
            <div className="relative">
                {icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                        {icon}
                    </div>
                )}
                <input
                    className={`${baseStyles} ${focusStyles} ${widthStyle} ${iconPadding} ${className}`}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
            </div>
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
}
