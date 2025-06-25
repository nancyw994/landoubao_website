# Replit.md - AI Toy Company Website

## Overview

This is a full-stack web application for an AI toy company called "蓝豆包" (Blue Bean). The application features a modern Chinese-language website showcasing AI-powered toys and services, with both consumer and enterprise business sections. The tech stack includes React frontend with TypeScript, Express.js backend, and PostgreSQL database with Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **API Design**: RESTful API endpoints
- **Development**: Hot reloading with tsx

### Build System
- **Frontend**: Vite with React plugin and runtime error overlay
- **Backend**: esbuild for production bundling
- **Development**: Concurrent frontend and backend development
- **Production**: Static file serving with Express

## Key Components

### Database Schema
Located in `shared/schema.ts`:
- **Products**: AI toys with name, description, price, image, category, and features
- **Testimonials**: User reviews with ratings and avatars
- **News Articles**: Company news and industry updates with timestamps

### Frontend Components
- **Hero Section**: Main landing page with company introduction
- **Featured Products**: Product showcase with API integration
- **Business Toggle**: Switch between consumer and enterprise views
- **AI Showcase**: Technology demonstration section
- **Testimonials**: Customer feedback display
- **News Section**: Latest company and industry news
- **Responsive Header/Footer**: Navigation and company information

### API Endpoints
- `GET /api/products` - Fetch all products
- `GET /api/products/:id` - Fetch single product
- `GET /api/testimonials` - Fetch customer testimonials
- `GET /api/news` - Fetch news articles
- `GET /api/news/:id` - Fetch single news article

## Data Flow

1. **Client Requests**: React components use TanStack Query to fetch data
2. **API Layer**: Express.js routes handle HTTP requests
3. **Data Access**: Storage layer abstracts database operations
4. **Database**: PostgreSQL with Drizzle ORM for type-safe queries
5. **Response**: JSON data sent back to client components

### Database Storage
- PostgreSQL database with Drizzle ORM (`DatabaseStorage`)
- Persistent data storage for products, testimonials, news, and users
- Automatic database schema migration with `npm run db:push`
- Seeded with sample data on first run

## External Dependencies

### Core Dependencies
- **React Ecosystem**: react, react-dom, @tanstack/react-query
- **Database**: drizzle-orm, @neondatabase/serverless, drizzle-zod
- **UI Framework**: Multiple @radix-ui components, tailwindcss
- **Development**: vite, tsx, typescript, esbuild
- **Utilities**: date-fns, clsx, class-variance-authority

### Development Tools
- **Replit Integration**: Runtime error modal and cartographer plugins
- **Code Quality**: TypeScript strict mode, ESLint-ready structure
- **Build Optimization**: Tree shaking, code splitting via Vite

## Deployment Strategy

### Development Environment
- **Port Configuration**: Frontend proxy through port 5000
- **Hot Reloading**: Vite dev server with HMR
- **Database**: PostgreSQL 16 module in Replit
- **Environment**: NODE_ENV=development

### Production Build
- **Frontend**: Static files built to `dist/public`
- **Backend**: Bundled to `dist/index.js` with esbuild
- **Deployment**: Autoscale deployment target on Replit
- **Static Serving**: Express serves built frontend files

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Build Commands**: `npm run build` for production, `npm run dev` for development
- **Start Command**: `npm run start` for production server

## Recent Changes

Recent Changes:
- June 25, 2025: Initial setup with basic homepage
- June 25, 2025: Created custom logo design for 蓝豆包 with blue gradient and orange accent
- June 25, 2025: Implemented full navigation system with 7 main pages:
  * 首页 (Home) - Main landing page
  * 关于我们 (About) - Company story, values, and team
  * 产品中心 (Products) - Product catalog with filtering
  * 技术服务 (Services) - Enterprise AI solutions
  * 线上商城 (Mall) - E-commerce platform
  * 新闻中心 (News) - Company news and industry updates
  * 联系我们 (Contact) - Contact information and form
- June 25, 2025: Enhanced header with responsive mobile menu and active page indication
- June 25, 2025: Migrated from in-memory storage to PostgreSQL database with Drizzle ORM

## User Preferences

Preferred communication style: Simple, everyday language.