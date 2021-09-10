"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var discord_js_1 = require("discord.js");
exports.default = (function (client, instance) {
    client.on("guildMemberAdd", function (member) {
        var guild = member.guild;
        var channel = guild.channels.cache.find(function (channel) { return channel.name === "general"; });
        if (!channel) {
            return;
        }
        var embed = new discord_js_1.MessageEmbed()
            .setAuthor("Weriniaa")
            .setColor("GREEN")
            .setDescription("Welcome " + member + " to the server!");
        channel.send({
            embeds: [embed],
        });
    });
});
var config = {
    displayName: "Welcome Message",
    dbName: "WELCOME MESSAGE",
};
exports.config = config;
