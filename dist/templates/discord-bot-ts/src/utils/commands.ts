import {
  type SlashCommandBuilder,
  type CommandInteraction,
  REST,
  Routes,
} from "discord.js";
import { CustomClient } from "./customClient.js";
import env from "./env.js";

export interface CommandProps {
  data: SlashCommandBuilder;
  execute(interaction: CommandInteraction): Promise<void>;
}

/// Registers commands to the client.
export async function registerCommands(
  client: CustomClient,
  commands: CommandProps[]
) {
  for (const command of commands) {
    client.commands.set(command.data.name, command);
    client.commandArray.push(command.data.toJSON());
  }

  const rest = new REST({ version: "10" }).setToken(env.DISCORD_TOKEN);

  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(env.DISCORD_CLIENT_ID), {
      body: client.commandArray,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}
