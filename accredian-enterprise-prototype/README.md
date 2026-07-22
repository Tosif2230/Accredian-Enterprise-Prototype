# Accredian - prototype

A responsive enterprise-learning landing page built as an original, portfolio-safe interpretation of a modern corporate training experience. It pairs a content-led marketing page with a validated mock lead capture flow.

## Tech Stack

- Next.js 15 with the App Router
- React and TypeScript
- Tailwind CSS v4
- Next.js Image optimization
- Route Handlers for the mock API

## Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For production verification, run `npm run lint` and `npm run build`.

## Project Structure

```text
app/              Routes, global styling, metadata, and API handlers
components/       Landing-page sections and interactive components
components/ui/    Shared icon and section-heading primitives
lib/              Typed static content and navigation data
public/images/    Optimized local visual assets
types/            Shared TypeScript content types
```

## Features

- Mobile-first, responsive single-page layout
- Semantic sections, keyboard-accessible mobile navigation, and FAQ accordion
- Original local hero image rendered through `next/image`
- Reusable typed cards, headings, and content data
- Client and server validation for name, email, phone, and company
- `POST /api/lead` returns `{ "success": true, "message": "Lead submitted successfully" }` for valid leads
- Vercel-ready configuration with no environment variables required

## AI Usage

The project uses an AI-generated, original editorial hero image stored locally in `public/images/hero-learning.png`. The design, layout, copy, components, and code were created specifically for this project; no reference-site logos or assets were copied.

## Future Improvements

- Connect lead submissions to a CRM or email provider
- Add analytics and conversion tracking with consent management
- Add a CMS for case studies, domain pages, and testimonials
- Add automated accessibility and end-to-end browser tests
- Optimize the hero source into modern responsive image variants

## Deployment

Push the repository to GitHub and import it into Vercel. Vercel detects Next.js automatically; use the default build command (`npm run build`) and output settings.
