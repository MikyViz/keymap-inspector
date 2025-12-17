// Keymap Inspector - Browser Build v0.1.1
// Compatible with browsers, UMD format
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.KeymapInspector = {}));
}(this, (function(exports) {
    'use strict';

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
                    const currentCode = keyDef.code;
                    
                    if (!keyDef.shiftKey) {
                        this.reversedLayouts[layoutName][currentCode] = char;
                    } else {
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
            for (const layoutName in this.layouts) {
                const layout = this.layouts[layoutName];
                for (const char in layout) {
                    if (layout[char].code === code && !layout[char].shiftKey) {
                        return char;
                    }
                }
            }
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
            for (const layoutName in this.layouts) {
                const layout = this.layouts[layoutName];
                for (const char in layout) {
                    if (layout[char].keyCode === keyCode && !layout[char].shiftKey) {
                        return char;
                    }
                }
            }
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

    // Basic layouts (EN + RU for smaller file size)
    const en = {
        "1": { "key": "1", "code": "Digit1", "keyCode": 49 },
        "2": { "key": "2", "code": "Digit2", "keyCode": 50 },
        "3": { "key": "3", "code": "Digit3", "keyCode": 51 },
        "4": { "key": "4", "code": "Digit4", "keyCode": 52 },
        "5": { "key": "5", "code": "Digit5", "keyCode": 53 },
        "6": { "key": "6", "code": "Digit6", "keyCode": 54 },
        "7": { "key": "7", "code": "Digit7", "keyCode": 55 },
        "8": { "key": "8", "code": "Digit8", "keyCode": 56 },
        "9": { "key": "9", "code": "Digit9", "keyCode": 57 },
        "0": { "key": "0", "code": "Digit0", "keyCode": 48 },
        "q": { "key": "q", "code": "KeyQ", "keyCode": 81 },
        "w": { "key": "w", "code": "KeyW", "keyCode": 87 },
        "e": { "key": "e", "code": "KeyE", "keyCode": 69 },
        "r": { "key": "r", "code": "KeyR", "keyCode": 82 },
        "t": { "key": "t", "code": "KeyT", "keyCode": 84 },
        "y": { "key": "y", "code": "KeyY", "keyCode": 89 },
        "u": { "key": "u", "code": "KeyU", "keyCode": 85 },
        "i": { "key": "i", "code": "KeyI", "keyCode": 73 },
        "o": { "key": "o", "code": "KeyO", "keyCode": 79 },
        "p": { "key": "p", "code": "KeyP", "keyCode": 80 },
        "a": { "key": "a", "code": "KeyA", "keyCode": 65 },
        "s": { "key": "s", "code": "KeyS", "keyCode": 83 },
        "d": { "key": "d", "code": "KeyD", "keyCode": 68 },
        "f": { "key": "f", "code": "KeyF", "keyCode": 70 },
        "g": { "key": "g", "code": "KeyG", "keyCode": 71 },
        "h": { "key": "h", "code": "KeyH", "keyCode": 72 },
        "j": { "key": "j", "code": "KeyJ", "keyCode": 74 },
        "k": { "key": "k", "code": "KeyK", "keyCode": 75 },
        "l": { "key": "l", "code": "KeyL", "keyCode": 76 },
        "z": { "key": "z", "code": "KeyZ", "keyCode": 90 },
        "x": { "key": "x", "code": "KeyX", "keyCode": 88 },
        "c": { "key": "c", "code": "KeyC", "keyCode": 67 },
        "v": { "key": "v", "code": "KeyV", "keyCode": 86 },
        "b": { "key": "b", "code": "KeyB", "keyCode": 66 },
        "n": { "key": "n", "code": "KeyN", "keyCode": 78 },
        "m": { "key": "m", "code": "KeyM", "keyCode": 77 },
        ",": { "key": ",", "code": "Comma", "keyCode": 188 },
        ".": { "key": ".", "code": "Period", "keyCode": 190 },
        "/": { "key": "/", "code": "Slash", "keyCode": 191 },
        " ": { "key": " ", "code": "Space", "keyCode": 32 }
    };

    const ru = {
        "1": { "key": "1", "code": "Digit1", "keyCode": 49 },
        "2": { "key": "2", "code": "Digit2", "keyCode": 50 },
        "3": { "key": "3", "code": "Digit3", "keyCode": 51 },
        "4": { "key": "4", "code": "Digit4", "keyCode": 52 },
        "5": { "key": "5", "code": "Digit5", "keyCode": 53 },
        "6": { "key": "6", "code": "Digit6", "keyCode": 54 },
        "7": { "key": "7", "code": "Digit7", "keyCode": 55 },
        "8": { "key": "8", "code": "Digit8", "keyCode": 56 },
        "9": { "key": "9", "code": "Digit9", "keyCode": 57 },
        "0": { "key": "0", "code": "Digit0", "keyCode": 48 },
        "й": { "key": "й", "code": "KeyQ", "keyCode": 81 },
        "ц": { "key": "ц", "code": "KeyW", "keyCode": 87 },
        "у": { "key": "у", "code": "KeyE", "keyCode": 69 },
        "к": { "key": "к", "code": "KeyR", "keyCode": 82 },
        "е": { "key": "е", "code": "KeyT", "keyCode": 84 },
        "н": { "key": "н", "code": "KeyY", "keyCode": 89 },
        "г": { "key": "г", "code": "KeyU", "keyCode": 85 },
        "ш": { "key": "ш", "code": "KeyI", "keyCode": 73 },
        "щ": { "key": "щ", "code": "KeyO", "keyCode": 79 },
        "з": { "key": "з", "code": "KeyP", "keyCode": 80 },
        "ф": { "key": "ф", "code": "KeyA", "keyCode": 65 },
        "ы": { "key": "ы", "code": "KeyS", "keyCode": 83 },
        "в": { "key": "в", "code": "KeyD", "keyCode": 68 },
        "а": { "key": "а", "code": "KeyF", "keyCode": 70 },
        "п": { "key": "п", "code": "KeyG", "keyCode": 71 },
        "р": { "key": "р", "code": "KeyH", "keyCode": 72 },
        "о": { "key": "о", "code": "KeyJ", "keyCode": 74 },
        "л": { "key": "л", "code": "KeyK", "keyCode": 75 },
        "д": { "key": "д", "code": "KeyL", "keyCode": 76 },
        "я": { "key": "я", "code": "KeyZ", "keyCode": 90 },
        "ч": { "key": "ч", "code": "KeyX", "keyCode": 88 },
        "с": { "key": "с", "code": "KeyC", "keyCode": 67 },
        "м": { "key": "м", "code": "KeyV", "keyCode": 86 },
        "и": { "key": "и", "code": "KeyB", "keyCode": 66 },
        "т": { "key": "т", "code": "KeyN", "keyCode": 78 },
        "ь": { "key": "ь", "code": "KeyM", "keyCode": 77 },
        "б": { "key": "б", "code": "Comma", "keyCode": 188 },
        "ю": { "key": "ю", "code": "Period", "keyCode": 190 },
        ".": { "key": ".", "code": "Slash", "keyCode": 191 },
        " ": { "key": " ", "code": "Space", "keyCode": 32 }
    };

    // German layout (DE)
    const de = {
        "1": { "key": "1", "code": "Digit1", "keyCode": 49 },
        "2": { "key": "2", "code": "Digit2", "keyCode": 50 },
        "3": { "key": "3", "code": "Digit3", "keyCode": 51 },
        "4": { "key": "4", "code": "Digit4", "keyCode": 52 },
        "5": { "key": "5", "code": "Digit5", "keyCode": 53 },
        "6": { "key": "6", "code": "Digit6", "keyCode": 54 },
        "7": { "key": "7", "code": "Digit7", "keyCode": 55 },
        "8": { "key": "8", "code": "Digit8", "keyCode": 56 },
        "9": { "key": "9", "code": "Digit9", "keyCode": 57 },
        "0": { "key": "0", "code": "Digit0", "keyCode": 48 },
        "q": { "key": "q", "code": "KeyQ", "keyCode": 81 },
        "w": { "key": "w", "code": "KeyW", "keyCode": 87 },
        "e": { "key": "e", "code": "KeyE", "keyCode": 69 },
        "r": { "key": "r", "code": "KeyR", "keyCode": 82 },
        "t": { "key": "t", "code": "KeyT", "keyCode": 84 },
        "z": { "key": "z", "code": "KeyY", "keyCode": 89 },
        "u": { "key": "u", "code": "KeyU", "keyCode": 85 },
        "i": { "key": "i", "code": "KeyI", "keyCode": 73 },
        "o": { "key": "o", "code": "KeyO", "keyCode": 79 },
        "p": { "key": "p", "code": "KeyP", "keyCode": 80 },
        "a": { "key": "a", "code": "KeyA", "keyCode": 65 },
        "s": { "key": "s", "code": "KeyS", "keyCode": 83 },
        "d": { "key": "d", "code": "KeyD", "keyCode": 68 },
        "f": { "key": "f", "code": "KeyF", "keyCode": 70 },
        "g": { "key": "g", "code": "KeyG", "keyCode": 71 },
        "h": { "key": "h", "code": "KeyH", "keyCode": 72 },
        "j": { "key": "j", "code": "KeyJ", "keyCode": 74 },
        "k": { "key": "k", "code": "KeyK", "keyCode": 75 },
        "l": { "key": "l", "code": "KeyL", "keyCode": 76 },
        "y": { "key": "y", "code": "KeyZ", "keyCode": 90 },
        "x": { "key": "x", "code": "KeyX", "keyCode": 88 },
        "c": { "key": "c", "code": "KeyC", "keyCode": 67 },
        "v": { "key": "v", "code": "KeyV", "keyCode": 86 },
        "b": { "key": "b", "code": "KeyB", "keyCode": 66 },
        "n": { "key": "n", "code": "KeyN", "keyCode": 78 },
        "m": { "key": "m", "code": "KeyM", "keyCode": 77 },
        ",": { "key": ",", "code": "Comma", "keyCode": 188 },
        ".": { "key": ".", "code": "Period", "keyCode": 190 },
        "-": { "key": "-", "code": "Slash", "keyCode": 191 },
        "ä": { "key": "ä", "code": "Quote", "keyCode": 222 },
        "ö": { "key": "ö", "code": "Semicolon", "keyCode": 186 },
        "ü": { "key": "ü", "code": "BracketLeft", "keyCode": 219 },
        "ß": { "key": "ß", "code": "Minus", "keyCode": 189 },
        " ": { "key": " ", "code": "Space", "keyCode": 32 }
    };

    // French layout (FR)
    const fr = {
        "1": { "key": "1", "code": "Digit1", "keyCode": 49 },
        "2": { "key": "2", "code": "Digit2", "keyCode": 50 },
        "3": { "key": "3", "code": "Digit3", "keyCode": 51 },
        "4": { "key": "4", "code": "Digit4", "keyCode": 52 },
        "5": { "key": "5", "code": "Digit5", "keyCode": 53 },
        "6": { "key": "6", "code": "Digit6", "keyCode": 54 },
        "7": { "key": "7", "code": "Digit7", "keyCode": 55 },
        "8": { "key": "8", "code": "Digit8", "keyCode": 56 },
        "9": { "key": "9", "code": "Digit9", "keyCode": 57 },
        "0": { "key": "0", "code": "Digit0", "keyCode": 48 },
        "a": { "key": "a", "code": "KeyQ", "keyCode": 81 },
        "z": { "key": "z", "code": "KeyW", "keyCode": 87 },
        "e": { "key": "e", "code": "KeyE", "keyCode": 69 },
        "r": { "key": "r", "code": "KeyR", "keyCode": 82 },
        "t": { "key": "t", "code": "KeyT", "keyCode": 84 },
        "y": { "key": "y", "code": "KeyY", "keyCode": 89 },
        "u": { "key": "u", "code": "KeyU", "keyCode": 85 },
        "i": { "key": "i", "code": "KeyI", "keyCode": 73 },
        "o": { "key": "o", "code": "KeyO", "keyCode": 79 },
        "p": { "key": "p", "code": "KeyP", "keyCode": 80 },
        "q": { "key": "q", "code": "KeyA", "keyCode": 65 },
        "s": { "key": "s", "code": "KeyS", "keyCode": 83 },
        "d": { "key": "d", "code": "KeyD", "keyCode": 68 },
        "f": { "key": "f", "code": "KeyF", "keyCode": 70 },
        "g": { "key": "g", "code": "KeyG", "keyCode": 71 },
        "h": { "key": "h", "code": "KeyH", "keyCode": 72 },
        "j": { "key": "j", "code": "KeyJ", "keyCode": 74 },
        "k": { "key": "k", "code": "KeyK", "keyCode": 75 },
        "l": { "key": "l", "code": "KeyL", "keyCode": 76 },
        "m": { "key": "m", "code": "Semicolon", "keyCode": 186 },
        "w": { "key": "w", "code": "KeyZ", "keyCode": 90 },
        "x": { "key": "x", "code": "KeyX", "keyCode": 88 },
        "c": { "key": "c", "code": "KeyC", "keyCode": 67 },
        "v": { "key": "v", "code": "KeyV", "keyCode": 86 },
        "b": { "key": "b", "code": "KeyB", "keyCode": 66 },
        "n": { "key": "n", "code": "KeyN", "keyCode": 78 },
        ",": { "key": ",", "code": "KeyM", "keyCode": 77 },
        ";": { "key": ";", "code": "Comma", "keyCode": 188 },
        ":": { "key": ":", "code": "Period", "keyCode": 190 },
        "!": { "key": "!", "code": "Slash", "keyCode": 191 },
        "é": { "key": "é", "code": "Digit2", "keyCode": 50, "shiftKey": true },
        "è": { "key": "è", "code": "Digit7", "keyCode": 55, "shiftKey": true },
        "ç": { "key": "ç", "code": "Digit9", "keyCode": 57, "shiftKey": true },
        "à": { "key": "à", "code": "Digit0", "keyCode": 48, "shiftKey": true },
        " ": { "key": " ", "code": "Space", "keyCode": 32 }
    };

    // Spanish layout (ES)
    const es = {
        "1": { "key": "1", "code": "Digit1", "keyCode": 49 },
        "2": { "key": "2", "code": "Digit2", "keyCode": 50 },
        "3": { "key": "3", "code": "Digit3", "keyCode": 51 },
        "4": { "key": "4", "code": "Digit4", "keyCode": 52 },
        "5": { "key": "5", "code": "Digit5", "keyCode": 53 },
        "6": { "key": "6", "code": "Digit6", "keyCode": 54 },
        "7": { "key": "7", "code": "Digit7", "keyCode": 55 },
        "8": { "key": "8", "code": "Digit8", "keyCode": 56 },
        "9": { "key": "9", "code": "Digit9", "keyCode": 57 },
        "0": { "key": "0", "code": "Digit0", "keyCode": 48 },
        "q": { "key": "q", "code": "KeyQ", "keyCode": 81 },
        "w": { "key": "w", "code": "KeyW", "keyCode": 87 },
        "e": { "key": "e", "code": "KeyE", "keyCode": 69 },
        "r": { "key": "r", "code": "KeyR", "keyCode": 82 },
        "t": { "key": "t", "code": "KeyT", "keyCode": 84 },
        "y": { "key": "y", "code": "KeyY", "keyCode": 89 },
        "u": { "key": "u", "code": "KeyU", "keyCode": 85 },
        "i": { "key": "i", "code": "KeyI", "keyCode": 73 },
        "o": { "key": "o", "code": "KeyO", "keyCode": 79 },
        "p": { "key": "p", "code": "KeyP", "keyCode": 80 },
        "a": { "key": "a", "code": "KeyA", "keyCode": 65 },
        "s": { "key": "s", "code": "KeyS", "keyCode": 83 },
        "d": { "key": "d", "code": "KeyD", "keyCode": 68 },
        "f": { "key": "f", "code": "KeyF", "keyCode": 70 },
        "g": { "key": "g", "code": "KeyG", "keyCode": 71 },
        "h": { "key": "h", "code": "KeyH", "keyCode": 72 },
        "j": { "key": "j", "code": "KeyJ", "keyCode": 74 },
        "k": { "key": "k", "code": "KeyK", "keyCode": 75 },
        "l": { "key": "l", "code": "KeyL", "keyCode": 76 },
        "ñ": { "key": "ñ", "code": "Semicolon", "keyCode": 186 },
        "z": { "key": "z", "code": "KeyZ", "keyCode": 90 },
        "x": { "key": "x", "code": "KeyX", "keyCode": 88 },
        "c": { "key": "c", "code": "KeyC", "keyCode": 67 },
        "v": { "key": "v", "code": "KeyV", "keyCode": 86 },
        "b": { "key": "b", "code": "KeyB", "keyCode": 66 },
        "n": { "key": "n", "code": "KeyN", "keyCode": 78 },
        "m": { "key": "m", "code": "KeyM", "keyCode": 77 },
        ",": { "key": ",", "code": "Comma", "keyCode": 188 },
        ".": { "key": ".", "code": "Period", "keyCode": 190 },
        "-": { "key": "-", "code": "Slash", "keyCode": 191 },
        " ": { "key": " ", "code": "Space", "keyCode": 32 }
    };

    // Ukrainian layout (UA)
    const ua = {
        "1": { "key": "1", "code": "Digit1", "keyCode": 49 },
        "2": { "key": "2", "code": "Digit2", "keyCode": 50 },
        "3": { "key": "3", "code": "Digit3", "keyCode": 51 },
        "4": { "key": "4", "code": "Digit4", "keyCode": 52 },
        "5": { "key": "5", "code": "Digit5", "keyCode": 53 },
        "6": { "key": "6", "code": "Digit6", "keyCode": 54 },
        "7": { "key": "7", "code": "Digit7", "keyCode": 55 },
        "8": { "key": "8", "code": "Digit8", "keyCode": 56 },
        "9": { "key": "9", "code": "Digit9", "keyCode": 57 },
        "0": { "key": "0", "code": "Digit0", "keyCode": 48 },
        "й": { "key": "й", "code": "KeyQ", "keyCode": 81 },
        "ц": { "key": "ц", "code": "KeyW", "keyCode": 87 },
        "у": { "key": "у", "code": "KeyE", "keyCode": 69 },
        "к": { "key": "к", "code": "KeyR", "keyCode": 82 },
        "е": { "key": "е", "code": "KeyT", "keyCode": 84 },
        "н": { "key": "н", "code": "KeyY", "keyCode": 89 },
        "г": { "key": "г", "code": "KeyU", "keyCode": 85 },
        "ш": { "key": "ш", "code": "KeyI", "keyCode": 73 },
        "щ": { "key": "щ", "code": "KeyO", "keyCode": 79 },
        "з": { "key": "з", "code": "KeyP", "keyCode": 80 },
        "ф": { "key": "ф", "code": "KeyA", "keyCode": 65 },
        "і": { "key": "і", "code": "KeyS", "keyCode": 83 },
        "в": { "key": "в", "code": "KeyD", "keyCode": 68 },
        "а": { "key": "а", "code": "KeyF", "keyCode": 70 },
        "п": { "key": "п", "code": "KeyG", "keyCode": 71 },
        "р": { "key": "р", "code": "KeyH", "keyCode": 72 },
        "о": { "key": "о", "code": "KeyJ", "keyCode": 74 },
        "л": { "key": "л", "code": "KeyK", "keyCode": 75 },
        "д": { "key": "д", "code": "KeyL", "keyCode": 76 },
        "я": { "key": "я", "code": "KeyZ", "keyCode": 90 },
        "ч": { "key": "ч", "code": "KeyX", "keyCode": 88 },
        "с": { "key": "с", "code": "KeyC", "keyCode": 67 },
        "м": { "key": "м", "code": "KeyV", "keyCode": 86 },
        "и": { "key": "и", "code": "KeyB", "keyCode": 66 },
        "т": { "key": "т", "code": "KeyN", "keyCode": 78 },
        "ь": { "key": "ь", "code": "KeyM", "keyCode": 77 },
        "б": { "key": "б", "code": "Comma", "keyCode": 188 },
        "ю": { "key": "ю", "code": "Period", "keyCode": 190 },
        ".": { "key": ".", "code": "Slash", "keyCode": 191 },
        " ": { "key": " ", "code": "Space", "keyCode": 32 }
    };

    // Hebrew layout (HE)
    const he = {
        "1": { "key": "1", "code": "Digit1", "keyCode": 49 },
        "2": { "key": "2", "code": "Digit2", "keyCode": 50 },
        "3": { "key": "3", "code": "Digit3", "keyCode": 51 },
        "4": { "key": "4", "code": "Digit4", "keyCode": 52 },
        "5": { "key": "5", "code": "Digit5", "keyCode": 53 },
        "6": { "key": "6", "code": "Digit6", "keyCode": 54 },
        "7": { "key": "7", "code": "Digit7", "keyCode": 55 },
        "8": { "key": "8", "code": "Digit8", "keyCode": 56 },
        "9": { "key": "9", "code": "Digit9", "keyCode": 57 },
        "0": { "key": "0", "code": "Digit0", "keyCode": 48 },
        "-": { "key": "-", "code": "Minus", "keyCode": 189 },
        "=": { "key": "=", "code": "Equal", "keyCode": 187 },
        "/": { "key": "/", "code": "KeyQ", "keyCode": 81 },
        "'": { "key": "'", "code": "KeyW", "keyCode": 87 },
        "ק": { "key": "ק", "code": "KeyE", "keyCode": 69 },
        "ר": { "key": "ר", "code": "KeyR", "keyCode": 82 },
        "א": { "key": "א", "code": "KeyT", "keyCode": 84 },
        "ט": { "key": "ט", "code": "KeyY", "keyCode": 89 },
        "ו": { "key": "ו", "code": "KeyU", "keyCode": 85 },
        "ן": { "key": "ן", "code": "KeyI", "keyCode": 73 },
        "ם": { "key": "ם", "code": "KeyO", "keyCode": 79 },
        "פ": { "key": "פ", "code": "KeyP", "keyCode": 80 },
        "]": { "key": "]", "code": "BracketLeft", "keyCode": 219 },
        "[": { "key": "[", "code": "BracketRight", "keyCode": 221 },
        "ש": { "key": "ש", "code": "KeyA", "keyCode": 65 },
        "ד": { "key": "ד", "code": "KeyS", "keyCode": 83 },
        "ג": { "key": "ג", "code": "KeyD", "keyCode": 68 },
        "כ": { "key": "כ", "code": "KeyF", "keyCode": 70 },
        "ע": { "key": "ע", "code": "KeyG", "keyCode": 71 },
        "י": { "key": "י", "code": "KeyH", "keyCode": 72 },
        "ח": { "key": "ח", "code": "KeyJ", "keyCode": 74 },
        "ל": { "key": "ל", "code": "KeyK", "keyCode": 75 },
        "ך": { "key": "ך", "code": "KeyL", "keyCode": 76 },
        "ף": { "key": "ף", "code": "Semicolon", "keyCode": 186 },
        ",": { "key": ",", "code": "Quote", "keyCode": 222 },
        "\\": { "key": "\\", "code": "Backslash", "keyCode": 220 },
        "ז": { "key": "ז", "code": "KeyZ", "keyCode": 90 },
        "ס": { "key": "ס", "code": "KeyX", "keyCode": 88 },
        "ב": { "key": "ב", "code": "KeyC", "keyCode": 67 },
        "ה": { "key": "ה", "code": "KeyV", "keyCode": 86 },
        "נ": { "key": "נ", "code": "KeyB", "keyCode": 66 },
        "מ": { "key": "מ", "code": "KeyN", "keyCode": 78 },
        "צ": { "key": "צ", "code": "KeyM", "keyCode": 77 },
        "ת": { "key": "ת", "code": "Comma", "keyCode": 188 },
        "ץ": { "key": "ץ", "code": "Period", "keyCode": 190 },
        ".": { "key": ".", "code": "Slash", "keyCode": 191 },
        " ": { "key": " ", "code": "Space", "keyCode": 32 }
    };

    // Export for different module systems
    exports.KeymapInspector = KeymapInspector;
    exports.en = en;
    exports.ru = ru;
    exports.de = de;
    exports.fr = fr;
    exports.es = es;
    exports.ua = ua;
    exports.he = he;

    // Global access for script tag usage
    if (typeof window !== 'undefined') {
        window.KeymapInspector = KeymapInspector;
        // Добавляем раскладки прямо к KeymapInspector для браузера
        KeymapInspector.en = en;
        KeymapInspector.ru = ru;
        KeymapInspector.de = de;
        KeymapInspector.fr = fr;
        KeymapInspector.es = es;
        KeymapInspector.ua = ua;
        KeymapInspector.he = he;
        window.KeymapLayouts = { en, ru, de, fr, es, ua, he };
    }

})));
