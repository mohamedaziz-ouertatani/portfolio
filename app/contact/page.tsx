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

  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Create mailto link with form data
    const mailtoLink = `mailto:ouertatanimohamedaziz@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
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

        {/* Static Hosting Notice */}
        <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>Note:</strong> This portfolio is statically hosted on GitHub
            Pages with no backend or API routes. The form below will open your
            default email client to send a message.
          </p>
        </div>

        <form onSubmit={handleMailtoSubmit} className="space-y-6">
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

        {/* Primary Contact Method */}
        <div className="mb-8 rounded-lg border-2 border-primary-500 bg-white p-6 dark:border-primary-400 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Direct Email Contact
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Click the button below to send me an email directly from your email
            client:
          </p>
          <a
            href="mailto:ouertatanimohamedaziz@gmail.com?subject=Portfolio Contact&body=Hi Mohamed Aziz,%0D%0A%0D%0AI would like to get in touch with you about..."
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Email to ouertatanimohamedaziz@gmail.com
          </a>
        </div>

        {/* Alternative: External Form Service */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900/50">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Alternative: External Form Service
              </h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                You can also use an external form service like Formspree (not
                included by default).
              </p>
            </div>
            <button
              onClick={() => setShowFormspreeNote(!showFormspreeNote)}
              className="text-sm text-primary-600 hover:underline dark:text-primary-400"
            >
              {showFormspreeNote ? 'Hide' : 'Show'} Info
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            Send via Email
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

        {/* Optional External Form Service Example */}
        <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/50">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
            Alternative: External Form Service
          </h3>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            If you prefer not to use email clients, you can integrate with
            external form services like{' '}
            <a
              href="https://formspree.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline dark:text-primary-400"
            >
              Formspree
            </a>{' '}
            or{' '}
            <a
              href="https://www.netlify.com/products/forms/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline dark:text-primary-400"
            >
              Netlify Forms
            </a>
            . These services handle form submissions without requiring a backend
            in your repository.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Example: Replace the form action with{' '}
            <code className="rounded bg-gray-200 px-1 py-0.5 dark:bg-gray-800">
              action="https://formspree.io/f/your_form_id"
            </code>{' '}
            and{' '}
            <code className="rounded bg-gray-200 px-1 py-0.5 dark:bg-gray-800">
              method="POST"
            </code>
          </p>
        </div>
      </div>
    </div>
  );
}
