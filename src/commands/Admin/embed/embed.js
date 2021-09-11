"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
exports.default = {
    category: "Admin",
    ownerOnly: true,
    testOnly: true,
    description: "Sends an embed",
    Permissions: ["ADMINISTRATOR"],
    callback: function (_a) {
        var message = _a.message, text = _a.text;
        var embed = new discord_js_1.MessageEmbed()
            .setAuthor("Weriniaa")
            .setColor("RED")
            .setFooter("moro")
            .setFields([
            {
                name: "name",
                value: "value",
                inline: true,
            },
            {
                name: "name two",
                value: "value two",
                inline: true,
            },
            {
                name: "name three",
                value: "value three",
                inline: true,
            },
        ]);
        return embed;
    },
};
