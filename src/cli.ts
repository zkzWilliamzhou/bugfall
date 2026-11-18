#!/usr/bin/env node
/**
 * bugfall CLI
 */

import { Core, createCore } from './index.js';

function showHelp(): void {
  console.log(`
bugfall - Description

Usage:
  bugfall run <input>    Run with input
  bugfall help           Show this help
`);
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args[0] === 'help') {
    showHelp();
    return;
  }

  const core = createCore({ name: 'bugfall', version: '0.1.0' });
  
  const command = args[0];
  
  switch (command) {
    case 'run': {
      const input = args[1] || 'default';
      console.log(core.execute(input));
      break;
    }
    default:
      console.error(`Unknown command: ${command}`);
      showHelp();
      process.exit(1);
  }
}

main().catch(console.error);
