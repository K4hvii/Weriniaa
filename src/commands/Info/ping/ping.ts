import { ICommand } from "wokcommands";

export default {
  category: "Info",
  description: "Replies with pong",
  slash: "both",
  testOnly: true,

  callback: () => {
    return "Pong";
  },
} as ICommand;
