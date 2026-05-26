# Moe Kyaw Aung - Senior Android Developer Portfolio

A modern, responsive portfolio website built with Next.js 15 App Router, Tailwind CSS (OKLCH colors), and Framer Motion.

## Features

- ✅ **Next.js 15 App Router** - Latest Next.js features
- ✅ **10 Pages** - Home, About, Skills, Projects, Case Studies, Blog, Contact, Resume, etc.
- ✅ **Tailwind CSS with OKLCH Colors** - Modern color palette
- ✅ **Framer Motion** - Smooth page transitions and animations
- ✅ **Server Actions** - For form submissions
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **TypeScript** - Type-safe code
- ✅ **Component Architecture** - Organized UI primitives and route-specific components

## Project Structure
moe-kyaw-aung-portfolio/
├── app/                    # Next.js App Router
│   ├── (routes)/          # Route group for pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # UI primitives (Button, Card, Badge)
│   ├── animations/       # Framer Motion animations
│   ├── layout/           # Header, Footer, Navigation
│   └── sections/         # Page sections (Hero, Skills, etc.)
├── actions/              # Server Actions
├── lib/                  # Utilities and data
└── public/              # Static assets


## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd moe-kyaw-aung-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

npm run build

Deployment
Deploy on Vercel, Netlify, or any platform that supports Next.js:
npm run build
License
MIT License - feel free to use this template for your own portfolio!
Contact
Moe Kyaw Aung - moe.kyaw.aung@example.com
Project: GitHub Repository

### 📄 **autoprefixer.config.js**
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
