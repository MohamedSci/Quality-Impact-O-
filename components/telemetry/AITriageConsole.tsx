'use client';

import React, { useState, useEffect } from 'react';
import { Zap, CheckCircle2, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui';

interface LogEntry {
  timestamp: string;
  level: 'info' | 'success' | 'warning' | 'error';
  message: string;
}

export const AITriageConsole: React.FC = () => {
  const [displayedLogs, setDisplayedLogs] = useState<LogEntry[]>([]);
  const [isAnimating, setIsAnimating] = useState(true);

  const initialLogs: LogEntry[] = [
    { timestamp: '14:23:45', level: 'info', message: 'Starting test suite...' },
    {
      timestamp: '14:23:46',
      level: 'info',
      message: 'Initializing self-healing locators',
    },
    {
      timestamp: '14:23:47',
      level: 'info',
      message: 'Detected DOM shift in Login button',
    },
    {
      timestamp: '14:23:48',
      level: 'success',
      message: '✓ Auto-healed: button.nth-child(3)',
    },
    { timestamp: '14:23:49', level: 'info', message: 'Retrying failed assertion' },
    { timestamp: '14:23:50', level: 'success', message: '✓ All tests passed' },
    {
      timestamp: '14:23:51',
      level: 'info',
      message: 'Generating coverage report...',
    },
    {
      timestamp: '14:23:52',
      level: 'success',
      message: '✓ Test execution complete',
    },
  ];

  useEffect(() => {
    if (!isAnimating) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < initialLogs.length) {
        setDisplayedLogs((prev) => [...prev, initialLogs[currentIndex]]);
        currentIndex += 1;
      } else {
        setIsAnimating(false);
        clearInterval(interval);
        // Restart animation after 3 seconds
        setTimeout(() => {
          setDisplayedLogs([]);
          setIsAnimating(true);
        }, 3000);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const getColorClass = (level: string): string => {
    const colors: Record<string, string> = {
      info: 'text-cyan-accent',
      success: 'text-emerald-400',
      warning: 'text-yellow-400',
      error: 'text-red-400',
    };
    return colors[level] || 'text-slate-300';
  };

  return (
    <div className="w-full space-y-4">
      {/* Terminal Frame */}
      <Card className="border border-slate-700 rounded-lg overflow-hidden shadow-xl bg-slate-900/50 backdrop-blur-sm hover:shadow-glow-cyan transition-all duration-300">
        {/* Terminal Header */}
        <div className="bg-slate-800/80 border-b border-slate-700 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-green-500 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
            </div>
            <span className="ml-3 text-xs text-slate-400 font-mono">AI Triage Console — bash</span>
          </div>
          <div className="text-xs text-slate-500">localhost:3000</div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 font-mono text-sm space-y-1 h-80 overflow-y-auto bg-slate-950/40">
          {/* Welcome Message */}
          <div className="text-slate-500 mb-2">$ npx qa-paas test --ai-triage</div>

          {/* Log Entries */}
          {displayedLogs.map((log, index) => (
            <LogEntryComponent key={index} log={log} colorClass={getColorClass(log.level)} />
          ))}

          {/* Cursor */}
          {isAnimating && displayedLogs.length < initialLogs.length && (
            <div className="text-cyan-accent animate-pulse">▌</div>
          )}

          {/* Completed State */}
          {!isAnimating && displayedLogs.length === initialLogs.length && (
            <div className="text-slate-500 text-xs mt-4">
              $ <span className="text-cyan-accent">ready</span> — press enter to run again
            </div>
          )}
        </div>
      </Card>

      {/* Performance Metrics */}
      <div className="grid grid-cols-3 gap-3">
        <MetricBox label="Execution Time" value="2.34s" icon={Zap} color="cyan-accent" />
        <MetricBox label="Tests Passed" value="2847" icon={CheckCircle2} color="emerald-400" />
        <MetricBox label="Coverage" value="94.2%" icon={TrendingUp} color="blue-400" />
      </div>

      {/* Status Summary */}
      <Card className="bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/30 p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-emerald-400">✓ All systems nominal</p>
            <p className="text-xs text-slate-400">Self-healing enabled • AI triage active</p>
          </div>
          <button className="px-4 py-2 bg-cyan-accent/10 hover:bg-cyan-accent/20 border border-cyan-accent/50 text-cyan-accent text-sm rounded-md transition-colors font-medium">
            View Details →
          </button>
        </div>
      </Card>
    </div>
  );
};

/**
 * Log Entry Component - Individual log line renderer
 */
const LogEntryComponent: React.FC<{ log: LogEntry; colorClass: string }> = ({
  log,
  colorClass,
}) => {
  return (
    <div className={`${colorClass} animate-fade-in`}>
      <span className="text-slate-600">[{log.timestamp}]</span>
      <span className="ml-2">{log.message}</span>
    </div>
  );
};

/**
 * Metric Box Component - Display performance metric
 */
interface MetricBoxProps {
  label: string;
  value: string;
  icon: React.ElementType;
  color: string;
}

const MetricBox: React.FC<MetricBoxProps> = ({ label, value, icon: Icon, color }) => {
  return (
    <Card className="bg-slate-900/50 border border-slate-700 p-4 space-y-2 hover:border-slate-600 transition-colors">
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">{label}</span>
        <Icon className={`w-4 h-4 text-${color}`} style={{ color: `var(--color-${color})` }} />
      </div>
      <p className={`text-lg font-bold text-${color}`} style={{ color: `var(--color-${color})` }}>
        {value}
      </p>
    </Card>
  );
};

export default AITriageConsole;
