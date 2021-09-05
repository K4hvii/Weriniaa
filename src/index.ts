import DiscordJS, { Intents } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("bot is ready!");

  const guildId = "878243494802632724";
  const guild = client.guilds.cache.get(guildId);
  let commands;

  if (guild) {
    commands = guild.commands;
  } else {
    commands = client.application?.commands;
  }

  commands?.create({
    name: "Hilla",
    description: "Kertoo Hillan Sukunimen",
  });

  commands?.create({
    name: "ping",
    description: "Replies with pong.",
  });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }

  const { commandName, options } = interaction;

  if (commandName === "Hilla") {
    interaction.reply({
      content: "Lamminen",
      ephemeral: true,
    });
  }

  if (commandName === "ping") {
    interaction.reply({
      content: `Pinging...  Your ping is ${client.ws.ping}ms.`,
      ephemeral: true,
    });
  }
});

if (process.env.TOKEN) client.login(process.env.TOKEN);
else {
  console.log("Create a file called .env and put your bot's token in there.");
  process.exit(1);
}
