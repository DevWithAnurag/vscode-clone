const {contextBridge , ipcrenderer}=require('electron');

contextBridge.exposeInMainWorld('api',{
    title:"vscode clone by anurag tiwari",
})