export default {
  channel: "ping",
  listener: (e: Electron.IpcMainEvent, options: any) => {
    console.log("pong");
  },
};
