import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-surface border-t border-slate-border mt-24">
      <div className="container-max px-6 md:px-12 py-12 space-y-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo size="md" variant="full" />
            <p className="text-sm text-slate-400">
              Enterprise-grade QA-PaaS platform powered by Quality Impact OÜ.
            </p>
            <div className="text-xs text-slate-500 font-mono space-y-1">
              <p>Registry Code: 16842011</p>
              <p>Harju maakond, Tallinn, Estonia</p>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-100">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/engines"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  QA Engines
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplaces"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  Cloud Marketplaces
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  Security & Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-100">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/legal/company-info"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-100">Connect</h3>
            <div className="flex items-center gap-3">
              <a
                href="mailto:support@qa-paas.com"
                className="p-2 hover:bg-slate-border rounded-md transition-colors focus-ring"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-slate-400 hover:text-primary" />
              </a>
              <a
                href="https://linkedin.com/company/quality-impact"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-slate-border rounded-md transition-colors focus-ring"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-primary" />
              </a>
              <a
                href="https://twitter.com/qualityimpactou"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-slate-border rounded-md transition-colors focus-ring"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-slate-400 hover:text-primary" />
              </a>
              <a
                href="https://github.com/qualityimpact"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-slate-border rounded-md transition-colors focus-ring"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-slate-400 hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-border/60" />

        {/* Copyright & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <p>&copy; {currentYear} Quality Impact OÜ. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>ISO/IEC 27001 • SOC2 Type II • GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
