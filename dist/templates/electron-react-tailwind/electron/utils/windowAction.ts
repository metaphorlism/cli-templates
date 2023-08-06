import { win } from "../main";

export function openDevTool() {
  win?.webContents.openDevTools();
}
