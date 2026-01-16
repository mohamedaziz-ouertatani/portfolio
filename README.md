# Mohamed Aziz Ouertatani - Portfolio

[![CI](https://github.com/mohamedaziz-ouertatani/portfolio/workflows/CI/badge.svg)](https://github.com/mohamedaziz-ouertatani/portfolio/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)](https://www.typescriptlang.org/)

A modern, performant portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

> **🎯 Architecture:** This portfolio is 100% static with no server-side rendering, API routes, or backend dependencies. It's optimized for GitHub Pages deployment and can be hosted on any static hosting platform.

## 🌐 Live Demo

Visit the live portfolio: [https://mohamedaziz-ouertatani.github.io/portfolio/](https://mohamedaziz-ouertatani.github.io/portfolio/)

> **Note:** This portfolio is 100% static and deployed on GitHub Pages with no server-side rendering, API routes, or backend services.

## 📸 Screenshots

> Add screenshots of your portfolio here to showcase the design and features

## 🚀 Features

### Core Technologies

- **Next.js 14 App Router** - Modern React framework with static export for GitHub Pages
- **TypeScript** - Type-safe code for better developer experience and fewer runtime errors
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development with custom design system
- **Static Export** - 100% static site generation with `output: 'export'` configuration

### User Experience

- **Dark Mode** - Seamless theme toggle with localStorage persistence using next-themes
- **Responsive Design** - Mobile-first approach that works flawlessly on all devices and screen sizes
- **Project Filtering** - Client-side multi-select technology filter for easy project browsing
- **Contact Form** - mailto-based contact with validation and optional external service integration
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

- **Framework:** Next.js 14 (App Router) with static export
- **Language:** TypeScript 5.4
- **Styling:** Tailwind CSS 3.4
- **UI Components:** Custom components with Lucide React icons
- **Animations:** Framer Motion
- **Theme:** next-themes for dark mode

### Static Hosting

- **Platform:** GitHub Pages
- **Build Output:** Static HTML/CSS/JS (no server-side rendering)
- **Base Path:** `/portfolio` for GitHub Pages compatibility
- **Contact:** mailto links (no backend API)

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

4. Update environment variables in `.env.local` (all optional):

```bash
# Optional: Analytics tracking
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com

# Note: No backend API keys needed for static export
```

> **Note:** This is a static-only site. No server-side environment variables or API keys are required.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production (static export):

```bash
npm run build
```

This will generate a static site in the `out` directory.

### Preview Static Build Locally

Since this is a static export, you can preview the built site using any static file server:

```bash
# Using npx serve
npx serve out

# Or using Python
cd out && python3 -m http.server 3000

# Or using Node.js http-server
npx http-server out -p 3000
```

> **Note:** `npm start` is not available for static exports. Use a static file server instead.

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

This portfolio uses a static-only contact approach:

1. **Default Method:** mailto links that open the user's default email client
2. **Client-side Validation:** Form validation using React state (no server-side processing)
3. **External Services (Optional):** You can integrate with external form services like:
   - [Formspree](https://formspree.io) - Simple form backend
   - [Netlify Forms](https://www.netlify.com/products/forms/) - If deploying to Netlify
   - [Web3Forms](https://web3forms.com/) - Another form backend option

> **Note:** No API routes or backend services are used in this repository. All contact functionality is either client-side or relies on external services.

## 🚀 Deployment

### GitHub Pages (Current Deployment)

This portfolio is configured for GitHub Pages deployment:

1. **Automatic Deployment:**
   - Push to `main` branch triggers automatic deployment via GitHub Actions
   - Workflow: `.github/workflows/deploy.yml`
2. **Manual Deployment:**

   ```bash
   npm run build
   # The static files will be in the 'out' directory
   ```

3. **Configuration:**
   - `next.config.mjs` is configured with `output: 'export'`
   - Base path set to `/portfolio` for GitHub Pages
   - Static assets served from `/portfolio/` path

4. **GitHub Pages Setup:**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - Branch: main
   - The site will be available at: `https://<username>.github.io/portfolio/`

### Other Static Hosting Platforms

This static portfolio can be deployed to any static hosting service:

- **Netlify** - Drag and drop the `out` folder or connect to GitHub
- **Vercel** - Import project and deploy (will use static export automatically)
- **Cloudflare Pages** - Connect to GitHub and deploy
- **AWS S3 + CloudFront** - Upload the `out` folder to S3 bucket
- **Any Static Host** - Upload the contents of the `out` folder

> **Important:** When deploying to other platforms, update the `basePath` in `next.config.mjs` if not using a subdirectory, or remove it entirely for root domain deployment.

## 🗺️ Roadmap

Future enhancements planned for this portfolio (maintaining static-only approach):

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
