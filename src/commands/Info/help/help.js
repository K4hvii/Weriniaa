"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    callback: function (_a) {
        var instance = _a.instance;
        instance.commandHandler.commands.forEach(function (command) {
            console.log(command);
        });
    },
};
