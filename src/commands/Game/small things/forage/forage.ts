import { ICommand } from "wokcommands";

export default {
  category: "Game",
  description: "Game character forages",
  testOnly: true,

  callback: ({ message }) => {
    message.reply({
      content: "Game forage",
    });
  },
} as ICommand;
