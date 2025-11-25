# Tech Stack Overview

## Core Framework & Runtime
- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - UI library
- **React DOM 19.1.0** - React rendering
- **Node.js** - Runtime environment (implicit)

## Language & Type Safety
- **TypeScript 5** - Static type checking
- **JavaScript/JSX** - Primary development language

## Styling & CSS
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS processing tool
- **Custom CSS** - Global styles in `globals.css`

## Build Tools & Bundling
- **Turbopack** - Next.js bundler (used in dev & build)
- **ESBuild** - Fast JavaScript bundler (via Next.js)

## Email Service
- **Resend 6.5.2** - Transactional email API for contact form

## Rate Limiting & Caching
- **Upstash Redis 1.35.6** - Serverless Redis database
- **@upstash/ratelimit 2.0.7** - Rate limiting middleware

## Code Quality & Linting
- **ESLint 9.39.1** - JavaScript/TypeScript linter
- **ESLint Config Next 16.3.3** - Next.js ESLint configuration

## Development Environment
- **Cursor** - Code editor
- **Git** - Version control
- **GitHub** - Code repository hosting

## Hosting & Deployment
- **Vercel** - Deployment platform
- **GitHub Integration** - Automatic deployments via Git

## File Structure & Architecture
- **App Router** - Next.js App Router architecture
- **Server Components** - React Server Components
- **Client Components** - "use client" for interactivity
- **API Routes** - `/app/api/` directory for backend endpoints

## Image & Media Handling
- **Unoptimized images** - Custom image handling (configured in next.config.ts)
- **Static assets** - Images, videos, fonts in `/public` directory
- **Custom fonts** - Local font files (Aeonik, PPNeueWorld, PPWriter, Whyte)

## Security Features
- **Security headers** - X-Frame-Options, CSP, etc. (configured in next.config.ts)
- **XSS protection** - Input sanitization in API routes
- **Rate limiting** - Prevents abuse of contact form
- **HTTPS** - Automatic via Vercel

## Development Scripts
```bash
npm run dev      # Development server with Turbopack
npm run build    # Production build with Turbopack
npm start        # Production server
```

---

## Stack Summary

### Frontend
- Next.js 15 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- Custom fonts & assets

### Backend
- Next.js API Routes
- Resend (Email)
- Upstash Redis (Rate limiting)

### DevOps & Tools
- Git & GitHub
- Vercel (Hosting)
- Turbopack (Bundling)
- ESLint (Code quality)

### Infrastructure
- Vercel Edge Network
- Serverless functions
- Automatic SSL/HTTPS
- CI/CD via GitHub

