export default {
  channel: "ping",
  handler: (e: Electron.IpcMainEvent, options: any) => {
    return "pong";
  },
};
