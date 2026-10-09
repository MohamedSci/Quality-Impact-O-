'use client';

import React, { useState, useMemo } from 'react';
import { Card, Button, Badge } from '@/components/ui';
import { Zap, TrendingUp, DollarSign } from 'lucide-react';

interface CalculatorState {
  runnerSize: 'small' | 'medium' | 'large';
  testsPerMonth: number;
  avgDuration: number;
}

export const RunnerCalculator: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({
    runnerSize: 'medium',
    testsPerMonth: 1000,
    avgDuration: 15,
  });

  const runnerSpecs = {
    small: { cpu: '2', memory: '4GB', basePrice: 100 },
    medium: { cpu: '4', memory: '8GB', basePrice: 250 },
    large: { cpu: '8', memory: '16GB', basePrice: 500 },
  };

  const calculations = useMemo(() => {
    const specs = runnerSpecs[state.runnerSize];
    const monthlyExecutionHours = (state.testsPerMonth * state.avgDuration) / 60;
    const hourlyRate = specs.basePrice / 730; // 730 hours per month
    const monthlyExecutionCost = monthlyExecutionHours * hourlyRate;
    const monthlyTotal = specs.basePrice + monthlyExecutionCost;
    const annualTotal = monthlyTotal * 12;

    return {
      specs,
      monthlyExecutionHours,
      hourlyRate: hourlyRate.toFixed(2),
      monthlyExecutionCost: monthlyExecutionCost.toFixed(2),
      monthlyTotal: monthlyTotal.toFixed(2),
      annualTotal: annualTotal.toFixed(2),
      costPerTest: (monthlyTotal / state.testsPerMonth).toFixed(2),
    };
  }, [state]);

  const handleRunnerChange = (size: 'small' | 'medium' | 'large') => {
    setState((prev) => ({ ...prev, runnerSize: size }));
  };

  const handleTestsChange = (value: number) => {
    setState((prev) => ({ ...prev, testsPerMonth: Math.max(1, value) }));
  };

  const handleDurationChange = (value: number) => {
    setState((prev) => ({ ...prev, avgDuration: Math.max(1, value) }));
  };

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold text-slate-100">Cost Calculator</h3>
        <p className="text-slate-400">
          Estimate your monthly costs based on your testing requirements
        </p>
      </div>

      {/* Main Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card className="bg-navy-800/40 border-slate-700 p-8 space-y-6">
          {/* Runner Size Selection */}
          <div className="space-y-4">
            <label className="text-sm font-semibold text-slate-200">Runner Size</label>
            <div className="grid grid-cols-3 gap-3">
              {(Object.keys(runnerSpecs) as Array<'small' | 'medium' | 'large'>).map((size) => (
                <button
                  key={size}
                  onClick={() => handleRunnerChange(size)}
                  className={`relative p-3 rounded-lg border-2 transition-all duration-200 text-center ${
                    state.runnerSize === size
                      ? 'border-cyan-accent bg-cyan-accent/10'
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <div className="font-semibold text-sm capitalize text-slate-100 mb-1">{size}</div>
                  <div className="text-xs text-slate-400">
                    {runnerSpecs[size as keyof typeof runnerSpecs].cpu} CPU
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tests Per Month */}
          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-200">Tests Per Month</span>
              <span className="text-sm font-mono text-cyan-accent">
                {state.testsPerMonth.toLocaleString()}
              </span>
            </label>
            <input
              type="range"
              min="1"
              max="10000"
              value={state.testsPerMonth}
              onChange={(e) => handleTestsChange(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-accent"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>1</span>
              <span>10,000</span>
            </div>
          </div>

          {/* Average Duration */}
          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-200">Avg Test Duration (min)</span>
              <span className="text-sm font-mono text-cyan-accent">{state.avgDuration}m</span>
            </label>
            <input
              type="range"
              min="1"
              max="120"
              value={state.avgDuration}
              onChange={(e) => handleDurationChange(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-accent"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>1 min</span>
              <span>120 min</span>
            </div>
          </div>

          {/* Runner Specs */}
          <Card className="bg-slate-900/50 border-slate-700 p-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">CPU Cores:</span>
                <span className="font-medium text-slate-100">{calculations.specs.cpu}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Memory:</span>
                <span className="font-medium text-slate-100">{calculations.specs.memory}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-700">
                <span className="text-slate-400">Exec Hours/Month:</span>
                <span className="font-medium text-slate-100">
                  {calculations.monthlyExecutionHours.toFixed(1)}h
                </span>
              </div>
            </div>
          </Card>
        </Card>

        {/* Cost Section */}
        <div className="space-y-6">
          {/* Cost Summary Cards */}
          <Card className="bg-gradient-to-br from-cyan-accent/10 to-transparent border-cyan-accent/30 p-8 space-y-4">
            <div className="space-y-6">
              {/* Monthly */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-cyan-accent" />
                  <span className="text-sm text-slate-400">Monthly Cost</span>
                </div>
                <div className="text-4xl font-bold text-cyan-accent">
                  ${calculations.monthlyTotal}
                </div>
              </div>

              {/* Annual */}
              <div className="border-t border-slate-700 pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-slate-400">Annual Cost</span>
                </div>
                <div className="text-3xl font-bold text-emerald-400">
                  ${calculations.annualTotal}
                </div>
              </div>

              {/* Cost Per Test */}
              <div className="border-t border-slate-700 pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-400">Cost Per Test</span>
                </div>
                <div className="text-2xl font-bold text-slate-200">${calculations.costPerTest}</div>
              </div>
            </div>
          </Card>

          {/* Breakdown Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-navy-800/40 border-slate-700 p-4 space-y-2">
              <div className="text-xs text-slate-400 font-medium">BASE INFRASTRUCTURE</div>
              <div className="text-xl font-bold text-slate-100">
                ${runnerSpecs[state.runnerSize].basePrice}
              </div>
              <div className="text-xs text-slate-500">/month</div>
            </Card>

            <Card className="bg-navy-800/40 border-slate-700 p-4 space-y-2">
              <div className="text-xs text-slate-400 font-medium">EXECUTION COSTS</div>
              <div className="text-xl font-bold text-cyan-accent">
                ${calculations.monthlyExecutionCost}
              </div>
              <div className="text-xs text-slate-500">/month</div>
            </Card>
          </div>

          {/* CTA Button */}
          <Button
            variant="solid"
            size="lg"
            className="w-full bg-cyan-accent hover:bg-cyan-500 text-white hover:shadow-glow-cyan-lg font-semibold"
            onClick={() => (window.location.href = '/marketplaces#deploy')}
          >
            Deploy Runner
          </Button>

          {/* Info Badge */}
          <Badge variant="info" size="lg" className="w-full justify-center text-center">
            💡 Pricing subject to promotional rates for the first 3 months
          </Badge>
        </div>
      </div>

      {/* Features List */}
      <Card className="bg-navy-800/40 border-slate-700 p-8">
        <h4 className="text-lg font-bold text-slate-100 mb-4">What&apos;s Included</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'Unlimited test executions',
            'Self-healing AI engine',
            'Multi-cloud support',
            'Real-time analytics',
            '24/7 uptime SLA',
            'Premium support included',
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-3 text-slate-300 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default RunnerCalculator;
