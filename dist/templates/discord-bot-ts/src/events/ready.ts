import { event, Events } from "../utils/index.js";

export default event(Events.ClientReady, ({ client, log }) => {
  return log(`Logged in as ${client.user?.username}`);
});
