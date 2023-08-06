import { ipcMain, IpcMainEvent, IpcMainInvokeEvent } from "electron";

export interface RendererToMainOneWayRegistration {
  channel: string;
  listener: (event: IpcMainEvent, ...args: any[]) => void;
}

export interface RendererToMainTwoWayRegistration {
  channel: string;
  handler: (event: IpcMainInvokeEvent, ...args: any[]) => any;
}

export function registerRendererToMainOneWay(
  ipcMainEvents: RendererToMainOneWayRegistration[]
) {
  ipcMainEvents.forEach(({ channel, listener }) => {
    ipcMain.on(channel, listener);
  });
}

export function registerRendererToMainTwoWay(
  ipcMainInvokeEvents: RendererToMainTwoWayRegistration[]
) {
  ipcMainInvokeEvents.forEach(({ channel, handler }) => {
    ipcMain.handle(channel, handler);
  });
}
