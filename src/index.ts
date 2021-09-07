import DiscordJS, { Intents } from "discord.js";
import dotenv from "dotenv";
import WOKCommands from "wokcommands";
import path from "path";
dotenv.config();

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`${client.user?.tag} is online!`);

  new WOKCommands(client, {
    commandDir: path.join(__dirname, "commands"),
    testServers: ["878243494802632724"],
  }).setDefaultPrefix(".");
});

if (process.env.TOKEN) client.login(process.env.TOKEN);
else {
  console.log("Create a file called .env and put your bot's token in there.");
  process.exit(1);
}
