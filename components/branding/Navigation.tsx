'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '@/components/ui';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Blueprint-compliant navigation links
  const navLinks = [
    { href: '/#engines', label: 'Engines', target: undefined },
    { href: '/marketplaces', label: 'Marketplaces', target: undefined },
    { href: '/enterprise', label: 'Enterprise', target: undefined },
    { href: 'https://docs.qa-paas.com', label: 'Docs', target: '_blank' },
  ];

  const handleMarketplaceClick = () => {
    window.open('/marketplaces', '_blank');
    setIsOpen(false);
  };

  const handleDeployClick = () => {
    window.location.href = '/marketplaces#deploy';
  };

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-navy-950/80 backdrop-blur-md border-b border-slate-700 transition-all duration-300"
      aria-label="Primary navigation"
    >
      <div className="container-max px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 focus-ring rounded-md flex-shrink-0 hover:opacity-80 transition-opacity"
          aria-label="Quality Impact QA-PaaS - Home"
        >
          <Logo size="md" variant="full" />
        </Link>

        {/* Desktop Navigation - Center */}
        <div
          className="hidden md:flex items-center gap-8"
          role="menubar"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.target}
              rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
              className="text-sm font-medium text-slate-300 hover:text-cyan-accent hover:border-b-2 hover:border-cyan-accent pb-1 border-b-2 border-transparent transition-all duration-200 focus-ring rounded-sm"
              role="menuitem"
              aria-label={link.target === '_blank' ? `${link.label} (opens in new window)` : link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Buttons - Right */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          {/* Ghost Button - Marketplace Portal */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleMarketplaceClick}
            className="border-2 border-cyan-accent text-cyan-accent hover:border-cyan-400 hover:text-cyan-400 hover:shadow-glow-cyan transition-all duration-200"
            aria-label="Open Marketplace Portal in new window"
          >
            Marketplace Portal
          </Button>

          {/* Primary Button - Deploy Runner */}
          <Button
            variant="solid"
            size="sm"
            onClick={handleDeployClick}
            className="bg-cyan-accent hover:bg-cyan-500 text-white hover:shadow-glow-cyan-lg transition-all duration-200 font-semibold"
            aria-label="Deploy Runner to marketplace"
          >
            Deploy Runner
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-slate-800 rounded-md transition-colors focus-ring text-slate-300 hover:text-cyan-accent"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-navigation"
          className="md:hidden bg-navy-900/95 backdrop-blur-md border-t border-slate-700 animate-fade-in"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="container-max px-6 py-6 space-y-4">
            {/* Mobile Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                className="block text-sm font-medium text-slate-300 hover:text-cyan-accent transition-colors py-2 focus-ring rounded-md px-2"
                onClick={() => setIsOpen(false)}
                role="menuitem"
                aria-label={link.target === '_blank' ? `${link.label} (opens in new window)` : link.label}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="space-y-3 pt-4 border-t border-slate-700">
              <Button
                variant="ghost"
                size="sm"
                className="w-full border-2 border-cyan-accent text-cyan-accent hover:border-cyan-400 hover:text-cyan-400"
                onClick={handleMarketplaceClick}
                aria-label="Open Marketplace Portal in new window"
              >
                Marketplace Portal
              </Button>
              <Button
                variant="solid"
                size="sm"
                className="w-full bg-cyan-accent hover:bg-cyan-500 text-white font-semibold"
                onClick={handleDeployClick}
                aria-label="Deploy Runner to marketplace"
              >
                Deploy Runner
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
