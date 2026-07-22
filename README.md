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

**Development Assistance**
   - The initial application structure was generated with **OpenAI Codex** to speed up production.
   - The generated code was then extensively modified, refactored, and customized to create a prototype matching the intended website's design and functionality.


## Future Improvements

- Connect lead submissions to a CRM or email provider
- Add analytics and conversion tracking with consent management
- Add a CMS for case studies, domain pages, and testimonials
- Add automated accessibility and end-to-end browser tests
- Optimize the hero source into modern responsive image variants

## Development Process

This prototype was initially scaffolded using **OpenAI Codex** to accelerate development and establish the project structure, reusable components, routing, and base implementation.

After the initial generation, every page and component was manually reviewed and refined to match the intended prototype. This included:

- Reworking layouts and responsive behavior
- Updating styling with Tailwind CSS
- Modifying components to reflect the target website's user experience
- Refining copy, spacing, and interactions
- Implementing client/server validation and the mock API
- Optimizing assets and improving code organization

The final project is not a direct AI-generated output; it is a customized prototype built on top of an AI-assisted starting point.