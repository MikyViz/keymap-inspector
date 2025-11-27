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
            }
            else {
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

const en = {
    // Первый ряд (цифры)
    '1': { key: '1', code: 'Digit1', keyCode: 49 },
    '2': { key: '2', code: 'Digit2', keyCode: 50 },
    '3': { key: '3', code: 'Digit3', keyCode: 51 },
    '4': { key: '4', code: 'Digit4', keyCode: 52 },
    '5': { key: '5', code: 'Digit5', keyCode: 53 },
    '6': { key: '6', code: 'Digit6', keyCode: 54 },
    '7': { key: '7', code: 'Digit7', keyCode: 55 },
    '8': { key: '8', code: 'Digit8', keyCode: 56 },
    '9': { key: '9', code: 'Digit9', keyCode: 57 },
    '0': { key: '0', code: 'Digit0', keyCode: 48 },
    '-': { key: '-', code: 'Minus', keyCode: 189 },
    '=': { key: '=', code: 'Equal', keyCode: 187 },
    // Второй ряд (QWERTY)
    'q': { key: 'q', code: 'KeyQ', keyCode: 81 },
    'w': { key: 'w', code: 'KeyW', keyCode: 87 },
    'e': { key: 'e', code: 'KeyE', keyCode: 69 },
    'r': { key: 'r', code: 'KeyR', keyCode: 82 },
    't': { key: 't', code: 'KeyT', keyCode: 84 },
    'y': { key: 'y', code: 'KeyY', keyCode: 89 },
    'u': { key: 'u', code: 'KeyU', keyCode: 85 },
    'i': { key: 'i', code: 'KeyI', keyCode: 73 },
    'o': { key: 'o', code: 'KeyO', keyCode: 79 },
    'p': { key: 'p', code: 'KeyP', keyCode: 80 },
    '[': { key: '[', code: 'BracketLeft', keyCode: 219 },
    ']': { key: ']', code: 'BracketRight', keyCode: 221 },
    // Третий ряд (ASDF)
    'a': { key: 'a', code: 'KeyA', keyCode: 65 },
    's': { key: 's', code: 'KeyS', keyCode: 83 },
    'd': { key: 'd', code: 'KeyD', keyCode: 68 },
    'f': { key: 'f', code: 'KeyF', keyCode: 70 },
    'g': { key: 'g', code: 'KeyG', keyCode: 71 },
    'h': { key: 'h', code: 'KeyH', keyCode: 72 },
    'j': { key: 'j', code: 'KeyJ', keyCode: 74 },
    'k': { key: 'k', code: 'KeyK', keyCode: 75 },
    'l': { key: 'l', code: 'KeyL', keyCode: 76 },
    ';': { key: ';', code: 'Semicolon', keyCode: 186 },
    "'": { key: "'", code: 'Quote', keyCode: 222 },
    '\\': { key: '\\', code: 'Backslash', keyCode: 220 },
    // Четвертый ряд (ZXCV)
    'z': { key: 'z', code: 'KeyZ', keyCode: 90 },
    'x': { key: 'x', code: 'KeyX', keyCode: 88 },
    'c': { key: 'c', code: 'KeyC', keyCode: 67 },
    'v': { key: 'v', code: 'KeyV', keyCode: 86 },
    'b': { key: 'b', code: 'KeyB', keyCode: 66 },
    'n': { key: 'n', code: 'KeyN', keyCode: 78 },
    'm': { key: 'm', code: 'KeyM', keyCode: 77 },
    ',': { key: ',', code: 'Comma', keyCode: 188 },
    '.': { key: '.', code: 'Period', keyCode: 190 },
    '/': { key: '/', code: 'Slash', keyCode: 191 },
    // Заглавные буквы (с Shift)
    'Q': { key: 'Q', code: 'KeyQ', keyCode: 81, shiftKey: true },
    'W': { key: 'W', code: 'KeyW', keyCode: 87, shiftKey: true },
    'E': { key: 'E', code: 'KeyE', keyCode: 69, shiftKey: true },
    'R': { key: 'R', code: 'KeyR', keyCode: 82, shiftKey: true },
    'T': { key: 'T', code: 'KeyT', keyCode: 84, shiftKey: true },
    'Y': { key: 'Y', code: 'KeyY', keyCode: 89, shiftKey: true },
    'U': { key: 'U', code: 'KeyU', keyCode: 85, shiftKey: true },
    'I': { key: 'I', code: 'KeyI', keyCode: 73, shiftKey: true },
    'O': { key: 'O', code: 'KeyO', keyCode: 79, shiftKey: true },
    'P': { key: 'P', code: 'KeyP', keyCode: 80, shiftKey: true },
    'A': { key: 'A', code: 'KeyA', keyCode: 65, shiftKey: true },
    'S': { key: 'S', code: 'KeyS', keyCode: 83, shiftKey: true },
    'D': { key: 'D', code: 'KeyD', keyCode: 68, shiftKey: true },
    'F': { key: 'F', code: 'KeyF', keyCode: 70, shiftKey: true },
    'G': { key: 'G', code: 'KeyG', keyCode: 71, shiftKey: true },
    'H': { key: 'H', code: 'KeyH', keyCode: 72, shiftKey: true },
    'J': { key: 'J', code: 'KeyJ', keyCode: 74, shiftKey: true },
    'K': { key: 'K', code: 'KeyK', keyCode: 75, shiftKey: true },
    'L': { key: 'L', code: 'KeyL', keyCode: 76, shiftKey: true },
    'Z': { key: 'Z', code: 'KeyZ', keyCode: 90, shiftKey: true },
    'X': { key: 'X', code: 'KeyX', keyCode: 88, shiftKey: true },
    'C': { key: 'C', code: 'KeyC', keyCode: 67, shiftKey: true },
    'V': { key: 'V', code: 'KeyV', keyCode: 86, shiftKey: true },
    'B': { key: 'B', code: 'KeyB', keyCode: 66, shiftKey: true },
    'N': { key: 'N', code: 'KeyN', keyCode: 78, shiftKey: true },
    'M': { key: 'M', code: 'KeyM', keyCode: 77, shiftKey: true },
    // Символы с Shift
    '!': { key: '!', code: 'Digit1', keyCode: 49, shiftKey: true },
    '@': { key: '@', code: 'Digit2', keyCode: 50, shiftKey: true },
    '#': { key: '#', code: 'Digit3', keyCode: 51, shiftKey: true },
    '$': { key: '$', code: 'Digit4', keyCode: 52, shiftKey: true },
    '%': { key: '%', code: 'Digit5', keyCode: 53, shiftKey: true },
    '^': { key: '^', code: 'Digit6', keyCode: 54, shiftKey: true },
    '&': { key: '&', code: 'Digit7', keyCode: 55, shiftKey: true },
    '*': { key: '*', code: 'Digit8', keyCode: 56, shiftKey: true },
    '(': { key: '(', code: 'Digit9', keyCode: 57, shiftKey: true },
    ')': { key: ')', code: 'Digit0', keyCode: 48, shiftKey: true },
    '_': { key: '_', code: 'Minus', keyCode: 189, shiftKey: true },
    '+': { key: '+', code: 'Equal', keyCode: 187, shiftKey: true },
    '{': { key: '{', code: 'BracketLeft', keyCode: 219, shiftKey: true },
    '}': { key: '}', code: 'BracketRight', keyCode: 221, shiftKey: true },
    ':': { key: ':', code: 'Semicolon', keyCode: 186, shiftKey: true },
    '"': { key: '"', code: 'Quote', keyCode: 222, shiftKey: true },
    '|': { key: '|', code: 'Backslash', keyCode: 220, shiftKey: true },
    '<': { key: '<', code: 'Comma', keyCode: 188, shiftKey: true },
    '>': { key: '>', code: 'Period', keyCode: 190, shiftKey: true },
    '?': { key: '?', code: 'Slash', keyCode: 191, shiftKey: true },
    // Пробел
    ' ': { key: ' ', code: 'Space', keyCode: 32 },
};

const ru = {
    // Первый ряд (цифры)
    '1': { key: '1', code: 'Digit1', keyCode: 49 },
    '2': { key: '2', code: 'Digit2', keyCode: 50 },
    '3': { key: '3', code: 'Digit3', keyCode: 51 },
    '4': { key: '4', code: 'Digit4', keyCode: 52 },
    '5': { key: '5', code: 'Digit5', keyCode: 53 },
    '6': { key: '6', code: 'Digit6', keyCode: 54 },
    '7': { key: '7', code: 'Digit7', keyCode: 55 },
    '8': { key: '8', code: 'Digit8', keyCode: 56 },
    '9': { key: '9', code: 'Digit9', keyCode: 57 },
    '0': { key: '0', code: 'Digit0', keyCode: 48 },
    '-': { key: '-', code: 'Minus', keyCode: 189 },
    '=': { key: '=', code: 'Equal', keyCode: 187 },
    // Второй ряд (русская ЙЦУКЕН)
    'й': { key: 'й', code: 'KeyQ', keyCode: 81 },
    'ц': { key: 'ц', code: 'KeyW', keyCode: 87 },
    'у': { key: 'у', code: 'KeyE', keyCode: 69 },
    'к': { key: 'к', code: 'KeyR', keyCode: 82 },
    'е': { key: 'е', code: 'KeyT', keyCode: 84 },
    'н': { key: 'н', code: 'KeyY', keyCode: 89 },
    'г': { key: 'г', code: 'KeyU', keyCode: 85 },
    'ш': { key: 'ш', code: 'KeyI', keyCode: 73 },
    'щ': { key: 'щ', code: 'KeyO', keyCode: 79 },
    'з': { key: 'з', code: 'KeyP', keyCode: 80 },
    'х': { key: 'х', code: 'BracketLeft', keyCode: 219 },
    'ъ': { key: 'ъ', code: 'BracketRight', keyCode: 221 },
    // Третий ряд
    'ф': { key: 'ф', code: 'KeyA', keyCode: 65 },
    'ы': { key: 'ы', code: 'KeyS', keyCode: 83 },
    'в': { key: 'в', code: 'KeyD', keyCode: 68 },
    'а': { key: 'а', code: 'KeyF', keyCode: 70 },
    'п': { key: 'п', code: 'KeyG', keyCode: 71 },
    'р': { key: 'р', code: 'KeyH', keyCode: 72 },
    'о': { key: 'о', code: 'KeyJ', keyCode: 74 },
    'л': { key: 'л', code: 'KeyK', keyCode: 75 },
    'д': { key: 'д', code: 'KeyL', keyCode: 76 },
    'ж': { key: 'ж', code: 'Semicolon', keyCode: 186 },
    'э': { key: 'э', code: 'Quote', keyCode: 222 },
    '\\': { key: '\\', code: 'Backslash', keyCode: 220 },
    // Четвертый ряд
    'я': { key: 'я', code: 'KeyZ', keyCode: 90 },
    'ч': { key: 'ч', code: 'KeyX', keyCode: 88 },
    'с': { key: 'с', code: 'KeyC', keyCode: 67 },
    'м': { key: 'м', code: 'KeyV', keyCode: 86 },
    'и': { key: 'и', code: 'KeyB', keyCode: 66 },
    'т': { key: 'т', code: 'KeyN', keyCode: 78 },
    'ь': { key: 'ь', code: 'KeyM', keyCode: 77 },
    'б': { key: 'б', code: 'Comma', keyCode: 188 },
    'ю': { key: 'ю', code: 'Period', keyCode: 190 },
    '.': { key: '.', code: 'Slash', keyCode: 191 },
    // Заглавные буквы (с Shift)
    'Й': { key: 'Й', code: 'KeyQ', keyCode: 81, shiftKey: true },
    'Ц': { key: 'Ц', code: 'KeyW', keyCode: 87, shiftKey: true },
    'У': { key: 'У', code: 'KeyE', keyCode: 69, shiftKey: true },
    'К': { key: 'К', code: 'KeyR', keyCode: 82, shiftKey: true },
    'Е': { key: 'Е', code: 'KeyT', keyCode: 84, shiftKey: true },
    'Н': { key: 'Н', code: 'KeyY', keyCode: 89, shiftKey: true },
    'Г': { key: 'Г', code: 'KeyU', keyCode: 85, shiftKey: true },
    'Ш': { key: 'Ш', code: 'KeyI', keyCode: 73, shiftKey: true },
    'Щ': { key: 'Щ', code: 'KeyO', keyCode: 79, shiftKey: true },
    'З': { key: 'З', code: 'KeyP', keyCode: 80, shiftKey: true },
    'Х': { key: 'Х', code: 'BracketLeft', keyCode: 219, shiftKey: true },
    'Ъ': { key: 'Ъ', code: 'BracketRight', keyCode: 221, shiftKey: true },
    'Ф': { key: 'Ф', code: 'KeyA', keyCode: 65, shiftKey: true },
    'Ы': { key: 'Ы', code: 'KeyS', keyCode: 83, shiftKey: true },
    'В': { key: 'В', code: 'KeyD', keyCode: 68, shiftKey: true },
    'А': { key: 'А', code: 'KeyF', keyCode: 70, shiftKey: true },
    'П': { key: 'П', code: 'KeyG', keyCode: 71, shiftKey: true },
    'Р': { key: 'Р', code: 'KeyH', keyCode: 72, shiftKey: true },
    'О': { key: 'О', code: 'KeyJ', keyCode: 74, shiftKey: true },
    'Л': { key: 'Л', code: 'KeyK', keyCode: 75, shiftKey: true },
    'Д': { key: 'Д', code: 'KeyL', keyCode: 76, shiftKey: true },
    'Ж': { key: 'Ж', code: 'Semicolon', keyCode: 186, shiftKey: true },
    'Э': { key: 'Э', code: 'Quote', keyCode: 222, shiftKey: true },
    'Я': { key: 'Я', code: 'KeyZ', keyCode: 90, shiftKey: true },
    'Ч': { key: 'Ч', code: 'KeyX', keyCode: 88, shiftKey: true },
    'С': { key: 'С', code: 'KeyC', keyCode: 67, shiftKey: true },
    'М': { key: 'М', code: 'KeyV', keyCode: 86, shiftKey: true },
    'И': { key: 'И', code: 'KeyB', keyCode: 66, shiftKey: true },
    'Т': { key: 'Т', code: 'KeyN', keyCode: 78, shiftKey: true },
    'Ь': { key: 'Ь', code: 'KeyM', keyCode: 77, shiftKey: true },
    'Б': { key: 'Б', code: 'Comma', keyCode: 188, shiftKey: true },
    'Ю': { key: 'Ю', code: 'Period', keyCode: 190, shiftKey: true },
    // Символы с Shift
    '!': { key: '!', code: 'Digit1', keyCode: 49, shiftKey: true },
    '"': { key: '"', code: 'Digit2', keyCode: 50, shiftKey: true },
    '№': { key: '№', code: 'Digit3', keyCode: 51, shiftKey: true },
    ';': { key: ';', code: 'Digit4', keyCode: 52, shiftKey: true },
    '%': { key: '%', code: 'Digit5', keyCode: 53, shiftKey: true },
    ':': { key: ':', code: 'Digit6', keyCode: 54, shiftKey: true },
    '?': { key: '?', code: 'Digit7', keyCode: 55, shiftKey: true },
    '*': { key: '*', code: 'Digit8', keyCode: 56, shiftKey: true },
    '(': { key: '(', code: 'Digit9', keyCode: 57, shiftKey: true },
    ')': { key: ')', code: 'Digit0', keyCode: 48, shiftKey: true },
    '_': { key: '_', code: 'Minus', keyCode: 189, shiftKey: true },
    '+': { key: '+', code: 'Equal', keyCode: 187, shiftKey: true },
    '/': { key: '/', code: 'Backslash', keyCode: 220, shiftKey: true },
    ',': { key: ',', code: 'Slash', keyCode: 191, shiftKey: true },
    // Пробел
    ' ': { key: ' ', code: 'Space', keyCode: 32 },
};

const de = {
    // Первый ряд (цифры)
    '1': { key: '1', code: 'Digit1', keyCode: 49 },
    '2': { key: '2', code: 'Digit2', keyCode: 50 },
    '3': { key: '3', code: 'Digit3', keyCode: 51 },
    '4': { key: '4', code: 'Digit4', keyCode: 52 },
    '5': { key: '5', code: 'Digit5', keyCode: 53 },
    '6': { key: '6', code: 'Digit6', keyCode: 54 },
    '7': { key: '7', code: 'Digit7', keyCode: 55 },
    '8': { key: '8', code: 'Digit8', keyCode: 56 },
    '9': { key: '9', code: 'Digit9', keyCode: 57 },
    '0': { key: '0', code: 'Digit0', keyCode: 48 },
    'ß': { key: 'ß', code: 'Minus', keyCode: 189 },
    // Второй ряд (QWERTZ)
    'q': { key: 'q', code: 'KeyQ', keyCode: 81 },
    'w': { key: 'w', code: 'KeyW', keyCode: 87 },
    'e': { key: 'e', code: 'KeyE', keyCode: 69 },
    'r': { key: 'r', code: 'KeyR', keyCode: 82 },
    't': { key: 't', code: 'KeyT', keyCode: 84 },
    'z': { key: 'z', code: 'KeyY', keyCode: 89 }, // В немецкой Z и Y поменяны местами
    'u': { key: 'u', code: 'KeyU', keyCode: 85 },
    'i': { key: 'i', code: 'KeyI', keyCode: 73 },
    'o': { key: 'o', code: 'KeyO', keyCode: 79 },
    'p': { key: 'p', code: 'KeyP', keyCode: 80 },
    'ü': { key: 'ü', code: 'BracketLeft', keyCode: 219 },
    '+': { key: '+', code: 'BracketRight', keyCode: 221 },
    // Третий ряд (ASDF)
    'a': { key: 'a', code: 'KeyA', keyCode: 65 },
    's': { key: 's', code: 'KeyS', keyCode: 83 },
    'd': { key: 'd', code: 'KeyD', keyCode: 68 },
    'f': { key: 'f', code: 'KeyF', keyCode: 70 },
    'g': { key: 'g', code: 'KeyG', keyCode: 71 },
    'h': { key: 'h', code: 'KeyH', keyCode: 72 },
    'j': { key: 'j', code: 'KeyJ', keyCode: 74 },
    'k': { key: 'k', code: 'KeyK', keyCode: 75 },
    'l': { key: 'l', code: 'KeyL', keyCode: 76 },
    'ö': { key: 'ö', code: 'Semicolon', keyCode: 186 },
    'ä': { key: 'ä', code: 'Quote', keyCode: 222 },
    '#': { key: '#', code: 'Backslash', keyCode: 220 },
    // Четвертый ряд (YXCV)
    'y': { key: 'y', code: 'KeyZ', keyCode: 90 }, // В немецкой Y и Z поменяны местами
    'x': { key: 'x', code: 'KeyX', keyCode: 88 },
    'c': { key: 'c', code: 'KeyC', keyCode: 67 },
    'v': { key: 'v', code: 'KeyV', keyCode: 86 },
    'b': { key: 'b', code: 'KeyB', keyCode: 66 },
    'n': { key: 'n', code: 'KeyN', keyCode: 78 },
    'm': { key: 'm', code: 'KeyM', keyCode: 77 },
    ',': { key: ',', code: 'Comma', keyCode: 188 },
    '.': { key: '.', code: 'Period', keyCode: 190 },
    '-': { key: '-', code: 'Slash', keyCode: 191 },
    // Заглавные буквы (с Shift)
    'Q': { key: 'Q', code: 'KeyQ', keyCode: 81, shiftKey: true },
    'W': { key: 'W', code: 'KeyW', keyCode: 87, shiftKey: true },
    'E': { key: 'E', code: 'KeyE', keyCode: 69, shiftKey: true },
    'R': { key: 'R', code: 'KeyR', keyCode: 82, shiftKey: true },
    'T': { key: 'T', code: 'KeyT', keyCode: 84, shiftKey: true },
    'Z': { key: 'Z', code: 'KeyY', keyCode: 89, shiftKey: true },
    'U': { key: 'U', code: 'KeyU', keyCode: 85, shiftKey: true },
    'I': { key: 'I', code: 'KeyI', keyCode: 73, shiftKey: true },
    'O': { key: 'O', code: 'KeyO', keyCode: 79, shiftKey: true },
    'P': { key: 'P', code: 'KeyP', keyCode: 80, shiftKey: true },
    'Ü': { key: 'Ü', code: 'BracketLeft', keyCode: 219, shiftKey: true },
    'A': { key: 'A', code: 'KeyA', keyCode: 65, shiftKey: true },
    'S': { key: 'S', code: 'KeyS', keyCode: 83, shiftKey: true },
    'D': { key: 'D', code: 'KeyD', keyCode: 68, shiftKey: true },
    'F': { key: 'F', code: 'KeyF', keyCode: 70, shiftKey: true },
    'G': { key: 'G', code: 'KeyG', keyCode: 71, shiftKey: true },
    'H': { key: 'H', code: 'KeyH', keyCode: 72, shiftKey: true },
    'J': { key: 'J', code: 'KeyJ', keyCode: 74, shiftKey: true },
    'K': { key: 'K', code: 'KeyK', keyCode: 75, shiftKey: true },
    'L': { key: 'L', code: 'KeyL', keyCode: 76, shiftKey: true },
    'Ö': { key: 'Ö', code: 'Semicolon', keyCode: 186, shiftKey: true },
    'Ä': { key: 'Ä', code: 'Quote', keyCode: 222, shiftKey: true },
    'Y': { key: 'Y', code: 'KeyZ', keyCode: 90, shiftKey: true },
    'X': { key: 'X', code: 'KeyX', keyCode: 88, shiftKey: true },
    'C': { key: 'C', code: 'KeyC', keyCode: 67, shiftKey: true },
    'V': { key: 'V', code: 'KeyV', keyCode: 86, shiftKey: true },
    'B': { key: 'B', code: 'KeyB', keyCode: 66, shiftKey: true },
    'N': { key: 'N', code: 'KeyN', keyCode: 78, shiftKey: true },
    'M': { key: 'M', code: 'KeyM', keyCode: 77, shiftKey: true },
    // Пробел
    ' ': { key: ' ', code: 'Space', keyCode: 32 },
};

const fr = {
    // Первый ряд (AZERTY цифры)
    '&': { key: '&', code: 'Digit1', keyCode: 49 },
    'é': { key: 'é', code: 'Digit2', keyCode: 50 },
    '"': { key: '"', code: 'Digit3', keyCode: 51 },
    "'": { key: "'", code: 'Digit4', keyCode: 52 },
    '(': { key: '(', code: 'Digit5', keyCode: 53 },
    '-': { key: '-', code: 'Digit6', keyCode: 54 },
    'è': { key: 'è', code: 'Digit7', keyCode: 55 },
    '_': { key: '_', code: 'Digit8', keyCode: 56 },
    'ç': { key: 'ç', code: 'Digit9', keyCode: 57 },
    'à': { key: 'à', code: 'Digit0', keyCode: 48 },
    ')': { key: ')', code: 'Minus', keyCode: 189 },
    '=': { key: '=', code: 'Equal', keyCode: 187 },
    // Второй ряд (AZERTY)
    'a': { key: 'a', code: 'KeyQ', keyCode: 81 }, // A на месте Q
    'z': { key: 'z', code: 'KeyW', keyCode: 87 }, // Z на месте W
    'e': { key: 'e', code: 'KeyE', keyCode: 69 },
    'r': { key: 'r', code: 'KeyR', keyCode: 82 },
    't': { key: 't', code: 'KeyT', keyCode: 84 },
    'y': { key: 'y', code: 'KeyY', keyCode: 89 },
    'u': { key: 'u', code: 'KeyU', keyCode: 85 },
    'i': { key: 'i', code: 'KeyI', keyCode: 73 },
    'o': { key: 'o', code: 'KeyO', keyCode: 79 },
    'p': { key: 'p', code: 'KeyP', keyCode: 80 },
    '^': { key: '^', code: 'BracketLeft', keyCode: 219 },
    '$': { key: '$', code: 'BracketRight', keyCode: 221 },
    // Третий ряд
    'q': { key: 'q', code: 'KeyA', keyCode: 65 }, // Q на месте A
    's': { key: 's', code: 'KeyS', keyCode: 83 },
    'd': { key: 'd', code: 'KeyD', keyCode: 68 },
    'f': { key: 'f', code: 'KeyF', keyCode: 70 },
    'g': { key: 'g', code: 'KeyG', keyCode: 71 },
    'h': { key: 'h', code: 'KeyH', keyCode: 72 },
    'j': { key: 'j', code: 'KeyJ', keyCode: 74 },
    'k': { key: 'k', code: 'KeyK', keyCode: 75 },
    'l': { key: 'l', code: 'KeyL', keyCode: 76 },
    'm': { key: 'm', code: 'Semicolon', keyCode: 186 }, // M на месте ;
    'ù': { key: 'ù', code: 'Quote', keyCode: 222 },
    '*': { key: '*', code: 'Backslash', keyCode: 220 },
    // Четвертый ряд
    'w': { key: 'w', code: 'KeyZ', keyCode: 90 }, // W на месте Z
    'x': { key: 'x', code: 'KeyX', keyCode: 88 },
    'c': { key: 'c', code: 'KeyC', keyCode: 67 },
    'v': { key: 'v', code: 'KeyV', keyCode: 86 },
    'b': { key: 'b', code: 'KeyB', keyCode: 66 },
    'n': { key: 'n', code: 'KeyN', keyCode: 78 },
    ',': { key: ',', code: 'KeyM', keyCode: 77 }, // , на месте M
    ';': { key: ';', code: 'Comma', keyCode: 188 },
    ':': { key: ':', code: 'Period', keyCode: 190 },
    '!': { key: '!', code: 'Slash', keyCode: 191 },
    // Заглавные буквы (с Shift)
    'A': { key: 'A', code: 'KeyQ', keyCode: 81, shiftKey: true },
    'Z': { key: 'Z', code: 'KeyW', keyCode: 87, shiftKey: true },
    'E': { key: 'E', code: 'KeyE', keyCode: 69, shiftKey: true },
    'R': { key: 'R', code: 'KeyR', keyCode: 82, shiftKey: true },
    'T': { key: 'T', code: 'KeyT', keyCode: 84, shiftKey: true },
    'Y': { key: 'Y', code: 'KeyY', keyCode: 89, shiftKey: true },
    'U': { key: 'U', code: 'KeyU', keyCode: 85, shiftKey: true },
    'I': { key: 'I', code: 'KeyI', keyCode: 73, shiftKey: true },
    'O': { key: 'O', code: 'KeyO', keyCode: 79, shiftKey: true },
    'P': { key: 'P', code: 'KeyP', keyCode: 80, shiftKey: true },
    'Q': { key: 'Q', code: 'KeyA', keyCode: 65, shiftKey: true },
    'S': { key: 'S', code: 'KeyS', keyCode: 83, shiftKey: true },
    'D': { key: 'D', code: 'KeyD', keyCode: 68, shiftKey: true },
    'F': { key: 'F', code: 'KeyF', keyCode: 70, shiftKey: true },
    'G': { key: 'G', code: 'KeyG', keyCode: 71, shiftKey: true },
    'H': { key: 'H', code: 'KeyH', keyCode: 72, shiftKey: true },
    'J': { key: 'J', code: 'KeyJ', keyCode: 74, shiftKey: true },
    'K': { key: 'K', code: 'KeyK', keyCode: 75, shiftKey: true },
    'L': { key: 'L', code: 'KeyL', keyCode: 76, shiftKey: true },
    'M': { key: 'M', code: 'Semicolon', keyCode: 186, shiftKey: true },
    'W': { key: 'W', code: 'KeyZ', keyCode: 90, shiftKey: true },
    'X': { key: 'X', code: 'KeyX', keyCode: 88, shiftKey: true },
    'C': { key: 'C', code: 'KeyC', keyCode: 67, shiftKey: true },
    'V': { key: 'V', code: 'KeyV', keyCode: 86, shiftKey: true },
    'B': { key: 'B', code: 'KeyB', keyCode: 66, shiftKey: true },
    'N': { key: 'N', code: 'KeyN', keyCode: 78, shiftKey: true },
    // Цифры с Shift
    '1': { key: '1', code: 'Digit1', keyCode: 49, shiftKey: true },
    '2': { key: '2', code: 'Digit2', keyCode: 50, shiftKey: true },
    '3': { key: '3', code: 'Digit3', keyCode: 51, shiftKey: true },
    '4': { key: '4', code: 'Digit4', keyCode: 52, shiftKey: true },
    '5': { key: '5', code: 'Digit5', keyCode: 53, shiftKey: true },
    '6': { key: '6', code: 'Digit6', keyCode: 54, shiftKey: true },
    '7': { key: '7', code: 'Digit7', keyCode: 55, shiftKey: true },
    '8': { key: '8', code: 'Digit8', keyCode: 56, shiftKey: true },
    '9': { key: '9', code: 'Digit9', keyCode: 57, shiftKey: true },
    '0': { key: '0', code: 'Digit0', keyCode: 48, shiftKey: true },
    // Пробел
    ' ': { key: ' ', code: 'Space', keyCode: 32 },
};

const es = {
    // Первый ряд (цифры)
    '1': { key: '1', code: 'Digit1', keyCode: 49 },
    '2': { key: '2', code: 'Digit2', keyCode: 50 },
    '3': { key: '3', code: 'Digit3', keyCode: 51 },
    '4': { key: '4', code: 'Digit4', keyCode: 52 },
    '5': { key: '5', code: 'Digit5', keyCode: 53 },
    '6': { key: '6', code: 'Digit6', keyCode: 54 },
    '7': { key: '7', code: 'Digit7', keyCode: 55 },
    '8': { key: '8', code: 'Digit8', keyCode: 56 },
    '9': { key: '9', code: 'Digit9', keyCode: 57 },
    '0': { key: '0', code: 'Digit0', keyCode: 48 },
    "'": { key: "'", code: 'Minus', keyCode: 189 },
    '¡': { key: '¡', code: 'Equal', keyCode: 187 },
    // Второй ряд (QWERTY)
    'q': { key: 'q', code: 'KeyQ', keyCode: 81 },
    'w': { key: 'w', code: 'KeyW', keyCode: 87 },
    'e': { key: 'e', code: 'KeyE', keyCode: 69 },
    'r': { key: 'r', code: 'KeyR', keyCode: 82 },
    't': { key: 't', code: 'KeyT', keyCode: 84 },
    'y': { key: 'y', code: 'KeyY', keyCode: 89 },
    'u': { key: 'u', code: 'KeyU', keyCode: 85 },
    'i': { key: 'i', code: 'KeyI', keyCode: 73 },
    'o': { key: 'o', code: 'KeyO', keyCode: 79 },
    'p': { key: 'p', code: 'KeyP', keyCode: 80 },
    '`': { key: '`', code: 'BracketLeft', keyCode: 219 },
    '+': { key: '+', code: 'BracketRight', keyCode: 221 },
    // Третий ряд (ASDF)
    'a': { key: 'a', code: 'KeyA', keyCode: 65 },
    's': { key: 's', code: 'KeyS', keyCode: 83 },
    'd': { key: 'd', code: 'KeyD', keyCode: 68 },
    'f': { key: 'f', code: 'KeyF', keyCode: 70 },
    'g': { key: 'g', code: 'KeyG', keyCode: 71 },
    'h': { key: 'h', code: 'KeyH', keyCode: 72 },
    'j': { key: 'j', code: 'KeyJ', keyCode: 74 },
    'k': { key: 'k', code: 'KeyK', keyCode: 75 },
    'l': { key: 'l', code: 'KeyL', keyCode: 76 },
    'ñ': { key: 'ñ', code: 'Semicolon', keyCode: 186 },
    '´': { key: '´', code: 'Quote', keyCode: 222 },
    'ç': { key: 'ç', code: 'Backslash', keyCode: 220 },
    // Четвертый ряд (ZXCV)
    'z': { key: 'z', code: 'KeyZ', keyCode: 90 },
    'x': { key: 'x', code: 'KeyX', keyCode: 88 },
    'c': { key: 'c', code: 'KeyC', keyCode: 67 },
    'v': { key: 'v', code: 'KeyV', keyCode: 86 },
    'b': { key: 'b', code: 'KeyB', keyCode: 66 },
    'n': { key: 'n', code: 'KeyN', keyCode: 78 },
    'm': { key: 'm', code: 'KeyM', keyCode: 77 },
    ',': { key: ',', code: 'Comma', keyCode: 188 },
    '.': { key: '.', code: 'Period', keyCode: 190 },
    '-': { key: '-', code: 'Slash', keyCode: 191 },
    // Заглавные буквы (с Shift)
    'Q': { key: 'Q', code: 'KeyQ', keyCode: 81, shiftKey: true },
    'W': { key: 'W', code: 'KeyW', keyCode: 87, shiftKey: true },
    'E': { key: 'E', code: 'KeyE', keyCode: 69, shiftKey: true },
    'R': { key: 'R', code: 'KeyR', keyCode: 82, shiftKey: true },
    'T': { key: 'T', code: 'KeyT', keyCode: 84, shiftKey: true },
    'Y': { key: 'Y', code: 'KeyY', keyCode: 89, shiftKey: true },
    'U': { key: 'U', code: 'KeyU', keyCode: 85, shiftKey: true },
    'I': { key: 'I', code: 'KeyI', keyCode: 73, shiftKey: true },
    'O': { key: 'O', code: 'KeyO', keyCode: 79, shiftKey: true },
    'P': { key: 'P', code: 'KeyP', keyCode: 80, shiftKey: true },
    'A': { key: 'A', code: 'KeyA', keyCode: 65, shiftKey: true },
    'S': { key: 'S', code: 'KeyS', keyCode: 83, shiftKey: true },
    'D': { key: 'D', code: 'KeyD', keyCode: 68, shiftKey: true },
    'F': { key: 'F', code: 'KeyF', keyCode: 70, shiftKey: true },
    'G': { key: 'G', code: 'KeyG', keyCode: 71, shiftKey: true },
    'H': { key: 'H', code: 'KeyH', keyCode: 72, shiftKey: true },
    'J': { key: 'J', code: 'KeyJ', keyCode: 74, shiftKey: true },
    'K': { key: 'K', code: 'KeyK', keyCode: 75, shiftKey: true },
    'L': { key: 'L', code: 'KeyL', keyCode: 76, shiftKey: true },
    'Ñ': { key: 'Ñ', code: 'Semicolon', keyCode: 186, shiftKey: true },
    'Z': { key: 'Z', code: 'KeyZ', keyCode: 90, shiftKey: true },
    'X': { key: 'X', code: 'KeyX', keyCode: 88, shiftKey: true },
    'C': { key: 'C', code: 'KeyC', keyCode: 67, shiftKey: true },
    'V': { key: 'V', code: 'KeyV', keyCode: 86, shiftKey: true },
    'B': { key: 'B', code: 'KeyB', keyCode: 66, shiftKey: true },
    'N': { key: 'N', code: 'KeyN', keyCode: 78, shiftKey: true },
    'M': { key: 'M', code: 'KeyM', keyCode: 77, shiftKey: true },
    // Специальные символы с Shift
    '!': { key: '!', code: 'Digit1', keyCode: 49, shiftKey: true },
    '"': { key: '"', code: 'Digit2', keyCode: 50, shiftKey: true },
    '·': { key: '·', code: 'Digit3', keyCode: 51, shiftKey: true },
    '$': { key: '$', code: 'Digit4', keyCode: 52, shiftKey: true },
    '%': { key: '%', code: 'Digit5', keyCode: 53, shiftKey: true },
    '&': { key: '&', code: 'Digit6', keyCode: 54, shiftKey: true },
    '/': { key: '/', code: 'Digit7', keyCode: 55, shiftKey: true },
    '(': { key: '(', code: 'Digit8', keyCode: 56, shiftKey: true },
    ')': { key: ')', code: 'Digit9', keyCode: 57, shiftKey: true },
    '=': { key: '=', code: 'Digit0', keyCode: 48, shiftKey: true },
    '?': { key: '?', code: 'Minus', keyCode: 189, shiftKey: true },
    '¿': { key: '¿', code: 'Equal', keyCode: 187, shiftKey: true },
    // Пробел
    ' ': { key: ' ', code: 'Space', keyCode: 32 },
};

const ua = {
    // Первый ряд (цифры)
    '1': { key: '1', code: 'Digit1', keyCode: 49 },
    '2': { key: '2', code: 'Digit2', keyCode: 50 },
    '3': { key: '3', code: 'Digit3', keyCode: 51 },
    '4': { key: '4', code: 'Digit4', keyCode: 52 },
    '5': { key: '5', code: 'Digit5', keyCode: 53 },
    '6': { key: '6', code: 'Digit6', keyCode: 54 },
    '7': { key: '7', code: 'Digit7', keyCode: 55 },
    '8': { key: '8', code: 'Digit8', keyCode: 56 },
    '9': { key: '9', code: 'Digit9', keyCode: 57 },
    '0': { key: '0', code: 'Digit0', keyCode: 48 },
    '-': { key: '-', code: 'Minus', keyCode: 189 },
    '=': { key: '=', code: 'Equal', keyCode: 187 },
    // Второй ряд (украинская ЙЦУКЕН)
    'й': { key: 'й', code: 'KeyQ', keyCode: 81 },
    'ц': { key: 'ц', code: 'KeyW', keyCode: 87 },
    'у': { key: 'у', code: 'KeyE', keyCode: 69 },
    'к': { key: 'к', code: 'KeyR', keyCode: 82 },
    'е': { key: 'е', code: 'KeyT', keyCode: 84 },
    'н': { key: 'н', code: 'KeyY', keyCode: 89 },
    'г': { key: 'г', code: 'KeyU', keyCode: 85 },
    'ш': { key: 'ш', code: 'KeyI', keyCode: 73 },
    'щ': { key: 'щ', code: 'KeyO', keyCode: 79 },
    'з': { key: 'з', code: 'KeyP', keyCode: 80 },
    'х': { key: 'х', code: 'BracketLeft', keyCode: 219 },
    'ї': { key: 'ї', code: 'BracketRight', keyCode: 221 }, // украинская ї
    // Третий ряд
    'ф': { key: 'ф', code: 'KeyA', keyCode: 65 },
    'і': { key: 'і', code: 'KeyS', keyCode: 83 }, // украинская і
    'в': { key: 'в', code: 'KeyD', keyCode: 68 },
    'а': { key: 'а', code: 'KeyF', keyCode: 70 },
    'п': { key: 'п', code: 'KeyG', keyCode: 71 },
    'р': { key: 'р', code: 'KeyH', keyCode: 72 },
    'о': { key: 'о', code: 'KeyJ', keyCode: 74 },
    'л': { key: 'л', code: 'KeyK', keyCode: 75 },
    'д': { key: 'д', code: 'KeyL', keyCode: 76 },
    'ж': { key: 'ж', code: 'Semicolon', keyCode: 186 },
    'є': { key: 'є', code: 'Quote', keyCode: 222 }, // украинская є
    '\\': { key: '\\', code: 'Backslash', keyCode: 220 },
    // Четвертый ряд
    'я': { key: 'я', code: 'KeyZ', keyCode: 90 },
    'ч': { key: 'ч', code: 'KeyX', keyCode: 88 },
    'с': { key: 'с', code: 'KeyC', keyCode: 67 },
    'м': { key: 'м', code: 'KeyV', keyCode: 86 },
    'и': { key: 'и', code: 'KeyB', keyCode: 66 },
    'т': { key: 'т', code: 'KeyN', keyCode: 78 },
    'ь': { key: 'ь', code: 'KeyM', keyCode: 77 },
    'б': { key: 'б', code: 'Comma', keyCode: 188 },
    'ю': { key: 'ю', code: 'Period', keyCode: 190 },
    '.': { key: '.', code: 'Slash', keyCode: 191 },
    // Заглавные буквы (с Shift)
    'Й': { key: 'Й', code: 'KeyQ', keyCode: 81, shiftKey: true },
    'Ц': { key: 'Ц', code: 'KeyW', keyCode: 87, shiftKey: true },
    'У': { key: 'У', code: 'KeyE', keyCode: 69, shiftKey: true },
    'К': { key: 'К', code: 'KeyR', keyCode: 82, shiftKey: true },
    'Е': { key: 'Е', code: 'KeyT', keyCode: 84, shiftKey: true },
    'Н': { key: 'Н', code: 'KeyY', keyCode: 89, shiftKey: true },
    'Г': { key: 'Г', code: 'KeyU', keyCode: 85, shiftKey: true },
    'Ш': { key: 'Ш', code: 'KeyI', keyCode: 73, shiftKey: true },
    'Щ': { key: 'Щ', code: 'KeyO', keyCode: 79, shiftKey: true },
    'З': { key: 'З', code: 'KeyP', keyCode: 80, shiftKey: true },
    'Х': { key: 'Х', code: 'BracketLeft', keyCode: 219, shiftKey: true },
    'Ї': { key: 'Ї', code: 'BracketRight', keyCode: 221, shiftKey: true },
    'Ф': { key: 'Ф', code: 'KeyA', keyCode: 65, shiftKey: true },
    'І': { key: 'І', code: 'KeyS', keyCode: 83, shiftKey: true },
    'В': { key: 'В', code: 'KeyD', keyCode: 68, shiftKey: true },
    'А': { key: 'А', code: 'KeyF', keyCode: 70, shiftKey: true },
    'П': { key: 'П', code: 'KeyG', keyCode: 71, shiftKey: true },
    'Р': { key: 'Р', code: 'KeyH', keyCode: 72, shiftKey: true },
    'О': { key: 'О', code: 'KeyJ', keyCode: 74, shiftKey: true },
    'Л': { key: 'Л', code: 'KeyK', keyCode: 75, shiftKey: true },
    'Д': { key: 'Д', code: 'KeyL', keyCode: 76, shiftKey: true },
    'Ж': { key: 'Ж', code: 'Semicolon', keyCode: 186, shiftKey: true },
    'Є': { key: 'Є', code: 'Quote', keyCode: 222, shiftKey: true },
    'Я': { key: 'Я', code: 'KeyZ', keyCode: 90, shiftKey: true },
    'Ч': { key: 'Ч', code: 'KeyX', keyCode: 88, shiftKey: true },
    'С': { key: 'С', code: 'KeyC', keyCode: 67, shiftKey: true },
    'М': { key: 'М', code: 'KeyV', keyCode: 86, shiftKey: true },
    'И': { key: 'И', code: 'KeyB', keyCode: 66, shiftKey: true },
    'Т': { key: 'Т', code: 'KeyN', keyCode: 78, shiftKey: true },
    'Ь': { key: 'Ь', code: 'KeyM', keyCode: 77, shiftKey: true },
    'Б': { key: 'Б', code: 'Comma', keyCode: 188, shiftKey: true },
    'Ю': { key: 'Ю', code: 'Period', keyCode: 190, shiftKey: true },
    // Символы с Shift
    '!': { key: '!', code: 'Digit1', keyCode: 49, shiftKey: true },
    '@': { key: '@', code: 'Digit2', keyCode: 50, shiftKey: true },
    '#': { key: '#', code: 'Digit3', keyCode: 51, shiftKey: true },
    '$': { key: '$', code: 'Digit4', keyCode: 52, shiftKey: true },
    '%': { key: '%', code: 'Digit5', keyCode: 53, shiftKey: true },
    '^': { key: '^', code: 'Digit6', keyCode: 54, shiftKey: true },
    '&': { key: '&', code: 'Digit7', keyCode: 55, shiftKey: true },
    '*': { key: '*', code: 'Digit8', keyCode: 56, shiftKey: true },
    '(': { key: '(', code: 'Digit9', keyCode: 57, shiftKey: true },
    ')': { key: ')', code: 'Digit0', keyCode: 48, shiftKey: true },
    '_': { key: '_', code: 'Minus', keyCode: 189, shiftKey: true },
    '+': { key: '+', code: 'Equal', keyCode: 187, shiftKey: true },
    // Пробел
    ' ': { key: ' ', code: 'Space', keyCode: 32 },
};

const he = {
    // Первый ряд (цифры)
    '1': { key: '1', code: 'Digit1', keyCode: 49 },
    '2': { key: '2', code: 'Digit2', keyCode: 50 },
    '3': { key: '3', code: 'Digit3', keyCode: 51 },
    '4': { key: '4', code: 'Digit4', keyCode: 52 },
    '5': { key: '5', code: 'Digit5', keyCode: 53 },
    '6': { key: '6', code: 'Digit6', keyCode: 54 },
    '7': { key: '7', code: 'Digit7', keyCode: 55 },
    '8': { key: '8', code: 'Digit8', keyCode: 56 },
    '9': { key: '9', code: 'Digit9', keyCode: 57 },
    '0': { key: '0', code: 'Digit0', keyCode: 48 },
    '-': { key: '-', code: 'Minus', keyCode: 189 },
    '=': { key: '=', code: 'Equal', keyCode: 187 },
    // Второй ряд (QWERTYUIOP)
    '/': { key: '/', code: 'KeyQ', keyCode: 81 }, // / на Q
    "'": { key: "'", code: 'KeyW', keyCode: 87 }, // ' на W  
    'ק': { key: 'ק', code: 'KeyE', keyCode: 69 }, // ק (Qof) на E
    'ר': { key: 'ר', code: 'KeyR', keyCode: 82 }, // ר (Resh) на R
    'א': { key: 'א', code: 'KeyT', keyCode: 84 }, // א (Alef) на T
    'ט': { key: 'ט', code: 'KeyY', keyCode: 89 }, // ט (Tet) на Y
    'ו': { key: 'ו', code: 'KeyU', keyCode: 85 }, // ו (Vav) на U
    'ן': { key: 'ן', code: 'KeyI', keyCode: 73 }, // ן (final Nun) на I
    'ם': { key: 'ם', code: 'KeyO', keyCode: 79 }, // ם (final Mem) на O
    'פ': { key: 'פ', code: 'KeyP', keyCode: 80 }, // פ (Pe) на P
    ']': { key: ']', code: 'BracketLeft', keyCode: 219 },
    '[': { key: '[', code: 'BracketRight', keyCode: 221 },
    // Третий ряд (ASDFGHJKL)
    'ש': { key: 'ש', code: 'KeyA', keyCode: 65 }, // ש (Shin) на A
    'ד': { key: 'ד', code: 'KeyS', keyCode: 83 }, // ד (Dalet) на S
    'ג': { key: 'ג', code: 'KeyD', keyCode: 68 }, // ג (Gimel) на D
    'כ': { key: 'כ', code: 'KeyF', keyCode: 70 }, // כ (Kaf) на F
    'ע': { key: 'ע', code: 'KeyG', keyCode: 71 }, // ע (Ayin) на G
    'י': { key: 'י', code: 'KeyH', keyCode: 72 }, // י (Yod) на H
    'ח': { key: 'ח', code: 'KeyJ', keyCode: 74 }, // ח (Het) на J
    'ל': { key: 'ל', code: 'KeyK', keyCode: 75 }, // ל (Lamed) на K
    'ך': { key: 'ך', code: 'KeyL', keyCode: 76 }, // ך (final Kaf) на L
    'ף': { key: 'ף', code: 'Semicolon', keyCode: 186 }, // ף (final Pe) на ;
    ',': { key: ',', code: 'Quote', keyCode: 222 },
    '\\': { key: '\\', code: 'Backslash', keyCode: 220 },
    // Четвертый ряд (ZXCVBNM)
    'ז': { key: 'ז', code: 'KeyZ', keyCode: 90 }, // ז (Zayin) на Z
    'ס': { key: 'ס', code: 'KeyX', keyCode: 88 }, // ס (Samekh) на X
    'ב': { key: 'ב', code: 'KeyC', keyCode: 67 }, // ב (Bet) на C
    'ה': { key: 'ה', code: 'KeyV', keyCode: 86 }, // ה (He) на V
    'נ': { key: 'נ', code: 'KeyB', keyCode: 66 }, // נ (Nun) на B
    'מ': { key: 'מ', code: 'KeyN', keyCode: 78 }, // מ (Mem) на N
    'צ': { key: 'צ', code: 'KeyM', keyCode: 77 }, // צ (Tsadi) на M
    'ת': { key: 'ת', code: 'Comma', keyCode: 188 }, // ת (Tav) на ,
    'ץ': { key: 'ץ', code: 'Period', keyCode: 190 }, // ץ (final Tsadi) на .
    '.': { key: '.', code: 'Slash', keyCode: 191 },
    // Символы с Shift (английские символы при нажатии Shift)
    '!': { key: '!', code: 'Digit1', keyCode: 49, shiftKey: true },
    '@': { key: '@', code: 'Digit2', keyCode: 50, shiftKey: true },
    '#': { key: '#', code: 'Digit3', keyCode: 51, shiftKey: true },
    '$': { key: '$', code: 'Digit4', keyCode: 52, shiftKey: true },
    '%': { key: '%', code: 'Digit5', keyCode: 53, shiftKey: true },
    '^': { key: '^', code: 'Digit6', keyCode: 54, shiftKey: true },
    '&': { key: '&', code: 'Digit7', keyCode: 55, shiftKey: true },
    '*': { key: '*', code: 'Digit8', keyCode: 56, shiftKey: true },
    '(': { key: '(', code: 'Digit9', keyCode: 57, shiftKey: true },
    ')': { key: ')', code: 'Digit0', keyCode: 48, shiftKey: true },
    '_': { key: '_', code: 'Minus', keyCode: 189, shiftKey: true },
    '+': { key: '+', code: 'Equal', keyCode: 187, shiftKey: true },
    // Английские буквы с Shift (двуязычная клавиатура)
    'Q': { key: 'Q', code: 'KeyQ', keyCode: 81, shiftKey: true },
    'W': { key: 'W', code: 'KeyW', keyCode: 87, shiftKey: true },
    'E': { key: 'E', code: 'KeyE', keyCode: 69, shiftKey: true },
    'R': { key: 'R', code: 'KeyR', keyCode: 82, shiftKey: true },
    'T': { key: 'T', code: 'KeyT', keyCode: 84, shiftKey: true },
    'Y': { key: 'Y', code: 'KeyY', keyCode: 89, shiftKey: true },
    'U': { key: 'U', code: 'KeyU', keyCode: 85, shiftKey: true },
    'I': { key: 'I', code: 'KeyI', keyCode: 73, shiftKey: true },
    'O': { key: 'O', code: 'KeyO', keyCode: 79, shiftKey: true },
    'P': { key: 'P', code: 'KeyP', keyCode: 80, shiftKey: true },
    'A': { key: 'A', code: 'KeyA', keyCode: 65, shiftKey: true },
    'S': { key: 'S', code: 'KeyS', keyCode: 83, shiftKey: true },
    'D': { key: 'D', code: 'KeyD', keyCode: 68, shiftKey: true },
    'F': { key: 'F', code: 'KeyF', keyCode: 70, shiftKey: true },
    'G': { key: 'G', code: 'KeyG', keyCode: 71, shiftKey: true },
    'H': { key: 'H', code: 'KeyH', keyCode: 72, shiftKey: true },
    'J': { key: 'J', code: 'KeyJ', keyCode: 74, shiftKey: true },
    'K': { key: 'K', code: 'KeyK', keyCode: 75, shiftKey: true },
    'L': { key: 'L', code: 'KeyL', keyCode: 76, shiftKey: true },
    'Z': { key: 'Z', code: 'KeyZ', keyCode: 90, shiftKey: true },
    'X': { key: 'X', code: 'KeyX', keyCode: 88, shiftKey: true },
    'C': { key: 'C', code: 'KeyC', keyCode: 67, shiftKey: true },
    'V': { key: 'V', code: 'KeyV', keyCode: 86, shiftKey: true },
    'B': { key: 'B', code: 'KeyB', keyCode: 66, shiftKey: true },
    'N': { key: 'N', code: 'KeyN', keyCode: 78, shiftKey: true },
    'M': { key: 'M', code: 'KeyM', keyCode: 77, shiftKey: true },
    // Пробел
    ' ': { key: ' ', code: 'Space', keyCode: 32 },
};

export { KeymapInspector, de, en, es, fr, he, ru, ua };
//# sourceMappingURL=keymap-inspector.esm.js.map
