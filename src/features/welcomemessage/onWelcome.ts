import { Client, MessageEmbed, TextChannel } from "discord.js";
import WOKCommands from "wokcommands";

export default (client: Client, instance: WOKCommands) => {
  client.on("guildMemberAdd", (member) => {
    const { guild } = member;

    const channel = guild.channels.cache.find(
      (channel) => channel.name === "general"
    ) as TextChannel;

    if (!channel) {
      return;
    }

    const embed = new MessageEmbed()
      .setAuthor("Weriniaa")
      .setColor("GREEN")
      .setDescription(`Welcome ${member} to the server!`);

    channel.send({
      embeds: [embed],
    });
  });
};
const config = {
  displayName: "Welcome Message",
  dbName: "WELCOME MESSAGE",
};

export { config };
