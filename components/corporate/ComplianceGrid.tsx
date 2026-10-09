'use client';

import React from 'react';
import { Card, Badge } from '@/components/ui';
import { Shield, Lock, CheckCircle2, Award, Server, Eye, GitBranch, Zap } from 'lucide-react';

interface Certification {
  icon: React.ElementType;
  name: string;
  description: string;
  status: 'certified' | 'compliant' | 'pending';
  color: string;
}

export const ComplianceGrid: React.FC = () => {
  const certifications: Certification[] = [
    {
      icon: Shield,
      name: 'ISO 27001',
      description: 'Information Security Management',
      status: 'certified',
      color: 'text-blue-400',
    },
    {
      icon: Lock,
      name: 'SOC 2 Type II',
      description: 'Security, Availability & Confidentiality',
      status: 'certified',
      color: 'text-purple-400',
    },
    {
      icon: CheckCircle2,
      name: 'GDPR Compliant',
      description: 'European Data Protection',
      status: 'compliant',
      color: 'text-emerald-400',
    },
    {
      icon: Award,
      name: 'HIPAA Ready',
      description: 'Healthcare Data Protection',
      status: 'compliant',
      color: 'text-cyan-accent',
    },
    {
      icon: Server,
      name: 'Multi-Cloud Ready',
      description: 'AWS, Azure, GCP Support',
      status: 'certified',
      color: 'text-orange-400',
    },
    {
      icon: Eye,
      name: 'Audit Logging',
      description: 'Complete Activity Tracking',
      status: 'certified',
      color: 'text-pink-400',
    },
    {
      icon: GitBranch,
      name: 'Version Control',
      description: 'Full Change History',
      status: 'certified',
      color: 'text-red-400',
    },
    {
      icon: Zap,
      name: 'High Availability',
      description: '99.99% Uptime SLA',
      status: 'certified',
      color: 'text-yellow-400',
    },
  ];

  const getStatusColor = (status: string): string => {
    const colors: Record<string, string> = {
      certified: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300',
      compliant: 'bg-cyan-accent/15 border-cyan-accent/40 text-cyan-accent',
      pending: 'bg-yellow-500/15 border-yellow-500/40 text-yellow-300',
    };
    return colors[status] || 'bg-slate-700/20 border-slate-700 text-slate-300';
  };

  const getStatusLabel = (status: string): string => {
    const labels: Record<string, string> = {
      certified: '✓ Certified',
      compliant: '✓ Compliant',
      pending: '⏳ In Progress',
    };
    return labels[status] || 'Unknown';
  };

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold text-slate-100">Enterprise Compliance</h3>
        <p className="text-slate-400">
          Built for regulated industries with industry-leading certifications
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {certifications.map((cert) => {
          const IconComponent = cert.icon;
          return (
            <Card
              key={cert.name}
              className="relative group bg-navy-800/40 border-slate-700 hover:border-slate-600 p-6 space-y-4 transition-all duration-300 overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/0 to-transparent group-hover:from-cyan-accent/10 transition-all duration-300 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 space-y-3">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center border border-slate-700 group-hover:border-slate-600 transition-colors ${cert.color}`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Name */}
                <div>
                  <h4 className="text-sm font-bold text-slate-100">{cert.name}</h4>
                  <p className="text-xs text-slate-400 mt-1">{cert.description}</p>
                </div>

                {/* Status Badge */}
                <Badge
                  variant="info"
                  size="sm"
                  className={`${getStatusColor(cert.status)} text-xs font-medium w-full text-center justify-center`}
                >
                  {getStatusLabel(cert.status)}
                </Badge>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-slate-700">
        {/* Security Features */}
        <Card className="bg-navy-800/40 border-slate-700 p-8">
          <h4 className="text-lg font-bold text-slate-100 mb-6">Security Features</h4>
          <ul className="space-y-3">
            {[
              'End-to-end data encryption',
              'Zero-knowledge architecture',
              'Regular penetration testing',
              'Bug bounty program',
              'Incident response plan',
              'Disaster recovery plan',
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-2" />
                <span className="text-sm text-slate-300">{feature}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Data Privacy */}
        <Card className="bg-navy-800/40 border-slate-700 p-8">
          <h4 className="text-lg font-bold text-slate-100 mb-6">Data Privacy</h4>
          <ul className="space-y-3">
            {[
              'Data residency options',
              'GDPR right to erasure',
              'PII anonymization tools',
              'Audit trail logging',
              'Data export compliance',
              'No third-party sharing',
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent flex-shrink-0 mt-2" />
                <span className="text-sm text-slate-300">{feature}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Compliance Timeline */}
      <Card className="bg-gradient-to-r from-slate-900/50 to-navy-900/50 border-slate-700 p-8">
        <h4 className="text-lg font-bold text-slate-100 mb-6">Compliance Roadmap</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { year: '2023', items: ['ISO 27001', 'SOC 2 Type II'] },
            { year: '2024', items: ['GDPR Compliance', 'HIPAA Ready'] },
            { year: '2025', items: ['FedRAMP', 'PCI DSS 4.0'] },
            { year: 'Roadmap', items: ['ISO 42001', 'TISAX'] },
          ].map((period) => (
            <div key={period.year} className="space-y-3">
              <h5 className="font-semibold text-cyan-accent">{period.year}</h5>
              <ul className="space-y-2">
                {period.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-1 h-1 rounded-full bg-slate-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* Trust Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-navy-800/40 border-slate-700 p-6 text-center space-y-2">
          <div className="text-3xl font-bold text-emerald-400">8</div>
          <p className="text-sm text-slate-400">Major Certifications</p>
          <p className="text-xs text-slate-500">ISO, SOC, GDPR, HIPAA, etc.</p>
        </Card>

        <Card className="bg-navy-800/40 border-slate-700 p-6 text-center space-y-2">
          <div className="text-3xl font-bold text-cyan-accent">99.99%</div>
          <p className="text-sm text-slate-400">Uptime SLA</p>
          <p className="text-xs text-slate-500">Enterprise-grade availability</p>
        </Card>

        <Card className="bg-navy-800/40 border-slate-700 p-6 text-center space-y-2">
          <div className="text-3xl font-bold text-blue-400">365/24/7</div>
          <p className="text-sm text-slate-400">Support Available</p>
          <p className="text-xs text-slate-500">Premium support included</p>
        </Card>
      </div>

      {/* CTA */}
      <Card className="bg-gradient-to-r from-cyan-accent/5 to-transparent border-cyan-accent/30 p-8 text-center space-y-4">
        <h4 className="text-lg font-bold text-slate-100">Need specific compliance requirements?</h4>
        <p className="text-slate-400">
          Talk to our team about custom compliance configurations and dedicated support
        </p>
        <button className="px-6 py-2 bg-cyan-accent hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors">
          Contact Sales
        </button>
      </Card>
    </div>
  );
};

export default ComplianceGrid;
