'use client';

import { useState } from 'react';

export default function Contact() {
  const [showFormspreeNote, setShowFormspreeNote] = useState(false);

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

        <div className="mb-6 rounded-lg bg-blue-50 p-4 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
          <p className="font-medium">📌 Static Hosting Note</p>
          <p className="mt-1 text-sm">
            This portfolio is statically hosted on GitHub Pages with no backend
            or API routes. Contact me directly via email or use an external form
            service.
          </p>
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

          {showFormspreeNote && (
            <div className="mt-4 rounded-lg bg-white p-4 dark:bg-gray-800">
              <h3 className="mb-2 font-medium text-gray-900 dark:text-white">
                How to set up Formspree:
              </h3>
              <ol className="list-inside list-decimal space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  Sign up for a free account at{' '}
                  <a
                    href="https://formspree.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline dark:text-primary-400"
                  >
                    formspree.io
                  </a>
                </li>
                <li>Create a new form and get your form ID</li>
                <li>
                  Replace the form action URL below with:
                  <code className="ml-1 rounded bg-gray-200 px-1 dark:bg-gray-700">
                    https://formspree.io/f/YOUR_FORM_ID
                  </code>
                </li>
                <li>Deploy your changes to enable the form</li>
              </ol>

              <form className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="formspree-name"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="formspree-name"
                    name="name"
                    disabled
                    className="w-full cursor-not-allowed rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="formspree-email"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="formspree-email"
                    name="email"
                    disabled
                    className="w-full cursor-not-allowed rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="formspree-subject"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="formspree-subject"
                    name="subject"
                    disabled
                    className="w-full cursor-not-allowed rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="formspree-message"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message *
                  </label>
                  <textarea
                    id="formspree-message"
                    name="message"
                    disabled
                    rows={6}
                    className="w-full cursor-not-allowed rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    placeholder="Your message..."
                  />
                </div>

                <div className="rounded bg-yellow-50 p-3 text-sm text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300">
                  ⚠️ This form is disabled by default. To enable it, sign up for
                  Formspree and update the form action URL.
                </div>

                <button
                  type="button"
                  disabled
                  className="w-full cursor-not-allowed rounded-lg bg-gray-400 px-6 py-3 font-medium text-white opacity-60"
                >
                  Form Disabled (See Instructions Above)
                </button>
              </form>
            </div>
          )}
        </div>

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
