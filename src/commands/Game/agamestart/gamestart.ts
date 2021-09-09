import { ICommand } from "wokcommands";

export default {
  category: "Game",
  description: "Starts the adventure.",
  testOnly: true,

  callback: ({ message }) => {
    message.reply({
      content: "Game start executed",
    });
  },
} as ICommand;
