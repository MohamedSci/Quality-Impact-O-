import type { Metadata } from 'next';
import Script from 'next/script';
import { Navigation, Footer } from '@/components/branding';
import { Card, Badge, Alert, Button } from '@/components/ui';
import {
  Lock, Eye, UserCheck, Database, AlertCircle, CheckCircle2,
  Shield, TrendingUp, Code2, Gauge, Mail, ExternalLink,
  Zap, BarChart3, Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy & Security Policy | QA-PaaS by Quality Impact OÜ',
  description:
    'QA-PaaS security architecture, SOC2 & ISO 27001 compliance, GDPR data protection, privacy policy, and incident response procedures.',
  keywords: [
    'Data Security',
    'Privacy Policy',
    'GDPR Compliance',
    'ISO 27001',
    'SOC2',
    'Enterprise Security',
    'Data Protection',
  ],
  openGraph: {
    title: 'Privacy & Security | QA-PaaS',
    description: 'Enterprise security and privacy compliance documentation for QA-PaaS platform.',
    url: 'https://www.qa-paas.com/legal/privacy',
    images: [
      {
        url: 'https://www.qa-paas.com/brand/og-privacy.png',
        width: 1200,
        height: 630,
        alt: 'QA-PaaS Privacy & Security',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.qa-paas.com/legal/privacy',
  },
};

export default function PrivacyPage() {
  const privacySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy & Security Policy',
    description: 'Enterprise security and privacy compliance documentation',
    url: 'https://www.qa-paas.com/legal/privacy',
  };

  return (
    <>
      <Script
        id="privacy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacySchema),
        }}
      />

      <Navigation />

      {/* Page Header */}
      <section className="section-padding bg-gradient-to-b from-slate-bg to-slate-surface">
        <div className="container-max space-y-6">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Enterprise-Grade Security</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-100">
              Security & Privacy Policy
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive enterprise-grade data protection and compliance standards aligned with ISO 27001, SOC2 Type II, and GDPR.
            </p>
          </div>
        </div>
      </section>

      {/* Security Overview Banner */}
      <section className="section-padding bg-primary/5 border-y border-primary/20">
        <div className="container-max">
          <Alert variant="success">
            <Shield className="h-5 w-5 text-status-pass" />
            <div className="ml-3 flex-1">
              <p className="font-semibold text-status-pass mb-1">Security Certified</p>
              <p className="text-sm text-slate-300">
                QA-PaaS is certified under ISO/IEC 27001:2022, SOC2 Type II, and GDPR compliant. All data is encrypted end-to-end with zero-knowledge architecture.
              </p>
            </div>
          </Alert>
        </div>
      </section>

      {/* Security Pillars */}
      <section className="section-padding bg-slate-bg">
        <div className="container-max space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">6 Core Pillars</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
              Security Architecture
            </h2>
            <p className="text-lg text-slate-400">
              Six foundational security pillars protecting your test data and infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Lock,
                title: 'Encryption at Rest & Transit',
                description: 'AES-256 encryption for data at rest, TLS 1.3 for all network traffic, end-to-end encryption protocols.',
              },
              {
                icon: Eye,
                title: 'Zero-Knowledge Access',
                description: 'Customer data never accessible to Quality Impact OÜ personnel without explicit audit trail verification.',
              },
              {
                icon: UserCheck,
                title: 'Identity & Access Management',
                description: 'OAuth 2.0 / OIDC integration with role-based access control (RBAC) and multi-factor authentication.',
              },
              {
                icon: Database,
                title: 'Data Residency Control',
                description: 'Choose storage regions across AWS, Azure, and GCP for data sovereignty and compliance requirements.',
              },
              {
                icon: AlertCircle,
                title: 'Audit Logging',
                description: 'Comprehensive audit trails for all API calls, configuration changes, and data access events.',
              },
              {
                icon: Clock,
                title: 'Incident Response',
                description: '24/7 security monitoring with documented incident response and recovery procedures.',
              },
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Card key={idx} hover className="space-y-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
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
          <div className="max-w-3xl mx-auto text-center space-y-4">
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
                badge: 'Certified',
                description: 'Information Security Management System (ISMS)',
                details: [
                  'Access control & authentication policies',
                  'Network security and segmentation',
                  'Cryptography standards and key management',
                  'Incident management procedures',
                  'Business continuity planning',
                  'Third-party vendor management',
                  'Vulnerability and penetration testing',
                ],
              },
              {
                title: 'SOC2 Type II',
                badge: 'Audited',
                description: 'Security, Availability, Confidentiality & Privacy',
                details: [
                  '12-month control audit period',
                  'Security controls validation',
                  'Change management review',
                  'Availability and performance monitoring',
                  'Independent attestation by Big Four firm',
                  'Quarterly compliance verification',
                  'Annual re-certification',
                ],
              },
              {
                title: 'GDPR Compliance',
                badge: 'Compliant',
                description: 'European Union Data Protection Regulation',
                details: [
                  'Data Processing Agreement (DPA) ready',
                  'Data subject rights enforcement',
                  'Privacy impact assessments',
                  'Standard Contractual Clauses (SCCs)',
                  'Data breach notification procedures',
                  'GDPR Right to erasure ("Right to be Forgotten")',
                  'Data portability in standard formats',
                ],
              },
              {
                title: 'OWASP Top 10',
                badge: 'Protected',
                description: 'Web Application Security Standards',
                details: [
                  'Injection attack prevention',
                  'Authentication & session management',
                  'Sensitive data protection',
                  'XML external entity (XXE) prevention',
                  'Broken access control mitigation',
                  'Cross-site scripting (XSS) mitigation',
                  'Insecure deserialization prevention',
                ],
              },
            ].map((cert, idx) => (
              <Card key={idx} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-primary">{cert.title}</h3>
                  <Badge variant="success" className="text-xs">{cert.badge}</Badge>
                </div>
                <p className="text-sm text-slate-400">{cert.description}</p>
                <div className="space-y-2 border-t border-slate-700 pt-4">
                  <p className="text-xs font-semibold text-slate-400 uppercase">Key Controls</p>
                  <ul className="space-y-2">
                    {cert.details.slice(0, 4).map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-status-pass flex-shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Handling */}
      <section className="section-padding bg-slate-bg">
        <div className="container-max space-y-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100 mb-12">
              Data Handling & Privacy
            </h2>

            <div className="space-y-6">
              <Card className="space-y-6 bg-slate-surface/50 border-primary/20">
                <div className="flex items-start gap-3">
                  <Database className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-4">What Data We Collect</h3>
                    <ul className="space-y-3">
                      {[
                        'Test execution logs and telemetry data (per your configuration)',
                        'API access logs for audit trail and compliance purposes',
                        'Cloud platform authentication tokens (encrypted in transit and at rest)',
                        'Aggregated performance metrics for platform optimization',
                        'User account information (email, organization affiliation)',
                        'Error traces and debug information (if enabled)',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-neural mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="space-y-6 bg-slate-surface/50 border-status-pass/20">
                <div className="flex items-start gap-3">
                  <Lock className="w-6 h-6 text-status-pass flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-4">How We Protect Your Data</h3>
                    <ul className="space-y-3">
                      {[
                        'All data encrypted at rest (AES-256) and in transit (TLS 1.3)',
                        'Zero-knowledge access: customer data isolated from QA-PaaS personnel',
                        'Regular penetration testing and security audits by independent third-party firms',
                        'Automated threat detection and intrusion prevention systems',
                        'Data retention policies aligned with your specific requirements',
                        'Secure data deletion with cryptographic wiping on account termination',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-status-pass flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="space-y-6 bg-slate-surface/50 border-primary/20">
                <div className="flex items-start gap-3">
                  <UserCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-4">Your Privacy Rights (GDPR)</h3>
                    <p className="text-sm text-slate-400 mb-4">
                      Under GDPR and applicable privacy laws, you have the following rights:
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Right of Access: Request and receive copy of your personal data',
                        'Right of Rectification: Correct inaccurate or incomplete personal data',
                        'Right to Erasure: Request deletion of your data ("Right to be Forgotten")',
                        'Right to Restrict Processing: Limit how your data is used',
                        'Right to Data Portability: Receive your data in structured, standard formats',
                        'Right to Object: Oppose specific processing activities',
                        'Right to Lodge Complaints: File complaints with your Data Protection Authority',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="space-y-4 bg-slate-surface/50 border-accent-neural/20">
                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-accent-neural flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100 mb-3">Contact Our Data Protection Officer</h3>
                    <p className="text-sm text-slate-400 mb-4">
                      For privacy concerns, data requests, or to exercise your GDPR rights:
                    </p>
                    <div className="bg-slate-bg p-4 rounded-lg border border-slate-700">
                      <p className="font-mono text-sm text-accent-neural font-semibold">privacy@qa-paas.com</p>
                      <p className="text-xs text-slate-500 mt-2">Response time: Within 24 business hours</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="section-padding bg-slate-surface">
        <div className="container-max space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
              Incident Response & Monitoring
            </h2>
            <p className="text-lg text-slate-400">
              24/7 security monitoring with documented procedures for rapid response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                phase: 'Detection',
                time: '< 5 minutes',
                details: ['Automated threat detection', 'Real-time anomaly monitoring', 'Security event correlation'],
              },
              {
                phase: 'Response',
                time: '< 30 minutes',
                details: ['Incident assessment', 'Containment procedures', 'Internal escalation'],
              },
              {
                phase: 'Communication',
                time: '< 2 hours',
                details: ['Customer notification', 'Regulatory compliance', 'Transparent reporting'],
              },
            ].map((item, idx) => (
              <Card key={idx} className="space-y-4">
                <Badge variant="info">{item.phase}</Badge>
                <div>
                  <p className="text-xs text-slate-400">Response Time</p>
                  <p className="text-lg font-bold text-primary">{item.time}</p>
                </div>
                <ul className="space-y-2 border-t border-slate-700 pt-4">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2 text-sm text-slate-300">
                      <Zap className="w-3 h-3 text-accent-neural" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency & Accountability */}
      <section className="section-padding bg-slate-bg">
        <div className="container-max space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
              Transparency & Accountability
            </h2>
            <p className="text-lg text-slate-400">
              We believe in transparent security practices and regular accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: BarChart3,
                title: 'Annual Security Audits',
                description: 'Independent third-party audits of all security controls and compliance standards.',
              },
              {
                icon: Gauge,
                title: 'Vulnerability Scanning',
                description: 'Continuous automated scanning for security vulnerabilities and misconfigurations.',
              },
              {
                icon: TrendingUp,
                title: 'Security Metrics',
                description: 'Public transparency reports on security incidents, resolution time, and improvements.',
              },
              {
                icon: Clock,
                title: 'Regular Updates',
                description: 'Quarterly security updates and patches with prioritized critical fixes.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="space-y-4">
                  <Icon className="w-8 h-8 text-primary" />
                  <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-surface">
        <div className="container-max max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
            Security & Privacy Questions?
          </h2>
          <p className="text-lg text-slate-400">
            Our security team is available to discuss compliance requirements and security details.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => (window.location.href = 'mailto:privacy@qa-paas.com')}
            >
              Contact DPO
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => (window.location.href = 'mailto:legal@qa-paas.com')}
            >
              Security Questions
            </Button>
          </div>

          <div className="text-sm text-slate-400 border-t border-slate-600 pt-6">
            <p>
              For urgent security issues, email{' '}
              <a href="mailto:security@qa-paas.com" className="text-primary hover:underline font-semibold">
                security@qa-paas.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
