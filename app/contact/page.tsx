'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { contactFormSchema } from '@/lib/validations';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { site } from '@/lib/site';
import { socialLinks } from '@/lib/social';

const fieldClasses = (invalid: boolean) =>
  `w-full rounded-md border bg-background-elevated px-4 py-3 text-foreground placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background ${
    invalid
      ? 'border-destructive focus:ring-destructive'
      : 'border-border focus:border-accent focus:ring-accent'
  }`;

const fields = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Your name or company',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'you@company.com',
  },
  {
    id: 'subject',
    label: 'Subject',
    type: 'text',
    placeholder: 'e.g. PFE internship — Data Engineering',
  },
] as const;

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
    const result = contactFormSchema.safeParse(formData);

    if (result.success) {
      setErrors({});
      return true;
    }

    const newErrors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      newErrors[String(issue.path[0])] = issue.message;
    }
    setErrors(newErrors);
    return false;
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

  const isFormValid = () => contactFormSchema.safeParse(formData).success;

  return (
    <div className="container mx-auto px-4 pb-24 pt-32">
      <header className="mb-16 max-w-3xl">
        <SectionLabel index="06" className="mb-6">
          Contact
        </SectionLabel>
        <h1 className="text-4xl font-bold tracking-tightest text-foreground sm:text-5xl md:text-6xl">
          Get in touch
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {site.availability.detail}
        </p>
      </header>

      <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {fields.map((field) => {
            const invalid = Boolean(errors[field.id] && touched[field.id]);
            return (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="label-mono mb-2 block normal-case"
                >
                  {field.label}{' '}
                  <span aria-hidden="true" className="text-accent">
                    *
                  </span>
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onBlur={handleChange}
                  onChange={handleChange}
                  className={fieldClasses(invalid)}
                  placeholder={field.placeholder}
                  aria-invalid={invalid}
                  aria-describedby={invalid ? `${field.id}-error` : undefined}
                  required
                />
                {invalid && (
                  <p
                    id={`${field.id}-error`}
                    className="mt-2 text-sm text-destructive"
                  >
                    {errors[field.id]}
                  </p>
                )}
              </div>
            );
          })}

          <div>
            <label
              htmlFor="message"
              className="label-mono mb-2 block normal-case"
            >
              Message{' '}
              <span aria-hidden="true" className="text-accent">
                *
              </span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onBlur={handleChange}
              onChange={handleChange}
              rows={7}
              className={fieldClasses(
                Boolean(errors.message && touched.message)
              )}
              placeholder="What the role involves, the team, and the timeline."
              aria-invalid={Boolean(errors.message && touched.message)}
              aria-describedby={
                errors.message && touched.message ? 'message-error' : undefined
              }
              required
            />
            {errors.message && touched.message && (
              <p id="message-error" className="mt-2 text-sm text-destructive">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              type="submit"
              disabled={!isFormValid() || status === 'submitting'}
              className={`inline-flex items-center justify-center gap-2 rounded-md px-7 py-3 text-sm font-medium transition-all duration-200 ease-cine focus-visible:outline-none ${
                isFormValid() && status !== 'submitting'
                  ? 'bg-accent text-accent-foreground hover:bg-accent-strong hover:shadow-glow'
                  : 'cursor-not-allowed border border-border text-faint'
              }`}
            >
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Reset
            </button>
          </div>

          {/* Announced to assistive technology: the outcome is otherwise
              conveyed only by colour and position. */}
          <p
            role="status"
            aria-live="polite"
            className={`text-sm ${
              status === 'error' ? 'text-destructive' : 'text-success'
            }`}
          >
            {status === 'success' &&
              "Message sent — thanks for reaching out, I'll reply soon."}
            {status === 'error' && serverError}
          </p>
        </form>

        <aside>
          <h2 className="label-mono mb-6">Or reach me directly</h2>

          <a
            href={`mailto:${site.email}`}
            className="block break-all font-mono text-base text-accent underline-offset-8 transition-colors hover:text-accent-strong hover:underline"
          >
            {site.email}
          </a>

          <ul className="mt-10 space-y-4 border-t border-border pt-8">
            {socialLinks
              .filter((link) => link.id !== 'email')
              .map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    download={link.id === 'cv' || undefined}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 ease-cine group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
          </ul>

          <p className="mt-10 text-sm leading-relaxed text-faint">
            Messages sent through the form arrive in the same inbox. If the form
            is unavailable for any reason, the address above always works.
          </p>
        </aside>
      </div>
    </div>
  );
}
