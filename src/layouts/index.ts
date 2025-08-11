// Экспорт всех встроенных раскладок
export { en } from './en';
export { ru } from './ru';
export { de } from './de';
export { fr } from './fr';
export { es } from './es';
export { ua } from './ua';
export { he } from './he';

// Типы для дополнительных раскладок
export type LayoutPackage = {
  name: string;
  layouts: { [key: string]: any };
};
