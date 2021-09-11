import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "Admin",
  ownerOnly: true,
  testOnly: true,
  description: "Sends an embed",
  Permissions: ["ADMINISTRATOR"],

  callback: ({ message, text }) => {
    const embed = new MessageEmbed()
      .setAuthor("Weriniaa")
      .setColor("RED")
      .setFooter("moro")
      .setFields([
        {
          name: "name",
          value: "value",
          inline: true,
        },
        {
          name: "name two",
          value: "value two",
          inline: true,
        },
        {
          name: "name three",
          value: "value three",
          inline: true,
        },
      ]);
    return embed;
  },
} as ICommand;
