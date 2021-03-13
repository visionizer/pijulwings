import * as vscode from 'vscode';
import { SidebarProvider } from './SidebarProvider';


let scSidebar: SidebarProvider;
let changesSidebar: SidebarProvider;
let channelsSidebar: SidebarProvider;
let remotesSidebar: SidebarProvider;

export function setupSidebar(context: vscode.ExtensionContext) {
    // Setting up the overview sidebar
    scSidebar = new SidebarProvider(context.extensionUri, "SCSidebar", context);
    context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
        "pijulwings-sidebar-sc",
        scSidebar
    ));

    changesSidebar = new SidebarProvider(context.extensionUri, "ChangesSidebar", context);
    context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
        "pijulwings-sidebar-changes",
        changesSidebar
    ));

    channelsSidebar = new SidebarProvider(context.extensionUri, "ChannelsSidebar", context);
    context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
        "pijulwings-sidebar-channels",
        channelsSidebar
    ));

    remotesSidebar = new SidebarProvider(context.extensionUri, "RemotesSidebar", context);
    context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
        "pijulwings-sidebar-remotes",
        remotesSidebar
    ));

}

export function getSidebarById(id: string): SidebarProvider {
    switch(id) {
        case "sc": return scSidebar;
        case "remotes": return remotesSidebar;
        case "channels": return channelsSidebar;
        case "changes": return changesSidebar;
        case undefined: return scSidebar;
    }
    return scSidebar;
}   