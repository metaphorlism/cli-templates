import Electron from "electron";

export const ipcRenderer = (window as any).ipcRenderer as Electron.IpcRenderer;
