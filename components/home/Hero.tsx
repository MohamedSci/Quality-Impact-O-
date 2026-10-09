'use client';

import React from 'react';
import { Badge, Button } from '@/components/ui';
import { AITriageConsole } from '@/components/telemetry';
import { Shield, Lock, Cloud } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] pt-24 pb-12 md:pt-32 md:pb-16 px-6 md:px-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-accent/10 to-transparent opacity-30" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-accent/10 rounded-full filter blur-3xl opacity-20 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <Badge variant="info" size="lg" className="text-cyan-accent">
              QUALITY IMPACT OÜ // QA-PAAS PLATFORM
            </Badge>

            {/* Headline */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-slate-100">AI-Orchestrated</span>
                <br />
                <span className="text-cyan-accent">Quality Engineering</span>
              </h1>
              <p className="mt-6 text-xl text-slate-400 font-medium">
                Enterprise QA-PaaS across AWS, Azure, and Google Cloud
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Deploy AI-powered test execution with self-healing automation, intelligent triage, and
              enterprise compliance. Multi-cloud native. Deployed on day one.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center pt-4">
              <Button
                variant="solid"
                size="lg"
                onClick={() => (window.location.href = '/marketplaces#deploy')}
                className="bg-cyan-accent hover:bg-cyan-500 text-white hover:shadow-glow-cyan-lg transition-all duration-200 font-semibold"
              >
                Deploy Now
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('telemetry-demo');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-cyan-accent text-cyan-accent hover:border-cyan-400 transition-all duration-200 font-medium"
              >
                View Live Telemetry →
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <TrustBadge icon={Shield} label="ISO 27001" />
              <TrustBadge icon={Lock} label="SOC2 Type II" />
              <TrustBadge icon={Cloud} label="Multi-Cloud" />
            </div>
          </div>

          {/* Right: Interactive Terminal */}
          <div className="hidden lg:block animate-fade-in-up">
            <AITriageConsole />
          </div>
        </div>

        {/* Mobile: Terminal Below */}
        <div className="lg:hidden mt-16 animate-fade-in-up">
          <AITriageConsole />
        </div>
      </div>
    </section>
  );
};

/**
 * Trust Badge Component - Display trust indicator
 */
interface TrustBadgeProps {
  icon: React.ElementType;
  label: string;
}

const TrustBadge: React.FC<TrustBadgeProps> = ({ icon: Icon, label }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-colors">
      <Icon className="w-4 h-4 text-cyan-accent flex-shrink-0" />
      <span className="text-sm text-slate-300 font-medium">{label}</span>
    </div>
  );
};

export default Hero;
