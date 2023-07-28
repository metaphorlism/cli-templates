import { ipcMain, IpcMainEvent } from "electron";

interface IpcMainEventRegistration {
  channel: string;
  listener: (event: IpcMainEvent, ...args: any[]) => void;
}

export function registerIpcMainEvents(
  ipcMainEvents: IpcMainEventRegistration[]
) {
  ipcMainEvents.forEach(({ channel, listener }) => {
    ipcMain.on(channel, listener);
  });
}
