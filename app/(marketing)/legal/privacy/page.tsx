import type { Metadata } from 'next';
import { Navigation, Footer } from '@/components/branding';
import { Card } from '@/components/ui';
import { Lock, Eye, UserCheck, Database, AlertCircle, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy & Security Policy | QA-PaaS',
  description:
    'QA-PaaS security architecture, SOC2 & ISO 27001 compliance, GDPR data protection, and privacy policy.',
  openGraph: {
    title: 'Privacy & Security | QA-PaaS',
    description: 'Enterprise security and privacy compliance for QA-PaaS platform.',
    url: 'https://www.qa-paas.com/legal/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />

      {/* Page Header */}
      <section className="section-padding bg-gradient-to-b from-slate-bg to-slate-surface">
        <div className="container-max max-w-3xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
            Security & Privacy Policy
          </h1>
          <p className="text-lg text-slate-400">
            Enterprise-grade data protection and compliance standards.
          </p>
        </div>
      </section>

      {/* Security Pillars */}
      <section className="section-padding bg-slate-bg">
        <div className="container-max space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Lock,
                title: 'Encryption at Rest & Transit',
                description: 'AES-256 encryption for data at rest, TLS 1.3 for all network traffic.',
              },
              {
                icon: Eye,
                title: 'Zero-Knowledge Access',
                description: 'Customer data never accessible to Quality Impact OÜ personnel without explicit audit trail.',
              },
              {
                icon: UserCheck,
                title: 'Identity & Access Management',
                description: 'OAuth 2.0 / OIDC integration with role-based access control (RBAC).',
              },
              {
                icon: Database,
                title: 'Data Residency Control',
                description: 'Choose storage regions across AWS, Azure, and GCP for data sovereignty compliance.',
              },
              {
                icon: AlertCircle,
                title: 'Audit Logging',
                description: 'Comprehensive audit trails for all API calls, configuration changes, and data access.',
              },
              {
                icon: CheckCircle2,
                title: 'Incident Response',
                description: '24/7 security monitoring with documented incident response procedures.',
              },
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Card key={idx} className="space-y-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100">{pillar.title}</h3>
                  <p className="text-sm text-slate-400">{pillar.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Certifications */}
      <section className="section-padding bg-slate-surface">
        <div className="container-max space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
              Compliance Certifications
            </h2>
            <p className="text-lg text-slate-400">
              QA-PaaS maintains industry-leading certifications and compliance standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'ISO/IEC 27001:2022',
                description: 'Information Security Management System (ISMS)',
                details: [
                  'Access control & authentication',
                  'Network security',
                  'Cryptography standards',
                  'Incident management',
                  'Business continuity planning',
                ],
              },
              {
                title: 'SOC2 Type II',
                description: 'Security, Availability, Confidentiality & Privacy',
                details: [
                  '12-month control audit',
                  'Security controls validation',
                  'Change management review',
                  'Availability monitoring',
                  'Independent attestation',
                ],
              },
              {
                title: 'GDPR Compliance',
                description: 'European Union Data Protection Regulation',
                details: [
                  'Data Processing Agreement (DPA)',
                  'Data subject rights enforcement',
                  'Privacy impact assessments',
                  'International data transfer mechanisms',
                  'Right to erasure ("Right to be Forgotten")',
                ],
              },
              {
                title: 'OWASP Top 10',
                description: 'Web Application Security Standards',
                details: [
                  'Injection prevention',
                  'Authentication control',
                  'Sensitive data protection',
                  'XML external entity (XXE) prevention',
                  'Cross-site scripting (XSS) mitigation',
                ],
              },
            ].map((cert, idx) => (
              <Card key={idx} className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">{cert.title}</h3>
                <p className="text-sm text-slate-400">{cert.description}</p>
                <div className="space-y-2">
                  {cert.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-sm text-slate-300 list-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-status-pass mt-1.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Handling */}
      <section className="section-padding bg-slate-bg">
        <div className="container-max space-y-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100 mb-8">
              Data Handling & Privacy
            </h2>

            <div className="space-y-6">
              <Card className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-100">What Data We Collect</h3>
                <ul className="space-y-2">
                  {[
                    'Test execution logs and telemetry data (per your configuration)',
                    'API access logs for audit trail purposes',
                    'Cloud platform authentication tokens (encrypted in transit)',
                    'Aggregated performance metrics for platform optimization',
                    'User account information (email, organizational affiliation)',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-neural mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-100">How We Protect Your Data</h3>
                <ul className="space-y-2">
                  {[
                    'All data encrypted at rest (AES-256) and in transit (TLS 1.3)',
                    'Zero-knowledge access: customer data isolated from QA-PaaS personnel',
                    'Regular penetration testing and security audits by third-party firms',
                    'Automated threat detection and intrusion prevention',
                    'Data retention policies aligned with your retention requirements',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-status-pass mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-100">Your Rights</h3>
                <p className="text-sm text-slate-400">
                  Under GDPR and applicable privacy laws, you have the right to:
                </p>
                <ul className="space-y-2">
                  {[
                    'Access your personal data (right of access)',
                    'Request correction of inaccurate data (right of rectification)',
                    'Request deletion of your data (right to erasure)',
                    'Restrict processing of your data',
                    'Data portability (receive your data in structured format)',
                    'Object to specific processing activities',
                    'Lodge complaints with your Data Protection Authority',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="space-y-4 bg-slate-surface/50 border-primary/20">
                <h3 className="text-xl font-semibold text-slate-100">Contact Our Data Protection Officer</h3>
                <p className="text-sm text-slate-400">
                  For privacy concerns, data requests, or to exercise your rights:
                </p>
                <div className="bg-slate-bg p-4 rounded-lg">
                  <p className="font-mono text-sm text-primary">privacy@qa-paas.com</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
