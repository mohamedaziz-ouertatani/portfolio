# Mohamed Aziz Ouertatani - Portfolio

[![Build Status](https://img.shields.io/github/actions/workflow/status/mohamedaziz-ouertatani/portfolio/ci.yml?branch=main)](https://github.com/mohamedaziz-ouertatani/portfolio/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)](https://www.typescriptlang.org/)

A modern, high-performance portfolio built with cutting-edge web technologies, showcasing projects, experience, and skills with exceptional user experience.

## 🌐 Live Demo

**[View Live Demo →](https://mohamedaziz-ouertatani.github.io)**

## 📸 Screenshots

<div align="center">
  <img src="public/images/screenshot-home.png" alt="Homepage" width="45%">
  <img src="public/images/screenshot-dark.png" alt="Dark Mode" width="45%">
</div>

## ⚡ Performance

Actual Lighthouse Scores (Desktop):

| Category          | Score |
| ----------------- | ----- |
| 🎯 Performance    | 95+   |
| ♿ Accessibility  | 100   |
| 🔧 Best Practices | 100   |
| 🔍 SEO            | 100   |

_Scores measured on production build with Lighthouse CI_

## 🚀 Features

### Core Features

- **⚡ Next.js 14 App Router** - Leveraging the latest React Server Components for optimal performance
- **🎨 TypeScript** - Type-safe development with enhanced IDE support and fewer runtime errors
- **💅 Tailwind CSS** - Utility-first CSS with JIT compiler for minimal bundle size
- **🌓 Dark Mode** - Seamless theme switching with system preference detection and persistence
- **📱 PWA Support** - Progressive Web App with offline capabilities and installable experience
- **🔍 SEO Optimized** - Meta tags, Open Graph, Twitter Cards, JSON-LD structured data, dynamic sitemap
- **♿ WCAG Compliant** - Semantic HTML, ARIA labels, keyboard navigation, and screen reader support
- **🚀 Performance First** - Image optimization with Sharp, font optimization, minimal JavaScript
- **🎯 Project Filtering** - Dynamic multi-select technology filter with smooth animations
- **📧 Contact Form** - Form validation with Zod schema validation and email integration
- **📊 Analytics Ready** - Plausible Analytics integration (privacy-friendly)
- **🎭 Framer Motion** - Smooth animations and page transitions

### Developer Experience

- **🧪 Comprehensive Testing** - Unit tests with Jest and E2E tests with Playwright
- **🔒 Security** - Regular dependency updates via Dependabot and security scanning
- **🎨 Code Quality** - ESLint, Prettier, and automated pre-commit hooks
- **📦 Bundle Analyzer** - Built-in bundle size analysis and optimization
- **🔄 CI/CD** - Automated testing, building, and deployment with GitHub Actions
- **📈 Lighthouse CI** - Automated performance monitoring on every PR

## 🛠️ Tech Stack

### Frontend

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5.4
- **Styling:** Tailwind CSS 3.4
- **UI Components:** Lucide React (icons)
- **Animations:** Framer Motion 11
- **Theme Management:** next-themes

### Backend & APIs

- **API Routes:** Next.js API Routes
- **Email Service:** Resend
- **Validation:** Zod

### Developer Tools

- **Testing:** Jest, React Testing Library, Playwright
- **Code Quality:** ESLint, Prettier, lint-staged
- **Git Hooks:** Husky
- **Bundle Analysis:** @next/bundle-analyzer
- **CI/CD:** GitHub Actions
- **Performance:** Lighthouse CI

### Image Optimization

- **Sharp:** High-performance image processing

## 📋 Prerequisites

- **Node.js:** 20.x or higher (see `.nvmrc`)
- **npm:** 9.x or higher

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mohamedaziz-ouertatani/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com
RESEND_API_KEY=your-resend-api-key
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run typecheck    # Type check with TypeScript
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:e2e     # Run E2E tests with Playwright
npm run test:e2e:ui  # Run E2E tests with UI
npm run check        # Run typecheck + lint
npm run analyze      # Analyze bundle size
```

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── about/                   # About page
│   ├── api/                     # API routes
│   │   └── contact/             # Contact form endpoint
│   ├── contact/                 # Contact page
│   ├── projects/                # Projects showcase
│   ├── resume/                  # Resume/CV page
│   ├── globals.css              # Global styles & Tailwind imports
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage
│   ├── robots.ts                # Dynamic robots.txt
│   └── sitemap.ts               # Dynamic XML sitemap
├── components/                   # React components
│   ├── __tests__/               # Component unit tests
│   ├── DarkModeToggle.tsx       # Theme switcher
│   ├── FilterBar.tsx            # Project filter component
│   ├── Footer.tsx               # Site footer
│   ├── Header.tsx               # Navigation header
│   ├── ProjectCard.tsx          # Project display card
│   └── ThemeProvider.tsx        # Theme context provider
├── e2e/                         # End-to-end tests
│   └── home.spec.ts             # Homepage E2E tests
├── lib/                         # Utilities and data
│   ├── experiences.ts           # Work experience data
│   ├── projects.ts              # Project portfolio data
│   ├── skills.ts                # Technical skills
│   └── validations.ts           # Zod schemas
├── public/                      # Static assets
│   ├── images/                  # Image assets
│   ├── cv.pdf                   # Resume PDF
│   ├── favicon.ico              # Site favicon
│   └── manifest.json            # PWA manifest
└── Configuration files
    ├── .env.example             # Environment template
    ├── .eslintrc.json           # ESLint config
    ├── .prettierrc              # Prettier config
    ├── jest.config.js           # Jest configuration
    ├── playwright.config.ts     # Playwright E2E config
    ├── lighthouserc.js          # Lighthouse CI config
    ├── next.config.mjs          # Next.js config
    ├── tailwind.config.ts       # Tailwind CSS config
    └── tsconfig.json            # TypeScript config
```

## 🎨 Customization

### Update Personal Information

1. **Projects**: Edit `lib/projects.ts` to add/update your projects
2. **Experience**: Edit `lib/experiences.ts` for work history
3. **Skills**: Edit `lib/skills.ts` to showcase your technical skills
4. **Images**: Add project images to `public/images/`
5. **CV/Resume**: Replace `public/cv.pdf` with your resume

### Metadata & SEO

Update SEO metadata in:

- `app/layout.tsx` - Global site metadata and structured data
- `app/sitemap.ts` - Dynamic sitemap generation
- `app/robots.ts` - Search engine crawling rules
- Individual page files - Page-specific metadata

### Styling & Theming

- **Tailwind Config**: `tailwind.config.ts` - Colors, fonts, breakpoints
- **Global Styles**: `app/globals.css` - CSS variables and base styles
- **Dark Mode**: Automatic via `next-themes` with system preference detection

### Analytics Integration

Set up Plausible Analytics (privacy-friendly, GDPR compliant):

1. Add environment variable:
   ```bash
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
   ```
2. Analytics script is auto-injected in `app/layout.tsx`

### Contact Form Email Setup

Configure email delivery with Resend:

1. Get API key from [Resend](https://resend.com)
2. Add to `.env.local`:
   ```bash
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```
3. Email logic is in `app/api/contact/route.ts`

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mohamedaziz-ouertatani/portfolio)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy automatically on push to main

### GitHub Pages

The repository includes a workflow for GitHub Pages deployment:

1. Enable GitHub Pages in repository settings
2. Push to main branch
3. Automatic deployment via `.github/workflows/deploy.yml`

### Other Platforms

Compatible with any platform supporting Next.js:

- **Netlify** - Zero-config deployment
- **AWS Amplify** - Full AWS integration
- **Railway** - Simple deployment with Git
- **DigitalOcean App Platform** - Managed platform
- **Cloudflare Pages** - Edge deployment

### Environment Variables for Production

Required environment variables:

```env
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com
RESEND_API_KEY=your-api-key
NEXT_PUBLIC_SITE_URL=https://your-production-url.com
```

## 🧪 Testing

### Unit Tests

Run Jest unit tests:

```bash
npm run test
npm run test:watch  # Watch mode for development
```

### End-to-End Tests

Run Playwright E2E tests:

```bash
npm run test:e2e       # Headless mode
npm run test:e2e:ui    # Interactive UI mode
```

E2E tests cover:

- Homepage navigation and content
- Dark mode toggle functionality
- Page routing and transitions
- Form validation
- Mobile responsiveness

### Coverage

Generate test coverage report:

```bash
npm run test -- --coverage
```

## 🔒 Security

- **Dependency Updates**: Automated via Dependabot
- **Vulnerability Reporting**: See [SECURITY.md](SECURITY.md)
- **Form Validation**: Zod schema validation on client and server
- **XSS Protection**: Next.js built-in protections
- **HTTPS**: Enforced on all production deployments

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`npm run check && npm test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 🐛 Troubleshooting

### Common Issues

**Port 3000 already in use:**

```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9
# Or use a different port
PORT=3001 npm run dev
```

**Module not found errors:**

```bash
# Clear cache and reinstall dependencies
rm -rf node_modules package-lock.json .next
npm install
```

**TypeScript errors after update:**

```bash
# Rebuild TypeScript declarations
npm run build
```

**Playwright browser not installed:**

```bash
npx playwright install --with-deps
```

**Husky hooks not running:**

```bash
# Reinstall git hooks
npx husky install
chmod +x .husky/*
```

### Build Issues

If you encounter build errors:

1. Check Node.js version matches `.nvmrc` (20.x)
2. Clear Next.js cache: `rm -rf .next`
3. Verify environment variables are set
4. Check for TypeScript errors: `npm run typecheck`

### Getting Help

- **Issues**: [GitHub Issues](https://github.com/mohamedaziz-ouertatani/portfolio/issues)
- **Email**: ouertatanimohamedaziz@gmail.com

## 🗺️ Roadmap

### Planned Features

- [ ] **Blog System** - Integrated blog with MDX support
- [ ] **Internationalization** - Multi-language support (English, French, Arabic)
- [ ] **CMS Integration** - Headless CMS for easier content management
- [ ] **Advanced Analytics** - Custom analytics dashboard
- [ ] **GraphQL API** - Expose portfolio data via GraphQL
- [ ] **AI Chatbot** - Interactive assistant for visitors
- [ ] **3D Elements** - Three.js integration for interactive visuals
- [ ] **Case Studies** - Detailed project breakdowns
- [ ] **Testimonials** - Client/colleague recommendations
- [ ] **Resume Builder** - Generate resume from data
- [ ] **Project Search** - Advanced project search and filtering

### In Progress

- [x] Testing infrastructure (Jest + Playwright)
- [x] CI/CD pipeline
- [x] PWA support
- [x] Performance optimization
- [x] Accessibility improvements

### Completed

- [x] Next.js 14 App Router migration
- [x] Dark mode implementation
- [x] SEO optimization
- [x] Contact form with validation
- [x] Responsive design
- [x] Project filtering
- [x] Dynamic sitemap and robots.txt

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mohamed Aziz Ouertatani**

- 🌐 Website: [mohamedaziz-ouertatani.github.io](https://mohamedaziz-ouertatani.github.io)
- 💼 GitHub: [@mohamedaziz-ouertatani](https://github.com/mohamedaziz-ouertatani)
- 💼 LinkedIn: [mohamed-aziz-ouertatani](https://www.linkedin.com/in/mohamed-aziz-ouertatani)
- 📧 Email: ouertatanimohamedaziz@gmail.com

## ⭐ Show Your Support

If you found this portfolio helpful, please give it a ⭐ on GitHub!

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Playwright Documentation](https://playwright.dev/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)

---

<div align="center">
  <p>Built with ❤️ using Next.js, TypeScript, and Tailwind CSS</p>
  <p>© 2026 Mohamed Aziz Ouertatani. All rights reserved.</p>
</div>
