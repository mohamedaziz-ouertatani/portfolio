# Deployment Guide

## Vercel (Recommended)

1. Push to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables from `.env.example`
4. Deploy with default settings

Vercel will automatically detect Next.js and configure the build settings.

## Environment Variables

See `.env.example` for all required and optional environment variables:

```bash
# Required for analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com

# Required for contact form
RESEND_API_KEY=your_resend_api_key_here

# Optional: Custom domain
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Custom Domain

### Vercel
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Other Platforms
Refer to your hosting platform's documentation for custom domain setup.

## GitHub Pages

The project is configured for GitHub Pages deployment:

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at `https://username.github.io/portfolio`

**Note**: GitHub Pages deployment uses static export mode configured in `next.config.mjs`.

## Other Platforms

### Netlify
1. Import project from GitHub
2. Build command: `npm run build`
3. Publish directory: `out` (for static export) or `.next` (for server mode)

### AWS Amplify
1. Connect your GitHub repository
2. Amplify auto-detects Next.js configuration
3. Add environment variables
4. Deploy

### Railway
1. Create new project from GitHub
2. Railway detects Next.js automatically
3. Add environment variables
4. Deploy

## Build Optimization

Before deploying to production:

```bash
# Check bundle size
npm run analyze

# Run type checking
npm run typecheck

# Run linting
npm run lint

# Run tests
npm run test:ci
npm run test:e2e
```

## Performance Monitoring

Consider adding:
- [Vercel Analytics](https://vercel.com/analytics)
- [Plausible Analytics](https://plausible.io) (already integrated)
- [Sentry](https://sentry.io) for error tracking
