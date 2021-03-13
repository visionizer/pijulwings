import * as vscode from "vscode";

export function getWorkspaceDirectory(): String {
    if(vscode.workspace.workspaceFolders !== undefined) {
        let wf = vscode.workspace.workspaceFolders[0].uri.path ;
        let f = vscode.workspace.workspaceFolders[0].uri.fsPath ; 
    
        let message: any = f;

        return message;
    } 
    else {
        let message = "You have not opened a  folder. Could not get current directory" ;
        vscode.window.showErrorMessage(message);
        return "C:";
    }
    return "C:";
}

export async function execute(command: string, context: vscode.ExtensionContext) {
		const terminal = vscode.window.createTerminal({
			name: "PijulWings Terminal",
			hideFromUser: true
		} as any);
        terminal.sendText(command);
}