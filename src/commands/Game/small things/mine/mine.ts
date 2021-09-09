import { ICommand } from "wokcommands";

export default {
  category: "Game",
  description: "Game character mines",

  callback: ({ message }) => {
    message.reply({
      content: "Game mine",
    });
  },
} as ICommand;
