import { Keymap } from '../types';

export const fr: Keymap = {
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
