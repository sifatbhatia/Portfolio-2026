#!/usr/bin/env node

/**
 * Guardrail Probe - CLI
 * 
 * Command-line interface for running AI safety probes
 */

import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { writeFileSync } from 'fs';
import { ProbeRunner } from './runner';
import { generateAuditReport, formatReportMarkdown } from './reporter';
import { allProbes, probesByCategory } from './categories/index';
import type { ProbeCategory, ProbeResult } from './types';
import { CATEGORY_DESCRIPTIONS } from './types';

const program = new Command();

program
  .name('guardrail-probe')
  .description('AI safety testing framework for probing language model guardrails')
  .version('1.0.0');

program
  .command('run')
  .description('Run probes against a model')
  .option('-m, --model <model>', 'Model to test', 'gpt-4o-mini')
  .option('-c, --category <category>', 'Run specific category only')
  .option('-i, --ids <ids>', 'Run specific probe IDs (comma-separated)')
  .option('--api-key <key>', 'OpenAI API key (or set OPENAI_API_KEY)')
  .option('--base-url <url>', 'API base URL (for OpenAI-compatible endpoints)')
  .option('-o, --output <file>', 'Output JSON results to file')
  .option('-r, --report <file>', 'Generate markdown report to file')
  .option('-v, --verbose', 'Show detailed output for each probe')
  .action(async (options) => {
    const spinner = ora('Initializing probe runner...').start();

    try {
      const runner = new ProbeRunner({
        model: options.model,
        apiKey: options.apiKey,
        baseUrl: options.baseUrl,
      });

      spinner.succeed('Runner initialized');
      
      let results: ProbeResult[] = [];
      const startTime = Date.now();

      if (options.ids) {
        const ids = options.ids.split(',').map((s: string) => s.trim());
        console.log(chalk.blue(`\nRunning ${ids.length} specific probes...`));
        results = await runWithProgress(runner, () => runner.runByIds(ids), options.verbose);
      } else if (options.category) {
        const category = options.category as ProbeCategory;
        if (!CATEGORY_DESCRIPTIONS[category]) {
          console.error(chalk.red(`Invalid category: ${category}`));
          console.log('Available categories:', Object.keys(CATEGORY_DESCRIPTIONS).join(', '));
          process.exit(1);
        }
        console.log(chalk.blue(`\nRunning ${category} probes...`));
        results = await runWithProgress(runner, () => runner.runCategory(category), options.verbose);
      } else {
        console.log(chalk.blue(`\nRunning all ${allProbes.length} probes...`));
        results = await runWithProgress(runner, () => runner.runAll(), options.verbose);
      }

      const duration = Date.now() - startTime;

      // Summary
      console.log(chalk.green(`\n✓ Completed ${results.length} probes in ${(duration / 1000).toFixed(2)}s`));
      
      const passed = results.filter(r => r.detectedRefusal).length;
      const failed = results.filter(r => !r.detectedRefusal && !r.error).length;
      const errors = results.filter(r => r.error).length;

      console.log(`  ${chalk.green('✓')} Refusals detected: ${passed}`);
      console.log(`  ${chalk.yellow('!')} No refusal: ${failed}`);
      if (errors > 0) {
        console.log(`  ${chalk.red('✗')} Errors: ${errors}`);
      }

      // Save JSON results
      if (options.output) {
        writeFileSync(options.output, JSON.stringify(results, null, 2));
        console.log(chalk.blue(`\nResults saved to: ${options.output}`));
      }

      // Generate report
      if (options.report) {
        const report = generateAuditReport(options.model, results, duration);
        const markdown = formatReportMarkdown(report);
        writeFileSync(options.report, markdown);
        console.log(chalk.blue(`Report saved to: ${options.report}`));
        console.log(chalk.bold(`\nOverall Score: ${report.overallScore}%`));
      }

    } catch (error) {
      spinner.fail('Failed to run probes');
      console.error(chalk.red(error instanceof Error ? error.message : 'Unknown error'));
      process.exit(1);
    }
  });

program
  .command('list')
  .description('List available probes')
  .option('-c, --category <category>', 'Filter by category')
  .option('-s, --severity <severity>', 'Filter by severity (low, medium, high, critical)')
  .action((options) => {
    let probes = allProbes;

    if (options.category) {
      const cat = options.category as ProbeCategory;
      probes = probesByCategory[cat] || [];
    }

    if (options.severity) {
      probes = probes.filter(p => p.severity === options.severity);
    }

    if (probes.length === 0) {
      console.log(chalk.yellow('No probes found matching criteria.'));
      return;
    }

    console.log(chalk.bold(`\n${probes.length} probes available:\n`));

    // Group by category
    const grouped: Record<string, typeof probes> = {};
    for (const probe of probes) {
      if (!grouped[probe.category]) grouped[probe.category] = [];
      grouped[probe.category].push(probe);
    }

    for (const [category, categoryProbes] of Object.entries(grouped)) {
      console.log(chalk.blue(`\n${category.toUpperCase()}`));
      console.log(chalk.gray(CATEGORY_DESCRIPTIONS[category as ProbeCategory] || ''));
      
      for (const probe of categoryProbes) {
        const severityColor = 
          probe.severity === 'critical' ? chalk.red :
          probe.severity === 'high' ? chalk.yellow :
          probe.severity === 'medium' ? chalk.cyan :
          chalk.gray;
        
        console.log(`  ${probe.id} ${severityColor(`[${probe.severity}]`)} - ${probe.name}`);
      }
    }
  });

program
  .command('categories')
  .description('List available probe categories')
  .action(() => {
    console.log(chalk.bold('\nAvailable Categories:\n'));
    
    for (const [category, description] of Object.entries(CATEGORY_DESCRIPTIONS)) {
      const count = (probesByCategory[category as ProbeCategory] || []).length;
      const countStr = count > 0 ? chalk.green(`(${count} probes)`) : chalk.gray('(coming soon)');
      console.log(`  ${chalk.blue(category)} ${countStr}`);
      console.log(`    ${chalk.gray(description)}`);
      console.log('');
    }
  });

async function runWithProgress(
  runner: ProbeRunner,
  runFn: () => Promise<ProbeResult[]>,
  verbose: boolean
): Promise<ProbeResult[]> {
  const results: ProbeResult[] = [];
  
  // Get the probes that will be run
  const probeResults = await runFn();
  
  for (const result of probeResults) {
    results.push(result);
    
    if (verbose) {
      const status = result.error ? chalk.red('ERROR') :
                     result.detectedRefusal ? chalk.green('REFUSED') :
                     chalk.yellow('NO REFUSAL');
      
      console.log(`\n${chalk.bold(result.probeId)} - ${status}`);
      console.log(chalk.gray(`Latency: ${result.latencyMs}ms | Confidence: ${(result.confidence * 100).toFixed(0)}%`));
      
      if (result.error) {
        console.log(chalk.red(`Error: ${result.error}`));
      } else {
        console.log(chalk.gray('Response preview:'));
        console.log(chalk.gray(result.response.slice(0, 150) + '...'));
      }
    } else {
      const icon = result.error ? chalk.red('✗') :
                   result.detectedRefusal ? chalk.green('✓') :
                   chalk.yellow('!');
      process.stdout.write(icon);
    }
  }
  
  if (!verbose) console.log(''); // New line after progress dots
  
  return results;
}

program.parse();
