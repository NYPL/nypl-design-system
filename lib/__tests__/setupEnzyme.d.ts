/// <reference types="node" />
/// <reference types="mocha" />
export interface Global extends NodeJS.Global {
    document: Document;
    window: Window;
    navigator: {
        userAgent: string;
    };
}
