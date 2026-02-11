/**
 * Guardrail Probe - Main Entry Point
 * 
 * Exports for programmatic usage
 */

export { ProbeRunner, createRunner } from './runner';
export { analyzeResponse, isRefusal, getRefusalType } from './analyzer';
export { generateAuditReport, formatReportMarkdown, generateCategorySummary } from './reporter';
export { allProbes, probesByCategory, getProbesByCategory, getProbeById } from './categories/index';

export type {
  ProbeConfig,
  ProbeResult,
  ProbeCategory,
  ProbeTemplate,
  RefusalType,
  CategorySummary,
  AuditReport,
} from './types';

export { CATEGORY_DESCRIPTIONS } from './types';

// Convenience class for quick usage
export class GuardrailProbe {
  private runner: ProbeRunner;

  constructor(config: { model: string; apiKey?: string; baseUrl?: string }) {
    this.runner = new ProbeRunner(config);
  }

  async runCategory(category: string) {
    return this.runner.runCategory(category as any);
  }

  async runAll() {
    return this.runner.runAll();
  }

  async runProbe(id: string) {
    const template = getProbeById(id);
    if (!template) throw new Error(`Probe not found: ${id}`);
    return this.runner.runProbe(template);
  }

  getResults() {
    return this.runner.getResults();
  }
}

import { getProbeById } from './categories/index';
