import { Keymap, InspectionResult } from './types';
export declare class KeymapInspector {
    private layouts;
    private reversedLayouts;
    constructor(layouts: {
        [name: string]: Keymap;
    });
    inspect(char: string): InspectionResult | null;
    inspectByCode(code: string): InspectionResult | null;
    inspectByKeyCode(keyCode: number): InspectionResult | null;
    private findCharByCode;
    private findCharByKeyCode;
}
