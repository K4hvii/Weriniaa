"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: "Game",
    description: "Game character mines",
    callback: function (_a) {
        var message = _a.message;
        message.reply({
            content: "Game mine",
        });
    },
};
