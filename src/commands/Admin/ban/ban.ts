import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "Admin",
  description: "Bans a user",
  expectedArgs: "<target> [reason]",
  minArgs: 1,
  Permissions: ["ADMINISTRATOR"],
  testOnly: true,
  slash: true,

  callback: ({ message, args }) => {
    const target = message.mentions.members.first();

    if (target === null) {
      message.reply({
        content: "Please Specify target",
      });
      return;
    }

    if (!target) {
      message.reply({
        content: "Please tag someone to ban.",
      });
      return;
    }

    if (!target.bannable) {
      message.reply({
        content: "This bot does not have the ability to ban that user.",
      });
      return;
    }

    args.shift();
    const reason = args.join();

    target.ban({
      reason,
      days: 7,
    });

    const embed = new MessageEmbed()
      .setAuthor("Weriniaa")
      .setColor("BLUE")
      .setDescription(`Banned ${target}`);
    message.reply({
      embeds: [embed],
    });
  },
} as ICommand;
