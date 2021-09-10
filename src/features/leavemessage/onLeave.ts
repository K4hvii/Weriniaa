import { Client, MessageEmbed, TextChannel } from "discord.js";
import WOKCommands from "wokcommands";

export default (client: Client, instance: WOKCommands) => {
  client.on("guildMemberRemove", (member) => {
    const { guild } = member;

    const channel = guild.channels.cache.find(
      (channel) => channel.name === "general"
    ) as TextChannel;

    if (!channel) {
      return;
    }

    const embed = new MessageEmbed()
      .setAuthor("Weriniaa")
      .setColor("RED")
      .setDescription(`${member} has left the server :(`);

    channel.send({
      embeds: [embed],
    });
  });
};
const config = {
  displayName: "Leave Message",
  dbName: "LEAVE MESSAGE",
};

export { config };
