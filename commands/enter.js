const json = require("jsonbyte");
const fs = require("fs");
const path = require("path");
const colors = require("colors");


module.exports = {
    name: "enter",
    aliases: ["en"],
    args: [
        { name: "filepath", required: true }
    ],
    description: "enter file",
    run: async (args) => {
        var config = JSON.parse(fs.readFileSync(path.join(__dirname, "../settings.json")));

        if (config.file) return console.log("you must exit from file by using 'exit' command".yellow);
        if (!fs.existsSync(args.filepath)) return console.log("file not found".red);
        config.file = args.filepath;
        fs.writeFileSync(path.join(__dirname, "../settings.json"), JSON.stringify(config, null, 4))

        console.log(`entered from ${config.file}`.green)

    }
}