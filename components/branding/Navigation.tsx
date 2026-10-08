'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '@/components/ui';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/engines', label: 'Engines' },
    { href: '/marketplaces', label: 'Marketplaces' },
    { href: '/legal/company-info', label: 'Company' },
    { href: '/legal/privacy', label: 'Privacy' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-bg/95 backdrop-blur border-b border-slate-border">
      <div className="container-max px-6 md:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 focus-ring rounded-md">
          <Logo size="md" variant="full" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-primary transition-colors focus-ring rounded-md px-2 py-1"
            >
              {link.label}
            </Link>
          ))}

          <Button
            variant="primary"
            size="sm"
            onClick={() => window.open('https://aws.amazon.com/marketplace/pp/prodview-qapaas', '_blank')}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-slate-surface rounded-md transition-colors focus-ring"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-surface border-t border-slate-border">
          <div className="container-max px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-slate-300 hover:text-primary transition-colors py-2 focus-ring rounded-md px-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="primary"
              size="sm"
              className="w-full"
              onClick={() => {
                window.open('https://aws.amazon.com/marketplace/pp/prodview-qapaas', '_blank');
                setIsOpen(false);
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
