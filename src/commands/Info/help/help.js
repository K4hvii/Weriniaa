"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    testOnly: true,
    callback: function (_a) {
        var interaction = _a.interaction, instance = _a.instance;
        instance.commandHandler.commands.forEach(function (command) {
            console.log(command);
        });
        interaction.reply({
            content: "Help has executed",
        });
    },
};
