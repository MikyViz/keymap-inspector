# 🔍 Keymap Inspector

[![npm version](https://badge.fury.io/js/keymap-inspector.svg)](https://badge.fury.io/js/keymap-inspector)
[![npm downloads](https://img.shields.io/npm/dm/keymap-inspector.svg)](https://www.npmjs.com/package/keymap-inspector)

*[🇺🇸 English](#english) | [🇷🇺 Русский](#русский) | [🇩🇪 Deutsch](#deutsch) | [🇫🇷 Français](#français) | [🇪🇸 Español](#español) | [🇺🇦 Українська](#українська) | [🇮🇱 עברית](#עברית)*

---

## English

Inspect keyboard events and characters across different layouts. Find which physical key corresponds to a character and see what characters are on that key in other keyboard layouts.

### 🚀 Features

- **7 keyboard layouts**: English, Russian, German, French, Spanish, Ukrainian, Hebrew
- **Bidirectional mapping**: Character → Key info, Key code → Characters
- **CLI tool** for quick inspections
- **TypeScript** support with full type definitions
- **Lightweight**: Only 6.5KB package size

### 📦 Installation

```bash
# Install globally for CLI usage
npm install -g keymap-inspector

# Install locally for library usage
npm install keymap-inspector
```

### 🖥️ CLI Usage

```bash
keymap-inspector a
# Output:
{
  "char": "a",
  "keyDefinition": {
    "key": "a",
    "code": "KeyA",
    "keyCode": 65
  },
  "layouts": {
    "en": "a",
    "ru": "ф",
    "de": "a",
    "fr": "q",
    "es": "a",
    "ua": "ф",
    "he": "ש"
  }
}
```

### 📚 Library Usage

```javascript
import { KeymapInspector, en, ru, de, fr, es, ua, he } from 'keymap-inspector';

const inspector = new KeymapInspector({ en, ru, de, fr, es, ua, he });

// Inspect a character
const result = inspector.inspect('a');
console.log(result);

// Find by key code
const byCode = inspector.inspectByCode('KeyA');
console.log(byCode);

// Find by keyCode number
const byKeyCode = inspector.inspectByKeyCode(65);
console.log(byKeyCode);
```

---

## Русский

Инспектор клавиатурных раскладок. Определяет, какая физическая клавиша соответствует символу, и показывает, какие символы находятся на этой клавише в других раскладках.

### 🚀 Возможности

- **7 раскладок клавиатуры**: английская, русская, немецкая, французская, испанская, украинская, иврит
- **Двустороннее сопоставление**: символ → информация о клавише, код клавиши → символы
- **CLI утилита** для быстрых проверок
- **TypeScript** поддержка с полными определениями типов
- **Легковесный**: размер пакета всего 6.5KB

### 📦 Установка

```bash
# Глобальная установка для CLI
npm install -g keymap-inspector

# Локальная установка для библиотеки
npm install keymap-inspector
```

### 🖥️ Использование CLI

```bash
keymap-inspector ф
# Вывод:
{
  "char": "ф",
  "keyDefinition": {
    "key": "ф",
    "code": "KeyA",
    "keyCode": 65
  },
  "layouts": {
    "en": "a",
    "ru": "ф",
    "de": "a",
    "fr": "q",
    "es": "a",
    "ua": "ф",
    "he": "ש"
  }
}
```

---

## Deutsch

Tastaturlayout-Inspektor. Ermittelt, welche physische Taste einem Zeichen entspricht und zeigt, welche Zeichen sich auf dieser Taste in anderen Tastaturlayouts befinden.

### 🚀 Features

- **7 Tastaturlayouts**: Englisch, Russisch, Deutsch, Französisch, Spanisch, Ukrainisch, Hebräisch
- **Bidirektionale Zuordnung**: Zeichen → Tasteninformationen, Tastencode → Zeichen
- **CLI-Tool** für schnelle Inspektionen
- **TypeScript** Unterstützung mit vollständigen Typdefinitionen
- **Leichtgewichtig**: Nur 6.5KB Paketgröße

### 📦 Installation

```bash
# Global installieren für CLI-Nutzung
npm install -g keymap-inspector

# Lokal installieren für Bibliotheksnutzung
npm install keymap-inspector
```

### 🖥️ CLI-Nutzung

```bash
keymap-inspector ä
# Ausgabe:
{
  "char": "ä",
  "keyDefinition": {
    "key": "ä",
    "code": "Quote",
    "keyCode": 222
  },
  "layouts": {
    "en": "'",
    "ru": "э",
    "de": "ä",
    "fr": "ù",
    "es": "´",
    "ua": "є",
    "he": ","
  }
}
```

---

## Français

Inspecteur de dispositions de clavier. Détermine quelle touche physique correspond à un caractère et montre quels caractères se trouvent sur cette touche dans d'autres dispositions de clavier.

### 🚀 Fonctionnalités

- **7 dispositions de clavier**: Anglais, Russe, Allemand, Français, Espagnol, Ukrainien, Hébreu
- **Mappage bidirectionnel**: Caractère → Informations de touche, Code de touche → Caractères
- **Outil CLI** pour des inspections rapides
- **Support TypeScript** avec des définitions de types complètes
- **Léger**: Seulement 6.5KB de taille de paquet

### 📦 Installation

```bash
# Installer globalement pour l'usage CLI
npm install -g keymap-inspector

# Installer localement pour l'usage de bibliothèque
npm install keymap-inspector
```

### 🖥️ Usage CLI

```bash
keymap-inspector é
# Sortie:
{
  "char": "é",
  "keyDefinition": {
    "key": "é",
    "code": "Digit2",
    "keyCode": 50
  },
  "layouts": {
    "en": "2",
    "ru": "2",
    "de": "2",
    "fr": "é",
    "es": "2",
    "ua": "2",
    "he": "2"
  }
}
```

---

## Español

Inspector de distribuciones de teclado. Determina qué tecla física corresponde a un carácter y muestra qué caracteres están en esa tecla en otras distribuciones de teclado.

### 🚀 Características

- **7 distribuciones de teclado**: Inglés, Ruso, Alemán, Francés, Español, Ucraniano, Hebreo
- **Mapeo bidireccional**: Carácter → Información de tecla, Código de tecla → Caracteres
- **Herramienta CLI** para inspecciones rápidas
- **Soporte TypeScript** con definiciones de tipos completas
- **Ligero**: Solo 6.5KB de tamaño de paquete

### 📦 Instalación

```bash
# Instalar globalmente para uso CLI
npm install -g keymap-inspector

# Instalar localmente para uso de biblioteca
npm install keymap-inspector
```

### 🖥️ Uso CLI

```bash
keymap-inspector ñ
# Salida:
{
  "char": "ñ",
  "keyDefinition": {
    "key": "ñ",
    "code": "Semicolon",
    "keyCode": 186
  },
  "layouts": {
    "en": ";",
    "ru": "ж",
    "de": "ö",
    "fr": "m",
    "es": "ñ",
    "ua": "ж",
    "he": "ף"
  }
}
```

---

## Українська

Інспектор клавіатурних розкладок. Визначає, яка фізична клавіша відповідає символу, та показує, які символи знаходяться на цій клавіші в інших розкладках клавіатури.

### 🚀 Можливості

- **7 розкладок клавіатури**: англійська, російська, німецька, французька, іспанська, українська, іврит
- **Двостороннє зіставлення**: символ → інформація про клавішу, код клавіші → символи
- **CLI утиліта** для швидких перевірок
- **TypeScript** підтримка з повними визначеннями типів
- **Легкий**: розмір пакету лише 6.5KB

### 📦 Встановлення

```bash
# Глобальне встановлення для CLI
npm install -g keymap-inspector

# Локальне встановлення для бібліотеки
npm install keymap-inspector
```

### 🖥️ Використання CLI

```bash
keymap-inspector і
# Вивід:
{
  "char": "і",
  "keyDefinition": {
    "key": "і",
    "code": "KeyS",
    "keyCode": 83
  },
  "layouts": {
    "en": "s",
    "ru": "ы",
    "de": "s",
    "fr": "s",
    "es": "s",
    "ua": "і",
    "he": "ד"
  }
}
```

---

## עברית

בודק פריסות מקלדת. קובע איזה מקש פיזי מתאים לתו ומראה אילו תווים נמצאים על המקש הזה בפריסות מקלדת אחרות.

### 🚀 תכונות

- **7 פריסות מקלדת**: אנגלית, רוסית, גרמנית, צרפתית, ספרדית, אוקראינית, עברית
- **מיפוי דו-כיווני**: תו ← מידע על מקש, קוד מקש ← תווים
- **כלי CLI** לבדיקות מהירות
- **תמיכה ב-TypeScript** עם הגדרות טיפוסים מלאות
- **קל משקל**: גודל חבילה של 6.5KB בלבד

### 📦 התקנה

```bash
# התקנה גלובלית לשימוש CLI
npm install -g keymap-inspector

# התקנה מקומית לשימוש ספרייה
npm install keymap-inspector
```

### 🖥️ שימוש ב-CLI

```bash
keymap-inspector ש
# פלט:
{
  "char": "ש",
  "keyDefinition": {
    "key": "ש",
    "code": "KeyA",
    "keyCode": 65
  },
  "layouts": {
    "en": "a",
    "ru": "ф",
    "de": "a",
    "fr": "q",
    "es": "a",
    "ua": "ф",
    "he": "ש"
  }
}
```

---

## 🔧 API Reference

### KeymapInspector

```typescript
interface KeyDefinition {
  key?: string;
  code: string;
  keyCode: number;
  shiftKey?: boolean;
  location?: number;
}

interface InspectionResult {
  char: string;
  keyDefinition: KeyDefinition;
  layouts: {
    [layoutName: string]: string | null;
  };
}

class KeymapInspector {
  constructor(layouts: { [name: string]: Keymap });
  inspect(char: string): InspectionResult | null;
  inspectByCode(code: string): InspectionResult | null;
  inspectByKeyCode(keyCode: number): InspectionResult | null;
}
```

### Available Layouts

- `en` - English (QWERTY)
- `ru` - Russian (ЙЦУКЕН)
- `de` - German (QWERTZ)
- `fr` - French (AZERTY)
- `es` - Spanish (QWERTY)
- `ua` - Ukrainian (ЙЦУКЕН)
- `he` - Hebrew

## 📄 License

MIT © [mikyviz](https://github.com/MikyViz)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🐛 Issues

Found a bug? Please [open an issue](https://github.com/MikyViz/keymap-inspector/issues).
