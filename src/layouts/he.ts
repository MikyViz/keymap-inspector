import { Keymap } from '../types';

export const he: Keymap = {
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

  // Второй ряд (иврит - справа налево, но клавиши в том же порядке)
  '/': { key: '/', code: 'KeyQ', keyCode: 81 }, // ק на Q
  "'": { key: "'", code: 'KeyW', keyCode: 87 }, // ר на W  
  'ק': { key: 'ק', code: 'KeyE', keyCode: 69 }, // א на E
  'ר': { key: 'ר', code: 'KeyR', keyCode: 82 }, // ט на R
  'א': { key: 'א', code: 'KeyT', keyCode: 84 }, // ו на T
  'ט': { key: 'ט', code: 'KeyY', keyCode: 89 }, // ן на Y
  'ו': { key: 'ו', code: 'KeyU', keyCode: 85 }, // ם на U
  'ן': { key: 'ן', code: 'KeyI', keyCode: 73 }, // פ на I
  'ם': { key: 'ם', code: 'KeyO', keyCode: 79 }, // ף на O
  'פ': { key: 'פ', code: 'KeyP', keyCode: 80 }, // פ на P
  ']': { key: ']', code: 'BracketLeft', keyCode: 219 },
  '[': { key: '[', code: 'BracketRight', keyCode: 221 },

  // Третий ряд
  'ש': { key: 'ש', code: 'KeyA', keyCode: 65 }, // ש на A
  'ד': { key: 'ד', code: 'KeyS', keyCode: 83 }, // ד на S
  'ג': { key: 'ג', code: 'KeyD', keyCode: 68 }, // ג на D
  'כ': { key: 'כ', code: 'KeyF', keyCode: 70 }, // כ на F
  'ע': { key: 'ע', code: 'KeyG', keyCode: 71 }, // ע на G
  'י': { key: 'י', code: 'KeyH', keyCode: 72 }, // י на H
  'ח': { key: 'ח', code: 'KeyJ', keyCode: 74 }, // ח на J
  'ל': { key: 'ל', code: 'KeyK', keyCode: 75 }, // ל на K
  'ך': { key: 'ך', code: 'KeyL', keyCode: 76 }, // ך на L
  'ף': { key: 'ף', code: 'Semicolon', keyCode: 186 }, // ף на ;
  ',': { key: ',', code: 'Quote', keyCode: 222 },
  '\\': { key: '\\', code: 'Backslash', keyCode: 220 },

  // Четвертый ряд
  'ז': { key: 'ז', code: 'KeyZ', keyCode: 90 }, // ז на Z
  'ס': { key: 'ס', code: 'KeyX', keyCode: 88 }, // ס на X
  'ב': { key: 'ב', code: 'KeyC', keyCode: 67 }, // ב на C
  'ה': { key: 'ה', code: 'KeyV', keyCode: 86 }, // ה на V
  'נ': { key: 'נ', code: 'KeyB', keyCode: 66 }, // נ на B
  'מ': { key: 'מ', code: 'KeyN', keyCode: 78 }, // מ на N
  'צ': { key: 'צ', code: 'KeyM', keyCode: 77 }, // צ на M
  'ת': { key: 'ת', code: 'Comma', keyCode: 188 }, // ת на ,
  'ץ': { key: 'ץ', code: 'Period', keyCode: 190 }, // ץ на .
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
