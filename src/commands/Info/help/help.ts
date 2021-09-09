import { ICommand } from "wokcommands";

export default {
  testOnly: true,
  callback: ({ interaction, instance }) => {
    instance.commandHandler.commands.forEach((command) => {
      console.log(command);
    });
    interaction.reply({
      content: "Help has executed",
    });
  },
} as ICommand;
