"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
exports.default = {
    category: "Admin",
    description: "Bans a user",
    expectedArgs: "<target> [reason]",
    minArgs: 1,
    Permissions: ["ADMINISTRATOR"],
    testOnly: true,
    slash: true,
    callback: function (_a) {
        var message = _a.message, args = _a.args;
        var target = message.mentions.members.first();
        if (target === null) {
            message.reply({
                content: "Please Specify target",
            });
            return;
        }
        if (!target) {
            message.reply({
                content: "Please tag someone to ban.",
            });
            return;
        }
        if (!target.bannable) {
            message.reply({
                content: "This bot does not have the ability to ban that user.",
            });
            return;
        }
        args.shift();
        var reason = args.join();
        target.ban({
            reason: reason,
            days: 7,
        });
        var embed = new discord_js_1.MessageEmbed()
            .setAuthor("Weriniaa")
            .setColor("BLUE")
            .setDescription("Banned " + target);
        message.reply({
            embeds: [embed],
        });
    },
};
