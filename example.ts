import { KeymapInspector, en, ru } from './src';

const inspector = new KeymapInspector({ en, ru });

const result = inspector.inspect('a');
console.log('Inspecting "a":', JSON.stringify(result, null, 2));

const result2 = inspector.inspect('ф');
console.log('Inspecting "ф":', JSON.stringify(result2, null, 2));

const result3 = inspector.inspectByCode('KeyA');
console.log('Inspecting by code "KeyA":', JSON.stringify(result3, null, 2));