import { Keymap, KeyDefinition, InspectionResult } from './types';

export class KeymapInspector {
  private layouts: { [name: string]: Keymap };
  private reversedLayouts: { [name: string]: { [code: string]: string } };

  constructor(layouts: { [name: string]: Keymap }) {
    this.layouts = layouts;
    this.reversedLayouts = {};

    for (const layoutName in layouts) {
      this.reversedLayouts[layoutName] = {};
      const layout = layouts[layoutName];
      for (const char in layout) {
        const keyDef = layout[char];
        // Сохраняем все символы, но с учетом Shift
        const currentCode = keyDef.code;
        
        // Если это символ без Shift, сохраняем как основной
        if (!keyDef.shiftKey) {
          this.reversedLayouts[layoutName][currentCode] = char;
        }
        // Если это символ с Shift, сохраняем с префиксом
        else {
          this.reversedLayouts[layoutName][currentCode + '_SHIFT'] = char;
        }
      }
    }
  }

  public inspect(char: string): InspectionResult | null {
    let baseLayoutName: string | null = null;
    let keyDefinition: KeyDefinition | null = null;

    for (const layoutName in this.layouts) {
      if (this.layouts[layoutName][char]) {
        baseLayoutName = layoutName;
        keyDefinition = this.layouts[layoutName][char];
        break;
      }
    }

    if (!keyDefinition || !baseLayoutName) {
      return null;
    }

    const layouts: { [layoutName: string]: string | null } = {};
    for (const layoutName in this.reversedLayouts) {
      // Ищем символ с учетом Shift
      if (keyDefinition.shiftKey) {
        layouts[layoutName] = this.reversedLayouts[layoutName][keyDefinition.code + '_SHIFT'] || null;
      } else {
        layouts[layoutName] = this.reversedLayouts[layoutName][keyDefinition.code] || null;
      }
    }

    return {
      char,
      keyDefinition,
      layouts,
    };
  }

  public inspectByCode(code: string): InspectionResult | null {
    const char = this.findCharByCode(code);
    return char ? this.inspect(char) : null;
  }

  public inspectByKeyCode(keyCode: number): InspectionResult | null {
    const char = this.findCharByKeyCode(keyCode);
    return char ? this.inspect(char) : null;
  }

  private findCharByCode(code: string): string | null {
    // Сначала ищем символ без Shift
    for (const layoutName in this.layouts) {
      const layout = this.layouts[layoutName];
      for (const char in layout) {
        if (layout[char].code === code && !layout[char].shiftKey) {
          return char;
        }
      }
    }
    // Если не нашли без Shift, ищем с Shift
    for (const layoutName in this.layouts) {
      const layout = this.layouts[layoutName];
      for (const char in layout) {
        if (layout[char].code === code && layout[char].shiftKey) {
          return char;
        }
      }
    }
    return null;
  }

  private findCharByKeyCode(keyCode: number): string | null {
    // Сначала ищем символ без Shift
    for (const layoutName in this.layouts) {
      const layout = this.layouts[layoutName];
      for (const char in layout) {
        if (layout[char].keyCode === keyCode && !layout[char].shiftKey) {
          return char;
        }
      }
    }
    // Если не нашли без Shift, ищем с Shift
    for (const layoutName in this.layouts) {
      const layout = this.layouts[layoutName];
      for (const char in layout) {
        if (layout[char].keyCode === keyCode && layout[char].shiftKey) {
          return char;
        }
      }
    }
    return null;
  }
}