import { ICommand } from "wokcommands";

export default {
  category: "Admin",
  description: "Bans a user",
  expectedArgs: "<target> [reason]",
  minArgs: 1,
  Permissions: ["ADMINISTRATOR"],
  testOnly: true,

  callback: ({ message, args }) => {
    const target = message.mentions.members?.first();

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
    message.reply({
      content: `Banned ${target}`,
    });
  },
} as ICommand;
