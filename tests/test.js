// Простой тест библиотеки
const { KeymapInspector } = require('./dist/index.js');
const { en } = require('./dist/layouts/en.js');
const { ru } = require('./dist/layouts/ru.js');

console.log('🧪 Тестируем библиотеку...\n');

const inspector = new KeymapInspector({ en, ru });

// Тест 1: Прямой поиск
console.log('1. Анализ символа "q":');
console.log(JSON.stringify(inspector.inspect('q'), null, 2));

// Тест 2: Поиск по коду
console.log('\n2. Поиск по коду "KeyQ":');
console.log(JSON.stringify(inspector.inspectByCode('KeyQ'), null, 2));

// Тест 3: Поиск по keyCode
console.log('\n3. Поиск по keyCode 81:');
console.log(JSON.stringify(inspector.inspectByKeyCode(81), null, 2));

// Тест 4: Несуществующий символ
console.log('\n4. Несуществующий символ "xyz":');
console.log(inspector.inspect('xyz'));

console.log('\n✅ Все тесты завершены!');
