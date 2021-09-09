"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: "Game",
    description: "Starts the adventure.",
    testOnly: true,
    callback: function (_a) {
        var message = _a.message;
        message.reply({
            content: "Game start executed",
        });
    },
};
