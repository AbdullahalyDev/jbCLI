const json = require("jsonbyte");
const fs = require("fs");
const path = require("path");
const colors = require("colors");


module.exports = {
    name: "exit",
    aliases: ["ex"],
    args: [],
    description: "exit from file",
    run: async (args) => {
        var config = JSON.parse(fs.readFileSync(path.join(__dirname, "../settings.json")));

        if (!config.file) return console.log("no file found in settings".yellow);
        config.file = null;
        config.joins = new Array();
        fs.writeFileSync(path.join(__dirname, "../settings.json"), JSON.stringify(config, null, 4))

        console.log(`exited from ${config.file}`.green)
    }
}