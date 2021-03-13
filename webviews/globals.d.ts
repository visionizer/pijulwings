import * as _vscode from "vscode";

declare global {
    const tsvscode: {
        postMessage: ({type: string, value: any}) => void;
        postMessage: ({type: string, message: string, channel: string, remote: string }) => void
    };
}