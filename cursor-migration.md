# The Dad Academy - Codebase Overview & Migration Guide

> **Purpose:** This document provides a complete overview of the codebase and step-by-step instructions for disconnecting from Lovable.dev and running the project in a local development environment.

---

## 📋 Table of Contents

1. [Codebase Overview](#codebase-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Supabase Integration](#supabase-integration)
5. [Lovable Dependencies to Remove](#lovable-dependencies-to-remove)
6. [Migration Steps](#migration-steps)
7. [Environment Variables](#environment-variables)
8. [Running Locally](#running-locally)
9. [Deployment Options](#deployment-options)

---

## 🏗️ Codebase Overview

**The Dad Academy** is a community and courses platform for new fathers. The application is a single-page React app with the following key features:

- **Home page** with hero section, testimonials, and CTAs
- **About page** with founder information
- **Courses page** showcasing available courses
- **Community page** for the dad community
- **Contact page** with a form (submits to Supabase)
- **Authentication** (sign up/sign in via Supabase Auth)
- **Admin Dashboard** for viewing contact submissions (role-based access)
- **Privacy Policy & Terms pages**

---

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **Vite** | Build tool and dev server |
| **React 18** | UI framework |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS** | Utility-first styling |
| **shadcn/ui** | Pre-built accessible UI components (Radix-based) |
| **React Router DOM** | Client-side routing |
| **React Query (TanStack)** | Data fetching and caching |
| **Supabase** | Backend-as-a-Service (Auth + PostgreSQL database) |
| **React Hook Form + Zod** | Form handling and validation |
| **Lucide React** | Icon library |
| **React Helmet Async** | SEO meta tags management |

---

## 📁 Project Structure

```
the-dad-academy/
├── public/                    # Static assets (favicon, logo, robots.txt)
├── src/
│   ├── assets/               # Images (hero, founder photos)
│   ├── components/
│   │   ├── ui/               # shadcn/ui component library (40+ components)
│   │   ├── Layout.tsx        # Main layout with header/footer
│   │   ├── MobileBottomCTA.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── SEO.tsx           # Meta tags component
│   ├── hooks/
│   │   ├── useAuth.tsx       # Authentication hook (Supabase)
│   │   ├── use-mobile.tsx    # Mobile detection
│   │   └── use-toast.ts      # Toast notifications
│   ├── integrations/
│   │   └── supabase/
│   │       ├── client.ts     # Supabase client initialization
│   │       └── types.ts      # Database TypeScript types
│   ├── lib/
│   │   └── utils.ts          # Utility functions (cn helper)
│   ├── pages/                # Route components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Courses.tsx
│   │   ├── Community.tsx
│   │   ├── Contact.tsx
│   │   ├── Auth.tsx
│   │   ├── AdminDashboard.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   ├── Terms.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx               # Main app with routes
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles + CSS variables
├── supabase/
│   ├── config.toml           # Supabase project config
│   └── migrations/           # Database migration SQL files
├── components.json           # shadcn/ui configuration
├── tailwind.config.ts        # Tailwind configuration
├── vite.config.ts            # Vite configuration
├── package.json              # Dependencies
└── tsconfig.json             # TypeScript configuration
```

---

## 🔗 Supabase Integration

### Database Tables

1. **`contact_submissions`** - Stores contact form submissions
   - `id`, `name`, `email`, `phone`, `message`, `created_at`
   - RLS: Anyone can insert, only admins can view/delete

2. **`user_roles`** - Role-based access control
   - `id`, `user_id`, `role` (enum: 'admin' | 'user'), `created_at`
   - Used for admin dashboard access

### Current Project ID
```
Project ID: vrcwyouynfuogqxfwtsm
```

### Environment Variables Needed
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY` - Your Supabase anon/public key

---

## 🚫 Lovable Dependencies to Remove

### 1. NPM Package
**File:** `package.json`
```json
"lovable-tagger": "^1.1.10"  // Remove this devDependency
```

### 2. Vite Plugin
**File:** `vite.config.ts`
```typescript
// Remove this import:
import { componentTagger } from "lovable-tagger";

// Remove from plugins array:
mode === "development" && componentTagger()
```

### 3. External Image URLs
**File:** `index.html`

The OG/Twitter images are hosted on Lovable's Google Cloud Storage:
```
https://storage.googleapis.com/gpt-engineer-file-uploads/...
```
These need to be replaced with your own hosted images.

### 4. README.md
The entire README references Lovable - you'll want to replace it with your own documentation.

---

## 🚀 Migration Steps

### Step 1: Remove `lovable-tagger` from package.json

Open `package.json` and remove this line from `devDependencies`:
```json
"lovable-tagger": "^1.1.10",
```

### Step 2: Update vite.config.ts

Replace the entire file with:
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### Step 3: Create Environment File

Create a `.env` file in the project root:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

**To get these values:**
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Either use the existing project (`vrcwyouynfuogqxfwtsm`) or create a new one
3. Go to Project Settings → API
4. Copy the "Project URL" and "anon public" key

### Step 4: Replace OG Images (Optional but Recommended)

In `index.html`, replace the Lovable-hosted images with your own:

```html
<!-- Replace these lines with your own image URLs -->
<meta property="og:image" content="/logo.png">
<meta name="twitter:image" content="/logo.png">
```

Or host the social images on your own CDN/storage.

### Step 5: Install Dependencies

```bash
npm install
```

This will install all dependencies without the removed `lovable-tagger`.

### Step 6: (Optional) Set Up Supabase Locally

If you want to run Supabase locally for development:

```bash
# Install Supabase CLI
npm install -g supabase

# Start local Supabase
supabase start

# Apply migrations
supabase db push
```

Then update your `.env` with local credentials:
```env
VITE_SUPABASE_URL=http://localhost:54321
VITE_SUPABASE_PUBLISHABLE_KEY=<your-local-anon-key>
```

---

## 🔐 Environment Variables

Create a `.env` file with:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://vrcwyouynfuogqxfwtsm.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key_here
```

> ⚠️ **Important:** Never commit `.env` files to version control. Add `.env` to your `.gitignore`.

---

## 💻 Running Locally

### Prerequisites
- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- npm or bun

### Development Server

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at: **http://localhost:8080**

### Other Commands

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 🌐 Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repo to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify
1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Cloudflare Pages
1. Connect your GitHub repo
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Add environment variables in dashboard

### Self-Hosted
```bash
npm run build
# Serve the 'dist' folder with any static file server (nginx, caddy, etc.)
```

---

## ✅ Post-Migration Checklist

- [ ] Remove `lovable-tagger` from package.json
- [ ] Update vite.config.ts (remove componentTagger)
- [ ] Create `.env` file with Supabase credentials
- [ ] Replace OG/Twitter image URLs in index.html
- [ ] Run `npm install` to update node_modules
- [ ] Test locally with `npm run dev`
- [ ] Verify Supabase connection (contact form, auth)
- [ ] Update or replace README.md
- [ ] Add `.env` to `.gitignore` if not already there
- [ ] Deploy to your preferred hosting platform

---

## 🎨 Design System

The app uses a custom color palette defined in `src/index.css`:

| Color | HSL Value | Usage |
|-------|-----------|-------|
| Brick Red | `4 48% 32%` | Primary CTAs |
| Sage Green | `168 21% 48%` | Secondary actions |
| Steel Blue | `203 24% 55%` | Text and tertiary |
| Deep Navy | `199 100% 13%` | Accents |
| Charcoal | `210 35% 7%` | Dark backgrounds |

Typography uses **Inter** font family loaded from Google Fonts.

---

## 📞 Support

If you encounter any issues during migration, check:
1. Environment variables are correctly set
2. Supabase project is active and accessible
3. All dependencies are installed (`npm install`)
4. Node.js version is 18 or higher

---

*Last updated: January 2026*
