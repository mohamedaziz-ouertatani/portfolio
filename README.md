# Mohamed Aziz Ouertatani - Portfolio

[![CI](https://github.com/mohamedaziz-ouertatani/portfolio/workflows/CI/badge.svg)](https://github.com/mohamedaziz-ouertatani/portfolio/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)](https://www.typescriptlang.org/)

A modern, performant portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## 🌐 Live Demo

Visit the live portfolio: [https://mohamedaziz-ouertatani.github.io/portfolio](https://mohamedaziz-ouertatani.github.io/portfolio)

## 📸 Screenshots

> Add screenshots of your portfolio here to showcase the design and features

## 🚀 Features

### Core Technologies

- **Next.js 14 App Router** - Modern React framework with static export for GitHub Pages
- **TypeScript** - Type-safe code for better developer experience and fewer runtime errors
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development with custom design system

### User Experience

- **Dark Mode** - Seamless theme toggle with localStorage persistence using next-themes
- **Responsive Design** - Mobile-first approach that works flawlessly on all devices and screen sizes
- **Project Filtering** - Client-side multi-select technology filter for easy project browsing
- **Contact Options** - Direct mailto links and optional external form service (Formspree) integration
- **PWA Support** - Progressive Web App capabilities with offline access

### Performance & SEO

- **SEO Optimized** - Comprehensive meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Performance** - Optimized images, font loading optimization, and minimal client-side JavaScript
- **Static Sitemap & Robots.txt** - Pre-generated sitemap.xml and robots.txt for search engine crawling
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

### Backend & API

- **Static Export:** No server-side rendering or API routes
- **Contact:** Direct mailto links and optional external services (Formspree)
- **Hosting:** GitHub Pages with static HTML/CSS/JS only

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

3. Create environment file:

```bash
cp .env.example .env.local
```

4. Update environment variables (optional for analytics):

```bash
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
```

> **Note:** No other environment variables are required. The portfolio is fully static with no backend dependencies.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build the static site for production:

```bash
npm run build
```

This generates a static export in the `out/` directory ready for deployment to GitHub Pages or any static host.

### Local Preview of Production Build

To preview the production build locally, you can use a static file server:

```bash
# Install a static server (if not already installed)
npm install -g serve

# Serve the out directory
serve out
```

Then open the URL shown in your terminal (typically http://localhost:3000).

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

### Contact Form Options

This portfolio uses static hosting on GitHub Pages, so there's no backend or serverless functions. Contact options include:

1. **Direct Email (Default):** Uses mailto links to open the user's email client

2. **External Form Service (Optional):** You can integrate with external services like Formspree:
   - Sign up for [Formspree](https://formspree.io)
   - Get your form endpoint ID
   - Update the contact page form action with your Formspree endpoint
   - This keeps the site fully static while adding form functionality

No API keys or backend configuration needed for the default setup!

## 🚀 Deployment

### GitHub Pages (Default)

This portfolio is configured for GitHub Pages deployment:

1. The repository is set up with GitHub Actions workflow (`.github/workflows/deploy.yml`)
2. Push to the `main` branch automatically triggers a build and deployment
3. The site is deployed to: `https://mohamedaziz-ouertatani.github.io/portfolio/`

**Manual Deployment:**

```bash
# Build the static site
npm run build

# The output is in the `out/` directory
# Commit and push to deploy via GitHub Actions
```

**Configuration:**

- `next.config.mjs` is pre-configured with `output: 'export'` for static export
- `basePath` and `assetPrefix` are set to `/portfolio` for GitHub Pages
- All images use `unoptimized: true` for static compatibility

### Vercel / Netlify (Alternative)

While designed for GitHub Pages, you can also deploy to:

- **Vercel:** Import from GitHub and deploy (remove `basePath` and `assetPrefix` from config)
- **Netlify:** Connect repository and use build command `npm run build` with publish directory `out`

> **Note:** This portfolio is 100% static with no server-side rendering, API routes, or backend dependencies. It works on any static hosting platform.

## 🗺️ Roadmap

Future enhancements planned for this portfolio:

- [ ] **Blog Section** - Add a blog with MDX support for technical writing
- [ ] **Project Details Pages** - Individual pages for each project with more screenshots and details
- [ ] **Testimonials** - Client and colleague testimonials section
- [ ] **Internationalization** - Multi-language support (English, French, Arabic)
- [ ] **Analytics Dashboard** - Personal analytics dashboard for tracking portfolio metrics
- [ ] **3D Elements** - Three.js integration for interactive 3D elements
- [ ] **Code Snippets** - Interactive code snippet showcase section
- [ ] **Newsletter** - Newsletter subscription with email integration
- [ ] **Search Functionality** - Global search across projects and blog posts
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
