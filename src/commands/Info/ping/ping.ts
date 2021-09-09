import { ICommand } from "wokcommands";
import DiscordJS, { Intents, Message } from "discord.js";

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

export default {
  category: "Info",
  description: "Replies with pong",
  testOnly: true,

  callback: ({ message }) => {
    message.reply({
      content: `🏓Pinging... My ping is ${client.ws.ping}ms.`,
    });
  },
} as ICommand;
