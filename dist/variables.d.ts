declare var a: number;
declare function func(): void;
declare const funcOther: () => void;
declare const loopVarFunc: () => void;
declare const loopLetFunc: () => void;
declare const numConst: number;
declare const person: {
    name: string;
    age: number;
};
declare const pName: string, pAge: number;
declare const pNameOther: string, pAgeOther: number;
declare function keepWholeObject(wholeObject: {
    a: string;
    b?: string;
}): void;
declare type C = {
    a: string;
    b?: string;
};
declare function fc({ a, b }: C): void;
declare function fdf({ a, b }?: {
    a?: number | undefined;
    b?: number | undefined;
}): void;
declare function fdfOther({ a, b }?: {
    a: number;
    b: number;
}): void;
declare function fdfOtherPlus({ a, b }?: {
    a: number;
    b: number;
}): void;
