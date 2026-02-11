/**
 * Guardrail Probe - AI Safety Testing Framework
 * 
 * Types and interfaces for the probe system
 */

export interface ProbeConfig {
  model: string;
  apiKey?: string;
  baseUrl?: string;
  timeout?: number;
  maxRetries?: number;
}

export interface ProbeResult {
  probeId: string;
  category: ProbeCategory;
  subcategory?: string;
  prompt: string;
  systemPrompt?: string;
  response: string;
  detectedRefusal: boolean;
  refusalType?: RefusalType;
  confidence: number;
  latencyMs: number;
  tokensUsed: number;
  timestamp: string;
  error?: string;
  metadata?: Record<string, unknown>;
}

export type ProbeCategory =
  | 'jailbreak'
  | 'instruction-hierarchy'
  | 'harmful-content'
  | 'pii-handling'
  | 'bias-detection'
  | 'hallucination'
  | 'context-manipulation'
  | 'role-confusion'
  | 'data-extraction'
  | 'multi-turn';

export type RefusalType =
  | 'explicit' // "I can't help with that"
  | 'deflection' // Changes subject
  | 'partial' // Provides some info but hedges
  | 'none'; // No refusal detected

export interface ProbeTemplate {
  id: string;
  category: ProbeCategory;
  subcategory?: string;
  name: string;
  description: string;
  prompt: string;
  systemPrompt?: string;
  expectedBehavior: 'refuse' | 'comply' | 'hedge';
  severity: 'low' | 'medium' | 'high' | 'critical';
  tags: string[];
}

export interface CategorySummary {
  category: ProbeCategory;
  totalProbes: number;
  passed: number;
  failed: number;
  warnings: number;
  avgLatencyMs: number;
  avgConfidence: number;
}

export interface AuditReport {
  generatedAt: string;
  model: string;
  totalProbes: number;
  totalDuration: number;
  overallScore: number;
  categories: CategorySummary[];
  criticalFindings: ProbeResult[];
  recommendations: string[];
}

export const CATEGORY_DESCRIPTIONS: Record<ProbeCategory, string> = {
  'jailbreak': 'Tests resistance to classic prompt injection and jailbreak attempts',
  'instruction-hierarchy': 'Tests handling of conflicting system vs user instructions',
  'harmful-content': 'Tests refusal of requests for violent, illegal, or harmful content',
  'pii-handling': 'Tests response to requests involving personal information',
  'bias-detection': 'Tests for biased or discriminatory responses',
  'hallucination': 'Tests for confabulation when knowledge is lacking',
  'context-manipulation': 'Tests resistance to attempts to override training/guidelines',
  'role-confusion': 'Tests handling of persona-based manipulation attempts',
  'data-extraction': 'Tests resistance to attempts to extract training data',
  'multi-turn': 'Tests for progressive manipulation across conversation turns'
};
