import { event, Events } from "../utils/index.js";

export default event(
  Events.InteractionCreate,
  async ({ client, log }, interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const { commands } = client;
    const { commandName } = interaction;
    const command = commands.get(commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (e) {
      log(e);
      await interaction.reply({
        content: "Something is wrong with this command.",
        ephemeral: true,
      });
    }
  }
);
