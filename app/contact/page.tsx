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
  const [showFormspreeNote, setShowFormspreeNote] = useState(false);
  const [copied, setCopied] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim())
      newErrors.name = 'Please enter your name or company.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildMailto = () => {
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    return `mailto:ouertatanimohamedaziz@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    window.location.href = buildMailto();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    if (copied) setCopied(false);
  };

  const copyEmailContent = async () => {
    const text = `To: ouertatanimohamedaziz@gmail.com
Subject: ${formData.subject}

From: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setTouched({});
    setCopied(false);
  };

  // Button is enabled only if form is filled and valid
  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.subject.trim() &&
      formData.message.trim().length >= 10
    );
  };

  // Mailto preview helper (truncate message for display)
  const mailtoPreview = (() => {
    const shortMsg =
      formData.message.length > 50
        ? formData.message.slice(0, 50) + '…'
        : formData.message;
    return `mailto:ouertatanimohamedaziz@gmail.com?subject=${encodeURIComponent(
      formData.subject || '[No Subject]'
    )}&body=${encodeURIComponent(
      `From: ${formData.name || '[No Name]'}\nEmail: ${formData.email || '[No Email]'}\n\nMessage:\n${shortMsg}`
    )}`;
  })();

  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-2xl">
        {/* Improved Hero / Page Intro */}
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
                aria-hidden="true"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Contact Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I welcome messages from recruiters, hiring managers, and
            collaborators—especially regarding internships, junior roles, or
            team projects. <br />
            Let's connect and build something great together!
          </p>
        </div>

        {/* Note about static hosting */}
        <div className="mb-5 rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-blue-800 dark:border-blue-900 dark:bg-blue-900/20 dark:text-blue-300">
          <strong>Note:</strong> This portfolio is statically hosted. Please use
          one of the options below to contact me—no data is sent to any server
          by default.
        </div>

        {/* Contact options helper */}
        <div className="mb-8">
          <h2 className="sr-only">How to contact me</h2>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>
              <span className="font-semibold text-primary-700 dark:text-primary-400">
                Option 1:
              </span>{' '}
              Fill this form and click{' '}
              <span className="font-semibold">Send via Email</span> (opens your
              default mail client).
            </li>
            <li>
              <span className="font-semibold text-primary-700 dark:text-primary-400">
                Option 2:
              </span>{' '}
              Use the quick email link below the form.
            </li>
            <li>
              <span className="font-semibold text-primary-700 dark:text-primary-400">
                Option 3:
              </span>{' '}
              Click <span className="font-semibold">Copy email content</span> to
              paste into any email service or ATS.
            </li>
          </ul>
        </div>

        <form onSubmit={handleMailtoSubmit} className="space-y-6" noValidate>
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
              onBlur={handleChange}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-white ${
                errors.name && touched.name
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-primary-500 dark:border-gray-700'
              }`}
              placeholder="Your name or company"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              required
            />
            {errors.name && touched.name && (
              <p
                id="name-error"
                className="mt-1 text-sm text-red-600 dark:text-red-400"
              >
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
              onBlur={handleChange}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-white ${
                errors.email && touched.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-primary-500 dark:border-gray-700'
              }`}
              placeholder="you@company.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              required
            />
            {errors.email && touched.email && (
              <p
                id="email-error"
                className="mt-1 text-sm text-red-600 dark:text-red-400"
              >
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
              onBlur={handleChange}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-white ${
                errors.subject && touched.subject
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-primary-500 dark:border-gray-700'
              }`}
              placeholder="e.g. Internship opportunity, Project collaboration"
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              required
            />
            {errors.subject && touched.subject && (
              <p
                id="subject-error"
                className="mt-1 text-sm text-red-600 dark:text-red-400"
              >
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
              onBlur={handleChange}
              onChange={handleChange}
              rows={6}
              className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-white ${
                errors.message && touched.message
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-primary-500 dark:border-gray-700'
              }`}
              placeholder="Let me know how I can help, or how you'd like to connect."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              required
            />
            {errors.message && touched.message && (
              <p
                id="message-error"
                className="mt-1 text-sm text-red-600 dark:text-red-400"
              >
                {errors.message}
              </p>
            )}
          </div>

          <div className="rounded-lg border-2 border-primary-500 bg-white p-6 dark:border-primary-400 dark:bg-gray-800">
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Send via Email
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              This will open your email client with a prefilled message. Make
              edits before sending!
            </p>
            <button
              type="submit"
              disabled={!isFormValid()}
              aria-disabled={!isFormValid()}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors focus:outline-none focus:ring-2
                ${
                  isFormValid()
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'cursor-not-allowed bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                }
              `}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send via Email
            </button>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={copyEmailContent}
                className="text-sm text-primary-600 hover:underline dark:text-primary-400"
              >
                Copy email content
              </button>
              {copied && (
                <span className="text-xs text-green-600 dark:text-green-400">
                  Copied!
                </span>
              )}
            </div>

            <div className="mt-4 rounded-md bg-gray-100 p-3 text-xs text-gray-700 dark:bg-gray-900/40 dark:text-gray-300">
              <div className="mb-1 font-bold">Mailto preview:</div>
              <code className="break-all">{mailtoPreview}</code>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900/50">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Alternative: External Form Service
                </h2>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  <span className="font-medium">
                    For developers forking this repo:
                  </span>{' '}
                  You can integrate with services like Formspree to accept
                  online submissions here.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowFormspreeNote(!showFormspreeNote)}
                className="text-sm text-primary-600 hover:underline dark:text-primary-400"
                aria-expanded={showFormspreeNote}
              >
                {showFormspreeNote ? 'Hide' : 'Show'} Info
              </button>
            </div>

            {showFormspreeNote && (
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Example: Replace the form <b>action</b> with{' '}
                <code className="rounded bg-gray-200 px-1 py-0.5 dark:bg-gray-800">
                  action="https://formspree.io/f/your_form_id"
                </code>{' '}
                and{' '}
                <code className="rounded bg-gray-200 px-1 py-0.5 dark:bg-gray-800">
                  method="POST"
                </code>
                .
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <a
              href="mailto:ouertatanimohamedaziz@gmail.com?subject=Portfolio Contact&body=Hi Mohamed Aziz,%0D%0A%0D%0AI would like to get in touch with you about..."
              className="text-sm text-primary-600 hover:underline dark:text-primary-400"
            >
              Quick email link
            </a>
            <button
              type="button"
              onClick={resetForm}
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Reset form
            </button>
          </div>
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
