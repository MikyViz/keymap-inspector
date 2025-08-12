// Browser-compatible build
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.KeymapInspector = {}));
}(this, (function(exports) {
    'use strict';

    // Types (for documentation only in browser)
    
    // KeymapInspector class
    class KeymapInspector {
        constructor(layouts) {
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

        inspect(char) {
            let baseLayoutName = null;
            let keyDefinition = null;

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

            const layouts = {};
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

        inspectByCode(code) {
            const char = this.findCharByCode(code);
            return char ? this.inspect(char) : null;
        }

        inspectByKeyCode(keyCode) {
            const char = this.findCharByKeyCode(keyCode);
            return char ? this.inspect(char) : null;
        }

        findCharByCode(code) {
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

        findCharByKeyCode(keyCode) {
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

    // Layouts data - inserting main layouts
    const en = ${JSON.stringify(require('./dist/layouts/en.js').en, null, 4)};

    const ru = ${JSON.stringify(require('./dist/layouts/ru.js').ru, null, 4)};

    // Export for browser
    exports.KeymapInspector = KeymapInspector;
    exports.en = en;
    exports.ru = ru;

    // Global access for script tag usage
    if (typeof window !== 'undefined') {
        window.KeymapInspector = KeymapInspector;
        window.KeymapLayouts = { en, ru };
    }

})));
