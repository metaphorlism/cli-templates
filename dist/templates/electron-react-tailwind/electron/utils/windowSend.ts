import { win } from "../main";

export function foo() {
  win?.webContents.send("ping", { data: "pong" });
}
