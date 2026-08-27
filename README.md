# Mohamed Aziz Ouertatani - Portfolio

[![CI](https://github.com/mohamedaziz-ouertatani/portfolio/workflows/CI/badge.svg)](https://github.com/mohamedaziz-ouertatani/portfolio/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)](https://www.typescriptlang.org/)

A modern, performant portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

> **🎯 Architecture:** This portfolio is a full Next.js server application with SSR, API routes, and backend integration. It's optimized for Vercel deployment with support for serverless functions and dynamic rendering.

## 🌐 Live Demo

Visit the live portfolio: [https://mohamedaziz-ouertatani.vercel.app](https://mohamedaziz-ouertatani.vercel.app)

> **Note:** This portfolio is deployed on Vercel with full Next.js server capabilities including SSR, API routes, and backend service integration.

## 📸 Screenshots

> Add screenshots of your portfolio here to showcase the design and features

## 🚀 Features

### Core Technologies

- **Next.js 14 App Router** - Modern React framework with server-side rendering and API routes
- **TypeScript** - Type-safe code for better developer experience and fewer runtime errors
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development with custom design system
- **Server Deployment** - Standard Next.js server deployment with SSR and API routes enabled

### User Experience

- **Dark Mode** - Seamless theme toggle with localStorage persistence using next-themes
- **Responsive Design** - Mobile-first approach that works flawlessly on all devices and screen sizes
- **Project Filtering** - Client-side multi-select technology filter for easy project browsing
- **Contact Form** - Functional contact form powered by Resend API with client and server-side validation
- **PWA Support** - Progressive Web App capabilities for offline access and app-like experience

### Performance & SEO

- **SEO Optimized** - Comprehensive meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Performance** - Image optimization with Next.js Image (unoptimized mode), font loading optimization, and minimal client-side JavaScript
- **Sitemap & Robots.txt** - Static sitemap.xml and robots.txt for better search engine crawling
- **Lighthouse Scores** - Consistently high performance, accessibility, best practices, and SEO scores

### Accessibility & Quality

- **Accessible** - WCAG 2.1 AA compliant with semantic HTML, ARIA labels, keyboard navigation, and skip links
- **Code Quality** - ESLint, Prettier, TypeScript strict mode, and Husky pre-commit hooks
- **Testing** - Jest unit tests and Playwright E2E tests for critical user flows
- **CI/CD** - GitHub Actions workflows for automated testing, linting, and deployment

## 🛠️ Tech Stack

### Frontend

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5.4
- **Styling:** Tailwind CSS 3.4
- **UI Components:** Custom components with Lucide React icons
- **Animations:** Framer Motion
- **Theme:** next-themes for dark mode

### Deployment

- **Platform:** Vercel with git integration
- **Build Output:** Optimized Next.js server with SSR and API routes
- **Contact Form:** Resend API for email delivery
- **Environment Variables:** `RESEND_API_KEY`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`

### Development Tools

- **Package Manager:** npm
- **Linting:** ESLint with Next.js config
- **Formatting:** Prettier with Tailwind plugin
- **Git Hooks:** Husky + lint-staged
- **Testing:** Jest + Testing Library + Playwright
- **Bundle Analysis:** @next/bundle-analyzer

### CI/CD & Quality

- **Version Control:** Git & GitHub
- **CI/CD:** GitHub Actions
- **Testing:** Automated unit and E2E tests
- **Performance:** Lighthouse CI
- **Dependencies:** Dependabot for automated updates

## 📊 Lighthouse Scores

Target scores (tested on desktop and mobile):

| Category          | Score |
| ----------------- | ----- |
| ⚡ Performance    | ≥ 90  |
| ♿ Accessibility  | ≥ 95  |
| ✅ Best Practices | ≥ 95  |
| 🔍 SEO            | ≥ 95  |

> Actual scores may vary based on network conditions and device. Run Lighthouse CI locally to verify current scores.

## 📋 Prerequisites

- Node.js 20+ and npm (check `.nvmrc` for exact version)
- Git for version control

## 🛠️ Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mohamedaziz-ouertatani/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file (optional):

```bash
cp .env.example .env.local
```

4. Update environment variables in `.env.local`:

```bash
# Optional: Analytics tracking
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com

# Required: Email service for contact form
RESEND_API_KEY=your_resend_api_key_here

# Optional: Site configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

> **Note:** The `RESEND_API_KEY` is required for the contact form to send emails. Without it, the form will show an error message but still provide a visible mailto fallback link. Analytics and site URL configuration are optional.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

This will generate an optimized production build in the `.next/` directory.

### Preview Build Locally

Run the production build locally:

```bash
npm start
```

This starts the Next.js server on `http://localhost:3000` with the optimized production build.

### Testing

Run unit tests:

```bash
npm test
```

Run unit tests in watch mode:

```bash
npm run test:watch
```

Run E2E tests:

```bash
npm run test:e2e
```

Run E2E tests with UI:

```bash
npm run test:e2e:ui
```

### Linting & Type Checking

```bash
npm run lint
npm run typecheck
```

Run all checks at once:

```bash
npm run check
```

### Format Code

```bash
npm run format
```

### Bundle Analysis

Analyze bundle size:

```bash
npm run analyze
```

## 📁 Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── contact/             # Contact page (static, mailto links)
│   ├── projects/            # Projects page (client-side filtering)
│   ├── resume/              # Resume page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── __tests__/           # Component tests
│   ├── DarkModeToggle.tsx
│   ├── FilterBar.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ProjectCard.tsx
│   └── ThemeProvider.tsx
├── e2e/                     # E2E tests
│   └── home.spec.ts
├── lib/                     # Data and utilities
│   ├── experiences.ts
│   ├── projects.ts
│   └── skills.ts
├── public/                  # Static assets
│   ├── cv.pdf
│   ├── images/
│   ├── manifest.json
│   ├── robots.txt           # Static robots.txt
│   └── sitemap.xml          # Static sitemap
├── .github/                 # GitHub configuration
│   ├── workflows/           # CI/CD workflows
│   └── dependabot.yml
├── .husky/                  # Git hooks
└── Configuration files
```

## 🎨 Customization

### Update Personal Information

1. **Projects**: Edit `lib/projects.ts`
2. **Experience**: Edit `lib/experiences.ts`
3. **Skills**: Edit `lib/skills.ts`
4. **Images**: Add images to `public/images/`
5. **CV**: Replace `public/cv.pdf` with your resume

### Metadata & SEO

Update metadata in:

- `app/layout.tsx` - Global metadata
- Individual page files - Page-specific metadata

### Styling

- Tailwind configuration: `tailwind.config.ts`
- Global styles: `app/globals.css`

### Analytics

To enable Plausible Analytics:

1. Set environment variable:

```bash
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
```

2. The script is already integrated in `app/layout.tsx`

### Contact Form

This portfolio includes a functional contact form with email delivery:

1. **Email Service:** Powered by Resend API for reliable email delivery
2. **Server-side Processing:** API route at `app/api/contact/route.ts` handles form submission
3. **Validation:** Both client-side (React) and server-side (Zod) validation for security and UX
4. **Fallback:** When `RESEND_API_KEY` is not configured, the form degrades gracefully with a visible mailto link

To enable the contact form:
- Set the `RESEND_API_KEY` environment variable in your Vercel project settings
- Without it, the form will show an error state but still provide a working mailto fallback

## 🚀 Deployment

### Vercel Deployment

This portfolio is deployed on Vercel with automatic git integration:

1. **Setup:**
   - Connect the GitHub repository to Vercel via the [Vercel Dashboard](https://vercel.com)
   - Select the repository and import the project
   - Vercel automatically detects this is a Next.js project

2. **Automatic Deployment:**
   - Every push to the `main` branch automatically deploys to production
   - Vercel's git integration handles deployment — no custom workflow file needed
   - Preview deployments are created for pull requests

3. **Environment Variables:**
   - Set the following environment variables in your Vercel project settings:
     - `RESEND_API_KEY`: API key for the contact form email service (required for form functionality)
     - `NEXT_PUBLIC_SITE_URL`: The deployed URL, e.g., `https://mohamedaziz-ouertatani.vercel.app`
     - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`: Domain for Plausible analytics (optional)
   - These are configured in the Vercel dashboard under Project Settings → Environment Variables

4. **Monitoring:**
   - View deployments, logs, and analytics in the Vercel dashboard
   - Monitor build times and function performance for API routes

## 🗺️ Roadmap

Future enhancements planned for this portfolio:

- [ ] **Blog Section** - Add a blog with MDX support for technical writing (static generation)
- [ ] **Project Details Pages** - Individual pages for each project with more screenshots and details
- [ ] **Testimonials** - Client and colleague testimonials section (static content)
- [ ] **Internationalization** - Multi-language support (English, French, Arabic) with client-side switching
- [ ] **3D Elements** - Three.js integration for interactive 3D elements (client-side)
- [ ] **Code Snippets** - Interactive code snippet showcase section
- [ ] **Search Functionality** - Client-side search across projects and blog posts using libraries like FlexSearch
- [ ] **Performance Optimizations** - Further optimize bundle size and loading performance
- [ ] **Resume Builder** - Generate custom resumes based on job requirements

## 🐛 Troubleshooting

### Common Issues

#### Build Errors

**Problem:** `npm run build` fails with module not found errors

**Solution:**

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Environment Variables Not Loading

**Problem:** Environment variables are undefined at runtime

**Solution:**

- Ensure `.env.local` exists and contains all required variables
- For client-side variables, use `NEXT_PUBLIC_` prefix
- Restart the development server after changing environment variables

#### Husky Hooks Not Working

**Problem:** Pre-commit hooks not running

**Solution:**

```bash
npm run prepare
chmod +x .husky/pre-commit
```

#### TypeScript Errors

**Problem:** TypeScript compilation errors

**Solution:**

```bash
npm run typecheck
# Fix errors or add type definitions
```

#### Port Already in Use

**Problem:** Port 3000 is already in use

**Solution:**

```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9
# Or use a different port
PORT=3001 npm run dev
```

#### Playwright Tests Failing

**Problem:** E2E tests fail with browser not installed

**Solution:**

```bash
npx playwright install --with-deps
```

### Getting Help

If you encounter issues not listed here:

1. Check [GitHub Issues](https://github.com/mohamedaziz-ouertatani/portfolio/issues)
2. Review [Next.js Documentation](https://nextjs.org/docs)
3. Open a new issue with detailed description and error logs

## 📊 Performance

Lighthouse scores are tracked via CI and aim for:

- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

Run Lighthouse locally:

```bash
npm run build
npm start
# Open Chrome DevTools > Lighthouse > Generate report
```

Or use Lighthouse CI:

```bash
npm install -g @lhci/cli
npm run build
lhci autorun
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## 🔒 Security

See [SECURITY.md](SECURITY.md) for information on reporting security vulnerabilities.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mohamed Aziz Ouertatani**

- GitHub: [@mohamedaziz-ouertatani](https://github.com/mohamedaziz-ouertatani)
- LinkedIn: [mohamed-aziz-ouertatani](https://www.linkedin.com/in/mohamed-aziz-ouertatani)
- Email: ouertatanimohamedaziz@gmail.com

---

⭐ If you found this portfolio helpful or interesting, please consider giving it a star!
