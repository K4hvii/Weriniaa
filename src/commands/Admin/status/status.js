"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setStatus = function (client, status) {
    var _a;
    (_a = client.user) === null || _a === void 0 ? void 0 : _a.setPresence({
        status: "online",
        activities: [
            {
                name: status,
            },
        ],
    });
};
exports.default = {
    category: "Admin",
    description: "Updates the status for the bot",
    minArgs: 1,
    expectedArgs: "<status>",
    hidden: true,
    ownerOnly: true,
    slash: true,
    testOnly: true,
    init: function (client) {
        var status = "Testing";
        setStatus(client, status);
    },
    callback: function (_a) {
        var client = _a.client, text = _a.text, interaction = _a.interaction;
        setStatus(client, text);
        interaction.reply({
            content: "Status has set!",
            ephemeral: true,
        });
    },
};
