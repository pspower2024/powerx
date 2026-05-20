# ResuméAI

AI-powered resume builder built with Next.js 14, Tailwind CSS, and the Anthropic API.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Anthropic API key:

```
ANTHROPIC_API_KEY=sk-ant-...
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- 🤖 AI-powered resume content generation
- 📝 Cover letter generator
- ✨ Text improvement suggestions
- 🎨 3 professional templates (Modern, Classic, Minimal)
- ⚡ Live preview as you type
- 📄 PDF export via browser print dialog

## Project Structure

```
resumeai/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Landing page entry
│   ├── globals.css         # Global styles
│   ├── builder/
│   │   └── page.tsx        # Builder page entry
│   └── api/
│       └── generate/
│           └── route.ts    # AI generation API route
├── components/
│   ├── HomeClient.tsx      # Landing page UI
│   ├── BuilderClient.tsx   # Builder page UI
│   ├── BuilderForm.tsx     # Form panel
│   ├── ResumePreview.tsx   # Template switcher
│   ├── resume-templates/
│   │   ├── ModernResume.tsx
│   │   ├── ClassicResume.tsx
│   │   └── MinimalResume.tsx
│   └── ui/
│       ├── Navbar.tsx
│       ├── Toast.tsx
│       ├── Spinner.tsx
│       └── CoverLetterModal.tsx
└── lib/
    ├── types.ts            # Shared types, constants, demo data
    └── ai.ts              # AI prompt builders & fetch helper
```

## Deploy

Deploy to Vercel with one click. Add `ANTHROPIC_API_KEY` to your Vercel environment variables.
