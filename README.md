# Mohamed Aziz Ouertatani - Portfolio

[![CI](https://github.com/mohamedaziz-ouertatani/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/mohamedaziz-ouertatani/portfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black.svg)](https://nextjs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> 🌐 Modern, performant portfolio showcasing projects and experience

[Live Demo](https://mohamedaziz-ouertatani.github.io/portfolio) • [Report Bug](https://github.com/mohamedaziz-ouertatani/portfolio/issues) • [Request Feature](https://github.com/mohamedaziz-ouertatani/portfolio/issues)

A modern, performant portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 14 App Router** - Modern React framework with server components
- **TypeScript** - Type-safe code for better developer experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Dark Mode** - Theme toggle with localStorage persistence using next-themes
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Accessible** - WCAG compliant with semantic HTML, ARIA labels, and keyboard navigation
- **Performance** - Image optimization, font loading, and minimal client-side JavaScript
- **Project Filtering** - Multi-select technology filter for projects
- **Contact Form** - Client-side validation with serverless API route
- **Responsive** - Mobile-first design that works on all devices

## 📋 Prerequisites

- Node.js 18+ and npm

## 🛠️ Getting Started

### Installation

```bash
npm install
```

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

### Start Production Server

```bash
npm start
```

### Linting

```bash
npm run lint
```

### Format Code

```bash
npm run format
```

## 📁 Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── api/                 # API routes
│   │   └── contact/         # Contact form handler
│   ├── contact/             # Contact page
│   ├── projects/            # Projects page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── DarkModeToggle.tsx
│   ├── FilterBar.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ProjectCard.tsx
│   └── ThemeProvider.tsx
├── lib/                     # Data and utilities
│   ├── experiences.ts
│   ├── projects.ts
│   └── skills.ts
├── public/                  # Static assets
│   ├── cv.pdf
│   ├── images/
│   ├── robots.txt
│   └── sitemap.xml
└── Configuration files
```

## 📸 Screenshots

> **Note**: Add screenshots of your portfolio here to showcase the design and features.
> 
> Recommended sections:
> - Homepage hero section
> - Projects showcase
> - Dark mode comparison
> - Mobile responsive views

## 🎯 Lighthouse Scores

> **Note**: Run Lighthouse audits and add your actual scores here.
> 
> Target scores:
> - Performance: ≥ 90
> - Accessibility: ≥ 95
> - Best Practices: ≥ 95
> - SEO: ≥ 95

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

### Contact Form Email Integration

The contact form currently logs to console. To integrate with an email service:

1. Install your preferred service (e.g., Resend):

```bash
npm install resend
```

2. Update `app/api/contact/route.ts` with your email service logic
3. Add API key to environment variables

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Performance

Target Lighthouse Scores:

- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

## 🐛 Troubleshooting

### Common Issues

**Build fails with module not found errors**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Dark mode not persisting**
- Check browser localStorage is enabled
- Clear browser cache and reload

**Images not loading in production**
- Ensure images are in the `public` directory
- Check `next.config.mjs` for correct `basePath` and `assetPrefix`

**TypeScript errors**
```bash
npm run typecheck
```

**Linting errors**
```bash
npm run lint -- --fix
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a Pull Request.

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Mohamed Aziz Ouertatani**

- GitHub: [@mohamedaziz-ouertatani](https://github.com/mohamedaziz-ouertatani)
- LinkedIn: [mohamed-aziz-ouertatani](https://www.linkedin.com/in/mohamed-aziz-ouertatani)
- Email: ouertatanimohamedaziz@gmail.com
