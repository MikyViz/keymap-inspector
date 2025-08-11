export interface KeyDefinition {
    key?: string;
    code: string;
    keyCode: number;
    shiftKey?: boolean;
    location?: number;
}
export interface Keymap {
    [key: string]: KeyDefinition;
}
export interface InspectionResult {
    char: string;
    keyDefinition: KeyDefinition;
    layouts: {
        [layoutName: string]: string | null;
    };
}
