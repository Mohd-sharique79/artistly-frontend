"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar({ dashboard = false }: { dashboard?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-background border-b px-4 lg:px-6 h-14 flex items-center relative">
      <Link className="flex items-center justify-center" href="/">
        <span className="font-semibold">Artistly{dashboard ? ' Dashboard' : ''}</span>
      </Link>
      {/* Hamburger for mobile */}
      <button
        className="ml-auto flex items-center justify-center lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label="Open navigation menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Desktop nav */}
      <nav className="ml-auto gap-4 sm:gap-6 hidden lg:flex">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
          Home
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/artists">
          Artists
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/onboarding">
          For Artists
        </Link>
        {dashboard && (
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard">
            Dashboard
          </Link>
        )}
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
          Contact
        </Link>
      </nav>
      {/* Mobile dropdown nav */}
      {menuOpen && (
        <div className="absolute top-14 right-4 z-50 w-48 bg-card border rounded-lg shadow-lg flex flex-col p-2 lg:hidden animate-fade-in">
          <Link className="py-2 px-4 rounded hover:bg-muted text-sm font-medium" href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link className="py-2 px-4 rounded hover:bg-muted text-sm font-medium" href="/artists" onClick={() => setMenuOpen(false)}>
            Artists
          </Link>
          <Link className="py-2 px-4 rounded hover:bg-muted text-sm font-medium" href="/onboarding" onClick={() => setMenuOpen(false)}>
            For Artists
          </Link>
          {dashboard && (
            <Link className="py-2 px-4 rounded hover:bg-muted text-sm font-medium" href="/dashboard" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>
          )}
          <Link className="py-2 px-4 rounded hover:bg-muted text-sm font-medium" href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
} 