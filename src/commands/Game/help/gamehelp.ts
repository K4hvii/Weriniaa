import { ICommand } from "wokcommands";

export default {
  category: "Game",
  description: "Shows games help menu",
  testOnly: true,

  callback: ({ message }) => {
    message.reply({
      content: "Game menu",
    });
  },
} as ICommand;
