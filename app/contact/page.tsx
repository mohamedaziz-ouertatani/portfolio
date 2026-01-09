'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/20">
              <svg
                className="h-8 w-8 text-primary-600 dark:text-primary-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Whether you have an idea for a project or just want to chat, feel
            free to send me a message!
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-300">
            <p className="font-medium">Message sent successfully!</p>
            <p className="text-sm">
              Thank you for reaching out. I&apos;ll get back to you soon.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-900/20 dark:text-red-300">
            <p className="font-medium">Something went wrong.</p>
            <p className="text-sm">
              Please try again or email me directly at
              ouertatanimohamedaziz@gmail.com
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-white ${
                errors.name
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-primary-500 dark:border-gray-700'
              }`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-white ${
                errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-primary-500 dark:border-gray-700'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-white ${
                errors.subject
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-primary-500 dark:border-gray-700'
              }`}
              placeholder="What is this about?"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.subject}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-white ${
                errors.message
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-primary-500 dark:border-gray-700'
              }`}
              placeholder="Your message..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="mb-2 text-gray-600 dark:text-gray-400">
            Or reach me directly at:
          </p>
          <a
            href="mailto:ouertatanimohamedaziz@gmail.com"
            className="text-primary-600 hover:underline dark:text-primary-400"
          >
            ouertatanimohamedaziz@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
