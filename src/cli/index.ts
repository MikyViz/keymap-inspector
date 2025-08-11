#!/usr/bin/env node

import { KeymapInspector } from '../KeymapInspector';
import { en } from '../layouts/en';
import { ru } from '../layouts/ru';
import { de } from '../layouts/de';
import { fr } from '../layouts/fr';
import { es } from '../layouts/es';
import { ua } from '../layouts/ua';
import { he } from '../layouts/he';

const inspector = new KeymapInspector({ en, ru, de, fr, es, ua, he });

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: keymap-inspector <char>');
  process.exit(1);
}

const char = args[0];
const result = inspector.inspect(char);

if (result) {
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log(`Could not inspect character: ${char}`);
}