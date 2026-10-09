'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Zap, CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui';

interface LogEntry {
  timestamp: string;
  level: 'info' | 'success' | 'warning' | 'error';
  message: string;
}

const INITIAL_LOGS: LogEntry[] = [
  { timestamp: '14:23:45', level: 'info', message: 'Starting test suite...' },
  { timestamp: '14:23:46', level: 'info', message: 'Initializing self-healing locators' },
  { timestamp: '14:23:47', level: 'info', message: 'Detected DOM shift in Login button' },
  { timestamp: '14:23:48', level: 'success', message: '✓ Auto-healed: button.nth-child(3)' },
  { timestamp: '14:23:49', level: 'info', message: 'Retrying failed assertion' },
  { timestamp: '14:23:50', level: 'success', message: '✓ All tests passed' },
  { timestamp: '14:23:51', level: 'info', message: 'Generating coverage report...' },
  { timestamp: '14:23:52', level: 'success', message: '✓ Test execution complete' },
];

const LEVEL_STYLES: Record<LogEntry['level'], string> = {
  info: 'text-cyan-400',
  success: 'text-emerald-400',
  warning: 'text-yellow-400',
  error: 'text-red-400',
};

const METRIC_STYLES = {
  'Execution Time': { icon: Zap, color: 'text-cyan-400' },
  'Tests Passed': { icon: CheckCircle2, color: 'text-emerald-400' },
  Coverage: { icon: TrendingUp, color: 'text-blue-400' },
} as const;

export const AITriageConsole: React.FC = () => {
  const [displayedLogs, setDisplayedLogs] = useState<LogEntry[]>([]);
  const [isAnimating, setIsAnimating] = useState(true);
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setDisplayedLogs(INITIAL_LOGS);
      setIsAnimating(false);
      return;
    }

    if (!isAnimating) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < INITIAL_LOGS.length) {
        setDisplayedLogs(INITIAL_LOGS.slice(0, currentIndex + 1));
        currentIndex += 1;
      } else {
        setIsAnimating(false);
        clearInterval(interval);
        window.setTimeout(() => {
          setDisplayedLogs([]);
          setIsAnimating(true);
        }, 3000);
      }
    }, 320);

    return () => clearInterval(interval);
  }, [isAnimating]);

  // Keep the latest log line in view
  useEffect(() => {
    logEndRef.current?.scrollIntoView({ block: 'nearest' });
  }, [displayedLogs]);

  const metrics = [
    { label: 'Execution Time', value: '2.34s' },
    { label: 'Tests Passed', value: '2,847' },
    { label: 'Coverage', value: '94.2%' },
  ];

  return (
    <div className="w-full space-y-4">
      {/* Terminal frame */}
      <Card
        className="overflow-hidden border-slate-700 bg-slate-900/60 shadow-2xl shadow-navy-950/60 hover:shadow-glow-cyan transition-all duration-300"
        aria-label="AI Triage Console demo"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800/80 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-red-500/90" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/90" />
              <span className="h-3 w-3 rounded-full bg-green-500/90" />
            </div>
            <span className="font-mono text-xs text-slate-400">AI Triage Console — bash</span>
          </div>
          <span className="font-mono text-xs text-slate-600">qa-paas</span>
        </div>

        {/* Content */}
        <div
          className="h-72 space-y-1 overflow-y-auto bg-slate-950/50 p-4 font-mono text-sm"
          role="log"
          aria-live="polite"
          aria-label="Live test execution log"
        >
          <div className="mb-2 text-slate-400">$ npx qa-paas test --ai-triage</div>

          {displayedLogs.map((log, index) => (
            <div
              key={`${log.timestamp}-${index}`}
              className={`${LEVEL_STYLES[log.level]} animate-fade-in`}
            >
              <span className="text-slate-600">[{log.timestamp}]</span>
              <span className="ml-2">{log.message}</span>
            </div>
          ))}

          {isAnimating && displayedLogs.length < INITIAL_LOGS.length && (
            <div className="animate-pulse text-cyan-accent" aria-hidden="true">
              ▌
            </div>
          )}

          {!isAnimating && displayedLogs.length === INITIAL_LOGS.length && (
            <div className="mt-4 text-xs text-slate-400">
              $ <span className="text-cyan-accent">ready</span> — re-running in 3s
            </div>
          )}

          <div ref={logEndRef} />
        </div>
      </Card>

      {/* Performance metrics */}
      <div className="grid grid-cols-3 gap-3">
        {metrics.map((metric) => {
          const { icon: Icon, color } = METRIC_STYLES[metric.label as keyof typeof METRIC_STYLES];
          return (
            <Card
              key={metric.label}
              className="space-y-2 border-slate-700 bg-slate-900/60 p-4 hover:border-slate-600 transition-colors"
            >
              <div className="flex items-center justify-between gap-1">
                <span className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                  {metric.label}
                </span>
                <Icon className={`h-4 w-4 ${color}`} aria-hidden="true" />
              </div>
              <p className={`text-lg font-bold ${color}`}>{metric.value}</p>
            </Card>
          );
        })}
      </div>

      {/* Status summary */}
      <Card className="flex items-center justify-between gap-4 border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-transparent p-4">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-emerald-400">✓ All systems nominal</p>
          <p className="text-xs text-slate-400">Self-healing enabled • AI triage active</p>
        </div>
        <Link
          href="/engines"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-cyan-accent/50 bg-cyan-accent/10 px-4 py-2 text-sm font-semibold text-cyan-accent transition-colors hover:bg-cyan-accent/20 focus-ring"
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Card>
    </div>
  );
};

export default AITriageConsole;
