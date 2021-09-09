"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: "Admin",
    description: "Bans a user",
    expectedArgs: "<target> [reason]",
    minArgs: 1,
    Permissions: ["ADMINISTRATOR"],
    testOnly: true,
    slash: true,
    callback: function (_a) {
        var _b;
        var message = _a.message, args = _a.args;
        var target = (_b = message.mentions.members) === null || _b === void 0 ? void 0 : _b.first();
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
        message.reply({
            content: "Banned " + target,
        });
    },
};
