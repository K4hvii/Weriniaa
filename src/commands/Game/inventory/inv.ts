import { ICommand } from "wokcommands";

export default {
  category: "Game",
  description: "Shows game inventory",
  callback: ({ message }) => {
    message.reply({
      content: "Game inv.",
    });
  },
} as ICommand;
