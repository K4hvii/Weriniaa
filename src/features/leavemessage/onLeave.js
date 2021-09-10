"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var discord_js_1 = require("discord.js");
exports.default = (function (client, instance) {
    client.on("guildMemberRemove", function (member) {
        var guild = member.guild;
        var channel = guild.channels.cache.find(function (channel) { return channel.name === "general"; });
        if (!channel) {
            return;
        }
        var embed = new discord_js_1.MessageEmbed()
            .setAuthor("Weriniaa")
            .setColor("RED")
            .setDescription(member + " has left the server :(");
        channel.send({
            embeds: [embed],
        });
    });
});
var config = {
    displayName: "Leave Message",
    dbName: "LEAVE MESSAGE",
};
exports.config = config;
