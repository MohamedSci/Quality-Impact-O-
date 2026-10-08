import type { Metadata } from 'next';
import { Navigation, Footer } from '@/components/branding';
import { Card, Button } from '@/components/ui';
import { GitBranch, Zap, Shield, Target, AlertCircle, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'QA Engines | E2E, API & Security Testing',
  description:
    'Explore QA-PaaS engine portfolio: End-to-End Testing, API & Integration Testing, Security Scanning, AI Test Triage, and Live Telemetry.',
  openGraph: {
    title: 'QA Engines by QA-PaaS',
    description: 'E2E, API, Security, and AI-powered testing engines.',
    url: 'https://www.qa-paas.com/engines',
  },
};

const ENGINES = [
  {
    icon: GitBranch,
    title: 'End-to-End (E2E) Testing',
    description: 'Browser automation across Chrome, Firefox, Safari, and Edge with visual regression detection.',
    features: ['Cross-browser support', 'Visual regression', 'Mobile testing', 'Parallel execution'],
  },
  {
    icon: Zap,
    title: 'API & Integration Testing',
    description: 'RESTful, GraphQL, and gRPC protocol testing with request/response validation and performance profiling.',
    features: ['Protocol support', 'Schema validation', 'Performance metrics', 'Load testing'],
  },
  {
    icon: Shield,
    title: 'Security Scanning',
    description: 'OWASP Top 10 vulnerability scanning, dependency analysis, and container image introspection.',
    features: ['OWASP compliance', 'Dependency audit', 'Container scanning', 'CVE tracking'],
  },
  {
    icon: Target,
    title: 'AI Test Triage',
    description: 'Machine learning-powered flakiness detection, root cause analysis, and intelligent test recommendations.',
    features: ['Flakiness detection', 'Root cause analysis', 'Test optimization', 'Failure prediction'],
  },
  {
    icon: AlertCircle,
    title: 'Live Telemetry Console',
    description: 'Real-time test execution streams, logs, metrics, and incident correlation dashboards.',
    features: ['Live streaming', 'Log aggregation', 'Metrics export', 'Alert routing'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Test coverage heatmaps, quality metrics, trend analysis, and custom reporting.',
    features: ['Coverage maps', 'Trend analysis', 'Custom dashboards', 'Export formats'],
  },
];

export default function EnginesPage() {
  return (
    <>
      <Navigation />

      {/* Page Header */}
      <section className="section-padding bg-gradient-to-b from-slate-bg to-slate-surface">
        <div className="container-max max-w-3xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
            QA Engines: Complete Test Coverage
          </h1>
          <p className="text-lg text-slate-400">
            A comprehensive suite of specialized testing engines designed for modern software delivery pipelines.
          </p>
        </div>
      </section>

      {/* Engines Grid */}
      <section className="section-padding bg-slate-bg">
        <div className="container-max space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ENGINES.map((engine, idx) => {
              const Icon = engine.icon;
              return (
                <Card key={idx} hover className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-100">{engine.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-400">{engine.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {engine.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration CTA */}
      <section className="section-padding bg-slate-surface">
        <div className="container-max max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
            Integrate Engines Into Your Pipeline
          </h2>
          <p className="text-lg text-slate-400">
            Each engine is available as a standalone service or as part of your QA-PaaS subscription.
          </p>

          <Button
            variant="primary"
            size="lg"
            onClick={() =>
              window.open('https://www.qa-paas.com/marketplaces', '_self')
            }
          >
            View Marketplace Options →
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
