"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: "Game",
    description: "Shows games help menu",
    testOnly: true,
    callback: function (_a) {
        var message = _a.message;
        message.reply({
            content: "Game menu",
        });
    },
};
