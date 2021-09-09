import { ICommand } from "wokcommands";

export default {
  category: "Game",
  description: "Game character chops wood",
  testOnly: true,

  callback: ({ message }) => {
    message.reply({
      content: "Game chopping",
    });
  },
} as ICommand;
