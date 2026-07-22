# Cheap Machines — Band Website

Official website for **Cheap Machines**, built with Next.js and deployed on Vercel.

🔗 [cheapmachines-music.vercel.app](https://cheapmachines-music.vercel.app)

---

## Tech Stack

- **Framework** — [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing** — [React Router v7](https://reactrouter.com/)
- **Icons** — [Lucide React](https://lucide.dev/)
- **Deployment** — [Vercel](https://vercel.com/)
- **Email (Contact Form)** — [Resend](https://resend.com/)

---

## Features

- Home / landing page
- Shows page with upcoming tour dates
- Contact form powered by Resend

---

## Getting Started

### Prerequisites

- Node.js 20+
- A [Resend](https://resend.com/) account and API key

### Install dependencies

```bash
npm install
```

### Environment variables

Create a `.env.local` file in the root of the project:

```env
VITE_RESEND_API_KEY=your_resend_api_key_here
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other scripts

```bash
npm run build     # Production build
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

---

## Deployment

The site is deployed via [Vercel](https://vercel.com/). Push to the main branch to trigger a deployment.

Make sure to add any environment variables (e.g. `VITE_RESEND_API_KEY`) to your Vercel project under **Settings → Environment Variables**. Note that Vite requires client-side env vars to be prefixed with `VITE_` to be exposed to the browser.

---

## Project Structure

```
/
├── public/               # Static assets (images, fonts, etc.)
├── src/
│   ├── main.jsx          # App entry point
│   ├── App.jsx           # Root component & route definitions
│   ├── pages/            # Page components (Home, Shows, Contact, etc.)
│   ├── components/       # Shared/reusable components
│   └── styles/           # CSS / global styles
├── .env.local            # Local environment variables (not committed)
├── index.html            # Vite HTML entry point
└── vite.config.js        # Vite configuration
```

---

## Contact

Website: [cheapmachines-music.vercel.app](https://cheapmachines-music.vercel.app)