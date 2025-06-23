# Artistly.com - Performing Artist Booking Platform

A modern, responsive web application for connecting event planners with performing artists. Built with Next.js 13+ App Router, React, and Tailwind CSS.

## 🎯 Project Overview

Artistly.com is a fictional platform designed to facilitate connections between event planners and artist managers. The platform allows event planners to browse artist profiles, filter by various criteria, and submit booking requests. Artist managers can onboard new artists and manage submissions through a dashboard.

## 🛠 Tech Stack

- **Framework**: Next.js 15.3.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN/UI
- **Form Handling**: React Hook Form + Zod
- **State Management**: React Hooks (useState, useEffect, useContext)
- **Routing**: Next.js App Router
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── app/
│   ├── artists/
│   │   └── page.tsx          # Artist listing with filters
│   ├── contact/
│   │   └── page.tsx          # Contact form
│   ├── dashboard/
│   │   └── page.tsx          # Manager dashboard
│   ├── onboarding/
│   │   └── page.tsx          # Artist onboarding form
│   ├── privacy/
│   │   └── page.tsx          # Privacy policy
│   ├── terms/
│   │   └── page.tsx          # Terms of service
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Homepage
├── components/
│   └── ui/
│       ├── Navbar.tsx        # Responsive navigation
│       ├── button.tsx        # Button component
│       ├── card.tsx          # Card component
│       ├── input.tsx         # Input component
│       ├── select.tsx        # Select component
│       ├── table.tsx         # Table component
│       └── ...               # Other UI components
└── data/
    └── artists.json          # Static artist data
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohd-sharique79/artistly-frontend
   cd artistly-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```
