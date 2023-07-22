import {
  Client,
  Collection,
} from "discord.js";
import { CommandProps } from "./commands.js";

export class CustomClient extends Client {
  public commands: Collection<string, CommandProps>;
  public commandArray: Array<any>;

  constructor(options?: any) {
    super(options);
    this.commands = new Collection();
    this.commandArray = [];
  }
}
