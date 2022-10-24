const json = require("jsonbyte");
const path = require("path");
const fs = require("fs");
const colors = require("colors");


module.exports = {
    name: "preview",
    aliases: [
        "view",
        "pre",
        "pv"
    ],
    args: [
    ],
    description: "preview the file",
    run: async (args) => {
        const config = JSON.parse(fs.readFileSync(path.join(__dirname, "../settings.json")));

        if (!config.file) return console.log("you must enter file by using 'enter <filepath>' command".yellow);
        
        const key = args.key;

        const file = new json(config.file);
        const preview = file.preview();
        console.log(preview)
    }
}