import * as vscode from 'vscode';
import * as commands from "./commands";
import * as sidebar from "./sidebar";
import * as statusbar from "./statusbar";

export function activate(context: vscode.ExtensionContext) {
	statusbar.setupStatusbar(context);
	commands.setupCommands(context);
	sidebar.setupSidebar(context);


}

// this method is called when your extension is deactivated
export function deactivate() {}
