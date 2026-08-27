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
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [serverError, setServerError] = useState('');

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

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setTouched({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    setServerError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const body = await res.json();

      if (!res.ok || !body.ok) {
        if (body.errors) setErrors(body.errors);
        setServerError(
          body.error ?? 'Something went wrong sending your message.'
        );
        setStatus('error');
        return;
      }

      setStatus('success');
      resetForm();
    } catch {
      setServerError('Network error — please try again or email me directly.');
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
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
          <h1 className="mb-4 text-4xl font-bold text-foreground">
            Contact Me
          </h1>
          <p className="text-lg text-muted-foreground">
            I welcome messages from recruiters, hiring managers, and
            collaborators—especially regarding internships, junior roles, or
            team projects. <br />
            Let's connect and build something great together!
          </p>
        </div>

        {/* Contact options helper */}
        <div className="mb-8">
          <h2 className="sr-only">How to contact me</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <span className="font-semibold text-primary-700 dark:text-primary-400">
                Option 1:
              </span>{' '}
              Fill this form and click{' '}
              <span className="font-semibold">Send Message</span>.
            </li>
            <li>
              <span className="font-semibold text-primary-700 dark:text-primary-400">
                Option 2:
              </span>{' '}
              Use the quick email link below the form.
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-muted-foreground"
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
              className={`w-full rounded-lg border bg-card px-4 py-3 text-foreground focus:outline-none focus:ring-2 ${
                errors.name && touched.name
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-border focus:ring-primary-500'
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
              className="mb-2 block text-sm font-medium text-muted-foreground"
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
              className={`w-full rounded-lg border bg-card px-4 py-3 text-foreground focus:outline-none focus:ring-2 ${
                errors.email && touched.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-border focus:ring-primary-500'
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
              className="mb-2 block text-sm font-medium text-muted-foreground"
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
              className={`w-full rounded-lg border bg-card px-4 py-3 text-foreground focus:outline-none focus:ring-2 ${
                errors.subject && touched.subject
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-border focus:ring-primary-500'
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
              className="mb-2 block text-sm font-medium text-muted-foreground"
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
              className={`w-full rounded-lg border bg-card px-4 py-3 text-foreground focus:outline-none focus:ring-2 ${
                errors.message && touched.message
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-border focus:ring-primary-500'
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

          <div className="rounded-md border border-border bg-card p-6">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Send a Message
            </h2>
            <button
              type="submit"
              disabled={!isFormValid() || status === 'submitting'}
              aria-disabled={!isFormValid() || status === 'submitting'}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3 font-medium transition-colors focus-visible:outline-none ${
                isFormValid() && status !== 'submitting'
                  ? 'bg-accent text-accent-foreground hover:opacity-90'
                  : 'cursor-not-allowed bg-muted text-muted-foreground'
              }`}
            >
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="mt-4 text-sm text-primary-600 dark:text-primary-400">
                Message sent — thanks for reaching out, I'll reply soon.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-sm text-destructive">{serverError}</p>
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
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Reset form
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="mb-2 text-muted-foreground">Or reach me directly at:</p>
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
