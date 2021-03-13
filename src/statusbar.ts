import * as vscode from 'vscode';


export function setupStatusbar(context: vscode.ExtensionContext) {
    const track_file_btn = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
    // From codicons
    track_file_btn.text = "$(add) Track File";
    track_file_btn.show();
    track_file_btn.command = "pijulwings.addTodo";

    const ignore_file_btn = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
    // From codicons
    ignore_file_btn.text = "$(remove) Ignore File";
    ignore_file_btn.show();
    ignore_file_btn.command = "pijulwings.addTodo";
}