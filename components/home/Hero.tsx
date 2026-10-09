'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui';
import { AITriageConsole } from '@/components/telemetry';
import { CloudProviderIcon, type CloudProvider } from '@/components/marketplace/CloudProviderLogo';
import { Shield, Lock, Cloud, ArrowRight, Play } from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Animated counter                                                    */
/* ------------------------------------------------------------------ */
const useCountUp = (target: number, duration = 1600, decimals = 0) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(parseFloat((target * eased).toFixed(decimals)));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, decimals]);

  return { ref, value };
};

const HERO_STATS = [
  { value: 70, suffix: '%', label: 'Faster test execution', decimals: 0 },
  { value: 90, suffix: '%', label: 'Fewer flaky tests', decimals: 0 },
  { value: 99.99, suffix: '%', label: 'Uptime SLA', decimals: 2 },
  { value: 24, suffix: '/7', label: 'Global support', decimals: 0 },
];

const TRUST_BADGES = [
  { icon: Shield, label: 'ISO 27001' },
  { icon: Lock, label: 'SOC2 Type II' },
  { icon: Cloud, label: 'Multi-Cloud' },
];

const PROVIDERS: CloudProvider[] = ['aws', 'azure', 'gcp'];

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 pointer-events-none" />
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)] pointer-events-none" />
      <div className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-accent/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-[-12%] h-[360px] w-[360px] rounded-full bg-accent-500/10 blur-[110px] pointer-events-none" />

      <div className="container-max relative z-10 px-6 md:px-12 pt-16 pb-10 md:pt-24 md:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="space-y-7 animate-fade-in-up">
            <Badge
              variant="info"
              size="lg"
              className="bg-cyan-accent/10 border-cyan-accent/30 text-cyan-accent font-mono tracking-wide"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-accent" />
              </span>
              QUALITY IMPACT OÜ // QA-PaaS PLATFORM
            </Badge>

            <h1 className="text-[2.6rem] leading-[1.05] sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-50">
              AI-Orchestrated
              <br />
              <span className="gradient-text">Quality Engineering.</span>
              <br />
              <span className="text-slate-300">Multi-Cloud Native.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed text-pretty">
              Deploy enterprise QA-PaaS across AWS, Azure, and Google Cloud. Self-healing
              automation, AI triage, and enterprise compliance — live in minutes, not months.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/marketplaces#deploy"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-accent px-7 py-3.5 text-base font-bold text-navy-950 hover:bg-cyan-400 hover:shadow-glow-cyan-lg transition-all duration-200 focus-ring active:scale-[0.98]"
              >
                Deploy Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#telemetry-demo"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-cyan-accent/60 px-7 py-3.5 text-base font-semibold text-cyan-accent hover:border-cyan-400 hover:text-cyan-400 hover:shadow-glow-cyan transition-all duration-200 focus-ring active:scale-[0.98]"
              >
                <Play className="h-4 w-4" />
                View Live Telemetry
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-800/50 px-3.5 py-2 hover:border-cyan-accent/40 transition-colors"
                >
                  <Icon className="h-4 w-4 text-cyan-accent flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium text-slate-300">{label}</span>
                </div>
              ))}
            </div>

            {/* Cloud availability */}
            <div className="flex items-center gap-4 pt-2 text-sm text-slate-400">
              <span className="font-mono uppercase tracking-wider text-xs">Available on</span>
              <div className="flex items-center gap-3">
                {PROVIDERS.map((provider) => (
                  <span
                    key={provider}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-slate-100 transition-colors"
                    title={
                      provider === 'aws'
                        ? 'AWS Marketplace'
                        : provider === 'azure'
                          ? 'Azure DevOps'
                          : 'Google Cloud'
                    }
                  >
                    <CloudProviderIcon provider={provider} className="h-5 w-5" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: interactive console */}
          <div id="telemetry-demo" className="animate-fade-in-up scroll-mt-28">
            <AITriageConsole />
          </div>
        </div>

        {/* Stats band */}
        <div className="mt-14 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-700/60">
          {HERO_STATS.map((stat) => (
            <StatCell key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Stat cell with animated count-up                                    */
/* ------------------------------------------------------------------ */
interface StatCellProps {
  value: number;
  suffix: string;
  label: string;
  decimals: number;
}

const StatCell: React.FC<StatCellProps> = ({ value, suffix, label, decimals }) => {
  const { ref, value: current } = useCountUp(value, 1600, decimals);

  return (
    <div ref={ref} className="bg-navy-900/80 px-6 py-7 text-center">
      <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
        {current.toFixed(decimals)}
        <span className="text-cyan-accent">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
};

export default Hero;
