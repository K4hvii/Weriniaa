import { Client } from "discord.js";
import { ICommand } from "wokcommands";

const setStatus = (client: Client, status: string) => {
  client.user?.setPresence({
    status: "online",
    activities: [
      {
        name: "WeriniaWare",
      },
    ],
  });
};

export default {
  category: "Admin",
  description: "Updates the status for the bot",
  minArgs: 1,
  expectedArgs: "<status>",
  ownerOnly: true,

  init: (client: Client) => {
    const status = "Testing";
    setStatus(client, status);
  },

  callback: ({ client, text, interaction }) => {
    setStatus(client, text);

    interaction.reply({
      content: "Status has set!",
      ephemeral: true,
    });
  },
} as ICommand;
