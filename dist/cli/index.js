#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KeymapInspector_1 = require("../KeymapInspector");
const en_1 = require("../layouts/en");
const ru_1 = require("../layouts/ru");
const de_1 = require("../layouts/de");
const fr_1 = require("../layouts/fr");
const es_1 = require("../layouts/es");
const ua_1 = require("../layouts/ua");
const he_1 = require("../layouts/he");
const inspector = new KeymapInspector_1.KeymapInspector({ en: en_1.en, ru: ru_1.ru, de: de_1.de, fr: fr_1.fr, es: es_1.es, ua: ua_1.ua, he: he_1.he });
const args = process.argv.slice(2);
if (args.length === 0) {
    console.log('Usage: keymap-inspector <char>');
    process.exit(1);
}
const char = args[0];
const result = inspector.inspect(char);
if (result) {
    console.log(JSON.stringify(result, null, 2));
}
else {
    console.log(`Could not inspect character: ${char}`);
}
