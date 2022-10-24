const json = require("jsonbyte");
const path = require("path");
const colors = require("colors");
const fs = require("fs");


module.exports = {
    name: "leave",
    aliases: [
        "l"
    ],
    args: [
    ],
    description: "leave from the side objects",
    run: async (args) => {
        const config = JSON.parse(fs.readFileSync(path.join(__dirname, "../settings.json")));

        if (!config.file) return console.log("you must enter file by using 'enter <filepath>' command".yellow);
        
        const key = args.key;

        const file = new json(config.file);
        file.leave();

        config.joins = new Array();

        fs.writeFileSync(path.join(__dirname, "../settings.json"), JSON.stringify(config, null, 4))

        console.log(`Leaved Successfully`.green)
    }
}