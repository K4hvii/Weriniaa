import DiscordJS, { Intents } from "discord.js";
import dotenv from "dotenv";
import WOKCommands from "wokcommands";
import path from "path";
dotenv.config();

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

client.on("ready", () => {
  console.log(`${client.user?.tag} is online!`);
  const dbOptions = {
    // These are the default values
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  };

  const wok = new WOKCommands(client, {
    dbOptions,
    commandDir: path.join(__dirname, "commands"),
    featureDir: path.join(__dirname, "features"),
    testServers: ["878243494802632724"],
  })
    .setBotOwner("453946836051558420")
    .setDefaultPrefix(".")
    .setMongoPath(process.env.MONGO_URI)
    .setDisplayName("WeriniaWare")

    .setCategorySettings([
      {
        name: "Fun",
        emoji: "",
      },
      {
        name: "Economy",
        emoji: "💸",
      },
      {
        name: "Configuration",
        emoji: "🚧",
        hidden: true,
      },
      {
        name: "Game",
        emoji: "🎮",
      },
    ]);
  const { commandHandler } = wok;
  const { slashCommands } = wok;
});

if (process.env.TOKEN) client.login(process.env.TOKEN);
else {
  console.log("Create a file called .env and put your bot's token in there.");
  process.exit(1);
}
