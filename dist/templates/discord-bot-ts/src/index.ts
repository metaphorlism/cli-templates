import {
  Collection,
  GatewayIntentBits,
} from "discord.js";
import env from "./utils/env.js";
import { registerEvents } from "./utils/events.js";
import Events from "./events/index.js";
import Commands from "./commands/index.js";
import { registerCommands } from "./utils/commands.js";
import { CustomClient } from "./utils/index.js";

const client = new CustomClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.commands = new Collection();
client.commandArray = new Array();

registerCommands(client, Commands);
registerEvents(client, Events);

client.login(env.DISCORD_TOKEN);
