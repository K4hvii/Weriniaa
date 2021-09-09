"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: "Game",
    description: "Game character chops wood",
    testOnly: true,
    callback: function (_a) {
        var message = _a.message;
        message.reply({
            content: "Game chopping",
        });
    },
};
