import type { Metadata } from 'next';
import Script from 'next/script';
import { Navigation, Footer } from '@/components/branding';
import { ComplianceGrid } from '@/components/corporate';
import { Card, InteractiveButton, Badge } from '@/components/ui';
import {
  GitBranch,
  Zap,
  Shield,
  Target,
  AlertCircle,
  Code2,
  TrendingUp,
  CheckCircle2,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'QA Engines | E2E, API & Security Testing by QA-PaaS',
  description:
    'Explore QA-PaaS engine portfolio: End-to-End Testing, API & Integration Testing, Security Scanning, AI Test Triage, Live Telemetry, and Analytics.',
  keywords: [
    'Test Automation',
    'E2E Testing',
    'API Testing',
    'Security Scanning',
    'Test Intelligence',
    'Test Analytics',
    'Test Orchestration',
  ],
  openGraph: {
    title: 'QA Engines | Complete Testing Suite',
    description: 'E2E, API, Security, and AI-powered testing engines for enterprise QA.',
    url: 'https://www.qa-paas.com/engines',
    images: [
      {
        url: 'https://www.qa-paas.com/brand/og-engines.png',
        width: 1200,
        height: 630,
        alt: 'QA-PaaS Engine Suite',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.qa-paas.com/engines',
  },
};

const ENGINES = [
  {
    icon: GitBranch,
    title: 'End-to-End (E2E) Testing',
    description:
      'Browser automation across Chrome, Firefox, Safari, and Edge with visual regression detection.',
    features: [
      'Cross-browser support',
      'Visual regression',
      'Mobile testing',
      'Parallel execution',
    ],
    badge: 'Browser',
    metrics: { tests: '1000+', coverage: '95%+' },
    useCases: ['UI regression detection', 'User journey validation', 'Cross-device testing'],
  },
  {
    icon: Zap,
    title: 'API & Integration Testing',
    description:
      'RESTful, GraphQL, and gRPC protocol testing with request/response validation and performance profiling.',
    features: ['Protocol support', 'Schema validation', 'Performance metrics', 'Load testing'],
    badge: 'Protocols',
    metrics: { endpoints: '500+', throughput: '100K req/s' },
    useCases: ['Microservices testing', 'Contract testing', 'Performance validation'],
  },
  {
    icon: Shield,
    title: 'Security Scanning',
    description:
      'OWASP Top 10 vulnerability scanning, dependency analysis, and container image introspection.',
    features: ['OWASP compliance', 'Dependency audit', 'Container scanning', 'CVE tracking'],
    badge: 'Security',
    metrics: { vulnerabilities: 'Detected', cves: 'Tracked' },
    useCases: ['Vulnerability assessment', 'Dependency management', 'Container security'],
  },
  {
    icon: Target,
    title: 'AI Test Triage',
    description:
      'Machine learning-powered flakiness detection, root cause analysis, and intelligent test recommendations.',
    features: [
      'Flakiness detection',
      'Root cause analysis',
      'Test optimization',
      'Failure prediction',
    ],
    badge: 'AI-Powered',
    metrics: { accuracy: '99.2%', analysis: 'Real-time' },
    useCases: ['Flaky test elimination', 'Failure prediction', 'Test optimization'],
  },
  {
    icon: AlertCircle,
    title: 'Live Telemetry Console',
    description:
      'Real-time test execution streams, logs, metrics, and incident correlation dashboards.',
    features: ['Live streaming', 'Log aggregation', 'Metrics export', 'Alert routing'],
    badge: 'Real-time',
    metrics: { latency: '< 100ms', streams: '10K+' },
    useCases: ['Live monitoring', 'Incident response', 'Execution analytics'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Test coverage heatmaps, quality metrics, trend analysis, and custom reporting.',
    features: ['Coverage maps', 'Trend analysis', 'Custom dashboards', 'Export formats'],
    badge: 'Analytics',
    metrics: { metrics: '100+', retention: '12 months' },
    useCases: ['Quality trends', 'Team reporting', 'Executive dashboards'],
  },
];

const ENGINE_CAPABILITIES = [
  {
    category: 'Execution Speed',
    items: [
      'Parallel test execution across unlimited runners',
      'Sub-second test startup time',
      '10-50x faster CI/CD pipelines',
      'Containerized test environments',
    ],
  },
  {
    category: 'Integration',
    items: [
      'GitHub, GitLab, Azure DevOps integration',
      'Jenkins, CircleCI, Travis CI compatible',
      'Webhook-based event triggering',
      'REST API for custom workflows',
    ],
  },
  {
    category: 'Intelligence',
    items: [
      'ML-powered flakiness detection',
      'Root cause analysis with ML models',
      'Automatic test recommendations',
      'Pattern recognition across test history',
    ],
  },
  {
    category: 'Compliance',
    items: [
      'OWASP Top 10 coverage',
      'GDPR-compliant data handling',
      'Audit trails for all operations',
      'Compliance reporting',
    ],
  },
];

export default function EnginesPage() {
  const enginesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'QA-PaaS Engine Suite',
    description: 'Complete testing engine portfolio for enterprise QA',
    url: 'https://www.qa-paas.com/engines',
  };

  return (
    <>
      <Script
        id="engines-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(enginesSchema),
        }}
      />

      <Navigation />

      {/* Page Header */}
      <section className="section-padding bg-gradient-to-b from-slate-bg via-slate-bg to-slate-surface">
        <div className="container-max space-y-6">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Complete Testing Suite</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-100">
              QA Engines: Complete Test Coverage
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A comprehensive suite of six specialized testing engines designed for modern software
              delivery pipelines. Deploy once, test everything.
            </p>
          </div>
        </div>
      </section>

      {/* Engines Grid */}
      <section className="section-padding bg-slate-bg">
        <div className="container-max space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENGINES.map((engine, idx) => {
              const Icon = engine.icon;
              return (
                <Card key={idx} hover className="space-y-4 group flex flex-col">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="default" className="text-xs">
                      {engine.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-100">{engine.title}</h3>
                  <p className="text-sm text-slate-400 flex-grow">{engine.description}</p>

                  <div className="space-y-4 border-t border-slate-700 pt-4">
                    <div className="grid grid-cols-2 gap-2 text-center">
                      {Object.entries(engine.metrics).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-xs font-mono text-primary font-semibold">{value}</p>
                          <p className="text-xs text-slate-400 capitalize">{key}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-slate-400 uppercase">Key Features</p>
                      <ul className="space-y-1">
                        {engine.features.slice(0, 3).map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 border-t border-slate-700 pt-4">
                      <p className="text-xs font-semibold text-slate-400 uppercase">Use Cases</p>
                      <ul className="space-y-1">
                        {engine.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                            <CheckCircle2 className="w-3 h-3 text-status-pass mt-0.5 flex-shrink-0" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-slate-surface">
        <div className="container-max space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
              Powerful Capabilities Across All Engines
            </h2>
            <p className="text-lg text-slate-400">
              Industry-leading features and integrations built into every testing engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGINE_CAPABILITIES.map((capability, idx) => (
              <Card key={idx} className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">{capability.category}</h3>
                <ul className="space-y-3">
                  {capability.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-sm text-slate-300">
                      <TrendingUp className="w-4 h-4 text-status-pass flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-slate-bg">
        <div className="container-max space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
              Engine Comparison
            </h2>
            <p className="text-lg text-slate-400">
              Choose the right combination of engines for your testing strategy.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="text-left py-3 px-4 text-slate-300 font-semibold">Feature</th>
                  <th className="text-center py-3 px-4 text-slate-300 font-semibold">E2E</th>
                  <th className="text-center py-3 px-4 text-slate-300 font-semibold">API</th>
                  <th className="text-center py-3 px-4 text-slate-300 font-semibold">Security</th>
                  <th className="text-center py-3 px-4 text-slate-300 font-semibold">AI Triage</th>
                  <th className="text-center py-3 px-4 text-slate-300 font-semibold">Telemetry</th>
                  <th className="text-center py-3 px-4 text-slate-300 font-semibold">Analytics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-600">
                {[
                  { name: 'Parallel Execution', engines: [true, true, true, true, true, false] },
                  { name: 'Real-time Monitoring', engines: [true, true, true, true, true, true] },
                  { name: 'Integration Friendly', engines: [true, true, true, true, true, true] },
                  { name: 'Cloud Native', engines: [true, true, true, true, true, true] },
                  { name: 'AI-Powered', engines: [false, false, false, true, true, true] },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-500/20">
                    <td className="py-3 px-4 text-slate-300 font-medium">{row.name}</td>
                    {row.engines.map((supported, eIdx) => (
                      <td key={eIdx} className="text-center py-3 px-4">
                        {supported ? (
                          <CheckCircle2 className="w-5 h-5 text-status-pass mx-auto" />
                        ) : (
                          <div className="w-5 h-5 border border-slate-600 rounded mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Integration CTA */}
      <section className="section-padding bg-slate-surface">
        <div className="container-max max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
              Integrate Engines Into Your Pipeline
            </h2>
            <p className="text-lg text-slate-400">
              Each engine is available standalone or as part of your comprehensive QA-PaaS
              subscription. Deploy immediately with zero setup overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InteractiveButton variant="primary" size="lg" className="w-full" href="/marketplaces">
              <span className="flex items-center justify-center gap-2">
                View Marketplace Options
                <ArrowRight className="w-4 h-4" />
              </span>
            </InteractiveButton>
            <InteractiveButton
              variant="secondary"
              size="lg"
              className="w-full"
              href="mailto:sales@qa-paas.com"
            >
              Request Demo
            </InteractiveButton>
            <InteractiveButton
              variant="ghost"
              size="lg"
              className="w-full"
              href="/legal/company-info"
            >
              Learn About QA-PaaS
            </InteractiveButton>
          </div>

          <div className="text-center text-sm text-slate-400 border-t border-slate-600 pt-8">
            <p>
              All engines come with 24/7 support and SLA guarantees.{' '}
              <a href="mailto:support@qa-paas.com" className="text-primary hover:underline">
                Contact support
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Grid Section */}
      <section className="section-padding bg-slate-bg">
        <div className="container-max">
          <ComplianceGrid />
        </div>
      </section>

      <Footer />
    </>
  );
}
