export default {
  channel: "ping",
  listener: (e: Electron.IpcMainEvent, options: any) => {
    console.log(e, options);
    console.log("pong");
  },
};
