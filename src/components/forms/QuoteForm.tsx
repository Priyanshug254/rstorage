'use client';

import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { IoPerson, IoMail, IoCall, IoDocument, IoBusiness } from 'react-icons/io5';

interface QuoteFormProps {
    productName?: string;
    onSuccess?: () => void;
}

export default function QuoteForm({ productName, onSuccess }: QuoteFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        requirements: productName ? `I am interested in ${productName}. Please send me a quote.` : ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // In a real app, here we would send the data to an API/Email service
        console.log('Form Submitted:', formData);

        setSubmitted(true);
        setIsSubmitting(false);

        if (onSuccess) {
            setTimeout(onSuccess, 2000);
        }
    };

    if (submitted) {
        return (
            <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">Request Received!</h3>
                <p className="text-neutral-600">
                    Thank you for your interest. Our team will contact you shortly with the quote.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    label="Full Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    fullWidth
                    icon={<IoPerson />}
                    placeholder="Name"
                />
                <Input
                    label="Phone Number *"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    fullWidth
                    icon={<IoCall />}
                    placeholder="Phone"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    label="Email Address *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    icon={<IoMail />}
                    placeholder="Email"
                />
                <Input
                    label="Company Name"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    fullWidth
                    icon={<IoBusiness />}
                    placeholder="Company"
                />
            </div>

            <div className="w-full">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Requirements *
                </label>
                <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-input border-2 border-neutral-200 hover:border-neutral-300 focus:border-accent-600 focus:shadow-glow transition-smooth outline-none resize-none"
                    placeholder="Describe your requirements..."
                />
            </div>

            <div className="pt-2">
                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    isLoading={isSubmitting}
                    icon={<IoDocument />}
                >
                    {isSubmitting ? 'Sending Request...' : 'Get Best Quote'}
                </Button>
            </div>

            <p className="text-xs text-center text-neutral-500 mt-4">
                By submitting this form, you agree to our privacy policy. We'll never share your data.
            </p>
        </form>
    );
}
