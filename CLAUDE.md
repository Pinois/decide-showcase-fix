# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Gatsby-based showcase website for DEC!DE ASBL (https://decideetvous.com/), a Belgian non-profit organization focused on environmental education through transmedia approaches. The project uses a monorepo structure with packages for themes, components, and icons.

## Common Development Commands

### Development
- `npm run dev` - Start development server with Gatsby
- `npm run now-dev` - Start development server with PORT environment variable and prefix paths
- `gatsby develop` - Alternative development command

### Build & Deploy
- `npm run build` - Build the project for production with prefix paths
- `npm run serve` - Serve the built site locally
- `npm run start` - Alias for serve command

### Maintenance
- `npm run clean` - Clean Gatsby cache and build directories
- `npm run format` - Format code using Prettier for JS, JSX, JSON, and MD files

### Testing
- `npm run test` - Currently shows placeholder message to write tests

## Architecture & Structure

### Monorepo Structure
- **Root**: Main Gatsby site configuration and entry point
- **packages/common**: Shared utilities, hooks, and components
- **packages/icons**: Icon library with line-style icons
- **packages/themes**: Main theme system containing the Startup theme

### Key Technologies
- **Gatsby 2.24.67**: Static site generator
- **React 16.13.1**: UI library
- **Styled Components 5.2.0**: CSS-in-JS styling
- **TypeScript 4.0.3**: Type checking (dev dependency)
- **React Helmet**: Head management for SEO

### Theme Architecture
The main theme is located in `packages/themes/src/Startup/` and includes:
- **containers/**: Page sections (Welcome, About, Services, Team, etc.)
- **components/**: Reusable UI components (Button, Card, Typography, etc.)
- **data.jsx**: Site content and configuration
- **theme.js**: Theme configuration and design tokens

### Key Files
- `gatsby-config.js`: Main Gatsby configuration with plugins
- `src/pages/index.jsx`: Main page component using the Startup theme
- `packages/themes/src/Startup/data.jsx`: Site content and data
- `packages/themes/src/Startup/theme.js`: Theme configuration

### Content Structure
The site includes sections for:
- Welcome/Landing
- Services
- About
- Partners
- Team
- Administration
- Contact
- Copyright

### Analytics & Tracking
- Google Analytics integration via `gatsby-plugin-google-analytics`
- Umami analytics tracking script included in main page

### SEO & PWA
- SEO component for meta tags and structured data
- PWA manifest and offline support via `gatsby-plugin-offline`
- Service worker for caching

## Environment Variables
- `GATSBY_APP_DIR`: Path prefix for deployment
- `GOOGLE_ANALYTICS_TRACKING_ID`: Google Analytics tracking ID