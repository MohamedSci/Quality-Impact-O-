'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { href: '/engines', label: 'Engines' },
  { href: '/marketplaces', label: 'Marketplaces' },
  { href: '/enterprise', label: 'Enterprise' },
  { href: 'https://docs.qa-paas.com', label: 'Docs', external: true },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const closeMenu = useCallback(() => setIsOpen(false), []);

  // Elevate the header once the page is scrolled
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  // Close mobile menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href.startsWith('/') && (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/90 backdrop-blur-xl shadow-lg shadow-navy-950/40 border-b border-slate-700/80'
          : 'bg-navy-950/60 backdrop-blur-md border-b border-slate-700/40'
      }`}
    >
      <nav
        className="container-max px-6 md:px-12 h-16 md:h-[72px] flex items-center justify-between gap-4"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="focus-ring rounded-md flex-shrink-0 hover:opacity-80 transition-opacity"
          aria-label="Quality Impact QA-PaaS - Home"
          onClick={closeMenu}
        >
          <Logo size="md" variant="full" />
        </Link>

        {/* Desktop Navigation — Center */}
        <div className="hidden md:flex items-center gap-1" role="menubar">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-accent rounded-md transition-colors focus-ring"
                role="menuitem"
                aria-label={`${link.label} (opens in new window)`}
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform" />
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors focus-ring ${
                  isActive(link.href) ? 'text-cyan-accent' : 'text-slate-300 hover:text-cyan-accent'
                }`}
                role="menuitem"
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTAs — Right */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <Link
            href="/marketplaces"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-cyan-accent/70 px-4 py-2 text-sm font-semibold text-cyan-accent hover:border-cyan-400 hover:text-cyan-400 hover:shadow-glow-cyan transition-all duration-200 focus-ring active:scale-[0.98]"
            aria-label="Open Marketplace Portal"
          >
            Marketplace Portal
          </Link>
          <Link
            href="/marketplaces#deploy"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-accent px-4 py-2 text-sm font-bold text-navy-950 hover:bg-cyan-400 hover:shadow-glow-cyan-lg transition-all duration-200 focus-ring active:scale-[0.98]"
            aria-label="Deploy Runner to marketplace"
          >
            Deploy Runner
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 rounded-md text-slate-300 hover:text-cyan-accent hover:bg-slate-800/70 transition-colors focus-ring"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation Panel */}
      <div
        id="mobile-navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'visible max-h-[480px] opacity-100' : 'invisible max-h-0 opacity-0'
        } bg-navy-950/95 backdrop-blur-xl border-b border-slate-700`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="container-max px-6 py-6 space-y-1">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-slate-300 hover:text-cyan-accent hover:bg-slate-800/60 transition-colors focus-ring"
                onClick={closeMenu}
                aria-label={`${link.label} (opens in new window)`}
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4 opacity-50" />
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors focus-ring ${
                  isActive(link.href)
                    ? 'text-cyan-accent bg-cyan-accent/10'
                    : 'text-slate-300 hover:text-cyan-accent hover:bg-slate-800/60'
                }`}
                onClick={closeMenu}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            )
          )}

          <div className="grid grid-cols-1 gap-3 pt-4 mt-4 border-t border-slate-700">
            <Link
              href="/marketplaces"
              className="inline-flex items-center justify-center rounded-lg border-2 border-cyan-accent/70 px-4 py-3 text-sm font-semibold text-cyan-accent hover:border-cyan-400 hover:shadow-glow-cyan transition-all focus-ring"
              onClick={closeMenu}
            >
              Marketplace Portal
            </Link>
            <Link
              href="/marketplaces#deploy"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-accent px-4 py-3 text-sm font-bold text-navy-950 hover:bg-cyan-400 hover:shadow-glow-cyan-lg transition-all focus-ring"
              onClick={closeMenu}
            >
              Deploy Runner
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
