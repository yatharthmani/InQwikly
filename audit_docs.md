# INQWIKLLY Codebase Audit & Documentation

This document provides a breakdown of the INQWIKLLY marketing site codebase, explaining the purpose of each directory, file, and component.

## 1. Root Configuration Files

- **`tailwind.config.ts` / `globals.css`** (Tailwind v4 uses `globals.css` for theme configs):
  - Located in `src/app/globals.css`.
  - Defines the core design system: custom brand colors (`--color-brand-red`, `--color-brand-black`, `--color-brand-offwhite`) and connects the `Inter` font to the `font-sans` Tailwind utility.
- **`.env.example`**:
  - Provides a template for the environment variables required to run the backend services (Supabase URL/Key and Resend API Key).
- **`package.json`**:
  - Lists project dependencies. Key additions include `framer-motion` (animations), `lenis` (smooth scrolling), `@supabase/supabase-js` (database), `resend` (emails), and `lucide-react` (icons).

## 2. Core Application Layout (`src/app/`)

- **`layout.tsx`**:
  - The root layout of the Next.js application.
  - Injects the `Inter` font from Google Fonts.
  - Wraps the entire application in the `<SmoothScroll>` component for site-wide inertia scrolling.
  - Sets the global page background and text colors.
- **`page.tsx`**:
  - The main landing page.
  - Imports and sequentially stacks all the section components (Hero, WhatIsIt, HowItWorks, Categories, WhyInqwiklly, ClosingCTA).
- **`api/waitlist/route.ts`**:
  - The server-side API route for the waitlist form.
  - Receives the user's email via a POST request.
  - Saves the email to the Supabase database.
  - Triggers a confirmation email via Resend.
  - Contains fallback logic to simulate success if environment variables are not yet configured.

## 3. UI Components (`src/components/`)

- **`Navbar.tsx`**:
  - A sticky navigation bar.
  - Uses Framer Motion's `useScroll` and `useMotionValueEvent` to stay hidden at the top of the page and reveal itself dynamically once the user scrolls past the Hero section.
  - Contains a "Join waitlist" button that smoothly scrolls the user down to the ClosingCTA section.
- **`SmoothScroll.tsx`**:
  - A client-side wrapper component that initializes the `lenis` smooth scrolling library.
  - Hijacks the native scroll to provide a cinematic, inertia-based scrolling experience.

## 4. Page Sections (`src/components/sections/`)

This directory contains the individual modular sections of the landing page, presented in scroll order:

- **`Hero.tsx`**:
  - The first section visitors see.
  - **Function:** Introduces the brand with the "NEWS. WITHOUT THE NOISE." headline.
  - **Animation:** Uses a scattered particle effect where text fragments randomly generate across the screen, blur, and converge to disappear, simulating a "glitch/noise" effect before revealing the clean, bold headline.
- **`WhatIsIt.tsx`**:
  - **Function:** Explains the platform's core proposition.
  - **Animation:** Uses scroll-triggered reveals (`whileInView`) and a hand-drawn SVG underline that dynamically draws itself using `pathLength` and `useTransform` mapped to scroll progress.
- **`HowItWorks.tsx`**:
  - **Function:** Breaks down the process into 4 simple steps.
  - **Animation:** Features a staggered entrance animation using Framer Motion's `staggerChildren`, making the Lucide icons and text pop in sequentially as the section enters the viewport.
- **`Categories.tsx`**:
  - **Function:** Showcases the types of news covered using an icon grid.
  - **Animation:** The category cards fade and scale in sequentially. Uses hover effects to transition the cards to the brand red color.
- **`WhyInqwiklly.tsx`**:
  - **Function:** Delivers a punchy stat line: "30 seconds. One story. You're informed."
  - **Animation:** Highlights the stat line with an animated, hand-drawn-style SVG circle that draws itself around the text as the user scrolls into view.
- **`ClosingCTA.tsx`**:
  - **Function:** The final call to action. Houses the email capture form.
  - **Functionality:** Manages form state (idle, loading, success, error) and submits the email to the `/api/waitlist` Next.js route. Displays success/error messages based on the API response.

## 5. Library Utilities (`src/lib/`)

- **`supabase.ts`**:
  - Initializes the Supabase client used by the Next.js API routes.
  - Designed to fail gracefully (returning `null`) if environment variables are missing during local development, preventing build crashes while UI is being developed.
