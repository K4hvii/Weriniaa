"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = __importStar(require("discord.js"));
var dotenv_1 = __importDefault(require("dotenv"));
var wokcommands_1 = __importDefault(require("wokcommands"));
var path_1 = __importDefault(require("path"));
dotenv_1.default.config();
var client = new discord_js_1.default.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ],
});
client.on("ready", function () {
    var _a;
    console.log(((_a = client.user) === null || _a === void 0 ? void 0 : _a.tag) + " is online!");
    var dbOptions = {
        // These are the default values
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
    };
    var wok = new wokcommands_1.default(client, {
        dbOptions: dbOptions,
        commandDir: path_1.default.join(__dirname, "commands"),
        featureDir: path_1.default.join(__dirname, "features"),
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
    var commandHandler = wok.commandHandler;
    var slashCommands = wok.slashCommands;
});
if (process.env.TOKEN)
    client.login(process.env.TOKEN);
else {
    console.log("Create a file called .env and put your bot's token in there.");
    process.exit(1);
}
