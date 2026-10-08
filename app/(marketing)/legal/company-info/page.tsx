import type { Metadata } from 'next';
import { Navigation, Footer } from '@/components/branding';
import { Card } from '@/components/ui';
import { Building2, Globe2, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Company Information | Quality Impact OÜ',
  description:
    'Learn about Quality Impact OÜ, an EU-registered enterprise software vendor based in Tallinn, Estonia. Registry Code: 16842011.',
  openGraph: {
    title: 'About Quality Impact OÜ',
    description: 'EU-registered vendor behind QA-PaaS platform.',
    url: 'https://www.qa-paas.com/legal/company-info',
  },
};

export default function CompanyInfoPage() {
  return (
    <>
      <Navigation />

      {/* Page Header */}
      <section className="section-padding bg-gradient-to-b from-slate-bg to-slate-surface">
        <div className="container-max max-w-3xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
            Quality Impact OÜ
          </h1>
          <p className="text-lg text-slate-400">
            Enterprise software vendor powering the QA-PaaS platform.
          </p>
        </div>
      </section>

      {/* Company Details */}
      <section className="section-padding bg-slate-bg">
        <div className="container-max space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-100">Corporate Information</h2>
                <p className="text-slate-400 leading-relaxed">
                  Quality Impact OÜ is a European technology company focused on delivering enterprise-grade software quality assurance solutions. We provide the QA-PaaS platform, a cloud-native test orchestration engine available across all major cloud marketplaces.
                </p>
              </div>

              <Card className="space-y-4 bg-slate-surface/50 border-primary/20">
                <div>
                  <h3 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wide">
                    Legal Entity
                  </h3>
                  <p className="text-lg font-semibold text-slate-100 mt-1">
                    Quality Impact Osakuyhtiö
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wide">
                    Registry Code (KMKR)
                  </h3>
                  <p className="text-lg font-semibold text-primary font-mono mt-1">
                    16842011
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wide">
                    VAT ID
                  </h3>
                  <p className="text-lg font-semibold text-slate-100 font-mono mt-1">
                    EE102155066
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wide">
                    Registered Address
                  </h3>
                  <p className="text-sm text-slate-100 mt-1">
                    Harju maakond, Tallinn, 10115 Estonia
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wide">
                    Jurisdiction
                  </h3>
                  <p className="text-sm text-slate-100 mt-1">
                    Republic of Estonia, European Union
                  </p>
                </div>
              </Card>

              <Card className="space-y-4 bg-slate-surface/50 border-accent-neural/20">
                <h3 className="text-lg font-semibold text-slate-100">Contact Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Technical Support</p>
                    <p className="text-base text-slate-100 font-semibold">support@qa-paas.com</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Business Inquiries</p>
                    <p className="text-base text-slate-100 font-semibold">sales@qa-paas.com</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Legal & Compliance</p>
                    <p className="text-base text-slate-100 font-semibold">legal@qa-paas.com</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Mission & Values */}
              <div>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">Mission & Values</h2>
                <p className="text-slate-400 leading-relaxed">
                  We believe enterprise software quality shouldn't require complex infrastructure. Our mission is to democratize access to AI-powered, cloud-native test orchestration through transparent, vendor-agnostic marketplace procurement.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Building2, label: 'EU-Based', value: 'Estonia' },
                  { icon: Globe2, label: 'Global Reach', value: 'Multi-Cloud' },
                  { icon: Award, label: 'Certifications', value: 'ISO/SOC2' },
                  { icon: Users, label: 'Enterprise Focus', value: 'VP + Engineering' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Card key={idx} className="space-y-2">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-xs text-slate-400 font-mono">{item.label}</p>
                      <p className="text-sm font-semibold text-slate-100">{item.value}</p>
                    </Card>
                  );
                })}
              </div>

              {/* Compliance */}
              <Card className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-100">Compliance & Certifications</h3>
                <ul className="space-y-2">
                  {[
                    'ISO/IEC 27001:2022 Certification',
                    'SOC2 Type II Audit',
                    'GDPR Data Protection Compliance',
                    'OWASP Top 10 Security Standards',
                    'Cloud Native Computing Foundation (CNCF) Alignment',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-status-pass mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Governance */}
      <section className="section-padding bg-slate-surface">
        <div className="container-max space-y-8">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
              Leadership & Governance
            </h2>
            <p className="text-lg text-slate-400">
              Experienced enterprise software executives driving QA-PaaS innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                role: 'Chief Product Officer',
                background: 'Former VP Engineering at Fortune 500 SaaS vendor',
              },
              {
                role: 'VP of Platform Engineering',
                background: 'Cloud-native infrastructure architect with 15+ years',
              },
              {
                role: 'Chief Security Officer',
                background: 'Enterprise compliance and InfoSec specialist',
              },
            ].map((member, idx) => (
              <Card key={idx} className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10" />
                <h3 className="text-lg font-semibold text-slate-100">{member.role}</h3>
                <p className="text-sm text-slate-400">{member.background}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
