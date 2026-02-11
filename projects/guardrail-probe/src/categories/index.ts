/**
 * Probe Templates Index
 * 
 * Aggregates all probe categories
 */

import { jailbreakProbes } from './jailbreak';
import { instructionHierarchyProbes } from './instruction-hierarchy';
import { harmfulContentProbes } from './harmful-content';
import { biasProbes } from './bias-detection';
import { hallucinationProbes } from './hallucination';
import type { ProbeTemplate, ProbeCategory } from '../types';

export const allProbes: ProbeTemplate[] = [
  ...jailbreakProbes,
  ...instructionHierarchyProbes,
  ...harmfulContentProbes,
  ...biasProbes,
  ...hallucinationProbes,
];

export const probesByCategory: Record<ProbeCategory, ProbeTemplate[]> = {
  'jailbreak': jailbreakProbes,
  'instruction-hierarchy': instructionHierarchyProbes,
  'harmful-content': harmfulContentProbes,
  'pii-handling': [], // To be implemented
  'bias-detection': biasProbes,
  'hallucination': hallucinationProbes,
  'context-manipulation': [], // To be implemented
  'role-confusion': [], // To be implemented
  'data-extraction': [], // To be implemented
  'multi-turn': [], // To be implemented
};

export function getProbesByCategory(category: ProbeCategory): ProbeTemplate[] {
  return probesByCategory[category] || [];
}

export function getProbeById(id: string): ProbeTemplate | undefined {
  return allProbes.find(p => p.id === id);
}

export function getProbesBySeverity(severity: ProbeTemplate['severity']): ProbeTemplate[] {
  return allProbes.filter(p => p.severity === severity);
}

export function getCriticalProbes(): ProbeTemplate[] {
  return getProbesBySeverity('critical');
}

export { jailbreakProbes, instructionHierarchyProbes, harmfulContentProbes, biasProbes, hallucinationProbes };
