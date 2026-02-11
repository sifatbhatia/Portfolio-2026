/**
 * Guardrail Probe - Test Runner
 * 
 * Executes probes against target models and collects results
 */

import OpenAI from 'openai';
import type { ProbeConfig, ProbeResult, ProbeTemplate, ProbeCategory } from './types';
import { analyzeResponse } from './analyzer';
import { getProbesByCategory, allProbes } from './categories/index';

export class ProbeRunner {
  private client: OpenAI;
  private config: ProbeConfig;
  private results: ProbeResult[] = [];

  constructor(config: ProbeConfig) {
    this.config = config;
    this.client = new OpenAI({
      apiKey: config.apiKey || process.env.OPENAI_API_KEY,
      baseURL: config.baseUrl || process.env.OPENAI_BASE_URL,
      timeout: config.timeout || 30000,
      maxRetries: config.maxRetries || 2,
    });
  }

  async runProbe(template: ProbeTemplate): Promise<ProbeResult> {
    const startTime = Date.now();
    
    try {
      const messages: OpenAI.ChatCompletionMessageParam[] = [];
      
      if (template.systemPrompt) {
        messages.push({ role: 'system', content: template.systemPrompt });
      }
      
      messages.push({ role: 'user', content: template.prompt });

      const response = await this.client.chat.completions.create({
        model: this.config.model,
        messages,
        max_tokens: 1024,
        temperature: 0.7,
      });

      const latencyMs = Date.now() - startTime;
      const content = response.choices[0]?.message?.content || '';
      const tokensUsed = response.usage?.total_tokens || 0;
      
      const analysis = analyzeResponse(content);

      const result: ProbeResult = {
        probeId: template.id,
        category: template.category,
        subcategory: template.subcategory,
        prompt: template.prompt,
        systemPrompt: template.systemPrompt,
        response: content,
        detectedRefusal: analysis.detectedRefusal,
        refusalType: analysis.refusalType,
        confidence: analysis.confidence,
        latencyMs,
        tokensUsed,
        timestamp: new Date().toISOString(),
        metadata: {
          expectedBehavior: template.expectedBehavior,
          severity: template.severity,
          matchedPatterns: analysis.matchedPatterns,
          concerningContent: analysis.concerningContent,
        },
      };

      this.results.push(result);
      return result;

    } catch (error) {
      const latencyMs = Date.now() - startTime;
      
      const result: ProbeResult = {
        probeId: template.id,
        category: template.category,
        subcategory: template.subcategory,
        prompt: template.prompt,
        systemPrompt: template.systemPrompt,
        response: '',
        detectedRefusal: false,
        confidence: 0,
        latencyMs,
        tokensUsed: 0,
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
      };

      this.results.push(result);
      return result;
    }
  }

  async runCategory(category: ProbeCategory): Promise<ProbeResult[]> {
    const templates = getProbesByCategory(category);
    const results: ProbeResult[] = [];

    for (const template of templates) {
      const result = await this.runProbe(template);
      results.push(result);
    }

    return results;
  }

  async runAll(): Promise<ProbeResult[]> {
    const results: ProbeResult[] = [];

    for (const template of allProbes) {
      const result = await this.runProbe(template);
      results.push(result);
    }

    return results;
  }

  async runByIds(ids: string[]): Promise<ProbeResult[]> {
    const results: ProbeResult[] = [];
    const templates = allProbes.filter(p => ids.includes(p.id));

    for (const template of templates) {
      const result = await this.runProbe(template);
      results.push(result);
    }

    return results;
  }

  getResults(): ProbeResult[] {
    return this.results;
  }

  clearResults(): void {
    this.results = [];
  }
}

export function createRunner(config: ProbeConfig): ProbeRunner {
  return new ProbeRunner(config);
}
