# The Dad Academy

A community and courses platform empowering new dads with confidence, practical guidance, and peer support.

## Tech Stack

- **Frontend:** React 18 + TypeScript + Vite
- **UI:** shadcn/ui + Tailwind CSS
- **Backend:** Supabase (Auth + PostgreSQL)
- **Routing:** React Router DOM
- **Data Fetching:** TanStack React Query

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- npm or bun

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd the-dad-academy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the project root:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will be available at **http://localhost:8080**

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/
│   ├── ui/          # shadcn/ui components
│   └── ...          # App components
├── hooks/           # Custom React hooks
├── integrations/    # Third-party integrations (Supabase)
├── lib/             # Utility functions
├── pages/           # Route pages
├── App.tsx          # Main app with routes
└── main.tsx         # Entry point
```

## Database

The app uses Supabase with the following tables:

- **contact_submissions** - Contact form entries
- **user_roles** - Role-based access control (admin/user)

Migrations are located in `supabase/migrations/`.

## Deployment

Build the project and deploy the `dist` folder to any static hosting:

```bash
npm run build
```

Compatible with Vercel, Netlify, Cloudflare Pages, or any static file server.

## Documentation

For detailed codebase documentation and migration notes, see [cursor-migration.md](./cursor-migration.md).
