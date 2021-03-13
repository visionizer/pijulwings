import * as utils from "./utils";
import * as vscode from 'vscode';
import { DetailedPijulPanel } from './DetailedPijulPanel';
import { getSidebarById } from './sidebar'


export function setupCommands(context: vscode.ExtensionContext) {
	// Adding commands..
	context.subscriptions.push(vscode.commands.registerCommand('pijulwings.helloWorld', () => {
	}));

    context.subscriptions.push(vscode.commands.registerCommand("pijulwings.showDetailPanel", () => {
        DetailedPijulPanel.createOrShow(context.extensionUri);
    }));

	context.subscriptions.push(vscode.commands.registerCommand("pijulwings.refreshDetailPanel", () => {
		DetailedPijulPanel.kill();
		DetailedPijulPanel.createOrShow(context.extensionUri);
    }));

	context.subscriptions.push(vscode.commands.registerCommand("pijulwings.dev.developerCommand", async () => {
		//DetailedPijulPanel.kill();
		//DetailedPijulPanel.createOrShow(context.extensionUri);
		await vscode.commands.executeCommand("workbench.action.closeSidebar");
		await vscode.commands.executeCommand("workbench.view.extension.pijulwings-sidebar-view");
		//setTimeout(() => {
		//	vscode.commands.executeCommand("workbench.action.webview.openDeveloperTools");
		//	
		//}
		//, 500);
	}));

	context.subscriptions.push(vscode.commands.registerCommand("pijulwings.addTodo", () => {
		const {activeTextEditor} = vscode.window;

		if (!activeTextEditor) {
			vscode.window.showErrorMessage("You need to be within an editable file to be able to track a file!");
		}


		const text = activeTextEditor?.document.getText(activeTextEditor.selection);

		getSidebarById("sc")._view?.webview.postMessage({
			type: "new-todo",
			value: text,
		})
		vscode.window.showInformationMessage("Text: " + text);
    }));

	context.subscriptions.push(vscode.commands.registerCommand("pijulwings.initRepo", () => {
		utils.execute("pijul init", context);
		vscode.window.showInformationMessage("Initialized Pijul Repository");
	}));

}

// @track