import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Badge } from '@/components/ui';
import { Mail, Linkedin, Twitter, Github, Shield, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { label: 'E2E Testing', href: '/engines' },
    { label: 'API Testing', href: '/engines' },
    { label: 'Security Scanning', href: '/engines' },
    { label: 'AI Triage', href: '/engines' },
    { label: 'Live Telemetry', href: '/engines' },
  ];

  const cloudLinks = [
    {
      label: 'AWS Marketplace',
      href: 'https://aws.amazon.com/marketplace/pp/prodview-qapaas',
      external: true,
    },
    { label: 'Azure DevOps', href: 'https://marketplace.visualstudio.com', external: true },
    { label: 'Google Cloud', href: 'https://cloud.google.com/marketplace', external: true },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Security Whitepaper', href: '/legal/company-info' },
    { label: 'Terms of Service', href: '/legal/company-info' },
    { label: 'Status Page', href: 'https://status.qa-paas.com', external: true },
  ];

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:sales@qa-paas.com' },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/company/quality-impact',
      external: true,
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/qualityimpactou',
      external: true,
    },
    { icon: Github, label: 'GitHub', href: 'https://github.com/qualityimpact', external: true },
  ];

  return (
    <footer className="w-full bg-navy-950 border-t border-slate-700">
      <div className="container-max px-6 md:px-12 py-16">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Corporate Identity */}
          <div className="space-y-6">
            <Logo size="md" variant="full" />

            <div className="space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                Enterprise-grade QA-PaaS platform for Fortune 500 companies and mission-critical
                applications.
              </p>

              {/* EU Corporate Info */}
              <div className="bg-navy-800/40 border border-slate-700 rounded-lg p-4 space-y-2">
                <p className="text-xs font-semibold text-cyan-accent uppercase tracking-wide">
                  EU Registry
                </p>
                <div className="space-y-1 text-xs text-slate-300 font-mono">
                  <p>Quality Impact OÜ</p>
                  <p>Registry Code: 16842011</p>
                  <p>VAT: EE102684201</p>
                  <p>Tallinn, Estonia</p>
                </div>
              </div>

              {/* Compliance Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="success" size="sm">
                  ✓ ISO 27001
                </Badge>
                <Badge variant="info" size="sm">
                  ✓ SOC2 Type II
                </Badge>
              </div>
            </div>
          </div>

          {/* Column 2: Testing Engines & Products */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-slate-100 mb-4 uppercase tracking-wide">
                Testing Engines
              </h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-cyan-accent transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-cyan-accent/50 group-hover:bg-cyan-accent" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <p className="text-xs text-slate-400 font-semibold uppercase mb-3">Integrations</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Native integration with GitHub Actions, GitLab CI, Jenkins, Azure Pipelines, and
                CircleCI.
              </p>
            </div>
          </div>

          {/* Column 3: Cloud Marketplaces */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-slate-100 mb-4 uppercase tracking-wide">
                Cloud Platforms
              </h4>
              <ul className="space-y-3">
                {cloudLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-slate-400 hover:text-cyan-accent transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-cyan-accent/50" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <p className="text-xs text-slate-400 font-semibold uppercase mb-3">Deployment</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Deploy via AWS Fargate, Azure Container Instances, or Google Cloud Run.
              </p>
            </div>
          </div>

          {/* Column 4: Resources & Legal */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-slate-100 mb-4 uppercase tracking-wide">
                Resources
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-slate-400 hover:text-cyan-accent transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-cyan-accent/50" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <p className="text-xs text-slate-400 font-semibold uppercase mb-3">Support</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                <a href="mailto:support@qa-paas.com" className="text-cyan-accent hover:underline">
                  support@qa-paas.com
                </a>
                <br />
                Available 24/7 for enterprise customers
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700" />

        {/* Bottom Section: Compliance & Copyright */}
        <div className="py-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Compliance Info */}
            <div className="flex items-start gap-3">
              <Shield className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-1" />
              <div className="text-xs space-y-1">
                <p className="text-slate-300 font-semibold">Enterprise Compliance</p>
                <p className="text-slate-400">ISO 27001 • SOC2 Type II • GDPR Ready</p>
              </div>
            </div>

            {/* SLA */}
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
              <div className="text-xs space-y-1">
                <p className="text-slate-300 font-semibold">Availability</p>
                <p className="text-slate-400">99.99% Uptime SLA • 24/7 Support</p>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-start justify-start md:justify-end gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noopener noreferrer' : undefined}
                    className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700 border border-slate-700 hover:border-cyan-accent/50 transition-all duration-200 focus-ring text-slate-400 hover:text-cyan-accent"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-700/50 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>&copy; {currentYear} Quality Impact OÜ. All rights reserved. Made in Estonia 🇪🇪</p>
            <div className="flex items-center gap-4">
              <a href="/legal/privacy" className="hover:text-slate-400 transition-colors">
                Privacy
              </a>
              <span>•</span>
              <a href="/legal/company-info" className="hover:text-slate-400 transition-colors">
                Terms
              </a>
              <span>•</span>
              <a
                href="https://status.qa-paas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-400 transition-colors"
              >
                Status
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
