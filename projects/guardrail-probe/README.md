# Guardrail Probe 🛡️

**A lightweight AI safety testing framework for probing language model guardrails**

## Overview

Guardrail Probe is a CLI tool designed to systematically test AI system safety boundaries. It generates structured test cases across multiple vulnerability categories, logs model responses, and produces detailed audit reports.

This is **not** about breaking AI systems—it's about understanding and documenting their safety behavior for research, red-teaming, and compliance purposes.

## Why This Exists

As AI systems become more prevalent, understanding their safety characteristics is critical:
- **For researchers**: Systematically document guardrail behaviors across models
- **For builders**: Validate that your AI integration handles edge cases safely
- **For compliance**: Generate audit trails of safety testing
- **For red teams**: Structured approach to adversarial testing

## Features

- 🎯 **Multi-category probes**: Tests across 10+ vulnerability categories
- 📊 **Structured logging**: JSON-based audit trails with timestamps
- 🔄 **Model-agnostic**: Works with any OpenAI-compatible API
- 📈 **Reporting**: Generates markdown reports with findings
- 🎛️ **Configurable**: Custom probe sets and thresholds
- 🔒 **Safe by design**: All probes are synthetic/benign test vectors

## Categories Tested

1. **Jailbreak Resistance** - Classic prompt injection attempts
2. **Instruction Hierarchy** - System vs user prompt conflicts
3. **Harmful Content Refusal** - Violence, illegal activity, etc.
4. **PII Handling** - Response to personal information requests
5. **Bias Detection** - Responses to leading/biased prompts
6. **Hallucination Triggers** - Prompts designed to elicit confabulation
7. **Context Manipulation** - Attempts to override training
8. **Role Confusion** - Persona-based attacks
9. **Data Extraction** - Attempts to extract training data
10. **Multi-turn Exploitation** - Progressive manipulation attempts

## Installation

```bash
# Clone and enter directory
cd guardrail-probe

# Install dependencies
npm install

# Set API key
export OPENAI_API_KEY=your_key_here
# Or use any OpenAI-compatible endpoint
export OPENAI_BASE_URL=https://your-provider.com/v1
```

## Usage

### Quick Test
```bash
# Run default probe suite against a model
npx ts-node src/probe.ts --model gpt-4o-mini

# Test specific category
npx ts-node src/probe.ts --category jailbreak --model gpt-4o-mini

# Generate full report
npx ts-node src/probe.ts --report --output ./audit-report.md
```

### Programmatic API
```typescript
import { GuardrailProbe } from './src';

const probe = new GuardrailProbe({
  model: 'gpt-4o-mini',
  apiKey: process.env.OPENAI_API_KEY
});

const results = await probe.runCategory('jailbreak');
console.log(results.summary);
```

## Output Format

Each probe generates structured results:

```json
{
  "probe_id": "jailbreak-001",
  "category": "jailbreak",
  "prompt": "...",
  "response": "...",
  "detected_refusal": true,
  "confidence": 0.95,
  "latency_ms": 450,
  "tokens_used": 127,
  "timestamp": "2026-02-01T19:26:00Z"
}
```

## Reports

The tool generates markdown reports suitable for:
- Internal security audits
- Compliance documentation
- Research publications
- Model comparison studies

## Ethical Use

This tool is designed for **legitimate safety research and auditing**. It should be used:
- ✅ To test AI systems you own or operate
- ✅ For authorized red-teaming engagements
- ✅ For academic research with proper IRB approval
- ✅ To improve safety before deployment

Do **not** use this tool to:
- ❌ Attack systems without authorization
- ❌ Develop actual attacks or exploits
- ❌ Bypass safety measures for malicious purposes

## Architecture

```
guardrail-probe/
├── src/
│   ├── probe.ts          # Main entry point
│   ├── categories/       # Probe definitions by category
│   ├── runner.ts         # Test execution engine
│   ├── analyzer.ts       # Response analysis
│   └── reporter.ts       # Report generation
├── probes/               # Probe template library
├── reports/              # Generated audit reports
└── config.json           # Configuration
```

## Roadmap

- [ ] Web UI for interactive testing
- [ ] Model fingerprinting (identify model from response patterns)
- [ ] Comparative analysis (side-by-side model testing)
- [ ] CI/CD integration for automated safety checks
- [ ] LangChain/LlamaIndex integration

## Author

**Sifat Bhatia** — AI Safety Researcher & Systems Architect

Built as part of ongoing work in AI alignment and safety infrastructure.

## License

MIT — Use responsibly.
