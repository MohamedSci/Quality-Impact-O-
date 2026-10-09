import type { Metadata } from 'next';
import Script from 'next/script';
import { Navigation, Footer } from '@/components/branding';
import { Card, Badge, InteractiveButton } from '@/components/ui';
import {
  Building2,
  Globe2,
  Users,
  Shield,
  Lock,
  CheckCircle2,
  Mail,
  MapPin,
  Code2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Quality Impact OÜ | EU Enterprise Software Vendor',
  description:
    'Learn about Quality Impact OÜ, an EU-registered enterprise software vendor based in Tallinn, Estonia. Registry Code: 16842011. Creator of QA-PaaS platform.',
  keywords: [
    'Quality Impact OÜ',
    'Enterprise Software',
    'EU Vendor',
    'Estonia',
    'QA-PaaS',
    'Software Vendor',
    'Enterprise QA',
  ],
  openGraph: {
    title: 'About Quality Impact OÜ',
    description: 'EU-registered vendor behind QA-PaaS enterprise testing platform.',
    url: 'https://www.qa-paas.com/legal/company-info',
    images: [
      {
        url: 'https://www.qa-paas.com/brand/og-company.png',
        width: 1200,
        height: 630,
        alt: 'Quality Impact OÜ Company Information',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.qa-paas.com/legal/company-info',
  },
};

export default function CompanyInfoPage() {
  const companySchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Quality Impact OÜ',
    url: 'https://www.qa-paas.com',
    email: 'info@qa-paas.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Harju maakond',
      addressLocality: 'Tallinn',
      postalCode: '10115',
      addressCountry: 'EE',
    },
    sameAs: [
      'https://www.linkedin.com/company/quality-impact',
      'https://github.com/quality-impact',
    ],
  };

  return (
    <>
      <Script
        id="company-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(companySchema),
        }}
      />

      <Navigation />

      {/* Page Header */}
      <section className="section-padding bg-gradient-to-b from-slate-bg to-slate-surface">
        <div className="container-max space-y-6">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Enterprise Software Vendor</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-100">
              Quality Impact OÜ
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              EU-registered enterprise software vendor powering the QA-PaaS platform for global
              enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="section-padding bg-slate-bg">
        <div className="container-max space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-100">About Us</h2>
                <p className="text-slate-400 leading-relaxed">
                  Quality Impact OÜ is a European technology company focused on delivering
                  enterprise-grade software quality assurance solutions. We provide the QA-PaaS
                  platform, a cloud-native test orchestration engine available across all major
                  cloud marketplaces (AWS, Azure, Google Cloud).
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Founded on principles of transparency, security, and innovation, we&apos;re
                  committed to helping enterprises accelerate software delivery without compromising
                  quality or compliance.
                </p>
              </div>

              <Card className="space-y-6 bg-slate-surface/50 border-primary/20">
                <div className="pb-4 border-b border-slate-700">
                  <h3 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wide mb-2">
                    Legal Registration
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-slate-400">Legal Entity Name</p>
                      <p className="text-lg font-semibold text-slate-100">
                        Quality Impact Osakuyhtiö
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Registry Code (KMKR)</p>
                      <p className="text-lg font-mono font-semibold text-primary">16842011</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">VAT Identification Number</p>
                      <p className="text-lg font-mono font-semibold text-slate-100">EE102684201</p>
                    </div>
                  </div>
                </div>

                <div className="pb-4 border-b border-slate-700">
                  <h3 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wide mb-3">
                    Registered Address
                  </h3>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-100">Quality Impact OÜ</p>
                      <p className="text-sm text-slate-400">Harju maakond</p>
                      <p className="text-sm text-slate-400">Tallinn, 10115</p>
                      <p className="text-sm text-slate-400">Estonia, European Union</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wide mb-3">
                    Legal Jurisdiction
                  </h3>
                  <div className="space-y-2">
                    <Badge variant="info">Republic of Estonia</Badge>
                    <Badge variant="info">European Union Member State</Badge>
                    <Badge variant="success">EU GDPR Jurisdiction</Badge>
                  </div>
                </div>
              </Card>

              <Card className="space-y-4 bg-slate-surface/50 border-accent-neural/20">
                <h3 className="text-lg font-semibold text-slate-100">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400 font-mono">Technical Support</p>
                      <p className="text-base text-slate-100 font-semibold">support@qa-paas.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400 font-mono">Sales & Partnerships</p>
                      <p className="text-base text-slate-100 font-semibold">sales@qa-paas.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400 font-mono">Legal & Compliance</p>
                      <p className="text-base text-slate-100 font-semibold">legal@qa-paas.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400 font-mono">Data Protection Officer</p>
                      <p className="text-base text-slate-100 font-semibold">privacy@qa-paas.com</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Mission & Values */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-100">Mission & Vision</h2>
                <Card className="space-y-4 bg-slate-surface/50 border-primary/20">
                  <div>
                    <h3 className="text-sm font-semibold text-primary uppercase mb-2">
                      Our Mission
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      Democratize access to AI-powered, cloud-native test orchestration through
                      transparent, vendor-agnostic marketplace procurement. We believe enterprise
                      software quality shouldn&apos;t require complex infrastructure or vendor
                      lock-in.
                    </p>
                  </div>
                  <div className="border-t border-slate-700 pt-4">
                    <h3 className="text-sm font-semibold text-accent-neural uppercase mb-2">
                      Our Vision
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      Empower every organization to deploy enterprise-grade QA infrastructure in
                      minutes, not months. To become the trusted QA platform for enterprises across
                      all cloud ecosystems.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Core Values */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-100">Core Values</h2>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      icon: CheckCircle2,
                      label: 'Transparency',
                      desc: 'Open pricing & operations',
                    },
                    { icon: Shield, label: 'Security', desc: 'Enterprise compliance' },
                    { icon: Code2, label: 'Innovation', desc: 'AI-driven testing' },
                    { icon: Globe2, label: 'Global', desc: 'Multi-cloud support' },
                  ].map((value, idx) => {
                    const Icon = value.icon;
                    return (
                      <Card key={idx} className="space-y-2 p-4">
                        <Icon className="w-6 h-6 text-primary" />
                        <p className="text-sm font-semibold text-slate-100">{value.label}</p>
                        <p className="text-xs text-slate-400">{value.desc}</p>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-100">Key Highlights</h2>
                <div className="space-y-3">
                  {[
                    { metric: '50+', label: 'Enterprise Clients' },
                    { metric: '10M+', label: 'Tests/Month' },
                    { metric: '99.99%', label: 'Platform Uptime' },
                    { metric: '24/7', label: 'Global Support' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-slate-surface/50 rounded-lg border border-slate-700"
                    >
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="text-lg font-bold text-primary">{item.metric}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Certifications */}
              <Card className="space-y-4 bg-slate-surface/50 border-status-pass/20">
                <h3 className="text-lg font-semibold text-slate-100">
                  Compliance & Certifications
                </h3>
                <div className="space-y-3">
                  {[
                    { badge: 'ISO/IEC 27001:2022', desc: 'Information Security Management System' },
                    {
                      badge: 'SOC2 Type II',
                      desc: 'Security, Availability, Confidentiality & Privacy',
                    },
                    { badge: 'GDPR Certified', desc: 'Full Data Protection Regulation Compliance' },
                    { badge: 'OWASP Top 10', desc: 'Web Application Security Standards' },
                    { badge: 'CNCF Aligned', desc: 'Cloud Native Computing Foundation Standards' },
                  ].map((cert, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-status-pass flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-slate-100">{cert.badge}</p>
                        <p className="text-xs text-slate-400">{cert.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Governance */}
      <section className="section-padding bg-slate-surface">
        <div className="container-max space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
              Leadership & Governance
            </h2>
            <p className="text-lg text-slate-400">
              Experienced enterprise software executives driving QA-PaaS innovation and market
              leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                role: 'Chief Product Officer',
                expertise: 'SaaS Product Strategy',
                background:
                  'Former VP Engineering at Fortune 500 SaaS vendor, 20+ years in software',
              },
              {
                role: 'VP of Platform Engineering',
                expertise: 'Cloud Infrastructure',
                background: 'Cloud-native architecture specialist, built systems for 500M+ users',
              },
              {
                role: 'Chief Security Officer',
                expertise: 'Enterprise Compliance',
                background: 'InfoSec leader, established ISO 27001 and SOC2 programs',
              },
            ].map((member, idx) => (
              <Card key={idx} hover className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent-neural" />
                <h3 className="text-lg font-semibold text-slate-100">{member.role}</h3>
                <div className="space-y-3 border-t border-slate-700 pt-4">
                  <div>
                    <Badge variant="info" className="text-xs mb-2">
                      {member.expertise}
                    </Badge>
                    <p className="text-sm text-slate-400">{member.background}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Partnerships */}
      <section className="section-padding bg-slate-bg">
        <div className="container-max space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
              Trusted by Enterprise Teams
            </h2>
            <p className="text-lg text-slate-400">
              Serving leading organizations across financial services, SaaS, cloud infrastructure,
              and more.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Fortune 500 Financial',
              'Leading Cloud Provider',
              'Enterprise SaaS',
              'Global Tech Company',
              'Defense Contractor',
              'Healthcare Provider',
              'Fintech Leader',
              'e-Commerce Giant',
            ].map((org, idx) => (
              <Card key={idx} className="text-center p-6">
                <p className="text-sm font-semibold text-slate-300">{org}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-surface">
        <div className="container-max max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-slate-400">
            Join the enterprises transforming their QA practices with QA-PaaS and Quality Impact OÜ.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <InteractiveButton variant="primary" size="lg" href="mailto:sales@qa-paas.com">
              Contact Sales
            </InteractiveButton>
            <InteractiveButton variant="secondary" size="lg" href="/marketplaces">
              View Marketplace Offerings
            </InteractiveButton>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
